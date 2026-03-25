import { Calendar } from "lucide-react";

const insights = [
  {
    title: "Finding Strength in Vulnerability",
    date: "March 18, 2026",
    preview: "Why showing your true emotions isn't weakness — it's the foundation of authentic connection and personal growth.",
  },
  {
    title: "The Power of Small Rituals",
    date: "March 11, 2026",
    preview: "How tiny daily habits can anchor your emotional world and create a sense of stability even in chaotic times.",
  },
  {
    title: "When Silence Speaks Louder",
    date: "March 4, 2026",
    preview: "Exploring the underrated skill of comfortable silence and what it reveals about trust in relationships.",
  },
  {
    title: "Redefining Success on Your Terms",
    date: "February 25, 2026",
    preview: "Moving beyond external validation to build an inner compass that guides meaningful life choices.",
  },
  {
    title: "The Courage to Begin Again",
    date: "February 18, 2026",
    preview: "Every restart is an act of bravery. How to embrace fresh starts without carrying the weight of past chapters.",
  },
  {
    title: "Gratitude Beyond the Surface",
    date: "February 11, 2026",
    preview: "Going deeper than 'thank you' — cultivating a gratitude practice that truly shifts your perspective.",
  },
];

const InsightFeed = () => (
  <section className="bg-warm-cream py-16">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
        The Insight Feed
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <time>{item.date}</time>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground group-hover:text-navy-light">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.preview}
            </p>
            <a
              href="#"
              className="mt-4 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightFeed;
