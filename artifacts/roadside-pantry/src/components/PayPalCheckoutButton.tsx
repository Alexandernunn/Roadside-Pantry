import { useState } from "react";
import { PayPalButtons, FUNDING, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { AlertCircle, X } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface PayPalCheckoutButtonProps {
  subtotal: number;
  tax: number;
  items: CartItem[];
  onSuccess: (orderId: string) => void;
}

const PAYPAL_CLIENT_ID = (import.meta.env.VITE_PAYPAL_CLIENT_ID as string) || "";

export function PayPalCheckoutButton({ subtotal, tax, items, onSuccess }: PayPalCheckoutButtonProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cancelled, setCancelled] = useState(false);

  const total = subtotal + tax;

  if (!PAYPAL_CLIENT_ID) {
    return (
      <div className="w-full py-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-2 p-3">
        <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-400" />
        <span className="text-sm text-red-400">
          Online payment is currently unavailable. Please contact us to place your order.
        </span>
      </div>
    );
  }

  function buildOrder(_data: unknown, actions: { order: { create: (o: unknown) => Promise<string> } }) {
    setErrorMessage(null);
    setCancelled(false);
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: subtotal.toFixed(2),
              },
              tax_total: {
                currency_code: "USD",
                value: tax.toFixed(2),
              },
            },
          },
          items: items.map((item) => ({
            name: item.name,
            quantity: String(item.quantity),
            unit_amount: {
              currency_code: "USD",
              value: item.price.toFixed(2),
            },
            category: "PHYSICAL_GOODS" as const,
          })),
        },
      ],
    });
  }

  async function handleApprove(_data: unknown, actions: { order?: { capture: () => Promise<{ id?: string }> } }) {
    if (!actions.order) {
      setErrorMessage("Something went wrong processing your payment. Please try again.");
      return;
    }
    const order = await actions.order.capture();
    onSuccess(order.id ?? "ORDER");
  }

  function handleCancel() {
    setCancelled(true);
    setErrorMessage(null);
  }

  function handleError(err: unknown) {
    console.error("PayPal error:", err);
    setCancelled(false);
    setErrorMessage("Payment could not be processed. Please try again.");
  }

  return (
    <div className="w-full">
      {isPending && (
        <div className="w-full py-4 rounded-xl bg-card border border-border flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
          <span className="text-sm text-muted-foreground">Loading payment options...</span>
        </div>
      )}

      {!isPending && (
        <>
          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            style={{ layout: "vertical", shape: "pill", label: "pay" }}
            createOrder={buildOrder}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onError={handleError}
          />
          <PayPalButtons
            fundingSource={FUNDING.CARD}
            style={{ layout: "vertical", shape: "pill" }}
            createOrder={buildOrder}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onError={handleError}
          />
        </>
      )}

      {cancelled && (
        <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground bg-card border border-border rounded-xl p-3">
          <X size={16} className="shrink-0 mt-0.5 text-yellow-500" />
          <span>Payment was cancelled. Your cart is still saved — pay whenever you're ready.</span>
        </div>
      )}

      {errorMessage && (
        <div className="mt-3 flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
