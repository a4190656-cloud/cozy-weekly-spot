import { Calendar } from "lucide-react";

const insights = [
  {
    title: "ביקורת עצמית — האויב הפנימי",
    date: "17 במרץ, 2026",
    preview:
      "לפעמים אנחנו המבקרים הכי קשוחים של עצמנו. הביקורת העצמית לא בונה אותנו — היא מפרקת. תנו לעצמכם קצת חמלה, מרחב, והרבה אהבה.",
  },
  {
    title: "המכתב שיושב אצלכם בכיס",
    date: "10 במרץ, 2026",
    preview:
      "לכל אחד יש ערך מוסף ששום אוניברסיטה לא יכולה ללמד. כשאתה מעביר את ה'מכתב' שניתן לך — השם כבר ידאג לשאר. אל תשאיר אותו בכיס.",
  },
  {
    title: "להחזיר לעצמך בחירה",
    date: "24 בפברואר, 2026",
    preview:
      "לפעמים אנחנו נמנעים מלעשות דברים לא כי אנחנו לא רוצים, אלא כי תחושת הכפייה מכבה אותנו. הפתרון — לחפש בחירה קטנה גם כשחייבים.",
  },
  {
    title: "רושם ראשוני — המנגנון ההרסני",
    date: "17 בפברואר, 2026",
    preview:
      "אנחנו ממהרים לקטלג אנשים ברגע הראשון ולא נותנים להם להתרומם. אדם שלא ממהר לקטלג — מגדל בני אדם. חברה שממהרת — מגדלת תקרות זכוכית.",
  },
  {
    title: "הודיה — הפיצוח לאנרגיה",
    date: "10 בפברואר, 2026",
    preview:
      "80% ממה שמניע אותנו זה אנרגיה. והפיצוח הכי פשוט שמעלה אנרגיה? הודיה. להודות להשם, לעצור רגע ולהבין ששום דבר לא מובן מאליו.",
  },
  {
    title: "צמיחה מתוך סערה",
    date: "3 בפברואר, 2026",
    preview:
      "כשטוב לנו — אנחנו לא רגועים, כי המוח זוכר את הקשיים. אבל כל פחד וכל מכשול הוא חומר גלם לגרסה חזקה יותר שלך. אין לך מה לפחד מזמנים טובים.",
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
              href="https://chat.whatsapp.com/DTLgiUJXtSDF8MKZqxcV0r?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              הצטרפו לקהילה ←
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightFeed;
