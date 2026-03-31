import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "wouter";

export function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, removeItem, subtotal, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-xl">Your Order</h2>
                {totalItems > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground/40" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Head over to the menu and add some soul food to your order.
                  </p>
                  <Link
                    href="/menu"
                    onClick={closeCart}
                    className="mt-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    See the Menu
                  </Link>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-4 py-4 border-b border-border/50">
                        {/* Food image / gradient fallback */}
                        <div className={`w-14 h-14 rounded-xl shrink-0 overflow-hidden ${item.image ? "" : `bg-gradient-to-br ${item.gradient}`}`}>
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          ) : null}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm leading-tight truncate">{item.name}</p>
                          <p className="text-primary font-bold text-sm mt-0.5">${(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-muted-foreground text-xs">${item.price.toFixed(2)} each</p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => decrement(item.id)}
                            className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-7 text-center font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => increment(item.id)}
                            className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors ml-1"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-border bg-background/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">Subtotal</span>
                  <span className="font-bold text-foreground text-lg">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-muted-foreground text-xs mb-5">Tax and fees calculated at checkout</p>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:scale-[1.02] glow-primary transition-all duration-300"
                >
                  Review Order <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
