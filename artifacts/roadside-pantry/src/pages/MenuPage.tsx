import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Search, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { menuCategories } from "@/data/menuData";
import type { MenuItem } from "@/data/menuData";

const BASE = import.meta.env.BASE_URL;

const CATEGORY_DISPLAY: Record<string, string> = {
  "Burgers": "Built to Satisfy",
  "Sandwiches": "Stack It Up",
  "Chicken": "The Bird Done Right",
  "Tortillas": "Wrapped & Ready",
  "Sides": "The Sides That Steal the Show",
  "Beverages": "Stay Refreshed",
  "Plates": "The Full Spread",
  "Extras": "Finish It Off",
  "Entrees": "The Main Event",
  "Drinks": "Stay Refreshed",
};

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

function MenuItemCard({ item, bg }: { item: MenuItem; bg: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`group rounded-3xl overflow-hidden border border-border hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,197,24,0.12)] transition-all duration-300 flex flex-col ${bg}`}
    >
      <div className="h-44 w-full relative overflow-hidden bg-card">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
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
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const categoryNames = menuCategories.map((c) => c.name);

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return menuCategories
      .filter((cat) => !activeCategory || cat.name === activeCategory)
      .map((cat) => ({
        ...cat,
        items: q
          ? cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q)
            )
          : cat.items,
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  const totalResults = filteredCategories.reduce((n, c) => n + c.items.length, 0);
  const isFiltering = searchQuery.trim() !== "" || activeCategory !== null;

  return (
    <main className="bg-background text-foreground pt-20">
      {/* PAGE HERO */}
      <section className="relative py-24 md:py-32 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img src={`${BASE}food-pattern.webp`} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-card/85 via-card/80 to-card z-0" />
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

      {/* STICKY FILTER BAR */}
      <div className="sticky top-[56px] sm:top-[60px] z-40 bg-background/98 backdrop-blur-md border-b-2 border-transparent" style={{ backgroundImage: 'linear-gradient(135deg, rgba(245,197,24,0.08) 0%, rgba(91,45,142,0.08) 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-3 py-3">
            {/* Search box — top row */}
            <div className="relative w-full sm:w-48 md:w-60 mx-auto">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search…"
                className="w-full bg-card/60 border-2 border-primary/30 rounded-full pl-8 pr-8 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover:border-primary/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary hover:text-primary transition-colors"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* First row of buttons — first 4 categories */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {categoryNames.slice(0, 4).map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveCategory(activeCategory === name ? null : name)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === name
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/40 scale-105"
                      : "bg-card border-2 border-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-card/90 hover:shadow-md hover:shadow-secondary/20"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Second row of buttons — last 4 categories */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {categoryNames.slice(4).map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveCategory(activeCategory === name ? null : name)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === name
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/40 scale-105"
                      : "bg-card border-2 border-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-card/90 hover:shadow-md hover:shadow-secondary/20"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MENU CONTENT */}
      <div className="min-h-screen pt-4">
        <AnimatePresence mode="wait">
          {filteredCategories.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 text-center px-4"
            >
              <p className="text-4xl mb-4">🍽️</p>
              <h3 className="font-display font-bold text-2xl mb-2">Nothing matched</h3>
              <p className="text-muted-foreground mb-6">Try a different search or browse all categories.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all"
              >
                Show Everything
              </button>
            </motion.div>
          ) : (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Search result count */}
              {isFiltering && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-2">
                  <p className="text-muted-foreground text-sm">
                    Showing <span className="text-foreground font-semibold">{totalResults}</span> item{totalResults !== 1 ? "s" : ""}
                    {activeCategory && <> in <span className="text-primary font-semibold">{activeCategory}</span></>}
                    {searchQuery && <> matching <span className="text-primary font-semibold">"{searchQuery}"</span></>}
                  </p>
                </div>
              )}

              {filteredCategories.map((cat, ci) => (
                <section
                  key={cat.name}
                  className={`py-16 md:py-24 ${ci % 2 === 0 ? "bg-background" : "bg-card"}`}
                >
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Category header — only show when not doing a pure search across all */}
                    {(!searchQuery || filteredCategories.length > 1) && (
                      <div className="mb-12">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-[3px] bg-primary" />
                          <span className="text-primary uppercase tracking-widest text-sm font-semibold">{cat.name}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                          {CATEGORY_DISPLAY[cat.name] ?? cat.name}
                        </h2>
                        <p className="text-muted-foreground text-lg">{cat.tagline}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                      {cat.items.map((item) => (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          bg={ci % 2 === 0 ? "bg-card" : "bg-background"}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
