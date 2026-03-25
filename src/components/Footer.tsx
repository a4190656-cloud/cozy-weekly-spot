const Footer = () => (
  <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-semibold">התובנה השבועית</p>
      <p className="mt-2 text-sm text-gold-light">
        © {new Date().getFullYear()} כל הזכויות שמורות.
      </p>
    </div>
  </footer>
);

export default Footer;
