import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useMotionValue, n as useInView, o as AnimatePresence, r as useTransform, t as animate } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as TriangleAlert, C as Database, D as Brain, E as ChevronLeft, M as CodeXml, N as CircleX, O as Bell, P as CircleCheck, S as Droplet, T as ChevronRight, _ as MapPin, a as TrendingUp, b as Hospital, c as Smartphone, d as Server, f as Radio, g as Maximize2, h as Minimize2, i as Trophy, j as Sparkles, k as Award, l as Shield, m as Moon, n as Users, o as Timer, p as Network, r as UserCheck, s as Target, t as Zap, u as ShieldCheck, v as Lock, w as Cloud, x as Heart, y as Languages } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ByjCJpyx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCountUp(target, duration = 1.5, start = true, decimals = 0) {
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => decimals === 0 ? Math.round(v).toString() : v.toFixed(decimals));
	(0, import_react.useEffect)(() => {
		if (!start) return;
		return animate(mv, target, {
			duration,
			ease: "easeOut"
		}).stop;
	}, [
		start,
		target,
		duration,
		mv
	]);
	return rounded;
}
function CountUp({ to, duration = 1.6, decimals = 0, suffix = "", prefix = "", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const value = useCountUp(to, duration, useInView(ref, {
		once: true,
		amount: .3
	}), decimals);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: value }),
			suffix
		]
	});
}
function BloodDrop({ size = 80, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 130",
		width: size,
		height: size * 130 / 100,
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "drop-grad",
				cx: "35%",
				cy: "35%",
				r: "70%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.75 0.2 27)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "oklch(0.52 0.24 27)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.32 0.18 25)"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 5 C50 5, 10 55, 10 85 A40 40 0 0 0 90 85 C90 55, 50 5, 50 5 Z",
				fill: "url(#drop-grad)",
				stroke: "oklch(0.7 0.2 27)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "38",
				cy: "70",
				rx: "10",
				ry: "16",
				fill: "oklch(1 0 0 / 0.2)"
			})
		]
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = (delay = .1) => ({
	hidden: {},
	show: { transition: {
		staggerChildren: delay,
		delayChildren: .1
	} }
});
function SlideTitle({ kicker, title, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: "hidden",
		animate: "show",
		variants: stagger(.1),
		className: `mb-10 ${className}`,
		children: [kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: fadeUp,
			className: "mb-3 inline-block rounded-full border border-blood/40 bg-blood/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blood",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
			variants: fadeUp,
			className: "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl",
			children: title
		})]
	});
}
function Slide01() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center overflow-hidden radial-vignette",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-heartbeat",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BloodDrop, { size: 140 })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "relative z-10 mt-10 font-display text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
				children: "BLOOD BRIDGE".split("").map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						y: 40,
						filter: "blur(10px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0)"
					},
					transition: {
						delay: .4 + i * .06,
						duration: .5
					},
					className: `inline-block ${ch === " " ? "w-6" : "text-glow"}`,
					style: ch === "B" || ch === "R" ? { color: "oklch(0.62 0.25 27)" } : void 0,
					children: ch === " " ? "\xA0" : ch
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1.4,
					duration: .7
				},
				className: "relative z-10 mt-4 text-base sm:text-xl text-muted-foreground md:text-2xl",
				children: "Intelligent Blood Donation Coordination Platform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.9,
					duration: .6
				},
				className: "relative z-10 mt-12 flex flex-col items-center gap-2 text-sm sm:text-base text-muted-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.4em] text-blood",
						children: "Graduation Project 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2",
						children: "Faculty of Computers and Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-foreground",
						children: "Assiut University"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scaleX: 0
				},
				animate: {
					opacity: 1,
					scaleX: 1
				},
				transition: {
					delay: 2.3,
					duration: .8
				},
				className: "absolute bottom-10 h-px w-2/3 origin-center bg-gradient-to-r from-transparent via-blood to-transparent"
			})
		]
	});
}
var team = [
	{
		name: "Youssef Esmail Youssef",
		role: "Team Leader & Flutter Developer",
		initials: "YE",
		color: "from-red-700 to-rose-900"
	},
	{
		name: "Ahmed Khaled Abdullah",
		role: "Flutter Developer",
		initials: "AK",
		color: "from-rose-700 to-red-900"
	},
	{
		name: "Khaled Mohamed Ali",
		role: "Backend Developer",
		initials: "KM",
		color: "from-red-600 to-pink-900"
	},
	{
		name: "Khaled Hamada Mohamed",
		role: "Backend Developer",
		initials: "KH",
		color: "from-rose-600 to-red-800"
	},
	{
		name: "Ahmed Abd El_Nasser Al Metwally ",
		role: "AI & NLP Engineer",
		initials: "AN",
		color: "from-red-800 to-rose-950"
	},
	{
		name: "Youssef Samir Shawkey",
		role: "AI & NLP Engineer",
		initials: "YS",
		color: "from-pink-700 to-red-900"
	}
];
function Slide02() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
				kicker: "Project Team",
				title: "People Behind Blood Bridge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(.08),
				initial: "hidden",
				animate: "show",
				className: "grid flex-1 grid-cols-1 gap-6 md:grid-cols-3",
				children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "group flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-all hover:border-blood/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${m.color} font-display text-xl font-bold shadow-lg`,
						children: m.initials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold",
						children: m.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 inline-block rounded-full bg-blood/15 px-2 py-0.5 text-xs font-medium text-blood",
						children: m.role
					})] })]
				}, m.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .8,
					duration: .6
				},
				className: "mt-6 flex flex-col gap-4 rounded-2xl border border-blood/30 bg-gradient-to-r from-blood/15 to-crimson/15 p-5 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blood to-crimson text-xl font-bold shadow-lg",
					children: "MA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-blood",
					children: "Supervisor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-semibold",
					children: "Dr. Majid Askar"
				})] })]
			})
		]
	});
}
function Slide03() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Abstract",
			title: "Project Overview"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .7 },
				className: "col-span-1 lg:col-span-3 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Blood Bridge"
					}), " is a graduation-project platform that combines mobile access, AI-based matching, and real-time coordination to reduce the delay between an urgent blood request and a life-saving response."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The system connects donors, recipients, hospitals, and administrators in one secure ecosystem tailored to the Egyptian healthcare context, replacing fragmented calls with verified, measurable, and accountable action." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: stagger(.08),
						initial: "hidden",
						animate: "show",
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							"Flutter",
							"ASP.NET Core",
							"AI / NLP",
							"GPS / Maps",
							"SQL Server",
							"SignalR"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							variants: fadeUp,
							className: "rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground",
							children: t
						}, t))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [
					{
						n: 27,
						suffix: "",
						label: "Governorates"
					},
					{
						n: 4,
						suffix: "",
						label: "User Roles"
					},
					{
						n: 8,
						suffix: "",
						label: "Blood Types"
					},
					{
						n: 100,
						suffix: "%",
						label: "AI Powered"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .85
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						delay: .3 + i * .1,
						duration: .5
					},
					className: "flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blood/10 to-transparent p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl font-bold text-blood text-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: s.n,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})]
		})]
	});
}
function Slide04() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "The Problem · 01",
			title: "Delayed Emergency Response"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: { duration: .7 },
				className: "col-span-1 lg:col-span-2 flex flex-col items-center justify-center rounded-3xl border border-blood/40 bg-gradient-to-br from-blood/20 to-transparent p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "mb-4 h-12 w-12 text-blood animate-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-7xl font-black text-blood text-glow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: 45 }),
							"–",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: 90 })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xl font-semibold",
						children: "MINUTES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Average delay finding a compatible donor today"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				variants: stagger(.12),
				initial: "hidden",
				animate: "show",
				className: "col-span-3 flex flex-col justify-center gap-4",
				children: [
					"Manual phone calls to family and friends",
					"Hours wasted searching across social media",
					"No verified donor availability in real time",
					"Hospital staff overwhelmed during emergencies"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: {
						hidden: {
							opacity: 0,
							x: -40
						},
						show: {
							opacity: 1,
							x: 0,
							transition: { duration: .5 }
						}
					},
					className: "flex items-start gap-4 rounded-xl border border-white/10 bg-card/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg",
						children: p
					})]
				}, p))
			})]
		})]
	});
}
function Slide05() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "The Problem · 02",
			title: "Fragmented Communication"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-1 lg:col-span-2 relative flex items-center justify-center",
				children: [
					"Facebook",
					"WhatsApp",
					"Twitter",
					"SMS"
				].map((p, i) => {
					const pos = [
						{
							top: "10%",
							left: "5%"
						},
						{
							top: "20%",
							right: "10%"
						},
						{
							bottom: "30%",
							left: "15%"
						},
						{
							bottom: "10%",
							right: "5%"
						}
					][i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: 0
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							delay: .2 + i * .15,
							duration: .4
						},
						className: "absolute",
						style: pos,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl border border-white/15 bg-card px-5 py-3 text-sm font-medium",
							children: [p, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: 0,
									rotate: 0
								},
								animate: {
									scale: 1,
									rotate: 180
								},
								transition: {
									delay: 1 + i * .15,
									duration: .5
								},
								className: "absolute inset-0 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
									className: "h-12 w-12 text-blood",
									strokeWidth: 2.5
								})
							})]
						})
					}, p);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				variants: stagger(.12),
				initial: "hidden",
				animate: "show",
				className: "col-span-3 flex flex-col justify-center gap-4",
				children: [
					"Requests scattered across disconnected channels",
					"No way to verify identity or blood type",
					"Posts expire and get lost in feeds",
					"Same request shared by dozens — no coordination"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: fadeUp,
					className: "flex items-start gap-4 rounded-xl border border-white/10 bg-card/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "mt-0.5 h-5 w-5 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg",
						children: p
					})]
				}, p))
			})]
		})]
	});
}
function Slide06() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "The Problem · 03",
			title: "No Inventory Visibility"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.06),
			initial: "hidden",
			animate: "show",
			className: "grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					type: "A+",
					level: 65,
					low: false
				},
				{
					type: "A-",
					level: 22,
					low: true
				},
				{
					type: "B+",
					level: 48,
					low: false
				},
				{
					type: "B-",
					level: 15,
					low: true
				},
				{
					type: "O+",
					level: 72,
					low: false
				},
				{
					type: "O-",
					level: 11,
					low: true
				},
				{
					type: "AB+",
					level: 38,
					low: false
				},
				{
					type: "AB-",
					level: 8,
					low: true
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				className: `relative rounded-2xl border p-5 ${t.low ? "border-blood/50 bg-blood/10" : "border-white/10 bg-card/60"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold",
							children: t.type
						}), t.low ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-blood px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider animate-blink",
							children: "Low"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400",
							children: "OK"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-2 overflow-hidden rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							animate: { width: `${t.level}%` },
							transition: {
								delay: .4,
								duration: 1.2,
								ease: "easeOut"
							},
							className: `h-full ${t.low ? "bg-blood" : "bg-emerald-500"}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-xs text-muted-foreground",
						children: [t.level, "% stock"]
					})
				]
			}, t.type))
		})]
	});
}
function Slide07() {
	const feats = [
		{
			icon: Target,
			title: "Smart Matching",
			desc: "AI ranks compatible donors by blood type, proximity, and availability"
		},
		{
			icon: MapPin,
			title: "Geo-Enabled Requests",
			desc: "Live location-based routing across governorates and districts"
		},
		{
			icon: Bell,
			title: "Priority Alerts",
			desc: "Urgent notifications reach donors and hospitals in real time"
		},
		{
			icon: Hospital,
			title: "Hospital Coordination",
			desc: "Inventory visibility and request management in one workspace"
		},
		{
			icon: ShieldCheck,
			title: "Verified Eligibility",
			desc: "Identity checks and donor constraints are handled before matching"
		},
		{
			icon: Trophy,
			title: "Impact Tracking",
			desc: "Badges and progress encourage repeated, reliable contribution"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
				kicker: "The Solution",
				title: "One Platform. Six Core Capabilities."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(.1),
				initial: "hidden",
				animate: "show",
				className: "grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
				children: feats.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							rotateY: -90
						},
						show: {
							opacity: 1,
							rotateY: 0,
							transition: { duration: .6 }
						}
					},
					className: "group rounded-2xl border border-white/10 bg-gradient-to-br from-card to-card/40 p-6 transition-all hover:border-blood/50 hover:shadow-[0_0_30px_oklch(0.52_0.24_27/0.3)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "mb-3 h-9 w-9 text-blood" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.desc
						})
					]
				}, f.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1.2,
					duration: .7
				},
				className: "mt-6 text-center font-display text-2xl italic text-blood text-glow",
				children: "\"One Platform. Every Drop Counts.\""
			})
		]
	});
}
function Slide08() {
	const roles = [
		{
			icon: Heart,
			title: "Recipients",
			color: "from-rose-700 to-red-900",
			items: [
				"Post urgent requests",
				"Track responses live",
				"Verified hospital intake"
			]
		},
		{
			icon: Droplet,
			title: "Donors",
			color: "from-red-700 to-crimson",
			items: [
				"Get nearby alerts",
				"Manage availability",
				"Earn badges & impact"
			]
		},
		{
			icon: Hospital,
			title: "Hospitals",
			color: "from-blue-800 to-indigo-900",
			items: [
				"Manage inventory",
				"Coordinate requests",
				"Verify donations"
			]
		},
		{
			icon: Shield,
			title: "Administrators",
			color: "from-purple-800 to-violet-900",
			items: [
				"Oversee platform",
				"Approve hospitals",
				"Analytics dashboard"
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Stakeholders",
			title: "Four Roles. One Network."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.1),
			initial: "hidden",
			animate: "show",
			className: "grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
			children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				className: "flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center gap-3 bg-gradient-to-br ${r.color} p-5`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-semibold",
						children: r.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-1 flex-col gap-3 p-5 text-sm",
					children: r.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
					}, it))
				})]
			}, r.title))
		})]
	});
}
function Slide09() {
	const tiers = [
		{
			icon: Smartphone,
			title: "Mobile UI",
			sub: "Flutter · Dart",
			color: "border-blue-500/40"
		},
		{
			icon: Server,
			title: "REST API & AI Engine",
			sub: ".NET Core · SignalR · NLP",
			color: "border-blood/50"
		},
		{
			icon: Database,
			title: "Data Layer",
			sub: "SQL Server · Encrypted Storage",
			color: "border-purple-500/40"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Architecture",
			title: "Three-Tier System Design"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 flex-col items-center justify-center gap-6",
			children: tiers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full max-w-3xl flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: i * .4,
						duration: .6
					},
					className: `flex w-full items-center gap-5 rounded-2xl border-2 ${t.color} bg-card/70 p-6`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-12 w-12 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-semibold",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: t.sub
					})] })]
				}), i < tiers.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scaleY: 0 },
					animate: { scaleY: 1 },
					transition: {
						delay: i * .4 + .4,
						duration: .4
					},
					className: "my-1 h-8 w-px origin-top bg-gradient-to-b from-blood to-transparent"
				})]
			}, t.title))
		})]
	});
}
function TechGrid({ kicker, title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker,
			title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.08),
			initial: "hidden",
			animate: "show",
			className: "grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				className: "rounded-2xl border border-white/10 bg-card/60 p-6 transition-all hover:border-blood/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "mb-3 h-8 w-8 text-blood" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg font-semibold",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: f.desc
					})
				]
			}, f.title))
		})]
	});
}
function Slide10() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechGrid, {
		kicker: "Tech Stack · Frontend",
		title: "Flutter Mobile Layer",
		items: [
			{
				icon: Smartphone,
				title: "Cross-Platform",
				desc: "Single codebase, iOS & Android"
			},
			{
				icon: Languages,
				title: "Localized UI",
				desc: "Arabic & English with full RTL"
			},
			{
				icon: Moon,
				title: "Dark Mode",
				desc: "System-aware theming"
			},
			{
				icon: MapPin,
				title: "Real-Time Maps",
				desc: "Google Maps & route guidance"
			},
			{
				icon: Bell,
				title: "Push Notifications",
				desc: "Firebase Cloud Messaging"
			},
			{
				icon: CodeXml,
				title: "Dart Language",
				desc: "Type-safe, reactive UI"
			}
		]
	});
}
function Slide11() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechGrid, {
		kicker: "Tech Stack · Backend",
		title: ".NET Core Service Layer",
		items: [
			{
				icon: Server,
				title: "ASP.NET Core",
				desc: "High-performance Web API"
			},
			{
				icon: Lock,
				title: "JWT Auth",
				desc: "Stateless secure tokens"
			},
			{
				icon: Database,
				title: "SQL Server",
				desc: "Relational data integrity"
			},
			{
				icon: Radio,
				title: "SignalR",
				desc: "Real-time push & live updates"
			},
			{
				icon: Shield,
				title: "AES-256",
				desc: "Field-level encryption at rest"
			},
			{
				icon: Network,
				title: "Clean Architecture",
				desc: "Modular & testable layers"
			}
		]
	});
}
function Slide12() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Geolocation",
			title: "Nationwide Coverage"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 300 300",
					className: "h-full w-full max-w-md",
					children: [
						[
							80,
							120,
							160
						].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
							cx: "150",
							cy: "150",
							r,
							fill: "none",
							stroke: "oklch(0.52 0.24 27)",
							strokeWidth: "1.5",
							initial: {
								opacity: 0,
								scale: 0
							},
							animate: {
								opacity: [
									0,
									.7,
									.2
								],
								scale: [
									.4,
									1,
									1.1
								]
							},
							transition: {
								duration: 2.5,
								delay: i * .4,
								repeat: Infinity
							}
						}, r)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M120 60 L200 60 L220 100 L240 160 L210 230 L160 250 L130 240 L100 200 L90 140 L110 90 Z",
							fill: "oklch(0.52 0.24 27 / 0.12)",
							stroke: "oklch(0.6 0.25 27)",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
							cx: "150",
							cy: "150",
							r: "6",
							fill: "oklch(0.7 0.25 27)",
							animate: { scale: [
								1,
								1.4,
								1
							] },
							transition: {
								duration: 1.2,
								repeat: Infinity
							}
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 self-center sm:grid-cols-2",
				children: [
					{
						n: 27,
						label: "Governorates",
						suffix: ""
					},
					{
						n: 2,
						label: "Match Time",
						suffix: "s",
						prefix: "<"
					},
					{
						n: 5,
						label: "Default Radius",
						suffix: " km"
					},
					{
						n: 100,
						label: "GPS Accurate",
						suffix: "%"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .85
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: .3 + i * .1 },
					className: "rounded-2xl border border-white/10 bg-card/60 p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl font-bold text-blood text-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: s.n,
							suffix: s.suffix,
							prefix: s.prefix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})]
		})]
	});
}
function Slide13() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "AI Engine",
			title: "Weighted Matching Algorithm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col justify-center gap-5",
				children: [
					{
						label: "Blood Type Compatibility",
						weight: 40
					},
					{
						label: "Distance",
						weight: 30
					},
					{
						label: "Donor Eligibility",
						weight: 20
					},
					{
						label: "Response Rate",
						weight: 10
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-blood",
						children: [c.weight, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-3 overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: 0 },
						animate: { width: `${c.weight}%` },
						transition: {
							delay: .3 + i * .15,
							duration: 1.2,
							ease: "easeOut"
						},
						className: "h-full rounded-full bg-gradient-to-r from-crimson to-blood shadow-[0_0_15px_oklch(0.6_0.25_27/0.6)]"
					})
				})] }, c.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2 text-blood",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold uppercase tracking-widest",
						children: "Why AI Matters"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						{
							n: 87,
							suffix: "%",
							label: "Match accuracy"
						},
						{
							n: 3,
							suffix: "x",
							label: "Faster than manual"
						},
						{
							n: 24,
							suffix: "/7",
							label: "Always learning"
						},
						{
							n: 0,
							suffix: "",
							label: "Human bias"
						}
					].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: 1.2 + i * .1 },
						className: "rounded-2xl border border-white/10 bg-card/60 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-bold text-blood text-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
								to: w.n,
								suffix: w.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: w.label
						})]
					}, w.label))
				})]
			})]
		})]
	});
}
function PhoneMockup({ title, children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 40
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay,
			duration: .6
		},
		className: "mx-auto w-full max-w-[200px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[9/19] rounded-[2rem] border-4 border-white/15 bg-gradient-to-b from-navy to-navy-deep p-3 shadow-[0_20px_60px_oklch(0_0_0/0.5)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex h-full flex-col gap-2 overflow-hidden text-[10px]",
				children
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-center text-sm font-medium text-muted-foreground",
			children: title
		})]
	});
}
function Slide14() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "App Screens",
			title: "Authentication Flow"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-1 grid grid-cols-1 gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "Sign In",
						delay: .1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-center font-display text-sm font-bold text-blood",
								children: "BLOOD BRIDGE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 rounded-md bg-white/10 p-1.5 text-center text-[8px]",
								children: "email@example.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-white/10 p-1.5 text-center text-[8px]",
								children: "••••••••"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-blood p-1.5 text-center text-[8px] font-bold",
								children: "CONTINUE"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "Role Selection",
						delay: .35,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-center text-[9px] font-semibold",
							children: "Choose your role"
						}), [
							"Donor",
							"Recipient",
							"Hospital"
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border border-blood/40 bg-blood/10 p-2 text-center text-[9px]",
							children: r
						}, r))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "Permissions",
						delay: .6,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-center text-[9px] font-semibold",
								children: "Allow access"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-md bg-white/5 p-1.5 text-[8px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-blood" }), " Location"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-md bg-white/5 p-1.5 text-[8px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3 w-3 text-blood" }), " Notifications"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-blood p-1.5 text-center text-[8px] font-bold",
								children: "ALLOW"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				variants: stagger(.12),
				initial: "hidden",
				animate: "show",
				className: "col-span-2 flex flex-col gap-3 text-sm",
				children: [
					"Email + OTP verification",
					"Role-based onboarding",
					"Granular permission consent",
					"JWT session issued on success"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: fadeUp,
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
				}, p))
			})]
		})]
	});
}
function Slide15() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "App Screens",
			title: "Donor Dashboard"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-1 grid grid-cols-1 gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "Home",
						delay: .1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-[9px] font-semibold",
								children: "Hi, Ahmed 👋"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-blood/20 p-2 text-[8px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-blood",
									children: "URGENT · O−"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "opacity-70",
									children: "Assiut · 3.2 km"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-white/5 p-2 text-[8px]",
								children: "A+ · 5 km"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-white/5 p-2 text-[8px]",
								children: "B+ · 7 km"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "Request Detail",
						delay: .35,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-md bg-blood/20 p-2 text-center text-[10px] font-bold text-blood",
								children: "O−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] opacity-70",
								children: "Assiut University Hospital"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] opacity-70",
								children: "3.2 km · 6 min drive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-blood p-1.5 text-center text-[8px] font-bold",
								children: "I CAN DONATE"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneMockup, {
						title: "My Impact",
						delay: .6,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-center text-[9px]",
								children: "Lives Touched"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center font-display text-2xl font-bold text-blood",
								children: "12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-blood" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-blood" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-blood" })
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				variants: stagger(.12),
				initial: "hidden",
				animate: "show",
				className: "col-span-2 flex flex-col gap-3 text-sm",
				children: [
					"Nearby requests sorted by urgency",
					"One-tap accept with route guidance",
					"Eligibility countdown timer",
					"Lifetime impact & badges"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: fadeUp,
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
				}, p))
			})]
		})]
	});
}
function Slide16() {
	const badges = [
		{
			icon: Droplet,
			name: "First Drop"
		},
		{
			icon: Zap,
			name: "Quick Responder"
		},
		{
			icon: Heart,
			name: "Life Saver"
		},
		{
			icon: MapPin,
			name: "Local Hero"
		},
		{
			icon: TrendingUp,
			name: "Consistent Donor"
		},
		{
			icon: Users,
			name: "Community Builder"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
				kicker: "Engagement",
				title: "Gamification & Rewards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(.1),
				initial: "hidden",
				animate: "show",
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
				children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							scale: 0
						},
						show: {
							opacity: 1,
							scale: 1,
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 12
							}
						}
					},
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-blood shadow-[0_0_25px_oklch(0.6_0.25_27/0.5)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-9 w-9" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center text-xs font-medium",
						children: b.name
					})]
				}, b.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: 1.2 },
					className: "rounded-2xl border border-blood/30 bg-blood/10 p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-5xl font-bold text-blood text-glow",
						children: ["↑", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: 67,
							suffix: "%"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Donor retention boost"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: 1.4 },
					className: "rounded-2xl border border-blood/30 bg-blood/10 p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-5xl font-bold text-blood text-glow",
						children: ["↑", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: 43,
							suffix: "%"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Faster response time"
					})]
				})]
			})
		]
	});
}
function Slide17() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Communication",
			title: "Notification System"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.15),
			initial: "hidden",
			animate: "show",
			className: "flex flex-1 flex-col justify-center gap-4",
			children: [
				{
					label: "CRITICAL",
					time: "< 30 s",
					desc: "Rare blood type, life-threatening emergency",
					color: "bg-blood",
					blink: true
				},
				{
					label: "URGENT",
					time: "< 2 min",
					desc: "Compatible donor within 5 km radius",
					color: "bg-orange-500"
				},
				{
					label: "ACCEPTED",
					time: "live",
					desc: "Donor confirmed and on the way",
					color: "bg-emerald-500"
				},
				{
					label: "BADGE",
					time: "instant",
					desc: "You unlocked a new achievement",
					color: "bg-indigo-500"
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: {
					hidden: {
						opacity: 0,
						x: 80
					},
					show: {
						opacity: 1,
						x: 0,
						transition: {
							type: "spring",
							stiffness: 180,
							damping: 18
						}
					}
				},
				className: "flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 md:flex-row md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [r.blink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-3 w-3 rounded-full bg-blood animate-blink",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full ${r.color} px-3 py-1 text-xs font-bold uppercase tracking-wider`,
							children: r.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-sm text-blood animate-pulse",
						children: r.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 text-base",
						children: r.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5 text-muted-foreground" })
				]
			}, r.label))
		})]
	});
}
function Slide18() {
	const items = [
		{
			icon: Lock,
			title: "JWT Tokens",
			desc: "Stateless authenticated sessions"
		},
		{
			icon: Shield,
			title: "AES-256",
			desc: "Encryption for PII at rest"
		},
		{
			icon: Cloud,
			title: "HTTPS / TLS",
			desc: "All traffic encrypted in transit"
		},
		{
			icon: UserCheck,
			title: "RBAC",
			desc: "Role-based access control"
		},
		{
			icon: Database,
			title: "Data Minimization",
			desc: "Only what's medically needed"
		},
		{
			icon: ShieldCheck,
			title: "Input Validation",
			desc: "Server-side sanitization"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Security",
			title: "Defense in Depth"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.1),
			initial: "hidden",
			animate: "show",
			className: "grid flex-1 grid-cols-1 gap-5 md:grid-cols-3",
			children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: {
					hidden: {
						opacity: 0,
						rotateX: -60
					},
					show: {
						opacity: 1,
						rotateX: 0,
						transition: { duration: .5 }
					}
				},
				className: "relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { y: "-100%" },
						animate: { y: "100%" },
						transition: {
							duration: 2,
							delay: .5,
							repeat: 1
						},
						className: "pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-blood/30 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mb-3 h-8 w-8 text-blood" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg font-semibold",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: s.desc
					})
				]
			}, s.title))
		})]
	});
}
function Slide19() {
	const entities = [
		{
			id: "users",
			title: "Users",
			x: 50,
			y: 50
		},
		{
			id: "requests",
			title: "BloodRequests",
			x: 350,
			y: 50
		},
		{
			id: "donations",
			title: "Donations",
			x: 650,
			y: 50
		},
		{
			id: "hospitals",
			title: "Hospitals",
			x: 50,
			y: 280
		},
		{
			id: "inventory",
			title: "Inventory",
			x: 350,
			y: 280
		},
		{
			id: "notifications",
			title: "Notifications",
			x: 650,
			y: 280
		},
		{
			id: "badges",
			title: "Badges",
			x: 350,
			y: 510
		}
	];
	const lines = [
		["users", "requests"],
		["users", "donations"],
		["hospitals", "inventory"],
		["donations", "notifications"],
		["users", "badges"],
		["requests", "donations"]
	];
	const get = (id) => entities.find((e) => e.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Data Model",
			title: "Database Schema"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 850 600",
				className: "absolute inset-0 h-full w-full",
				children: [lines.map(([a, b], i) => {
					const A = get(a);
					const B = get(b);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
						x1: A.x + 100,
						y1: A.y + 40,
						x2: B.x + 100,
						y2: B.y + 40,
						stroke: "oklch(0.52 0.24 27)",
						strokeWidth: "2",
						strokeDasharray: "6 6",
						initial: {
							pathLength: 0,
							opacity: 0
						},
						animate: {
							pathLength: 1,
							opacity: .7
						},
						transition: {
							delay: .8 + i * .2,
							duration: .6
						}
					}, `${a}-${b}`);
				}), entities.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
					initial: {
						opacity: 0,
						scale: .6
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: .1 + i * .1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: e.x,
						y: e.y,
						width: "200",
						height: "80",
						rx: "14",
						fill: "oklch(0.18 0.04 270)",
						stroke: "oklch(0.52 0.24 27 / 0.6)",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: e.x + 100,
						y: e.y + 48,
						textAnchor: "middle",
						fill: "white",
						fontSize: "18",
						fontWeight: "600",
						fontFamily: "Space Grotesk",
						children: e.title
					})]
				}, e.id))]
			})
		})]
	});
}
function Slide20() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Quality",
			title: "Testing & QA"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					n: 95,
					suffix: "%",
					label: "Code Coverage",
					ring: true
				},
				{
					n: 47,
					suffix: "",
					label: "API Endpoints"
				},
				{
					n: 50,
					suffix: "",
					label: "Beta Testers"
				},
				{
					n: 200,
					suffix: "ms",
					label: "Response Time",
					prefix: "<"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .2 + i * .1 },
				className: "flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card/60 p-6 text-center",
				children: [s.ring ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-32 w-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 100 100",
						className: "h-full w-full -rotate-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "50",
							cy: "50",
							r: "42",
							fill: "none",
							stroke: "oklch(1 0 0 / 0.1)",
							strokeWidth: "8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
							cx: "50",
							cy: "50",
							r: "42",
							fill: "none",
							stroke: "oklch(0.6 0.25 27)",
							strokeWidth: "8",
							strokeLinecap: "round",
							strokeDasharray: 2 * Math.PI * 42,
							initial: { strokeDashoffset: 2 * Math.PI * 42 },
							animate: { strokeDashoffset: 2 * Math.PI * 42 * (1 - s.n / 100) },
							transition: {
								duration: 1.8,
								delay: .4
							}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-blood",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: s.n,
							suffix: "%"
						})
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-6xl font-bold text-blood text-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						to: s.n,
						suffix: s.suffix,
						prefix: s.prefix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-sm text-muted-foreground",
					children: s.label
				})]
			}, s.label))
		})]
	});
}
function Slide21() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Reality Check",
			title: "Challenges & Solutions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl border border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-y-2 bg-blood/15 px-6 py-3 text-xs font-bold uppercase tracking-widest md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Challenge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Solution" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(.15),
				initial: "hidden",
				animate: "show",
				className: "divide-y divide-white/5",
				children: [
					["Sparse data for AI training", "Synthetic dataset + transfer learning"],
					["Real-time matching at scale", "SignalR hubs + Redis pub/sub layer"],
					["Verifying donor identity", "National ID hash + hospital intake check"],
					["Multi-language support", "Localized Flutter + RTL-first design"],
					["Trust & user adoption", "Hospital partnerships + transparency dashboard"]
				].map(([c, s]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "grid grid-cols-1 gap-4 px-6 py-4 transition-colors hover:bg-white/5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-blood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
					})]
				}, c))
			})]
		})]
	});
}
function Slide22() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Benchmarks",
			title: "Performance Metrics"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2",
			children: [
				{
					n: 2,
					suffix: "s",
					prefix: "<",
					label: "Match Time"
				},
				{
					n: 99.7,
					suffix: "%",
					decimals: 1,
					label: "Uptime"
				},
				{
					n: 200,
					suffix: "ms",
					prefix: "<",
					label: "API Latency"
				},
				{
					n: 500,
					suffix: "+",
					label: "Concurrent Users"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: { delay: .2 + i * .15 },
				className: "relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-blood/30 bg-gradient-to-br from-blood/10 to-transparent p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-8xl font-black text-blood text-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
						to: s.n,
						suffix: s.suffix,
						prefix: s.prefix,
						decimals: s.decimals || 0
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-lg text-muted-foreground",
					children: s.label
				})]
			}, s.label))
		})]
	});
}
function Slide23() {
	const rows = [
		[
			"Verified donors",
			"✅",
			"❌",
			"⚠️"
		],
		[
			"Real-time matching",
			"✅",
			"❌",
			"❌"
		],
		[
			"AI-ranked donors",
			"✅",
			"❌",
			"❌"
		],
		[
			"Hospital inventory sync",
			"✅",
			"❌",
			"⚠️"
		],
		[
			"Privacy & encryption",
			"✅",
			"❌",
			"⚠️"
		],
		[
			"Gamified retention",
			"✅",
			"❌",
			"❌"
		]
	];
	const cell = (v) => {
		if (v === "✅") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: { scale: 0 },
			whileInView: { scale: 1 },
			transition: {
				type: "spring",
				stiffness: 300
			},
			className: "text-emerald-400",
			children: "✅"
		});
		if (v === "❌") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: { x: 0 },
			whileInView: { x: [
				-3,
				3,
				-3,
				3,
				0
			] },
			transition: { duration: .4 },
			className: "text-blood",
			children: "❌"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			animate: { opacity: [
				1,
				.4,
				1
			] },
			transition: {
				duration: 1.5,
				repeat: Infinity
			},
			className: "text-yellow-400",
			children: "⚠️"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "Competition",
			title: "How We Compare"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl border border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 bg-blood/15 px-6 py-3 text-sm font-bold uppercase tracking-widest md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Feature" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center text-blood",
						children: "Blood Bridge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: "Social Media"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: "Basic Apps"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger(.1),
				initial: "hidden",
				animate: "show",
				className: "divide-y divide-white/5",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "grid grid-cols-1 gap-4 px-6 py-3 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: r[0] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-xl",
							children: cell(r[1])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-xl",
							children: cell(r[2])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center text-xl",
							children: cell(r[3])
						})
					]
				}, r[0]))
			})]
		})]
	});
}
function Slide24() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
				kicker: "What's Next",
				title: "Future Roadmap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					transition: {
						duration: 1.5,
						delay: .2
					},
					className: "absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-blood to-transparent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid h-full grid-cols-1 gap-6 lg:grid-cols-3 items-start lg:items-center",
					children: [
						{
							tag: "Phase 2",
							title: "Plasma & Platelets",
							desc: "Specialized donation types and cold-chain coordination"
						},
						{
							tag: "Phase 3",
							title: "Regional Expansion",
							desc: "MENA rollout with localized partnerships"
						},
						{
							tag: "Phase 4",
							title: "Predictive AI",
							desc: "Forecast shortages before they happen"
						}
					].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -40
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: .5 + i * .3 },
						className: "rounded-2xl border border-white/10 bg-card/70 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 inline-block rounded-full bg-blood px-3 py-1 text-xs font-bold uppercase tracking-widest",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.desc
							})
						]
					}, p.tag))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
					duration: .8
				},
				className: "mt-6 text-center font-display text-xl italic text-blood/90",
				children: "\"A future where no patient waits — and no donor is forgotten.\""
			})
		]
	});
}
function Slide25() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slide-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideTitle, {
			kicker: "The Why",
			title: "Expected Impact"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: stagger(.1),
			initial: "hidden",
			animate: "show",
			className: "grid flex-1 grid-cols-1 gap-5 md:grid-cols-3",
			children: [
				{
					n: 70,
					suffix: "%",
					label: "Faster response"
				},
				{
					n: 3,
					suffix: "x",
					label: "More donors reached"
				},
				{
					n: 90,
					suffix: "%",
					label: "User trust score"
				},
				{
					n: 50,
					suffix: "K+",
					label: "Lives reachable yr 1"
				},
				{
					n: 27,
					suffix: "",
					label: "Governorates served"
				},
				{
					n: 0,
					suffix: "",
					label: "Data sold to 3rd parties",
					emphasis: true
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				className: `rounded-2xl border p-7 text-center ${s.emphasis ? "border-blood bg-gradient-to-br from-blood/30 to-crimson/20" : "border-white/10 bg-card/60"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-6xl font-black text-blood text-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: s.n,
							suffix: s.suffix
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-px w-12 bg-blood" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm text-muted-foreground",
						children: s.label
					})
				]
			}, s.label))
		})]
	});
}
function Slide26() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center radial-vignette",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .8 },
				className: "relative z-10 text-xs uppercase tracking-[0.4em] text-blood",
				children: "With Gratitude"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					scale: .9,
					filter: "blur(8px)"
				},
				animate: {
					opacity: 1,
					scale: 1,
					filter: "blur(0)"
				},
				transition: {
					delay: .4,
					duration: 1
				},
				className: "relative z-10 mt-6 font-display text-6xl font-bold text-glow",
				children: "Dr. Majid Askar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.2,
					duration: .8
				},
				className: "relative z-10 mt-4 text-lg text-muted-foreground",
				children: "Project Supervisor · For guidance, patience, and belief in this vision."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.8,
					duration: .8
				},
				className: "relative z-10 mt-12 max-w-2xl text-center text-base text-muted-foreground",
				children: [
					"To the Faculty of Computers and Information at ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Assiut University"
					}),
					" — thank you for the foundation, the labs, and the late nights."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 2.4,
					duration: .7
				},
				className: "relative z-10 mt-10 font-display text-2xl italic text-blood",
				children: "Thank you."
			})
		]
	});
}
function Slide27() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center radial-vignette",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
			Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute h-1 w-1 rounded-full bg-blood",
				style: {
					left: `${i * 37 % 100}%`,
					top: `${i * 53 % 100}%`
				},
				animate: {
					opacity: [
						.2,
						1,
						.2
					],
					scale: [
						1,
						2,
						1
					]
				},
				transition: {
					duration: 2 + i % 3,
					repeat: Infinity,
					delay: i * .1
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: 0,
					rotate: -180
				},
				animate: {
					scale: 1,
					rotate: 0
				},
				transition: {
					type: "spring",
					stiffness: 120,
					damping: 10
				},
				className: "relative z-10 font-display text-[200px] font-black leading-none text-blood text-glow",
				children: "?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .6,
					duration: .7
				},
				className: "relative z-10 -mt-4 font-display text-5xl font-bold",
				children: "Questions & Answers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.2,
					duration: .8
				},
				className: "relative z-10 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground",
				children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.name }, m.name))
			})
		]
	});
}
function Slide28() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center overflow-hidden radial-vignette",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: 0,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: { duration: .8 },
				className: "relative z-10 animate-heartbeat",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BloodDrop, { size: 120 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				initial: {
					opacity: 0,
					letterSpacing: "0.5em"
				},
				animate: {
					opacity: 1,
					letterSpacing: "-0.02em"
				},
				transition: {
					delay: .6,
					duration: 1.2
				},
				className: "relative z-10 mt-8 font-display text-7xl font-black text-glow",
				children: "BLOOD BRIDGE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1.8,
					duration: .8
				},
				className: "relative z-10 mt-6 max-w-2xl text-center font-display text-xl italic text-muted-foreground",
				children: "\"Together, we bridge the gap — one drop at a time.\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-20 left-0 right-0 z-10 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 800 100",
					className: "h-20 w-full max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
						d: "M0 50 L200 50 L220 50 L240 20 L260 80 L280 10 L300 90 L320 50 L800 50",
						fill: "none",
						stroke: "oklch(0.6 0.25 27)",
						strokeWidth: "2",
						strokeLinecap: "round",
						initial: {
							pathLength: 0,
							opacity: 0
						},
						animate: {
							pathLength: 1,
							opacity: 1
						},
						transition: {
							delay: 2.2,
							duration: 2.5,
							ease: "easeOut"
						},
						style: { filter: "drop-shadow(0 0 8px oklch(0.6 0.25 27 / 0.8))" }
					})
				})
			})
		]
	});
}
var ALL_SLIDES = [
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
	Slide28
];
var SLIDE_TITLES = [
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
	"Thank You"
];
function Presentation() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const [isFull, setIsFull] = (0, import_react.useState)(false);
	const total = ALL_SLIDES.length;
	const touchStart = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		const clamped = Math.max(0, Math.min(total - 1, next));
		setDirection(clamped > index ? 1 : -1);
		setIndex(clamped);
	}, [index, total]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				go(index + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				go(index - 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(total - 1);
			else if (e.key.toLowerCase() === "f") toggleFull();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		index,
		total
	]);
	(0, import_react.useEffect)(() => {
		const onFs = () => setIsFull(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	const toggleFull = () => {
		if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
		else document.exitFullscreen().catch(() => {});
	};
	const SlideComp = ALL_SLIDES[index];
	const progress = (index + 1) / total * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-screen w-screen overflow-hidden bg-background text-foreground",
		onTouchStart: (e) => touchStart.current = e.touches[0].clientX,
		onTouchEnd: (e) => {
			if (touchStart.current == null) return;
			const dx = e.changedTouches[0].clientX - touchStart.current;
			if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
			touchStart.current = null;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 right-0 top-0 z-50 h-1 bg-white/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-gradient-to-r from-crimson via-blood to-glow shadow-[0_0_10px_oklch(0.6_0.25_27/0.7)]",
					animate: { width: `${progress}%` },
					transition: {
						duration: .5,
						ease: "easeOut"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-full w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					custom: direction,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						custom: direction,
						initial: {
							opacity: 0,
							y: 40 * direction
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -40 * direction
						},
						transition: {
							duration: .6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "absolute inset-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideComp, {})
					}, index)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col items-stretch gap-3 p-4 sm:flex-row sm:items-end sm:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-card/70 px-4 py-2 backdrop-blur sm:w-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(index - 1),
								disabled: index === 0,
								className: "rounded-full p-1.5 text-foreground transition hover:bg-blood/20 disabled:opacity-30",
								"aria-label": "Previous",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[56px] text-center font-mono text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-blood",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [" / ", total]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(index + 1),
								disabled: index === total - 1,
								className: "rounded-full p-1.5 text-foreground transition hover:bg-blood/20 disabled:opacity-30",
								"aria-label": "Next",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-auto hidden max-w-[55%] flex-wrap justify-center gap-1.5 rounded-full border border-white/10 bg-card/70 px-4 py-2 backdrop-blur md:flex",
						children: ALL_SLIDES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go(i),
							title: SLIDE_TITLES[i],
							"aria-label": `Slide ${i + 1}: ${SLIDE_TITLES[i]}`,
							className: `h-2 rounded-full transition-all ${i === index ? "w-6 bg-blood shadow-[0_0_8px_oklch(0.6_0.25_27/0.8)]" : "w-2 bg-white/20 hover:bg-white/40"}`
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex w-full items-center justify-between gap-2 rounded-full border border-white/10 bg-card/70 px-3 py-2 backdrop-blur sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs text-muted-foreground sm:inline",
							children: SLIDE_TITLES[index]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleFull,
							className: "rounded-full p-1.5 transition hover:bg-blood/20",
							"aria-label": "Toggle fullscreen",
							children: isFull ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
						})]
					})
				]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {});
}
//#endregion
export { Index as component };
