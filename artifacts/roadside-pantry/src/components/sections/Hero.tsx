import { motion } from "framer-motion";

const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Toast banner image and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}toast-banner.jpg`}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-background/85 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,45,142,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,197,24,0.05),transparent_40%)] z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col items-center text-center">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full glow-secondary animate-pulse" />
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Roadside Pantry Logo"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover relative z-10 border-4 border-border/50 shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tight mb-6"
        >
          Nashville's <br/>
          <span className="text-primary italic">Soul Food</span> Authority
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl"
        >
          "What's In Your Pantry?"
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a
            href={TOAST_TAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:-translate-y-1 glow-primary-hover transition-all duration-300 uppercase tracking-widest text-center"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all duration-300 uppercase tracking-widest text-center"
          >
            See the Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
