import { Calendar } from "lucide-react";

const insights = [
  {
    title: "למצוא כוח בפגיעות",
    date: "18 במרץ, 2026",
    preview: "למה לחשוף את הרגשות האמיתיים שלך זה לא חולשה — זה הבסיס לחיבור אותנטי וצמיחה אישית.",
  },
  {
    title: "הכוח של ריטואלים קטנים",
    date: "11 במרץ, 2026",
    preview: "איך הרגלים יומיומיים קטנים יכולים לעגן את העולם הרגשי שלך וליצור תחושת יציבות גם בזמנים סוערים.",
  },
  {
    title: "כשהשקט מדבר חזק יותר",
    date: "4 במרץ, 2026",
    preview: "חקירה של המיומנות המוערכת מדי של שתיקה נוחה ומה היא חושפת על אמון במערכות יחסים.",
  },
  {
    title: "להגדיר מחדש הצלחה בתנאים שלך",
    date: "25 בפברואר, 2026",
    preview: "לצאת מעבר לוולידציה חיצונית ולבנות מצפן פנימי שמנחה בחירות חיים משמעותיות.",
  },
  {
    title: "האומץ להתחיל מחדש",
    date: "18 בפברואר, 2026",
    preview: "כל התחלה מחדש היא מעשה של אומץ. איך לחבק התחלות חדשות בלי לשאת את המשקל של פרקים קודמים.",
  },
  {
    title: "הכרת תודה מעבר לשטחיות",
    date: "11 בפברואר, 2026",
    preview: "ללכת עמוק מעבר ל'תודה' — לטפח תרגול של הכרת תודה שבאמת משנה את הפרספקטיבה שלך.",
  },
];

const InsightFeed = () => (
  <section className="bg-warm-cream py-16">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
        פיד התובנות
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
              קראו עוד ←
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightFeed;
