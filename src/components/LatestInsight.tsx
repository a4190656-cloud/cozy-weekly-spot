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
            <time>ח׳ אייר תשפ״ו</time>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
            ההבדל בין הנאה להתמכרות ✔️
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            רבים מאיתנו נוטים לבלבל בין הנאה לבין התמכרות, אבל האמת היא שמדובר בשני קטבים הפוכים לגמרי.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                ההבדל המהותי הוא פשוט: <strong>הנאה</strong> היא משהו שאתם מוסיפים לחיים כדי להעשיר אותם. אתם בוחרים בה, אתם שולטים בה, והיא משאירה אתכם עם טעם של עוד — אבל בנחת.
              </p>
              <p>
                <strong>התמכרות</strong> היא משהו שאתם מוסיפים לחיים כי אתם כבר לא יכולים בלעדיו. היא זו שבוחרת בכם, היא שולטת בלו״ז שלכם, והיא משאירה אתכם עם תחושת ריקנות ברגע שהיא נגמרת.
              </p>
              <p>שאלו את עצמכם שלוש שאלות וכך תדעו אם אתם מכורים או לא:</p>
              <ol className="list-decimal space-y-2 pr-5">
                <li>האם יש לי בחירה ואני יכול להחליט יום אחד שאני לא עושה את זה?</li>
                <li>האם זה בא על חשבון דברים אחרים שחשובים לי כמו משפחה, שינה וכד׳?</li>
                <li>האם המינון עולה מפעם לפעם שאני עושה את זה?</li>
              </ol>
              <p>
                <strong>השורה התחתונה:</strong> הנאה היא כלי לעבודה — התמכרות היא הבוס שלכם. ביום שבו ה״תענוג״ מפסיק לתת לכם אנרגיה ומתחיל לגבות מכם ריבית — זה הסימן שזה כבר לא בשליטתכם.
              </p>
              <p>המשך יום נעים! 🖤</p>

              <div className="rounded-xl border border-gold/30 bg-gold/5 p-4">
                <p className="font-semibold text-foreground">🛡️ הגיע הזמן לגלות את האמת</p>
                <p className="mt-2">
                  פיתחתי עבורכם אתר ייעודי לאבחון עצמי מהיר: 15 שאלות שיגלו לכם בדיוק איפה אתם ממוקמים על הציר שבין הנאה להתמכרות. האבחון אנונימי לחלוטין.
                </p>
                <a
                  href="https://a4190656-cloud.github.io/AO-TIMLULl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  כניסה לאבחון ←
                </a>
              </div>
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
