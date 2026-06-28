import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { ALL_SLIDES, SLIDE_TITLES } from "./slides";

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFull, setIsFull] = useState(false);
  const total = ALL_SLIDES.length;
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      } else if (e.key.toLowerCase() === "f") {
        toggleFull();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  useEffect(() => {
    const onFs = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFull = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const SlideComp = ALL_SLIDES[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-background text-foreground"
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchStart.current = null;
      }}
    >
      {/* Top progress bar */}
      <div className="absolute left-0 right-0 top-0 z-50 h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-crimson via-blood to-glow shadow-[0_0_10px_oklch(0.6_0.25_27/0.7)]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Slide stage */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, y: 40 * direction }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 * direction }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <SlideComp />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom chrome */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col items-stretch gap-3 p-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="pointer-events-auto flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-card/70 px-4 py-2 backdrop-blur sm:w-auto">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="rounded-full p-1.5 text-foreground transition hover:bg-blood/20 disabled:opacity-30"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="min-w-[56px] text-center font-mono text-xs">
            <span className="text-blood">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground"> / {total}</span>
          </div>
          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className="rounded-full p-1.5 text-foreground transition hover:bg-blood/20 disabled:opacity-30"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="pointer-events-auto hidden max-w-[55%] flex-wrap justify-center gap-1.5 rounded-full border border-white/10 bg-card/70 px-4 py-2 backdrop-blur md:flex">
          {ALL_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              title={SLIDE_TITLES[i]}
              aria-label={`Slide ${i + 1}: ${SLIDE_TITLES[i]}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-blood shadow-[0_0_8px_oklch(0.6_0.25_27/0.8)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-auto flex w-full items-center justify-between gap-2 rounded-full border border-white/10 bg-card/70 px-3 py-2 backdrop-blur sm:w-auto">
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {SLIDE_TITLES[index]}
          </span>
          <button
            onClick={toggleFull}
            className="rounded-full p-1.5 transition hover:bg-blood/20"
            aria-label="Toggle fullscreen"
          >
            {isFull ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
