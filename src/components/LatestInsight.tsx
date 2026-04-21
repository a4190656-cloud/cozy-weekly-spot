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
            <time>כ״ד ניסן תשפ״ו</time>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            הרצון שלי מול העיניים של כולם 👀
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            יש מציאות כואבת בה אנשים איבדו את הבחירה האישית בלי לשים לב. התת-מודע מקבל החלטות לפי איך שהוא יודע שיסתכלו עליו. זה מחלחל עד לניואנסים הכי קטנים של היום-יום.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                אנחנו הולכים ברחוב והעיניים של הסביבה יושבות לנו על הכתפיים כמו שומרי ראש שלא ביקשנו. במקום שהלב ינהיג את המעשים, ה״מבקר החברתי״ שבתוכנו הוא זה שמחזיק בהגה. נוצר מצב אבסורדי שבו אדם מפחד מהצל של עצמו, רק כי הוא לא עומד בסטנדרט של ״מה יגידו״.
              </p>
              <p>
                הפכנו את הציפיות החברתיות למצפן המוסרי שלנו, ושכחנו שהמצפן האמיתי אמור להיות מכוון פנימה, אל הנשמה ואל האמת הפשוטה. כשאדם מוחק את הבחירה שלו כדי לרצות את הסביבה, הוא הופך לשחקן בהצגה שאין בה קהל — כי כולם עסוקים באותו פחד בדיוק.
              </p>
              <p>
                קהילה היא כוח אדיר. היא מעניקה שייכות, תמיכה ומשמעות. אבל יש קו דק שעובר בין שייכות לבין ביטול עצמי.
              </p>
              <p>
                💛 לעולם אל תוותר על הבחירה האישית שלך. בסוף היום אתה נשאר רק עם הבחירות שעשית בלב שלם — אלו שלא נבעו מפחד, אלא מאנושיות פשוטה ומאמת פנימית.
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
