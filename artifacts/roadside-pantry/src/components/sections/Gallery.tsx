import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

const photos = [
  { src: `${BASE}toast-banner.jpg`, alt: "Roadside Pantry storefront banner", span: "col-span-2 row-span-2" },
  { src: `${BASE}food-1.png`, alt: "BBQ wings with collard greens and mac & cheese", span: "col-span-1 row-span-1" },
  { src: `${BASE}food-2.png`, alt: "Fried chicken and seasoned fries", span: "col-span-1 row-span-1" },
  { src: `${BASE}food-3.png`, alt: "Philly cheesesteak with fries", span: "col-span-2 row-span-1" },
];

const videos = [
  { src: `${BASE}video-1.mp4`, label: "Kitchen Vibes" },
  { src: `${BASE}video-2.mp4`, label: "Fresh Out The Kitchen" },
  { src: `${BASE}video-3.mp4`, label: "The Culture" },
];

function VideoCard({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group bg-black"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/30">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-white font-display text-sm font-semibold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Straight From <span className="text-primary italic">The Plate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Real food. Real flavor. See what's coming out of our kitchen.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 auto-rows-[200px] md:auto-rows-[240px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`${photo.span} rounded-3xl overflow-hidden group relative`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Behind The <span className="text-primary italic">Scenes</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <VideoCard src={video.src} label={video.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
