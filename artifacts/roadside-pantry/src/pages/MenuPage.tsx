import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;
const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

const categories = [
  {
    name: "Entrees",
    tagline: "The main event. Slow-cooked, seasoned heavy, and built to satisfy.",
    items: [
      {
        name: "Smothered Pork Chops",
        price: "$14.99",
        description: "Fall-off-the-bone pork chops slow-cooked in a rich, savory onion gravy. Each chop is seared to lock in the flavor, then braised until the meat pulls apart with ease. Served over white rice with the gravy poured on thick.",
        gradient: "from-amber-700 to-orange-950",
        badge: "Fan Favorite",
      },
      {
        name: "Fried Catfish",
        price: "$13.99",
        description: "Whole catfish fillets hand-dredged in seasoned cornmeal and fried golden in a cast-iron skillet. Nashville-spiced with a crispy crust that holds up against our house hot sauce. Come with or without the heat — we won't judge.",
        gradient: "from-yellow-600 to-amber-900",
        badge: "Nashville Style",
      },
      {
        name: "Oxtails",
        price: "$18.99",
        description: "Braised low and slow for hours in a rich, herbaceous gravy until the meat melts off the bone like butter. This isn't a quick dish — it's patience in a bowl. Served over rice with the braising liquid reduced to velvet.",
        gradient: "from-stone-700 to-stone-950",
        badge: "Most Ordered",
      },
    ],
  },
  {
    name: "Sides",
    tagline: "Don't sleep on the sides. They hit different here.",
    items: [
      {
        name: "Mac & Cheese",
        price: "$4.99",
        description: "A five-cheese blend — sharp cheddar, gouda, gruyère, colby jack, and cream cheese — folded into al dente macaroni and baked in a cast iron until the top is golden and bubbly. Creamy all the way through. No powdered mix here.",
        gradient: "from-yellow-500 to-orange-800",
        badge: "Classic",
      },
      {
        name: "Candied Yams",
        price: "$4.99",
        description: "Fresh sweet potatoes slow-cooked in brown sugar, real butter, cinnamon, nutmeg, and just a touch of vanilla. The kind your grandmother would make for Sunday dinner. Sweet, buttery, and absolutely unapologetic about it.",
        gradient: "from-orange-600 to-red-900",
        badge: "Sunday Best",
      },
      {
        name: "Collard Greens",
        price: "$4.99",
        description: "Fresh collard greens slow-simmered with smoked turkey, onions, garlic, and house seasonings. Cooked down until they're silky and tender, carrying the smoke and depth of every ingredient. No bitterness — just soul.",
        gradient: "from-emerald-800 to-green-950",
        badge: "Southern Classic",
      },
      {
        name: "Cornbread",
        price: "$2.99",
        description: "Baked fresh every morning in a seasoned cast iron skillet. Golden brown on the outside, moist and slightly sweet on the inside. Goes with everything on this menu. Honestly, you might order two.",
        gradient: "from-yellow-400 to-amber-700",
        badge: "Baked Fresh Daily",
      },
    ],
  },
  {
    name: "Drinks",
    tagline: "Keep it cold, keep it sweet.",
    items: [
      {
        name: "House Lemonade",
        price: "$3.49",
        description: "Freshly squeezed lemons, cane sugar, and ice-cold water. Available sweet or unsweet — though we're partial to sweet. Made in-house every morning so it's never from concentrate and always hits right.",
        gradient: "from-yellow-200 to-yellow-600",
        badge: "House Made",
      },
    ],
  },
];

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
            Everything on this menu is made from scratch, seasoned with intention, and cooked the way it's supposed to be cooked. No substitutions for quality — just the real thing, every time.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-10">
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:scale-105 glow-primary transition-all duration-300 uppercase tracking-widest"
            >
              Order Online Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* MENU CATEGORIES */}
      {categories.map((cat, ci) => (
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
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`group rounded-3xl overflow-hidden border border-border hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,197,24,0.12)] transition-all duration-300 flex flex-col ${ci % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <div className={`h-44 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                    <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-md px-3 py-1.5 rounded-full text-primary font-bold text-sm">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{item.description}</p>
                    <a
                      href={TOAST_TAB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 text-primary text-sm font-semibold hover:underline uppercase tracking-wider"
                    >
                      Add to Order →
                    </a>
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
          <a
            href={TOAST_TAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:scale-105 glow-primary transition-all duration-300 uppercase tracking-widest"
          >
            Order Now
          </a>
        </div>
      </section>
    </main>
  );
}
