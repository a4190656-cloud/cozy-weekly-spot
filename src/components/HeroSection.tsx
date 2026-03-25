import heroLogo from "@/assets/hero-logo.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary py-16 md:py-24">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal blur-3xl" />
    </div>
    <div className="container relative mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:gap-16">
      <div className="flex-shrink-0">
        <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72 overflow-hidden rounded-2xl border-4 border-gold/40 shadow-2xl">
          <img src={heroLogo} alt="הלוגו של התובנה השבועית" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="text-center md:text-right">
        <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
          התובנה השבועית
        </h1>
        <p className="mt-4 max-w-lg text-lg font-body text-gold-light md:text-xl">
          תובנות שבועיות, שנאספו במיוחד בשבילך.
        </p>
        <a
          href="#subscribe"
          className="mt-8 inline-block rounded-lg bg-gold px-8 py-3.5 font-body text-sm font-semibold text-primary shadow-lg transition-all hover:bg-gold-light hover:shadow-xl"
        >
          הצטרפו לקהילה
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
