import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, r as money } from "./button-DtdCqoAQ.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BEhHnBuX.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.14em]", {
	variants: { variant: {
		default: "bg-primary text-primary-fg",
		muted: "bg-surface text-muted",
		outline: "shadow-[var(--shadow-border)] text-muted"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function kindLabel(kind) {
	if (kind === "bowl") return "Bowl";
	if (kind === "stand") return "Stand";
	return "Set";
}
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/shop/$slug",
		params: { slug: product.slug },
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-(--motion-fast) ease-(--ease-out) group-hover:shadow-[var(--shadow-border-hover)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square overflow-hidden bg-stone",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "size-full object-cover transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-[1.03]"
					}), product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						className: "absolute top-3 left-3",
						children: "Often chosen"
					}) : null]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.14em] text-muted",
					children: kindLabel(product.kind)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl tracking-tight text-fg",
					children: product.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm tabular-nums text-fg",
					children: [money(product.price), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-muted line-through",
						children: money(product.compareAt)
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 line-clamp-2 text-sm leading-relaxed text-muted",
				children: product.tagline
			})
		]
	});
}
//#endregion
export { ProductCard as n, Badge as t };
