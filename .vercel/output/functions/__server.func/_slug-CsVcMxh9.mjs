import { i as __toESM } from "./_runtime.mjs";
import { f as relatedProducts } from "./_ssr/catalog-ChWt65pM.mjs";
import { o as require_jsx_runtime, s as require_react } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { r as money, t as Button } from "./_ssr/button-DtdCqoAQ.mjs";
import { _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { c as useCart, n as Route } from "./_ssr/router-DwpBD-wI.mjs";
import { t as QtyStepper } from "./_ssr/qty-stepper-B8u157Mq.mjs";
import { n as ProductCard, t as Badge } from "./_ssr/product-card-BEhHnBuX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CsVcMxh9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const add = useCart((s) => s.add);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [active, setActive] = (0, import_react.useState)(product.gallery[0] ?? product.image);
	const related = relatedProducts(product.slug);
	(0, import_react.useEffect)(() => {
		setActive(product.gallery[0] ?? product.image);
		setQty(1);
	}, [product]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-fg",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					product.kind
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active,
						alt: product.name,
						className: "aspect-square w-full object-cover"
					})
				}), product.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: product.gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(src),
						className: `overflow-hidden rounded-md ${active === src ? "ring-2 ring-primary" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "aspect-square w-full object-cover"
						})
					}, src))
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: product.kind === "bundle" ? "set" : product.kind }), product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "default",
							children: "Often chosen"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl text-fg",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-muted",
						children: product.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-display text-3xl tabular-nums text-fg",
						children: [money(product.price), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-3 text-xl text-muted line-through",
							children: money(product.compareAt)
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-muted",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2 text-sm text-fg",
						children: product.details.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), line]
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
							value: qty,
							onChange: setQty
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							onClick: () => {
								add({
									productId: product.slug,
									name: product.name,
									image: product.image,
									unitPrice: product.price,
									qty
								});
								toast(`Added ${product.name}`);
							},
							children: ["Add to bag · ", money(product.price * qty)]
						})]
					}),
					product.kind !== "stand" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Need a height that is not on the shelf?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/studio",
								className: "text-fg underline underline-offset-4",
								children: "Print a custom nest"
							}),
							"."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Want a different height or color?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/studio",
								className: "text-fg underline underline-offset-4",
								children: "Open the studio"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6",
						children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-[0.14em] text-muted",
							children: spec.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-fg",
							children: spec.value
						})] }, spec.label))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "Also in the studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 sm:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
