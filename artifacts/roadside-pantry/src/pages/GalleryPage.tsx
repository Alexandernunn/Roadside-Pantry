import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;
const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

const photos = [
  { src: `${BASE}toast-banner.jpg`, alt: "Roadside Pantry storefront", span: "md:col-span-2 md:row-span-2" },
  { src: `${BASE}food-1.png`, alt: "BBQ wings with collard greens and mac & cheese", span: "" },
  { src: `${BASE}food-2.png`, alt: "Fried chicken and fries", span: "" },
  { src: `${BASE}food-3.png`, alt: "Philly cheesesteak with fries", span: "md:col-span-2" },
];

const videos = [
  { src: `${BASE}video-1.mp4`, label: "Kitchen Vibes", sub: "Live from our kitchen" },
  { src: `${BASE}video-2.mp4`, label: "Fresh Out The Kitchen", sub: "Made from scratch daily" },
  { src: `${BASE}video-3.mp4`, label: "The Culture", sub: "Dickerson Pike, Nashville" },
];

export default function GalleryPage() {
  return (
    <main className="bg-background text-foreground pt-20">

      {/* PAGE HERO */}
      <section className="py-24 md:py-32 bg-card text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={`${BASE}food-1.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-card/85 z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            No Filters Needed
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-display font-bold mb-6">
            Straight From <span className="text-primary italic">The Plate</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Real food. Real people. No stock photography, no staging, no pretending. What you see here is exactly what lands on your plate when you order from us.
          </motion.p>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-2">
              <div className="w-10 h-[3px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">Photos</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold">
              The Food Speaks <span className="text-primary italic">For Itself</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${photo.span} rounded-3xl overflow-hidden group relative`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white text-sm font-semibold">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-4 mb-3">
              <div className="w-10 h-[3px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">Behind The Scenes</span>
              <div className="w-10 h-[3px] bg-primary" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold">
              See What's <span className="text-primary italic">Cookin'</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-lg mt-3 max-w-xl mx-auto">
              Take a look inside our kitchen. This is where every plate starts — with real technique, real ingredients, and real passion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative aspect-[9/16] rounded-3xl overflow-hidden group"
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-display font-bold text-lg leading-tight">{video.label}</p>
                  <p className="text-white/60 text-sm mt-1 uppercase tracking-widest">{video.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Follow the <span className="text-primary italic">Daily Drops</span>
          </motion.h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            We post daily specials, behind-the-scenes kitchen content, and community moments every day on Instagram. If you're not following @roadsidepantry yet, you're missing out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/roadsidepantry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold text-base uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Follow on Instagram
            </a>
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base uppercase tracking-widest hover:scale-105 glow-primary transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
