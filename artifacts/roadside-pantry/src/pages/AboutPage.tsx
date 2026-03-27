import { motion } from "framer-motion";
import { Link } from "wouter";
import { Flame, Users, Award, MapPin } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

const values = [
  {
    icon: Flame,
    title: "Scratch-Made, Always",
    body: "There are no shortcuts in our kitchen. Every sauce is made from base, every piece of meat is seasoned by hand, and every side dish is cooked fresh each morning before we open the doors. We believe the food can taste the difference — and so can you.",
  },
  {
    icon: Users,
    title: "Community First",
    body: "Roadside Pantry exists because of this neighborhood. We were built by it, for it, and we give back to it every day. When you eat with us, you're supporting a Black-owned business that pours everything back into the community on Dickerson Pike.",
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    body: "We'd rather run out of oxtails than serve something that isn't right. Our menu stays tight because we'd rather do eight things perfectly than twenty things halfway. Every item on this menu earns its spot.",
  },
  {
    icon: MapPin,
    title: "Nashville Through and Through",
    body: "1107 Dickerson Pike isn't just an address — it's a landmark. This strip has always been where Nashville's culture lives. We're proud to be part of that story and to carry it forward with every plate we serve.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground pt-20">

      {/* PAGE HERO */}
      <section className="relative py-28 md:py-40 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img src={`${BASE}food-pattern.png`} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-card/85 via-card/80 to-card z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            Our Story
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Born from the Block. <br /><span className="text-primary italic">Built for the Culture.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Roadside Pantry isn't just a restaurant. It's a declaration — that authentic soul food deserves to be treated with the same pride and care that's been passed down through generations.
          </motion.p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-7">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[3px] bg-primary" />
                <span className="text-primary uppercase tracking-widest text-sm font-semibold">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                A Plate of History on <span className="text-primary italic">Every Table</span>
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Soul food isn't just a cuisine — it's a language. It tells the story of resilience, creativity, and community that stretches back generations. At Roadside Pantry, we speak that language fluently and without apology.
                </p>
                <p>
                  We started on Dickerson Pike because this is where Nashville's culture lives. This community deserved a place where the food tasted exactly like home — the kind of home where the gravy was always thick, the greens were always cooked low and slow, and nobody left the table hungry.
                </p>
                <p>
                  Everything we cook is made from scratch every single day. That means early mornings, long prep times, and recipes that don't take shortcuts. It means buying fresh, seasoning by feel, and cooking with the kind of love that only comes when you truly believe in what you're making.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-5">
              <img src={`${BASE}food-1.png`} alt="BBQ wings plate" className="rounded-3xl w-full h-64 object-cover" />
              <img src={`${BASE}food-3.png`} alt="Philly plate" className="rounded-3xl w-full h-64 object-cover mt-10" />
              <div className="col-span-2">
                <img src={`${BASE}toast-banner.jpg`} alt="Roadside Pantry storefront" className="rounded-3xl w-full h-52 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.08),transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">Our Mission</p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-8">
              "To preserve the tradition of soul food cooking while building a space where <span className="text-primary italic">the culture can gather, eat well, and feel at home."</span>
            </blockquote>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              That's what drives us every day — before the doors open, during the rush, and after the last plate goes out. Food this good deserves to be shared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
              What We Stand For
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-primary italic">Core Values</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-colors"
              >
                <v.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-2xl font-display font-bold mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="py-0 bg-background overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-72 md:h-96">
          {[`${BASE}video-1.mp4`, `${BASE}video-2.mp4`, `${BASE}video-3.mp4`].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <p className="text-primary uppercase tracking-widest text-sm font-semibold">Come See Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">We're Right <span className="text-primary italic">On the Pike</span></h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>📍 1107 Dickerson Pike, Nashville, TN 37207</p>
                <p>🕐 Open Monday – Sunday, 11am to 9pm</p>
                <p>📞 (615) 555-0199</p>
              </div>
              <a
                href={TOAST_TAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:scale-105 glow-primary transition-all duration-300"
              >
                Order Pickup
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={`${BASE}food-2.png`} alt="Food plate" className="rounded-3xl w-full h-72 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
