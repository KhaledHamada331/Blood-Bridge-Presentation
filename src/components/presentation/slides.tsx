import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bell,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  Database,
  Droplet,
  FileText,
  Filter,
  Globe,
  Heart,
  Hospital,
  Languages,
  Lock,
  MapPin,
  Moon,
  Network,
  Radio,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import { BloodDrop, CountUp, SlideTitle, fadeUp, stagger } from "./primitives";

/* ============ SLIDE 1 — HERO ============ */
export function Slide01() {
  const title = "BLOOD BRIDGE";
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden radial-vignette">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="animate-heartbeat">
          <BloodDrop size={140} />
        </div>
      </motion.div>

      <h1 className="relative z-10 mt-10 font-display text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        {title.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
            className={`inline-block ${ch === " " ? "w-6" : "text-glow"}`}
            style={ch === "B" || ch === "R" ? { color: "oklch(0.62 0.25 27)" } : undefined}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="relative z-10 mt-4 text-base sm:text-xl text-muted-foreground md:text-2xl"
      >
        Intelligent Blood Donation Coordination Platform
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-2 text-sm sm:text-base text-muted-foreground/80"
      >
        <div className="text-xs uppercase tracking-[0.4em] text-blood">Graduation Project 2026</div>
        <div className="mt-2">Faculty of Computers and Information</div>
        <div className="font-semibold text-foreground">Assiut University</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute bottom-10 h-px w-2/3 origin-center bg-gradient-to-r from-transparent via-blood to-transparent"
      />
    </div>
  );
}

/* ============ SLIDE 2 — TEAM ============ */
const team = [
  {
    name: "Youssef Esmail Youssef",
    role: "Team Leader & Flutter Developer",
    initials: "YE",
    color: "from-red-700 to-rose-900",
  },
  {
    name: "Ahmed Khaled Abdullah",
    role: "Flutter Developer",
    initials: "AK",
    color: "from-rose-700 to-red-900",
  },
  {
    name: "Khaled Mohamed Ali",
    role: "Backend Developer",
    initials: "KM",
    color: "from-red-600 to-pink-900",
  },
  {
    name: "Khaled Hamada Mohamed",
    role: "Backend Developer",
    initials: "KH",
    color: "from-rose-600 to-red-800",
  },
  {
    name: "Ahmed Abd El_Nasser Al Metwally ",
    role: "AI & NLP Engineer",
    initials: "AN",
    color: "from-red-800 to-rose-950",
  },
  {
    name: "Youssef Samir Shawkey",
    role: "AI & NLP Engineer",
    initials: "YS",
    color: "from-pink-700 to-red-900",
  },
];
export function Slide02() {
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Project Team" title="People Behind Blood Bridge" />
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3"
      >
        {team.map((m) => (
          <motion.div
            key={m.name}
            variants={fadeUp}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-all hover:border-blood/40"
          >
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${m.color} font-display text-xl font-bold shadow-lg`}
            >
              {m.initials}
            </div>
            <div>
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="mt-1 inline-block rounded-full bg-blood/15 px-2 py-0.5 text-xs font-medium text-blood">
                {m.role}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 flex flex-col gap-4 rounded-2xl border border-blood/30 bg-gradient-to-r from-blood/15 to-crimson/15 p-5 md:flex-row md:items-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blood to-crimson text-xl font-bold shadow-lg">
          MA
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-blood">Supervisor</div>
          <div className="text-lg font-semibold">Dr. Majid Askar</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 3 — ABSTRACT ============ */
export function Slide03() {
  const stats = [
    { n: 27, suffix: "", label: "Governorates" },
    { n: 4, suffix: "", label: "User Roles" },
    { n: 8, suffix: "", label: "Blood Types" },
    { n: 100, suffix: "%", label: "AI Powered" },
  ];
  const tech = ["Flutter", "ASP.NET Core", "AI / NLP", "GPS / Maps", "SQL Server", "SignalR"];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Abstract" title="Project Overview" />
      <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 lg:col-span-3 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            <span className="text-foreground">Blood Bridge</span> is a graduation-project platform
            that combines mobile access, AI-based matching, and real-time coordination to reduce the
            delay between an urgent blood request and a life-saving response.
          </p>
          <p>
            The system connects donors, recipients, hospitals, and administrators in one secure
            ecosystem tailored to the Egyptian healthcare context, replacing fragmented calls with
            verified, measurable, and accountable action.
          </p>
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="mt-4 flex flex-wrap gap-2"
          >
            {tech.map((t) => (
              <motion.span
                key={t}
                variants={fadeUp}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <div className="col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blood/10 to-transparent p-6 text-center"
            >
              <div className="font-display text-5xl font-bold text-blood text-glow">
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ SLIDE 4 — PROBLEM 1 ============ */
export function Slide04() {
  const points = [
    "Manual phone calls to family and friends",
    "Hours wasted searching across social media",
    "No verified donor availability in real time",
    "Hospital staff overwhelmed during emergencies",
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="The Problem · 01" title="Delayed Emergency Response" />
      <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center rounded-3xl border border-blood/40 bg-gradient-to-br from-blood/20 to-transparent p-8 text-center"
        >
          <Timer className="mb-4 h-12 w-12 text-blood animate-pulse" />
          <div className="font-display text-7xl font-black text-blood text-glow">
            <CountUp to={45} />–<CountUp to={90} />
          </div>
          <div className="mt-2 text-xl font-semibold">MINUTES</div>
          <div className="mt-3 text-sm text-muted-foreground">
            Average delay finding a compatible donor today
          </div>
        </motion.div>
        <motion.ul
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="col-span-3 flex flex-col justify-center gap-4"
        >
          {points.map((p) => (
            <motion.li
              key={p}
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-blood" />
              <span className="text-lg">{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ============ SLIDE 5 — PROBLEM 2 ============ */
export function Slide05() {
  const platforms = ["Facebook", "WhatsApp", "Twitter", "SMS"];
  const points = [
    "Requests scattered across disconnected channels",
    "No way to verify identity or blood type",
    "Posts expire and get lost in feeds",
    "Same request shared by dozens — no coordination",
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="The Problem · 02" title="Fragmented Communication" />
      <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-2 relative flex items-center justify-center">
          {platforms.map((p, i) => {
            const pos = [
              { top: "10%", left: "5%" },
              { top: "20%", right: "10%" },
              { bottom: "30%", left: "15%" },
              { bottom: "10%", right: "5%" },
            ][i];
            return (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                className="absolute"
                style={pos}
              >
                <div className="relative rounded-2xl border border-white/15 bg-card px-5 py-3 text-sm font-medium">
                  {p}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 180 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <XCircle className="h-12 w-12 text-blood" strokeWidth={2.5} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.ul
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="col-span-3 flex flex-col justify-center gap-4"
        >
          {points.map((p) => (
            <motion.li
              key={p}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <Network className="mt-0.5 h-5 w-5 shrink-0 text-blood" />
              <span className="text-lg">{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ============ SLIDE 6 — PROBLEM 3 INVENTORY ============ */
export function Slide06() {
  const types = [
    { type: "A+", level: 65, low: false },
    { type: "A-", level: 22, low: true },
    { type: "B+", level: 48, low: false },
    { type: "B-", level: 15, low: true },
    { type: "O+", level: 72, low: false },
    { type: "O-", level: 11, low: true },
    { type: "AB+", level: 38, low: false },
    { type: "AB-", level: 8, low: true },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="The Problem · 03" title="No Inventory Visibility" />
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {types.map((t) => (
          <motion.div
            key={t.type}
            variants={fadeUp}
            className={`relative rounded-2xl border p-5 ${
              t.low ? "border-blood/50 bg-blood/10" : "border-white/10 bg-card/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="font-display text-3xl font-bold">{t.type}</div>
              {t.low ? (
                <span className="rounded-full bg-blood px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider animate-blink">
                  Low
                </span>
              ) : (
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  OK
                </span>
              )}
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${t.level}%` }}
                transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
                className={`h-full ${t.low ? "bg-blood" : "bg-emerald-500"}`}
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{t.level}% stock</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 7 — SOLUTION ============ */
export function Slide07() {
  const feats = [
    {
      icon: Target,
      title: "Smart Matching",
      desc: "AI ranks compatible donors by blood type, proximity, and availability",
    },
    {
      icon: MapPin,
      title: "Geo-Enabled Requests",
      desc: "Live location-based routing across governorates and districts",
    },
    {
      icon: Bell,
      title: "Priority Alerts",
      desc: "Urgent notifications reach donors and hospitals in real time",
    },
    {
      icon: Hospital,
      title: "Hospital Coordination",
      desc: "Inventory visibility and request management in one workspace",
    },
    {
      icon: ShieldCheck,
      title: "Verified Eligibility",
      desc: "Identity checks and donor constraints are handled before matching",
    },
    {
      icon: Trophy,
      title: "Impact Tracking",
      desc: "Badges and progress encourage repeated, reliable contribution",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="The Solution" title="One Platform. Six Core Capabilities." />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {feats.map((f) => (
          <motion.div
            key={f.title}
            variants={{
              hidden: { opacity: 0, rotateY: -90 },
              show: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
            }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-card to-card/40 p-6 transition-all hover:border-blood/50 hover:shadow-[0_0_30px_oklch(0.52_0.24_27/0.3)]"
          >
            <f.icon className="mb-3 h-9 w-9 text-blood" />
            <div className="font-display text-lg font-semibold">{f.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{f.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-6 text-center font-display text-2xl italic text-blood text-glow"
      >
        "One Platform. Every Drop Counts."
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 8 — STAKEHOLDERS ============ */
export function Slide08() {
  const roles = [
    {
      icon: Heart,
      title: "Recipients",
      color: "from-rose-700 to-red-900",
      items: ["Post urgent requests", "Track responses live", "Verified hospital intake"],
    },
    {
      icon: Droplet,
      title: "Donors",
      color: "from-red-700 to-crimson",
      items: ["Get nearby alerts", "Manage availability", "Earn badges & impact"],
    },
    {
      icon: Hospital,
      title: "Hospitals",
      color: "from-blue-800 to-indigo-900",
      items: ["Manage inventory", "Coordinate requests", "Verify donations"],
    },
    {
      icon: Shield,
      title: "Administrators",
      color: "from-purple-800 to-violet-900",
      items: ["Oversee platform", "Approve hospitals", "Analytics dashboard"],
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Stakeholders" title="Four Roles. One Network." />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {roles.map((r) => (
          <motion.div
            key={r.title}
            variants={fadeUp}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60"
          >
            <div className={`flex items-center gap-3 bg-gradient-to-br ${r.color} p-5`}>
              <r.icon className="h-7 w-7" />
              <div className="font-display text-xl font-semibold">{r.title}</div>
            </div>
            <ul className="flex flex-1 flex-col gap-3 p-5 text-sm">
              {r.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 9 — ARCHITECTURE ============ */
export function Slide09() {
  const tiers = [
    { icon: Smartphone, title: "Mobile UI", sub: "Flutter · Dart", color: "border-blue-500/40" },
    {
      icon: Server,
      title: "REST API & AI Engine",
      sub: ".NET Core · SignalR · NLP",
      color: "border-blood/50",
    },
    {
      icon: Database,
      title: "Data Layer",
      sub: "SQL Server · Encrypted Storage",
      color: "border-purple-500/40",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Architecture" title="Three-Tier System Design" />
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        {tiers.map((t, i) => (
          <div key={t.title} className="flex w-full max-w-3xl flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.4, duration: 0.6 }}
              className={`flex w-full items-center gap-5 rounded-2xl border-2 ${t.color} bg-card/70 p-6`}
            >
              <t.icon className="h-12 w-12 text-blood" />
              <div>
                <div className="font-display text-2xl font-semibold">{t.title}</div>
                <div className="text-sm text-muted-foreground">{t.sub}</div>
              </div>
            </motion.div>
            {i < tiers.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.4 + 0.4, duration: 0.4 }}
                className="my-1 h-8 w-px origin-top bg-gradient-to-b from-blood to-transparent"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ TECH CARD GRID HELPER ============ */
function TechGrid({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: { icon: typeof Smartphone; title: string; desc: string }[];
}) {
  return (
    <div className="slide-shell">
      <SlideTitle kicker={kicker} title={title} />
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {items.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-card/60 p-6 transition-all hover:border-blood/40"
          >
            <f.icon className="mb-3 h-8 w-8 text-blood" />
            <div className="font-display text-lg font-semibold">{f.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 10 — FLUTTER ============ */
export function Slide10() {
  return (
    <TechGrid
      kicker="Tech Stack · Frontend"
      title="Flutter Mobile Layer"
      items={[
        { icon: Smartphone, title: "Cross-Platform", desc: "Single codebase, iOS & Android" },
        { icon: Languages, title: "Localized UI", desc: "Arabic & English with full RTL" },
        { icon: Moon, title: "Dark Mode", desc: "System-aware theming" },
        { icon: MapPin, title: "Real-Time Maps", desc: "Google Maps & route guidance" },
        { icon: Bell, title: "Push Notifications", desc: "Firebase Cloud Messaging" },
        { icon: Code2, title: "Dart Language", desc: "Type-safe, reactive UI" },
      ]}
    />
  );
}

/* ============ SLIDE 11 — BACKEND ============ */
export function Slide11() {
  return (
    <TechGrid
      kicker="Tech Stack · Backend"
      title=".NET Core Service Layer"
      items={[
        { icon: Server, title: "ASP.NET Core", desc: "High-performance Web API" },
        { icon: Lock, title: "JWT Auth", desc: "Stateless secure tokens" },
        { icon: Database, title: "SQL Server", desc: "Relational data integrity" },
        { icon: Radio, title: "SignalR", desc: "Real-time push & live updates" },
        { icon: Shield, title: "AES-256", desc: "Field-level encryption at rest" },
        { icon: Network, title: "Clean Architecture", desc: "Modular & testable layers" },
      ]}
    />
  );
}

/* ============ SLIDE 12 - AI OVERVIEW ============ */
export function Slide12() {
  const modules = [
    {
      icon: ShieldAlert,
      title: "Emergency Classification",
      desc: "NLP classifies blood request urgency into HIGH / MEDIUM / LOW priority.",
    },
    {
      icon: UserCheck,
      title: "Intelligent Donor Ranking",
      desc: "Weighted scoring ranks eligible donors for fastest safe response.",
    },
    {
      icon: Clock,
      title: "Best Donation Time",
      desc: "ML predicts the optimal hour to contact each donor for max acceptance.",
    },
    {
      icon: TrendingUp,
      title: "Blood Demand Forecasting",
      desc: "Random Forest forecasts future inventory risk before shortages occur.",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Layer" title="Artificial Intelligence in Blood Bridge" />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {modules.map((m) => (
          <motion.div
            key={m.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-card/60 p-6 transition-all hover:border-blood/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blood/20 text-blood">
              <m.icon className="h-7 w-7" />
            </div>
            <div className="font-display text-xl font-semibold">{m.title}</div>
            <div className="mt-3 text-base leading-relaxed text-muted-foreground">{m.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 rounded-2xl border border-blood/30 bg-blood/10 p-5 text-xl leading-relaxed text-muted-foreground"
      >
        These AI modules help the system make faster and smarter decisions, reduce response time,
        and improve blood inventory management.
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 13 - EMERGENCY CLASSIFICATION ============ */
export function Slide13() {
  const categories = [
    { label: "Critical Emergency", priority: "HIGH", color: "border-blood bg-blood/20" },
    { label: "Moderate Urgency", priority: "MEDIUM", color: "border-white/20 bg-card/60" },
    { label: "Routine Request", priority: "LOW", color: "border-white/10 bg-card/40" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Module - 01" title="Emergency Classification" />
      <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center rounded-3xl border border-white/10 bg-card/60 p-7"
        >
          <div className="mb-5 flex items-center gap-3 text-blood">
            <Brain className="h-8 w-8" />
            <div>
              <div className="font-display text-xl font-semibold">Model: HuggingFace BART Large MNLI</div>
              <div className="mt-1 text-base text-muted-foreground">Method: Zero-Shot Classification</div>
            </div>
          </div>
          <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="space-y-3">
            {categories.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className={`flex items-center justify-between rounded-2xl border p-4 ${c.color}`}
              >
                <span className="text-xl font-semibold">{c.label}</span>
                <span className="rounded-full bg-black/20 px-3 py-1 font-mono text-xs font-bold text-blood">
                  {c.priority}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col justify-center rounded-3xl border border-blood/35 bg-gradient-to-br from-blood/20 to-transparent p-7"
        >
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-blood">
            <FileText className="h-4 w-4" /> Example Input
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 font-mono text-base leading-relaxed text-muted-foreground">
            "O- needed now for trauma patient at Assiut University Hospital. Critical bleeding."
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-center">
            {[
              ["Label", "Critical"],
              ["Priority", "HIGH"],
              ["Confidence", "94%"],
              ["Fallback", "Manual Review"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-card/70 p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                <div className="mt-1 font-display text-xl font-bold text-blood">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============ SLIDE 14 - INTELLIGENT DONOR MATCHING ============ */
export function Slide14() {
  const filters = [
    {
      icon: Droplet,
      step: "Step 1",
      title: "Blood Type Compatibility",
      desc: "Filter donors by ABO/Rh compatibility rules.",
    },
    {
      icon: Calendar,
      step: "Step 2",
      title: "Donation Interval Check",
      desc: "Ensure at least 90 days have passed since the last donation.",
    },
    {
      icon: Target,
      step: "Step 3",
      title: "Donor Score Calculation",
      desc: "Score = Distance (40%) + Activity (30%) + Response Rate (30%)",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Module - 02" title="Intelligent Donor Matching" />
      <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="col-span-1 grid gap-4 lg:col-span-3"
        >
          {filters.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-card/60 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blood/20 text-blood">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-blood">{f.step}</div>
                <div className="mt-1 font-display text-xl font-semibold">{f.title}</div>
                <div className="mt-2 text-base leading-relaxed text-muted-foreground">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="col-span-1 flex flex-col justify-center rounded-3xl border border-blood/40 bg-blood/10 p-7 lg:col-span-2"
        >
          <UserCheck className="mb-4 h-10 w-10 text-blood" />
          <div className="font-display text-2xl font-bold">Ranked donor shortlist</div>
          <div className="mt-5 space-y-3">
            {[
              ["#1", "Highest score - contacted first"],
              ["#2", "Second priority"],
              ["#3", "Reserve candidate"],
            ].map(([rank, desc]) => (
              <div key={rank} className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 p-4">
                <div className="font-display text-2xl font-bold text-blood">{rank}</div>
                <div className="text-xl text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============ SLIDE 15 - MACHINE LEARNING MODELS ============ */
export function Slide15() {
  const models = [
    {
      icon: Clock,
      title: "Best Donation Time Model",
      algo: "Random Forest Regressor",
      features: ["Day of week", "Time of day", "Blood type"],
      output: "Optimal hour to contact each donor",
      benefit: "Higher donor acceptance rate",
    },
    {
      icon: TrendingUp,
      title: "Blood Demand Forecasting Model",
      algo: "Random Forest Regressor",
      features: ["Historical demand", "Current stock", "Blood type", "Date features"],
      output: "Predicted demand vs. available stock",
      benefit: "Flags HIGH RISK before shortage",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Module - 03" title="Machine Learning Models" />
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {models.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-card/60 p-7">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blood/20 text-blood">
                <m.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">{m.title}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-blood">{m.algo}</div>
              </div>
            </div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Input Features</div>
            <div className="flex flex-wrap gap-2">
              {m.features.map((f) => (
                <span key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-base">
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-xl text-muted-foreground">
              Output: <span className="text-foreground">{m.output}</span>
            </div>
            <div className="mt-4 rounded-xl border border-blood/30 bg-blood/10 p-4 text-xl font-semibold text-blood">
              ✦ {m.benefit}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 16 - AI WORKFLOW & BENEFITS ============ */
export function Slide16() {
  const steps = [
    { icon: FileText, label: "Blood request received" },
    { icon: Brain, label: "NLP classifies urgency" },
    { icon: Filter, label: "Compatible donors filtered" },
    { icon: Target, label: "Donors ranked by score" },
    { icon: Bell, label: "Best time to notify selected" },
    { icon: TrendingUp, label: "Future demand predicted" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Module - 04" title="AI Workflow & Benefits" />
      <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="col-span-1 grid gap-3 lg:col-span-3"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blood/20 text-blood">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-blood">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-xl font-semibold">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="col-span-1 flex flex-col justify-center rounded-3xl border border-blood/35 bg-gradient-to-br from-blood/15 to-transparent p-7 lg:col-span-2"
        >
          {[
            ["⚡", "Faster response time"],
            ["🎯", "Better donor selection"],
            ["📦", "Smarter inventory management"],
          ].map(([icon, text]) => (
            <div key={text} className="mb-3 flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 p-4">
              <span className="text-2xl">{icon}</span>
              <span className="text-xl font-semibold">{text}</span>
            </div>
          ))}
          <div className="mt-4 rounded-xl border border-blood/30 bg-black/20 p-5 text-xl leading-relaxed text-muted-foreground">
            "AI is the core of Blood Bridge - instead of storing donor info, our system analyzes
            data, predicts future needs, and helps healthcare providers make faster decisions."
          </div>
        </motion.div>
      </div>
    </div>
  );
}
/* ============ SLIDE 17 — GEOLOCATION ============ */
export function Slide17() {
  const stats = [
    { n: 27, label: "Governorates", suffix: "" },
    { n: 2, label: "Match Time", suffix: "s", prefix: "<" },
    { n: 5, label: "Default Radius", suffix: " km" },
    { n: 100, label: "GPS Accurate", suffix: "%" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Geolocation" title="Nationwide Coverage" />
      <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 300 300" className="h-full w-full max-w-md">
            {[80, 120, 160].map((r, i) => (
              <motion.circle
                key={r}
                cx="150"
                cy="150"
                r={r}
                fill="none"
                stroke="oklch(0.52 0.24 27)"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.7, 0.2], scale: [0.4, 1, 1.1] }}
                transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
              />
            ))}
            {/* simplified Egypt-ish shape */}
            <path
              d="M120 60 L200 60 L220 100 L240 160 L210 230 L160 250 L130 240 L100 200 L90 140 L110 90 Z"
              fill="oklch(0.52 0.24 27 / 0.12)"
              stroke="oklch(0.6 0.25 27)"
              strokeWidth="2"
            />
            <motion.circle
              cx="150"
              cy="150"
              r="6"
              fill="oklch(0.7 0.25 27)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-card/60 p-6 text-center"
            >
              <div className="font-display text-5xl font-bold text-blood text-glow">
                <CountUp to={s.n} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ SLIDE 18 — AI ============ */
export function Slide18() {
  const criteria = [
    { label: "Blood Type Compatibility", weight: 40 },
    { label: "Distance", weight: 30 },
    { label: "Donor Eligibility", weight: 20 },
    { label: "Response Rate", weight: 10 },
  ];
  const why = [
    { n: 87, suffix: "%", label: "Match accuracy" },
    { n: 3, suffix: "x", label: "Faster than manual" },
    { n: 24, suffix: "/7", label: "Always learning" },
    { n: 0, suffix: "", label: "Human bias" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="AI Engine" title="Weighted Matching Algorithm" />
      <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5">
          {criteria.map((c, i) => (
            <div key={c.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{c.label}</span>
                <span className="font-mono text-blood">{c.weight}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.weight}%` }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-crimson to-blood shadow-[0_0_15px_oklch(0.6_0.25_27/0.6)]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="mb-2 flex items-center gap-2 text-blood">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">Why AI Matters</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {why.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-card/60 p-5"
              >
                <div className="font-display text-4xl font-bold text-blood text-glow">
                  <CountUp to={w.n} suffix={w.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{w.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ PHONE MOCKUP HELPER ============ */
function PhoneMockup({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="mx-auto w-full max-w-[200px]"
    >
      <div className="relative aspect-[9/19] rounded-[2rem] border-4 border-white/15 bg-gradient-to-b from-navy to-navy-deep p-3 shadow-[0_20px_60px_oklch(0_0_0/0.5)]">
        <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="mt-4 flex h-full flex-col gap-2 overflow-hidden text-[10px]">
          {children}
        </div>
      </div>
      <div className="mt-3 text-center text-sm font-medium text-muted-foreground">{title}</div>
    </motion.div>
  );
}

/* ============ SLIDE 19 — AUTH ============ */
export function Slide19() {
  return (
    <div className="slide-shell">
      <SlideTitle kicker="App Screens" title="Authentication Flow" />
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 items-center">
        <div className="col-span-1 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <PhoneMockup title="Sign In" delay={0.1}>
            <div className="mt-4 text-center font-display text-sm font-bold text-blood">
              BLOOD BRIDGE
            </div>
            <div className="mt-4 rounded-md bg-white/10 p-1.5 text-center text-[8px]">
              email@example.com
            </div>
            <div className="rounded-md bg-white/10 p-1.5 text-center text-[8px]">••••••••</div>
            <div className="rounded-md bg-blood p-1.5 text-center text-[8px] font-bold">
              CONTINUE
            </div>
          </PhoneMockup>
          <PhoneMockup title="Role Selection" delay={0.35}>
            <div className="mt-3 text-center text-[9px] font-semibold">Choose your role</div>
            {["Donor", "Recipient", "Hospital"].map((r) => (
              <div
                key={r}
                className="rounded-md border border-blood/40 bg-blood/10 p-2 text-center text-[9px]"
              >
                {r}
              </div>
            ))}
          </PhoneMockup>
          <PhoneMockup title="Permissions" delay={0.6}>
            <div className="mt-3 text-center text-[9px] font-semibold">Allow access</div>
            <div className="flex items-center gap-1 rounded-md bg-white/5 p-1.5 text-[8px]">
              <MapPin className="h-3 w-3 text-blood" /> Location
            </div>
            <div className="flex items-center gap-1 rounded-md bg-white/5 p-1.5 text-[8px]">
              <Bell className="h-3 w-3 text-blood" /> Notifications
            </div>
            <div className="rounded-md bg-blood p-1.5 text-center text-[8px] font-bold">ALLOW</div>
          </PhoneMockup>
        </div>
        <motion.ul
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="col-span-2 flex flex-col gap-3 text-sm"
        >
          {[
            "Email + OTP verification",
            "Role-based onboarding",
            "Granular permission consent",
            "JWT session issued on success",
          ].map((p) => (
            <motion.li key={p} variants={fadeUp} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
              <span>{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ============ SLIDE 20 — DONOR DASHBOARD ============ */
export function Slide20() {
  return (
    <div className="slide-shell">
      <SlideTitle kicker="App Screens" title="Donor Dashboard" />
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 items-center">
        <div className="col-span-1 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <PhoneMockup title="Home" delay={0.1}>
            <div className="mt-3 text-[9px] font-semibold">Hi, Ahmed 👋</div>
            <div className="rounded-md bg-blood/20 p-2 text-[8px]">
              <div className="font-bold text-blood">URGENT · O−</div>
              <div className="opacity-70">Assiut · 3.2 km</div>
            </div>
            <div className="rounded-md bg-white/5 p-2 text-[8px]">A+ · 5 km</div>
            <div className="rounded-md bg-white/5 p-2 text-[8px]">B+ · 7 km</div>
          </PhoneMockup>
          <PhoneMockup title="Request Detail" delay={0.35}>
            <div className="mt-3 rounded-md bg-blood/20 p-2 text-center text-[10px] font-bold text-blood">
              O−
            </div>
            <div className="text-[8px] opacity-70">Assiut University Hospital</div>
            <div className="text-[8px] opacity-70">3.2 km · 6 min drive</div>
            <div className="rounded-md bg-blood p-1.5 text-center text-[8px] font-bold">
              I CAN DONATE
            </div>
          </PhoneMockup>
          <PhoneMockup title="My Impact" delay={0.6}>
            <div className="mt-3 text-center text-[9px]">Lives Touched</div>
            <div className="text-center font-display text-2xl font-bold text-blood">12</div>
            <div className="flex justify-center gap-1">
              <Trophy className="h-4 w-4 text-blood" />
              <Award className="h-4 w-4 text-blood" />
              <Sparkles className="h-4 w-4 text-blood" />
            </div>
          </PhoneMockup>
        </div>
        <motion.ul
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="col-span-2 flex flex-col gap-3 text-sm"
        >
          {[
            "Nearby requests sorted by urgency",
            "One-tap accept with route guidance",
            "Eligibility countdown timer",
            "Lifetime impact & badges",
          ].map((p) => (
            <motion.li key={p} variants={fadeUp} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blood" />
              <span>{p}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ============ SLIDE 21 — GAMIFICATION ============ */
export function Slide21() {
  const badges = [
    { icon: Droplet, name: "First Drop" },
    { icon: Zap, name: "Quick Responder" },
    { icon: Heart, name: "Life Saver" },
    { icon: MapPin, name: "Local Hero" },
    { icon: TrendingUp, name: "Consistent Donor" },
    { icon: Users, name: "Community Builder" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Engagement" title="Gamification & Rewards" />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {badges.map((b) => (
          <motion.div
            key={b.name}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              },
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-blood shadow-[0_0_25px_oklch(0.6_0.25_27/0.5)]">
              <b.icon className="h-9 w-9" />
            </div>
            <div className="text-center text-xs font-medium">{b.name}</div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="rounded-2xl border border-blood/30 bg-blood/10 p-6 text-center"
        >
          <div className="font-display text-5xl font-bold text-blood text-glow">
            ↑<CountUp to={67} suffix="%" />
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Donor retention boost</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="rounded-2xl border border-blood/30 bg-blood/10 p-6 text-center"
        >
          <div className="font-display text-5xl font-bold text-blood text-glow">
            ↑<CountUp to={43} suffix="%" />
          </div>
          <div className="mt-2 text-sm text-muted-foreground">Faster response time</div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============ SLIDE 22 — NOTIFICATIONS ============ */
export function Slide22() {
  const rows = [
    {
      label: "CRITICAL",
      time: "< 30 s",
      desc: "Rare blood type, life-threatening emergency",
      color: "bg-blood",
      blink: true,
    },
    {
      label: "URGENT",
      time: "< 2 min",
      desc: "Compatible donor within 5 km radius",
      color: "bg-orange-500",
    },
    {
      label: "ACCEPTED",
      time: "live",
      desc: "Donor confirmed and on the way",
      color: "bg-emerald-500",
    },
    {
      label: "BADGE",
      time: "instant",
      desc: "You unlocked a new achievement",
      color: "bg-indigo-500",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Communication" title="Notification System" />
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col justify-center gap-4"
      >
        {rows.map((r) => (
          <motion.div
            key={r.label}
            variants={{
              hidden: { opacity: 0, x: 80 },
              show: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 180, damping: 18 },
              },
            }}
            className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 md:flex-row md:items-center"
          >
            <div className="flex items-center gap-2">
              {r.blink && (
                <span className="h-3 w-3 rounded-full bg-blood animate-blink" aria-hidden />
              )}
              <span
                className={`rounded-full ${r.color} px-3 py-1 text-xs font-bold uppercase tracking-wider`}
              >
                {r.label}
              </span>
            </div>
            <div className="font-mono text-sm text-blood animate-pulse">{r.time}</div>
            <div className="flex-1 text-base">{r.desc}</div>
            <Bell className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 23 — SECURITY ============ */
export function Slide23() {
  const items = [
    { icon: Lock, title: "JWT Tokens", desc: "Stateless authenticated sessions" },
    { icon: Shield, title: "AES-256", desc: "Encryption for PII at rest" },
    { icon: Cloud, title: "HTTPS / TLS", desc: "All traffic encrypted in transit" },
    { icon: UserCheck, title: "RBAC", desc: "Role-based access control" },
    { icon: Database, title: "Data Minimization", desc: "Only what's medically needed" },
    { icon: ShieldCheck, title: "Input Validation", desc: "Server-side sanitization" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Security" title="Defense in Depth" />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-3"
      >
        {items.map((s) => (
          <motion.div
            key={s.title}
            variants={{
              hidden: { opacity: 0, rotateX: -60 },
              show: { opacity: 1, rotateX: 0, transition: { duration: 0.5 } },
            }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 2, delay: 0.5, repeat: 1 }}
              className="pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-blood/30 to-transparent"
            />
            <s.icon className="mb-3 h-8 w-8 text-blood" />
            <div className="font-display text-lg font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 24 — DB SCHEMA ============ */
export function Slide24() {
  const entities = [
    { id: "users", title: "Users", x: 50, y: 50 },
    { id: "requests", title: "BloodRequests", x: 350, y: 50 },
    { id: "donations", title: "Donations", x: 650, y: 50 },
    { id: "hospitals", title: "Hospitals", x: 50, y: 280 },
    { id: "inventory", title: "Inventory", x: 350, y: 280 },
    { id: "notifications", title: "Notifications", x: 650, y: 280 },
    { id: "badges", title: "Badges", x: 350, y: 510 },
  ];
  const lines = [
    ["users", "requests"],
    ["users", "donations"],
    ["hospitals", "inventory"],
    ["donations", "notifications"],
    ["users", "badges"],
    ["requests", "donations"],
  ];
  const get = (id: string) => entities.find((e) => e.id === id)!;
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Data Model" title="Database Schema" />
      <div className="relative flex-1">
        <svg viewBox="0 0 850 600" className="absolute inset-0 h-full w-full">
          {lines.map(([a, b], i) => {
            const A = get(a);
            const B = get(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={A.x + 100}
                y1={A.y + 40}
                x2={B.x + 100}
                y2={B.y + 40}
                stroke="oklch(0.52 0.24 27)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
              />
            );
          })}
          {entities.map((e, i) => (
            <motion.g
              key={e.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <rect
                x={e.x}
                y={e.y}
                width="200"
                height="80"
                rx="14"
                fill="oklch(0.18 0.04 270)"
                stroke="oklch(0.52 0.24 27 / 0.6)"
                strokeWidth="2"
              />
              <text
                x={e.x + 100}
                y={e.y + 48}
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="600"
                fontFamily="Space Grotesk"
              >
                {e.title}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ============ SLIDE 25 — TESTING ============ */
export function Slide25() {
  const stats = [
    { n: 95, suffix: "%", label: "Code Coverage", ring: true },
    { n: 47, suffix: "", label: "API Endpoints" },
    { n: 50, suffix: "", label: "Beta Testers" },
    { n: 200, suffix: "ms", label: "Response Time", prefix: "<" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Quality" title="Testing & QA" />
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card/60 p-6 text-center"
          >
            {s.ring ? (
              <div className="relative h-32 w-32">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="oklch(1 0 0 / 0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="oklch(0.6 0.25 27)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 42}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - s.n / 100) }}
                    transition={{ duration: 1.8, delay: 0.4 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-blood">
                  <CountUp to={s.n} suffix="%" />
                </div>
              </div>
            ) : (
              <div className="font-display text-6xl font-bold text-blood text-glow">
                <CountUp to={s.n} suffix={s.suffix} prefix={s.prefix} />
              </div>
            )}
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============ SLIDE 26 — CHALLENGES ============ */
export function Slide26() {
  const rows = [
    ["Sparse data for AI training", "Synthetic dataset + transfer learning"],
    ["Real-time matching at scale", "SignalR hubs + Redis pub/sub layer"],
    ["Verifying donor identity", "National ID hash + hospital intake check"],
    ["Multi-language support", "Localized Flutter + RTL-first design"],
    ["Trust & user adoption", "Hospital partnerships + transparency dashboard"],
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Reality Check" title="Challenges & Solutions" />
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 gap-y-2 bg-blood/15 px-6 py-3 text-xs font-bold uppercase tracking-widest md:grid-cols-2">
          <div>Challenge</div>
          <div>Solution</div>
        </div>
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="divide-y divide-white/5"
        >
          {rows.map(([c, s]) => (
            <motion.div
              key={c}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 px-6 py-4 transition-colors hover:bg-white/5 md:grid-cols-2"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-blood" />
                <span>{c}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>{s}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ============ SLIDE 27 — PERFORMANCE ============ */
export function Slide27() {
  const stats = [
    { n: 2, suffix: "s", prefix: "<", label: "Match Time" },
    { n: 99.7, suffix: "%", decimals: 1, label: "Uptime" },
    { n: 200, suffix: "ms", prefix: "<", label: "API Latency" },
    { n: 500, suffix: "+", label: "Concurrent Users" },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Benchmarks" title="Performance Metrics" />
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-blood/30 bg-gradient-to-br from-blood/10 to-transparent p-8"
          >
            <div className="font-display text-8xl font-black text-blood text-glow">
              <CountUp to={s.n} suffix={s.suffix} prefix={s.prefix} decimals={s.decimals || 0} />
            </div>
            <div className="mt-3 text-lg text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============ SLIDE 28 — COMPARISON ============ */
export function Slide28() {
  const rows: [string, string, string, string][] = [
    ["Verified donors", "✅", "❌", "⚠️"],
    ["Real-time matching", "✅", "❌", "❌"],
    ["AI-ranked donors", "✅", "❌", "❌"],
    ["Hospital inventory sync", "✅", "❌", "⚠️"],
    ["Privacy & encryption", "✅", "❌", "⚠️"],
    ["Gamified retention", "✅", "❌", "❌"],
  ];
  const cell = (v: string) => {
    if (v === "✅")
      return (
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-emerald-400"
        >
          ✅
        </motion.span>
      );
    if (v === "❌")
      return (
        <motion.span
          initial={{ x: 0 }}
          whileInView={{ x: [-3, 3, -3, 3, 0] }}
          transition={{ duration: 0.4 }}
          className="text-blood"
        >
          ❌
        </motion.span>
      );
    return (
      <motion.span
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-yellow-400"
      >
        ⚠️
      </motion.span>
    );
  };
  return (
    <div className="slide-shell">
      <SlideTitle kicker="Competition" title="How We Compare" />
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 gap-4 bg-blood/15 px-6 py-3 text-sm font-bold uppercase tracking-widest md:grid-cols-4">
          <div>Feature</div>
          <div className="text-center text-blood">Blood Bridge</div>
          <div className="text-center">Social Media</div>
          <div className="text-center">Basic Apps</div>
        </div>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="divide-y divide-white/5"
        >
          {rows.map((r) => (
            <motion.div
              key={r[0]}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 px-6 py-3 md:grid-cols-4"
            >
              <div>{r[0]}</div>
              <div className="text-center text-xl">{cell(r[1])}</div>
              <div className="text-center text-xl">{cell(r[2])}</div>
              <div className="text-center text-xl">{cell(r[3])}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ============ SLIDE 29 — ROADMAP ============ */
export function Slide29() {
  const phases = [
    {
      tag: "Phase 2",
      title: "Plasma & Platelets",
      desc: "Specialized donation types and cold-chain coordination",
    },
    {
      tag: "Phase 3",
      title: "Regional Expansion",
      desc: "MENA rollout with localized partnerships",
    },
    {
      tag: "Phase 4",
      title: "Predictive AI",
      desc: "Forecast shortages before they happen",
    },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="What's Next" title="Future Roadmap" />
      <div className="relative flex-1">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-blood to-transparent"
        />
        <div className="relative grid h-full grid-cols-1 gap-6 lg:grid-cols-3 items-start lg:items-center">
          {phases.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.3 }}
              className="rounded-2xl border border-white/10 bg-card/70 p-6"
            >
              <div className="mb-2 inline-block rounded-full bg-blood px-3 py-1 text-xs font-bold uppercase tracking-widest">
                {p.tag}
              </div>
              <div className="font-display text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-6 text-center font-display text-xl italic text-blood/90"
      >
        "A future where no patient waits — and no donor is forgotten."
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 30 — IMPACT ============ */
export function Slide30() {
  const stats = [
    { n: 70, suffix: "%", label: "Faster response" },
    { n: 3, suffix: "x", label: "More donors reached" },
    { n: 90, suffix: "%", label: "User trust score" },
    { n: 50, suffix: "K+", label: "Lives reachable yr 1" },
    { n: 27, suffix: "", label: "Governorates served" },
    { n: 0, suffix: "", label: "Data sold to 3rd parties", emphasis: true },
  ];
  return (
    <div className="slide-shell">
      <SlideTitle kicker="The Why" title="Expected Impact" />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-3"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className={`rounded-2xl border p-7 text-center ${
              s.emphasis
                ? "border-blood bg-gradient-to-br from-blood/30 to-crimson/20"
                : "border-white/10 bg-card/60"
            }`}
          >
            <div className="font-display text-6xl font-black text-blood text-glow">
              <CountUp to={s.n} suffix={s.suffix} />
            </div>
            <div className="mx-auto mt-3 h-px w-12 bg-blood" />
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 31 — ACKNOWLEDGEMENTS ============ */
export function Slide31() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center radial-vignette">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-xs uppercase tracking-[0.4em] text-blood"
      >
        With Gratitude
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 mt-6 font-display text-6xl font-bold text-glow"
      >
        Dr. Majid Askar
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-4 text-lg text-muted-foreground"
      >
        Project Supervisor · For guidance, patience, and belief in this vision.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 mt-12 max-w-2xl text-center text-base text-muted-foreground"
      >
        To the Faculty of Computers and Information at{" "}
        <span className="text-foreground">Assiut University</span> — thank you for the foundation,
        the labs, and the late nights.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.7 }}
        className="relative z-10 mt-10 font-display text-2xl italic text-blood"
      >
        Thank you.
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 32 — Q&A ============ */
export function Slide32() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center radial-vignette">
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blood"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 2, 1] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="relative z-10 font-display text-[200px] font-black leading-none text-blood text-glow"
      >
        ?
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="relative z-10 -mt-4 font-display text-5xl font-bold"
      >
        Questions & Answers
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
      >
        {team.map((m) => (
          <span key={m.name}>{m.name}</span>
        ))}
      </motion.div>
    </div>
  );
}

/* ============ SLIDE 33 — THANK YOU ============ */
export function Slide33() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden radial-vignette">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 animate-heartbeat"
      >
        <BloodDrop size={120} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "-0.02em" }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="relative z-10 mt-8 font-display text-7xl font-black text-glow"
      >
        BLOOD BRIDGE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 mt-6 max-w-2xl text-center font-display text-xl italic text-muted-foreground"
      >
        "Together, we bridge the gap — one drop at a time."
      </motion.p>

      <div className="absolute bottom-20 left-0 right-0 z-10 flex items-center justify-center">
        <svg viewBox="0 0 800 100" className="h-20 w-full max-w-3xl">
          <motion.path
            d="M0 50 L200 50 L220 50 L240 20 L260 80 L280 10 L300 90 L320 50 L800 50"
            fill="none"
            stroke="oklch(0.6 0.25 27)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 2.2, duration: 2.5, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 8px oklch(0.6 0.25 27 / 0.8))" }}
          />
        </svg>
      </div>
    </div>
  );
}

export const ALL_SLIDES = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
  Slide24,
  Slide25,
  Slide26,
  Slide27,
  Slide28,
  Slide29,
  Slide30,
  Slide31,
  Slide32,
  Slide33,
];

export const SLIDE_TITLES = [
  "Welcome",
  "Team",
  "Abstract",
  "Problem · Delay",
  "Problem · Fragmentation",
  "Problem · Inventory",
  "Solution",
  "Stakeholders",
  "Architecture",
  "Flutter Stack",
  ".NET Stack",
  "AI Overview",
  "Emergency Classification",
  "Intelligent Donor Matching",
  "Machine Learning Models",
  "AI Workflow & Benefits",
  "Geolocation",
  "AI Matching",
  "Auth Flow",
  "Donor Dashboard",
  "Gamification",
  "Notifications",
  "Security",
  "Database",
  "Testing",
  "Challenges",
  "Performance",
  "Comparison",
  "Roadmap",
  "Impact",
  "Acknowledgements",
  "Q&A",
  "Thank You",
];

// keep helper used internally
export { Stethoscope, Globe }; // (silence unused-import linter for icons reserved for tweaks)
