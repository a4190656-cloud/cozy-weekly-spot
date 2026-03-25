import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const LatestInsight = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        className="font-display text-3xl font-bold text-foreground md:text-4xl"
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
            <time>25 במרץ, 2026</time>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
            בעלי ערך, לא מושלמים
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            מכירים את זה שאתם צריכים עזרה במשהו? אתם פונים לאדם, והדבר הראשון
            שהוא אומר לכם זה: ״אני מושלם בתחום הזה. אין אצלי טעויות״. פתאום,
            משהו בפנים מתכווץ. במקום להרגיש ביטחון, אתם מרגישים רתיעה.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                כי בתוך תוכנו אנחנו יודעים את האמת: מי שמוכר לך שלמות — כנראה
                מוכר לך הצגה. הרי כולנו בני אדם. בעולם הזה אין באמת ״מושלם״.
                כשמישהו מציג חזות חסינה מהכל, הוא בונה חומה בינו לביניכם.
              </p>
              <p>
                כבדהו וחשדהו את ה״מושלמים״. מי שאומר שהוא מושלם, סוגר את הדלת
                ללמידה, להתפתחות ולחיבור אמיתי.
              </p>
              <p>
                לעומת זאת, כשאתם פוגשים אדם שאומר: ״אני לא מושלם. גם אני בדרך,
                גם אני לומד כל יום. אבל — יש לי ערך לתת לך. יש לי כלים שצברתי,
                יש לי ניסיון מהטעויות שלי, ואני כאן כדי לצעוד איתך ביחד.״ פה
                נמצאת האמת.
              </p>
              <p>
                זה נכון לכל תחום: אם אתם נותנים שירות, אל תפחדו להראות שאתם
                אנושיים. המקצועיות שלכם לא נמדדת בחוסר טעויות, אלא ביושרה שלכם
                ובערך האמיתי שאתם מביאים לשולחן. אנשים לא מחפשים רובוטים
                מושלמים, הם מחפשים בני אדם בעלי ערך.
              </p>
              <p>
                אל תנסו למכור תמונה נוצצת ומזויפת. תהיו בדרך, תהיו אמיתיים,
                ותביאו את הערך הייחודי שלכם. כשאתם פועלים מהמקום הזה, החיבור
                ביניכם לבין האדם שמולכם הופך להרבה יותר חזק, והברכה שורה שם
                באמת. תהיו בדרך, תהיו בעלי ערך. העולם צמא לאמת שלכם. 💛
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
