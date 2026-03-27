import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Flame, Heart, Clock, Star } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

const featuredItems = [
  { name: "Smothered Pork Chops", price: "$14.99", gradient: "from-amber-700 to-orange-950", tag: "Fan Favorite" },
  { name: "Oxtails", price: "$18.99", gradient: "from-stone-700 to-stone-950", tag: "Most Ordered" },
  { name: "Mac & Cheese", price: "$4.99", gradient: "from-yellow-500 to-orange-800", tag: "Classic" },
  { name: "Fried Catfish", price: "$13.99", gradient: "from-yellow-600 to-amber-900", tag: "Nashville Style" },
];

const values = [
  { icon: Flame, title: "Made From Scratch", body: "Every single dish is prepared fresh daily. No bags, no shortcuts, no freezer burns. Just real cooking done the right way." },
  { icon: Heart, title: "Rooted in Community", body: "Roadside Pantry was born on Dickerson Pike to serve the people of Nashville — our neighbors, our family, our culture." },
  { icon: Clock, title: "Open Every Day", body: "We're here Monday through Sunday, 11am to 9pm, because soul food cravings don't take days off." },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={`${BASE}toast-banner.jpg`} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-background/85 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,45,142,0.18),transparent_50%)] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,197,24,0.06),transparent_40%)] z-0" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full glow-secondary animate-pulse" />
            <img
              src={`${BASE}logo.png`}
              alt="Roadside Pantry Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
          >
            Nashville's <br />
            <span className="text-primary italic">Soul Food</span> Authority
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-2xl"
          >
            "What's In Your Pantry?"
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground/70 mb-12 max-w-xl"
          >
            Scratch-made Southern soul food on Dickerson Pike. Hot, heavy, and built for the culture.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:-translate-y-1 glow-primary-hover transition-all duration-300 uppercase tracking-widest text-center"
            >
              Order Now
            </a>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all duration-300 uppercase tracking-widest text-center"
            >
              See the Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
              The Roadside Difference
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold">
              This Ain't Fast Food. <span className="text-primary italic">This Is Soul Food.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              We cook the way your grandmother cooked — low and slow, seasoned right, and served with pride.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-background border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors"
              >
                <v.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-display font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MENU ITEMS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-2">
                What's Hot
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold">
                Kitchen <span className="text-primary italic">Favorites</span>
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link href="/menu" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all uppercase tracking-widest text-sm group">
                Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(245,197,24,0.15)] transition-all duration-300 flex flex-col"
              >
                <div className={`h-48 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-primary font-bold text-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TEASER — autoplay, muted */}
      <section className="py-0 bg-background overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[`${BASE}video-1.mp4`, `${BASE}video-2.mp4`, `${BASE}video-3.mp4`].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative aspect-square overflow-hidden"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUICK STATS BANNER */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Five-Star Reviews" },
              { number: "8+", label: "Menu Favorites" },
              { number: "7", label: "Days a Week" },
              { number: "100%", label: "Made From Scratch" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">{stat.number}</p>
                <p className="text-foreground/80 uppercase tracking-widest text-xs mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO TEASER */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <p className="text-primary uppercase tracking-widest text-sm font-semibold">Straight From The Plate</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Real Food, <br /><span className="text-primary italic">Real People.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No stock photos. No filters. Just honest food coming straight out of our kitchen to your hands. Check out what we've been cooking up.
              </p>
              <Link href="/gallery" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all group">
                See the Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <img src={`${BASE}food-1.png`} alt="BBQ wings plate" className="rounded-3xl w-full h-56 object-cover" />
              <img src={`${BASE}food-2.png`} alt="Fried chicken plate" className="rounded-3xl w-full h-56 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEW TEASER */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 text-primary fill-primary" />)}
          </div>
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-display font-light italic text-foreground mb-6">
            "Oxtails had me calling my mama. Best soul food I've had outside her kitchen."
          </motion.blockquote>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-8">— DeShawn M., Nashville</p>
          <Link href="/reviews" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all group">
            Read All Reviews <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img src={`${BASE}food-3.png`} alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Eat?<br />
              <span className="italic text-primary">Order Online</span> or Pull Up.
            </h2>
            <p className="text-xl text-white/80 font-light mb-10 max-w-xl mx-auto">
              1107 Dickerson Pike, Nashville, TN — Open every day, 11am to 9pm. No reservations needed. Just come hungry.
            </p>
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:scale-105 glow-primary transition-all duration-300 uppercase tracking-widest"
            >
              Start Your Order
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
