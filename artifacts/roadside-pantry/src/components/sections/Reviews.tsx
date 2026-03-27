import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Oxtails had me calling my mama. Best soul food I've had outside her kitchen.",
    author: "DeShawn M.",
  },
  {
    quote: "Mac & cheese so good I almost cried. This place is a whole vibe.",
    author: "Tasha R.",
  },
  {
    quote: "Finally, real Nashville soul food. No shortcuts, just flavor.",
    author: "Marcus J.",
  },
  {
    quote: "The fried catfish is undefeated. I'm here every weekend.",
    author: "Keisha W.",
  },
  {
    quote: "Pulled up on a random Tuesday and now I'm a regular. Cornbread is life.",
    author: "Andre B.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="w-12 h-12 text-secondary mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The Streets Are <span className="text-primary italic">Talking</span>
          </h2>
        </div>

        {/* Carousel / Wrap layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border p-8 rounded-3xl shadow-lg max-w-md w-full flex flex-col justify-between hover:border-secondary/50 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-8 italic">
                  "{review.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-foreground uppercase tracking-wider text-sm">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
