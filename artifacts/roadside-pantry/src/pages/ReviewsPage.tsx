import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;
const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

const reviews = [
  {
    quote: "Oxtails had me calling my mama. Best soul food I've had outside her kitchen. The gravy is everything — rich, deep, and it soaks right into the rice. I've been back four times this month.",
    author: "DeShawn M.",
    location: "East Nashville",
    dish: "Oxtails",
  },
  {
    quote: "Mac & cheese so good I almost cried. This place is a whole vibe. They're not playing around with that five-cheese blend — it's baked perfect every single time. My kids literally ask to come here now.",
    author: "Tasha R.",
    location: "Antioch",
    dish: "Mac & Cheese",
  },
  {
    quote: "Finally, real Nashville soul food. No shortcuts, just flavor. I've been looking for a place like this for years. The collard greens alone are worth the drive. Smoked turkey throughout, tender, and perfectly seasoned.",
    author: "Marcus J.",
    location: "Germantown",
    dish: "Collard Greens",
  },
  {
    quote: "The fried catfish is undefeated. I'm here every weekend. Nashville seasoning on point, cornmeal crust is crispy but never tough, and the hot sauce pairs with it like they were made for each other. Which they were.",
    author: "Keisha W.",
    location: "South Nashville",
    dish: "Fried Catfish",
  },
  {
    quote: "Pulled up on a random Tuesday and now I'm a regular. Cornbread is life. Cast iron baked, slightly sweet, and it crumbles just right. Ordered the smothered pork chops too — didn't leave a single drop of gravy.",
    author: "Andre B.",
    location: "Madison",
    dish: "Cornbread + Pork Chops",
  },
  {
    quote: "I don't even eat at restaurants anymore, but Roadside Pantry changed that. The candied yams hit different — sweet but not cloyingly so, with actual spice layered in. Tastes like Thanksgiving every time.",
    author: "Monique T.",
    location: "North Nashville",
    dish: "Candied Yams",
  },
  {
    quote: "Best kept secret on Dickerson Pike and I'm almost mad that more people know about it now. The oxtails take time and you can taste every minute of that braising in the final product. A masterpiece.",
    author: "Jerome H.",
    location: "Inglewood",
    dish: "Oxtails",
  },
  {
    quote: "Ordered the catfish and mac & cheese for lunch on a Wednesday and it completely wrecked my diet plans for the week. Worth every calorie. The lemonade was fresh too — definitely house-made, not that canned stuff.",
    author: "Brittany S.",
    location: "West Nashville",
    dish: "Catfish + Mac & Cheese",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-background text-foreground pt-20">

      {/* PAGE HERO */}
      <section className="relative py-24 md:py-36 bg-card overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={`${BASE}food-1.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-card/85 z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            500+ Five-Star Reviews
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-display font-bold mb-6">
            The Streets Are <span className="text-primary italic">Talking</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We don't need to tell you how good the food is. Nashville already knows. These are the words of the people who show up, plate in hand, and come back every single week.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex justify-center gap-1.5 mt-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-primary fill-primary" />)}
          </motion.div>
        </div>
      </section>

      {/* RATING CALLOUT */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Five-Star Reviews" },
              { number: "4.9", label: "Average Rating" },
              { number: "#1", label: "Soul Food in Nashville" },
              { number: "100%", label: "Would Recommend" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">{s.number}</p>
                <p className="text-foreground/75 uppercase tracking-widest text-xs mt-2 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,197,24,0.1)] transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 text-primary fill-primary" />)}
                  </div>
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground font-light text-base leading-relaxed mb-6 italic">
                    "{review.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{review.author}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary font-semibold uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
                    {review.dish}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold mb-5">
            Had a Great Experience? <br /><span className="text-primary italic">Tell the World.</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Every review helps our community find us. If Roadside Pantry has ever fed your soul, we'd love to hear about it — and so would Nashville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=Roadside+Pantry+Nashville"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Leave a Google Review
            </a>
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:scale-105 glow-primary transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
