import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="border-t border-border bg-primary py-10 text-primary-foreground"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-semibold">התובנה השבועית</p>
      <p className="mt-2 text-sm text-gold-light">
        © {new Date().getFullYear()} כל הזכויות שמורות.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
