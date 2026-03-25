import { Calendar } from "lucide-react";

const LatestInsight = () => (
  <section className="container mx-auto px-6 py-16">
    <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
      Latest Insight
    </h2>
    <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time>March 25, 2026</time>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
          The Art of Listening to Yourself
        </h3>
        <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
          This week we explore the delicate balance between intuition and reason — how tuning into
          your inner voice can unlock deeper emotional clarity and better decision-making in
          everyday life.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-1 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light"
        >
          Read more →
        </a>
      </div>
    </div>
  </section>
);

export default LatestInsight;
