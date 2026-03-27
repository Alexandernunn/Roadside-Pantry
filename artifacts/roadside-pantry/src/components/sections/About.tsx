import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Born from the Block. <br />
              <span className="text-primary italic">Built for the Culture.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                Roadside Pantry isn't just a restaurant—it's a celebration of authentic Nashville soul food. We believe in food that speaks to the soul, deeply rooted in community and legacy.
              </p>
              <p>
                Every dish is made from scratch daily, utilizing bold flavors and generational recipes that turn a simple meal into an unforgettable experience. No shortcuts, just love and seasoning.
              </p>
            </div>
          </motion.div>

          {/* Right Stats Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary blur-3xl opacity-20 rounded-full" />
            <div className="relative bg-background border border-border rounded-[2rem] shadow-2xl overflow-hidden group">
              {/* Food image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}food-1.png`}
                  alt="BBQ wings with collard greens and mac & cheese"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-10 md:p-12">
                {/* Decorative accent lines */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="w-10 h-10 text-primary fill-primary drop-shadow-[0_0_8px_rgba(245,197,24,0.5)]" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground">
                    500+
                  </h3>
                  <p className="text-xl md:text-2xl font-medium text-primary uppercase tracking-widest">
                    Five-Star Reviews
                  </p>
                  <p className="text-muted-foreground">
                    Voted one of Nashville's best hidden gems for authentic, scratch-made soul food.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
