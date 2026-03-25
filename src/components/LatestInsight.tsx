import { Calendar } from "lucide-react";

const LatestInsight = () => (
  <section className="container mx-auto px-6 py-16">
    <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
      התובנה האחרונה
    </h2>
    <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time>25 במרץ, 2026</time>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
          בעלי ערך, לא מושלמים
        </h3>
        <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
          מי שמוכר לך שלמות — כנראה מוכר לך הצגה. אנשים לא מחפשים רובוטים
          מושלמים, הם מחפשים בני אדם בעלי ערך. תהיו בדרך, תהיו אמיתיים,
          ותביאו את הערך הייחודי שלכם — כשאתם פועלים מהמקום הזה, החיבור הופך
          להרבה יותר חזק.
        </p>
        <a
          href="https://chat.whatsapp.com/DTLgiUJXtSDF8MKZqxcV0r?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light"
        >
          הצטרפו לקהילה ←
        </a>
      </div>
    </div>
  </section>
);

export default LatestInsight;
