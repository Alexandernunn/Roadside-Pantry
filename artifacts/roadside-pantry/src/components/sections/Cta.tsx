import { motion } from "framer-motion";

const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

export function Cta() {
  return (
    <section className="relative py-32 overflow-hidden bg-secondary">
      {/* Food image background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}food-3.png`}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Ready to Eat? <br/>
            <span className="italic text-primary">Order Online</span> or Pull Up.
          </h2>
          
          <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
            Don't let your cravings wait. Hot, fresh, and ready when you are.
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
  );
}
