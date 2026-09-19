import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DtdCqoAQ.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/story-D2cNpQwW.js
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl text-fg",
					children: "The missing piece was the stand."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-muted",
					children: "Slow-feed bowls already existed. Raised bowls already existed. They almost never fit each other, and the raised ones came in two heights for every dog on earth. Slowform prints the nest: a cradle sized to the bowl, legs sliced to the animal."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/products/printer.jpg",
					alt: "3D printer in the Slowform studio",
					className: "aspect-photo w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3",
				children: [
					{
						t: "Modeled as one piece",
						d: "The cradle, legs, and feet-wells are a single print. No screws, no wobbly hardware, no paint to chip into the bowl."
					},
					{
						t: "PETG, not a mystery plastic",
						d: "Stands are PETG — tough, slightly flexible, dishwasher-safe on the top rack. Color is the filament. Bowls are food-grade polypropylene."
					},
					{
						t: "Printed after you order",
						d: "There is no warehouse of stands in every height. We slice the file the day you check out. Typical print is 12–22 hours. Ships in 5–8 days."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: item.d
				})] }, item.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/products/cat.jpg",
					alt: "A tabby cat using a low blush Slowform stand",
					className: "aspect-photo w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-fg",
						children: "Care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bowls: top-rack dishwasher, or a soak and a brush through the maze." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Stands: top-rack or a warm cloth. Skip the broiler drawer and the microwave." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feet are TPU inserts. If one walks off, write us — we print replacements." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Layer lines are the finish, unless you asked us to smooth. They wipe clean." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8 w-fit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: "Design yours"
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { StoryPage as component };
