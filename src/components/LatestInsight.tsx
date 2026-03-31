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
            <time>31 במרץ, 2026</time>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
            מלכודת ה״מי שאני אמור להיות״ 🚨
          </h3>

          <p className="mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground">
            יש רגעים בחיים שבהם הכל מרגיש ״יותר מדי״. פתאום האחריות כבדה, השליחות מרגישה כמו משקולת, והדופק עולה בלי סיבה ברורה. אנחנו קוראים לזה לחץ, או — ״חרדה״. אבל האמת היא עמוקה יותר: הזהות שלנו מתערערת.
          </p>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 max-w-2xl space-y-4 font-body leading-relaxed text-muted-foreground">
              <p>
                תהיתם פעם למה זה קורה דווקא לנו, האנשים ה״חזקים״? התשובה היא פשוטה וכואבת: חרדה מגיעה כשאנחנו מפסיקים לעמוד בציפיות של עצמנו. זה לא שהמציאות בחוץ קרסה, זה המגדל שבנינו בתוך הראש שמתחיל לרעוד — הזהות שלנו מתחילה להתערער.
              </p>
              <p>
                תחשבו על האדם שהוא ה״עוגן״. זה שתמיד כולם נשענים עליו — בעבודה הוא ה״תותח״ שפותר הכל, בחבר׳ה הוא זה שמדבר עם כולם, תמיד יש לו איך לעזור, ובבית הוא הבעל והאבא שתמיד שם, רגוע ומכיל. זה המותג שלו, ככה הוא מגדיר את עצמו בלב. וזה הציפיות שהוא מצפה מעצמו.
              </p>
              <p>
                ופתאום, בסיטואציה קטנה הוא מרגיש שהוא לא מצליח לעזור או מרגיש שלא הצליח לעמוד ברף שהוא רגיל מעצמו, הוא מאבד את זה. הכעס עולה, והוא נבהל מהכעס של עצמו. החרדה היא לא מהסיטואציה, אלא מהפחד ש״אולי אני לא כזה טוב כמו שחשבתי?״.
              </p>
              <p>
                החרדה היא לא האויב. היא בסך הכל ה״שומר״ של המסיכה שלנו. היא מנסה להגן על הדמות שבנינו, אבל בדרך היא חונקת אותנו.
              </p>
              <p>
                בחסידות יודעים: ״אין שלם מלב שבור״. השלמות האמיתית היא לא להיות מושלם שלא טועה לעולם. השלמות היא היכולת להגיד: ״אני לא מושלם, אני אנושי. מותר לי להיות עייף, מותר לי לא לדעת, מותר לי שיהיה לי קשה״.
              </p>
              <p>
                כשאתה משחרר את הציפייה להיות דמות מהסרטים, החרדה מאבדת את הכוח שלה. היא פשוט נעלמת כי אין לה כבר על מה ״לשמור״.
              </p>
              <p>
                👈 תנסו להוריד את השוטר הפנימי. אל תנסו לעמוד בציפיות של ה״דמות״ שלכם. פשוט תהיו אתם. יש בכם ערך עצום גם כשאתם לא ״תותחים״ ב-100%.
              </p>
              <p>
                אל תתבישו להגיד ״אני לא יודע!״ תהיו אנושיים, זה הרבה יותר יוקרתי מלהיות מושלמים. 💛
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
