import { Calendar, ShieldAlert } from "lucide-react";
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
              <time>ט״ו אייר תשפ״ו</time>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-navy shadow-md ring-4 ring-gold/10"
            >
              <ShieldAlert className="h-7 w-7" strokeWidth={2.2} />
            </motion.div>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            כשהאזעקה מפחידה יותר מהטיל 🚀
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            לפחד זה טבעי. פחד הוא מנגנון הישרדותי, ״מערכת אזעקה״ שנועדה לשמור עלינו. אבל הבעיה האמיתית מתחילה לא כשאנחנו מפחדים ממשהו חיצוני, אלא כשאנחנו מתחילים לפחד מהתחושה של הפחד עצמה.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                פסיכיאטרים מצביעים על נתון מדהים: בחרדות, <strong>90% מהסבל נובע מהפחד מהפחד</strong>, ורק 10% מהחרדה המקורית.
              </p>
              <p>
                <strong>למה זה קורה?</strong> כי פחד רגיל דוחף אותנו לזהירות, אבל הפחד מהפחד גורם לנו לקיפאון. הוא הופך את הרגש לאויב, ובמלחמה נגד הרגשות של עצמנו — אנחנו תמיד מפסידים.
              </p>
              <p>
                הפתרון הוא לא ״להילחם״ אלא פשוט לאפשר לגוף להרגיש אותה. להיות שם רגע בשבילו, בלי שיפוטיות.
              </p>
              <p>
                ברגע שמפסיקים לפחד מהתחושה — ה־90% האלו פשוט מתפוגגים. ועם ה־10% שנותרו? הרבה יותר קל להתמודד.
              </p>
              <p>המשך יום מוצלח! 👌</p>
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
