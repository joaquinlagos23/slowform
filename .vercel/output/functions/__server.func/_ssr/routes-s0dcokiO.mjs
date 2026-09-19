import { r as PRODUCTS } from "./catalog-ChWt65pM.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DtdCqoAQ.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as ProductCard } from "./product-card-BEhHnBuX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-s0dcokiO.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = PRODUCTS.filter((p) => p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
					children: "Slow feed bowls · 3D-printed stands"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 font-display text-5xl leading-[0.95] text-fg sm:text-6xl lg:text-7xl",
					children: ["A slower bowl.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block italic text-primary",
						children: "A stand made for them."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg",
					children: "Off-the-shelf raised bowls are one height. Floor bowls make them gulp. We print a nest to your bowl, sliced to the animal who uses it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/studio",
							children: ["Design a stand", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Shop the collection"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/products/hero.jpg",
					alt: "A golden dog eating from a maze bowl nested in a sage 3D-printed stand",
					className: "aspect-photo w-full object-cover lg:aspect-square"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Slow the meal",
						d: "Maze, pebble, and wave bowls that turn gulping into a paced ten minutes."
					},
					{
						n: "02",
						t: "Match the height",
						d: "Rim height from 3.5 inches for cats to 13 for giants. Not a one-size riser."
					},
					{
						n: "03",
						t: "Print the nest",
						d: "Each stand is PETG, printed after you order, with a cradle sized to the bowl."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: item.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl text-fg",
						children: item.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.d
					})
				] }, item.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Collection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-fg",
					children: "Ready to nest"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						children: ["All products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary text-primary-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-primary-fg/70",
						children: "The Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
						children: "Dial in height, color, and nest. Watch the stand take shape."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-primary-fg/80",
						children: "Pick a size, a filament, one nest or two. Add a nameplate. We slice the file the same day and print overnight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "inverse",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/studio",
							children: ["Open the studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/products/printer.jpg",
						alt: "A desktop 3D printer producing a sage PETG stand",
						className: "aspect-photo w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/products/kibble.jpg",
					alt: "Kibble resting in the ridges of a spiral slow-feed bowl",
					className: "aspect-photo w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Why slow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-fg",
						children: "Gulping is a design problem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Fast eating is linked to regurgitation, extra air, and in deep-chested dogs, a higher bloat risk. A maze does not treat a medical condition — it buys minutes. Pair it with a height that lets the neck stay level, and dinner gets quieter for everyone in the room."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "mt-6 w-fit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guide",
							children: "Read the height guide"
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
