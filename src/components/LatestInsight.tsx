import { Calendar, Swords } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Reactions from "./Reactions";


const LatestInsight = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        התובנה האחרונה
      </motion.h2>
      <motion.div
        className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Decorative gradient accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold via-teal to-navy-light" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

        <div className="p-8 md:p-10">
          {/* Icon badge */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time>כ״ט אייר תשפ״ו</time>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-navy shadow-md ring-4 ring-gold/10"
            >
              <Swords className="h-7 w-7" strokeWidth={2.2} />
            </motion.div>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            ההגנה הכי טובה היא התקפה?!
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            מכירים את הרגע הזה שמישהו קרוב אליכם אומר לכם משהו קטן, אולי אפילו בצחוק, שנוגע לכם בדיוק בנקודה הכי רגישה? ופתאום, בשנייה אחת, אתם מתפוצצים עליו בחזרה — שולפים את ״רשימת המכולת״ של כל הטעויות שהוא עשה מאז שהוא נולד, ויורים לכל הכיוונים בלי לרחם.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                למה זה קורה לנו? כי המוח שלנו מזהה סכנה. כשמישהו נוגע לנו בסדק פנימי, בבושה, בחוסר ביטחון או בפחד — אנחנו נפגעים והאגו נכנס לפניקה.
              </p>
              <p>
                הוא אומר לעצמו: ״אם אני אשאר כאן בשקט, הוא יראה את החולשה שלי״. אז במקום לעצור ולהגיד את האמת הפשוטה: <strong>״וואו, מה שאמרת עכשיו ממש פגע בי״</strong> או <strong>״זה הבהיל אותי״</strong> — המוח בוחר בקיצור הדרך האוטומטי וההישרדותי ביותר: התקפה.
              </p>
              <p>
                אגב, גם בעולם הקרב מגע זה הסוד — ההגנה הכי טובה היא התקפה! בזירה זה מציל חיים כי המטרה היא להמם את הצד השני, אבל בחיים האמיתיים ובמערכות יחסים? לא תמיד זה נכון...
              </p>
              <p>המשך יום מוצלח</p>
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            {expanded ? "הצג פחות ↑" : "המשך קריאה ↓"}
          </button>

          <Reactions insightId="latest-defense-is-attack" />
        </div>
      </motion.div>
    </section>
  );
};

export default LatestInsight;
