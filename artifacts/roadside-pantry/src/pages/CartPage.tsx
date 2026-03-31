import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "wouter";
import { PayPalCheckoutButton } from "@/components/PayPalCheckoutButton";

export default function CartPage() {
  const { items, increment, decrement, removeItem, subtotal, clearCart, totalItems } = useCart();
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [confirmedItems, setConfirmedItems] = useState<typeof items>([]);
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const tax = subtotal * 0.0975;
  const total = subtotal + tax;

  function handlePaymentSuccess(orderId: string) {
    setConfirmedOrderId(orderId);
    setConfirmedItems([...items]);
    setConfirmedTotal(total);
    clearCart();
  }

  if (confirmedOrderId) {
    return (
      <main className="bg-background text-foreground pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-lg w-full mx-4 bg-card border border-border rounded-3xl p-8 text-center shadow-2xl"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display font-bold text-3xl mb-2">
            Order <span className="text-primary italic">Confirmed!</span>
          </h1>
          <p className="text-muted-foreground mb-1">Thank you for your order.</p>
          <p className="text-xs text-muted-foreground mb-6">
            Confirmation #{confirmedOrderId.slice(0, 12).toUpperCase()}
          </p>

          <div className="bg-background rounded-2xl border border-border p-5 text-left mb-6 space-y-3">
            {confirmedItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.name} <span className="text-foreground font-medium">×{item.quantity}</span>
                </span>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
              <span>Total Paid</span>
              <span className="text-primary">${confirmedTotal.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Your order will be ready for pickup at{" "}
            <span className="text-foreground font-semibold">1107 Dickerson Pike · Nashville, TN</span>.
          </p>

          <Link
            href="/menu"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:scale-105 glow-primary transition-all"
          >
            Back to Menu
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/menu" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Your <span className="text-primary italic">Order</span>
              </h1>
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-muted-foreground hover:text-red-400 transition-colors uppercase tracking-widest font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-card rounded-3xl border border-border">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <h2 className="font-display text-2xl font-bold mb-2">Nothing here yet</h2>
                <p className="text-muted-foreground mb-8">Add some soul food to get started.</p>
                <Link
                  href="/menu"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:scale-105 glow-primary transition-all"
                >
                  Browse the Menu
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card border border-border rounded-2xl p-5 flex items-center gap-5 hover:border-primary/30 transition-colors"
                    >
                      {/* Gradient swatch */}
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.gradient} shrink-0 relative overflow-hidden`}>
                        <div className="absolute bottom-1 right-1 bg-background/80 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-lg leading-tight">{item.name}</p>
                        <p className="text-muted-foreground text-sm mt-0.5 line-clamp-1">{item.description}</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.category}</p>
                      </div>

                      {/* Price + Controls */}
                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <p className="font-bold text-xl text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decrement(item.id)}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => increment(item.id)}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors ml-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Add more */}
                <Link
                  href="/menu"
                  className="flex items-center justify-center w-full py-4 rounded-2xl border-2 border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest gap-2"
                >
                  <Plus size={16} /> Add More Items
                </Link>
              </div>
            )}
          </div>

          {/* Right — Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-7 sticky top-28">
                <h2 className="font-display font-bold text-xl mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground truncate mr-2">
                        {item.name} <span className="text-foreground font-medium">×{item.quantity}</span>
                      </span>
                      <span className="font-semibold shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (9.75%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <PayPalCheckoutButton
                  subtotal={subtotal}
                  tax={tax}
                  items={items}
                  onSuccess={handlePaymentSuccess}
                />

                <p className="text-muted-foreground text-xs text-center mt-3">
                  Pickup at 1107 Dickerson Pike · Nashville, TN
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
