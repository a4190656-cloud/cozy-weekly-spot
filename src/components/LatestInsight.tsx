import { Calendar, Globe } from "lucide-react";
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
              <time>ו׳ סיון תשפ״ו</time>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-light text-navy shadow-md ring-4 ring-gold/10"
            >
              <Globe className="h-7 w-7" strokeWidth={2.2} />
            </motion.div>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            האינטרנט האנושי שלך
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            תדמיינו את הסיטואציה הבאה: אתם באמצע נסיעה, ופתאום נדלקת מנורה אדומה ומלחיצה בלוח המחוונים. המוח שלכם מיד נכנס לסרטים: ״הלך המנוע״, ״זה יעלה אלפים״, ״נתקעתי באמצע שום מקום״. הלחץ מטפס ל-100%.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                עכשיו, תדמיינו שאתם מרימים טלפון לחבר שמבין בזה, והוא אומר לכם משפט אחד: ״תירגע, זה כולה חיישן קטן. סע חופשי, נטפל בזה מחר״.
              </p>
              <p>
                מה קרה ברגע הזה? הבעיה הטכנית לא נעלמה, המנורה עדיין דולקת – אבל הלחץ הפנימי? צנח ברגע.
              </p>
              <p>
                זה בדיוק הכוח של קשרים אנושיים. דווקא לאנשים חזקים ועצמאיים יש נטייה להגיד: ״אני אסתדר לבד, אני לא צריך אף אחד״. זה אולי נכון, אתם כנראה תסתדרו. אבל למה לעשות את זה קשה ומורכב, כשיש לכם חבר שיכול להפוך את זה לפשוט ברגע?
              </p>
              <p>
                בשורה התחתונה: בכל הזדמנות שיש לכם בחיים ליצור קשרים – תעשו את זה. אין לכם מושג כמה זה ישנה לכם את החיים. קשרים נכונים הם כמו ״אינטרנט אנושי״ – רשת ביטחון שמספקת מידע, תמיכה ופתרונות בדיוק בשנייה שאתם צריכים אותם.
              </p>
              <p>לילה טוב לכולם! 🤍</p>
            </div>
          </motion.div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            {expanded ? "הצג פחות ↑" : "המשך קריאה ↓"}
          </button>

          <Reactions insightId="latest-human-internet" />
        </div>
      </motion.div>
    </section>
  );
};

export default LatestInsight;
