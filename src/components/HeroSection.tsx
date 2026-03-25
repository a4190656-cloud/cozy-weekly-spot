import { motion } from "framer-motion";
import heroLogo from "@/assets/hero-logo.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary py-16 md:py-24">
    <div className="absolute inset-0 opacity-10">
      <motion.div
        className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gold blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="container relative mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:gap-16">
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl border-4 border-gold/40 shadow-2xl md:h-72 md:w-72">
          <img
            src={heroLogo}
            alt="הלוגו של התובנה השבועית"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
      <div className="text-center md:text-right">
        <motion.h1
          className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          התובנה השבועית
        </motion.h1>
        <motion.p
          className="mt-4 max-w-lg font-body text-lg text-gold-light md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          תובנות שבועיות, שנאספו במיוחד בשבילך.
        </motion.p>
        <motion.a
          href="#subscribe"
          className="mt-8 inline-block rounded-lg bg-gold px-8 py-3.5 font-body text-sm font-semibold text-primary shadow-lg transition-all hover:bg-gold-light hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          הצטרפו לקהילה
        </motion.a>
      </div>
    </div>
  </section>
);

export default HeroSection;
