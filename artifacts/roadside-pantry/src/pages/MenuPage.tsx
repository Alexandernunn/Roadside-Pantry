import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { menuCategories } from "@/data/menuData";
import type { MenuItem } from "@/data/menuData";

const BASE = import.meta.env.BASE_URL;

function AddToCartButton({ item }: { item: MenuItem }) {
  const { addItem, getQuantity, increment, decrement } = useCart();
  const qty = getQuantity(item.id);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  if (qty === 0) {
    return (
      <button
        onClick={handleAdd}
        className={`mt-5 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
          justAdded
            ? "bg-green-600 text-white"
            : "bg-primary text-primary-foreground hover:scale-105 glow-primary-hover"
        }`}
      >
        {justAdded ? (
          <>
            <Check size={15} /> Added!
          </>
        ) : (
          <>
            <Plus size={15} /> Add to Order
          </>
        )}
      </button>
    );
  }

  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="flex items-center gap-1 bg-background border border-border rounded-full px-1 py-1">
        <button
          onClick={() => decrement(item.id)}
          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors font-bold text-lg"
        >
          −
        </button>
        <span className="w-7 text-center font-bold text-sm">{qty}</span>
        <button
          onClick={() => increment(item.id)}
          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Plus size={14} />
        </button>
      </div>
      <span className="text-primary font-bold text-sm">${(item.price * qty).toFixed(2)}</span>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground pt-20">
      {/* PAGE HERO */}
      <section className="relative py-24 md:py-32 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={`${BASE}food-2.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-card/90 to-card z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            What We're Cooking
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-display font-bold mb-6">
            The <span className="text-primary italic">Full Menu</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything on this menu is made from scratch, seasoned with intention, and cooked the way it's supposed to be cooked. Add what you want and build your order below.
          </motion.p>
        </div>
      </section>

      {/* MENU CATEGORIES */}
      {menuCategories.map((cat, ci) => (
        <section key={cat.name} className={`py-20 md:py-28 ${ci % 2 === 0 ? "bg-background" : "bg-card"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-14">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-3">
                <div className="w-12 h-[3px] bg-primary" />
                <span className="text-primary uppercase tracking-widest text-sm font-semibold">{cat.name}</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold mb-2">
                {cat.name === "Entrees" && "The Main Event"}
                {cat.name === "Sides" && "The Sides That Steal the Show"}
                {cat.name === "Drinks" && "Stay Refreshed"}
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg">
                {cat.tagline}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`group rounded-3xl overflow-hidden border border-border hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,197,24,0.12)] transition-all duration-300 flex flex-col ${ci % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <div className="h-44 w-full relative overflow-hidden bg-card">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                    <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-md px-3 py-1.5 rounded-full text-primary font-bold text-sm">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{item.description}</p>
                    <AddToCartButton item={item} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ORDER BANNER */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Hungry yet? <span className="italic text-primary">We thought so.</span>
          </motion.h2>
          <p className="text-white/75 text-lg mb-10">Order online in seconds and pick up fresh at 1107 Dickerson Pike. Ready in 15–20 minutes.</p>
        </div>
      </section>
    </main>
  );
}
