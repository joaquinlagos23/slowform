import { i as __toESM } from "../_runtime.mjs";
import { r as PRODUCTS } from "./catalog-ChWt65pM.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DtdCqoAQ.mjs";
import { n as ProductCard } from "./product-card-BEhHnBuX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-Ci4gKx4z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "bowl",
		label: "Bowls"
	},
	{
		id: "stand",
		label: "Stands"
	},
	{
		id: "bundle",
		label: "Sets"
	}
];
function ShopPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => PRODUCTS.filter((p) => filter === "all" || p.kind === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: "Shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl text-fg",
				children: "The collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: "Slow-feed bowls in five patterns, ready-made stands in the heights we print most, and kits that nest them together. Anything else is a Studio print."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					variant: filter === item.id ? "default" : "outline",
					onClick: () => setFilter(item.id),
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		]
	});
}
//#endregion
export { ShopPage as component };
