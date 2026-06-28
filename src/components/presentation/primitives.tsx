import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function useCountUp(target: number, duration = 1.5, start = true, decimals = 0) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    decimals === 0 ? Math.round(v).toString() : v.toFixed(decimals),
  );
  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, target, { duration, ease: "easeOut" });
    return controls.stop;
  }, [start, target, duration, mv]);
  return rounded;
}

export function CountUp({
  to,
  duration = 1.6,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const value = useCountUp(to, duration, inView, decimals);
  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{value}</motion.span>
      {suffix}
    </span>
  );
}

export function BloodDrop({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      width={size}
      height={(size * 130) / 100}
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="drop-grad" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="oklch(0.75 0.2 27)" />
          <stop offset="50%" stopColor="oklch(0.52 0.24 27)" />
          <stop offset="100%" stopColor="oklch(0.32 0.18 25)" />
        </radialGradient>
      </defs>
      <path
        d="M50 5 C50 5, 10 55, 10 85 A40 40 0 0 0 90 85 C90 55, 50 5, 50 5 Z"
        fill="url(#drop-grad)"
        stroke="oklch(0.7 0.2 27)"
        strokeWidth="1"
      />
      <ellipse cx="38" cy="70" rx="10" ry="16" fill="oklch(1 0 0 / 0.2)" />
    </svg>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
});

export function SlideTitle({
  kicker,
  title,
  className = "",
}: {
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger(0.1)}
      className={`mb-10 ${className}`}
    >
      {kicker && (
        <motion.div
          variants={fadeUp}
          className="mb-3 inline-block rounded-full border border-blood/40 bg-blood/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blood"
        >
          {kicker}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
