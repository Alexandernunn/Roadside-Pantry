import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Smothered Pork Chops",
    price: "$14.99",
    description: "Slow-cooked, fall-off-the-bone tender, drowning in rich onion gravy",
    gradient: "from-amber-700 to-orange-950",
  },
  {
    name: "Fried Catfish",
    price: "$13.99",
    description: "Crispy cornmeal-crusted, Nashville-seasoned, served with hot sauce on the side",
    gradient: "from-yellow-600 to-amber-900",
  },
  {
    name: "Mac & Cheese",
    price: "$4.99",
    description: "Five-cheese blend, baked golden on top, creamy all the way through",
    gradient: "from-yellow-500 to-orange-800",
  },
  {
    name: "Candied Yams",
    price: "$4.99",
    description: "Sweet, buttery, spiced just right — just like grandma made",
    gradient: "from-orange-600 to-red-900",
  },
  {
    name: "Oxtails",
    price: "$18.99",
    description: "Braised low and slow in a rich, savory gravy until they melt off the bone",
    gradient: "from-stone-700 to-stone-950",
  },
  {
    name: "Collard Greens",
    price: "$4.99",
    description: "Slow-simmered with smoked turkey, bold and soulful",
    gradient: "from-emerald-800 to-green-950",
  },
  {
    name: "Cornbread",
    price: "$2.99",
    description: "Golden, slightly sweet, baked fresh daily",
    gradient: "from-yellow-400 to-amber-700",
  },
  {
    name: "Lemonade",
    price: "$3.49",
    description: "House-made, served sweet or unsweet",
    gradient: "from-yellow-200 to-yellow-600",
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            From The <span className="text-primary italic">Kitchen</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Hearty, heavy, and made with love. Check out our community favorites.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(245,197,24,0.15)] flex flex-col"
            >
              {/* Abstract Food Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-primary font-bold text-sm">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group uppercase tracking-widest text-sm"
          >
            View Full Menu 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
