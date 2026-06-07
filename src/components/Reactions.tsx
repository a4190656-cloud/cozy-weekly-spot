import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Reaction = { key: string; emoji: string; label: string };

const REACTIONS: Reaction[] = [
  { key: "heart", emoji: "❤️", label: "אהבתי" },
  { key: "like", emoji: "👍", label: "מעולה" },
  { key: "spark", emoji: "✨", label: "השראה" },
  { key: "pray", emoji: "🙏", label: "תודה" },
];

// Deterministic seed per insight so counts feel "alive" without a backend
const seedFor = (id: string, key: string) => {
  let h = 0;
  const s = id + key;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return 3 + (Math.abs(h) % 47);
};

type Burst = { id: number; emoji: string };

interface ReactionsProps {
  insightId: string;
  size?: "sm" | "md";
}

const Reactions = ({ insightId, size = "md" }: ReactionsProps) => {
  const storageKey = `reactions:${insightId}`;
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      const saved = raw ? JSON.parse(raw) : { counts: {}, picked: {} };
      const initial: Record<string, number> = {};
      REACTIONS.forEach((r) => {
        initial[r.key] = saved.counts?.[r.key] ?? seedFor(insightId, r.key);
      });
      setCounts(initial);
      setPicked(saved.picked ?? {});
    } catch {
      const initial: Record<string, number> = {};
      REACTIONS.forEach((r) => (initial[r.key] = seedFor(insightId, r.key)));
      setCounts(initial);
    }
  }, [insightId, storageKey]);

  const persist = (c: Record<string, number>, p: Record<string, boolean>) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ counts: c, picked: p }));
    } catch {
      /* ignore */
    }
  };

  const toggle = (r: Reaction) => {
    const isPicked = !!picked[r.key];
    const nextCounts = { ...counts, [r.key]: (counts[r.key] ?? 0) + (isPicked ? -1 : 1) };
    const nextPicked = { ...picked, [r.key]: !isPicked };
    setCounts(nextCounts);
    setPicked(nextPicked);
    persist(nextCounts, nextPicked);

    if (!isPicked) {
      const id = Date.now() + Math.random();
      setBursts((b) => [...b, { id, emoji: r.emoji }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 900);
    }
  };

  const isSm = size === "sm";

  return (
    <div className="relative mt-5 flex flex-wrap items-center gap-2">
      <div
        className={`relative flex items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1 shadow-sm backdrop-blur-xl ${
          isSm ? "" : "shadow-md"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(var(--background) / 0.85), hsl(var(--background) / 0.55))",
        }}
      >
        {REACTIONS.map((r) => {
          const active = !!picked[r.key];
          return (
            <motion.button
              key={r.key}
              type="button"
              onClick={() => toggle(r)}
              aria-label={`${r.label} (${counts[r.key] ?? 0})`}
              aria-pressed={active}
              whileTap={{ scale: 0.88 }}
              whileHover={{ y: -2 }}
              className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1 font-body text-xs font-semibold transition-colors ${
                isSm ? "text-[11px]" : "text-xs md:text-sm"
              } ${
                active
                  ? "bg-gradient-to-br from-gold/25 to-teal/15 text-navy ring-1 ring-gold/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <motion.span
                animate={active ? { scale: [1, 1.35, 1], rotate: [0, -12, 8, 0] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-base leading-none"
                aria-hidden
              >
                {r.emoji}
              </motion.span>
              <span className="tabular-nums">{counts[r.key] ?? 0}</span>
            </motion.button>
          );
        })}

        {/* Floating burst animation */}
        <AnimatePresence>
          {bursts.map((b) => (
            <motion.span
              key={b.id}
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: [0, 1, 0], y: -42, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-2xl"
              aria-hidden
            >
              {b.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <motion.a
        href={`https://wa.me/972534190656?text=${encodeURIComponent("💬 יש לי תגובה על התובנה!\nתודה על השיתוף, מעניין אותי להגיב 🤍✨🙏")}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.94 }}
        className={`group/comment inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-gradient-to-br from-teal/10 to-gold/10 px-3 py-1.5 font-body font-semibold text-navy shadow-sm backdrop-blur-xl transition-colors hover:border-teal/60 hover:text-navy-light ${
          isSm ? "text-[11px]" : "text-xs md:text-sm"
        }`}
        aria-label="הוסיפו תגובה בקבוצת הוואטסאפ"
      >
        <MessageCircle className={`${isSm ? "h-3.5 w-3.5" : "h-4 w-4"} transition-transform group-hover/comment:-rotate-12`} strokeWidth={2.4} />
        <span>הוסיפו תגובה</span>
      </motion.a>
    </div>
  );
};

export default Reactions;
