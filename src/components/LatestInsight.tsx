import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time>י״ח ניסן תשפ״ו</time>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            שכל ורגש — צוות, לא קרב 🔥
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            אל תטעה לחשוב שאדם רגשי הוא ״פחות שכלי״. כדי להרגיש באמת — צריך להבין. רגש שלא עובר דרך הבנה הוא תגובה. רגש שעובר דרך שכל — הוא חיבור.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                מי שמרגיש עמוק, חושב עמוק. ומי שלא מבין — לא באמת מצליח להתחבר ולהתרגש.
              </p>
              <p>
                💥 שכל ורגש לא נלחמים — הם עובדים בצוות.
              </p>
              <p>
                המשך יום נעים 🧡
              </p>
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            {expanded ? "הצג פחות ↑" : "המשך קריאה ↓"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestInsight;
