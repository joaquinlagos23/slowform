import { o as require_jsx_runtime } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./_ssr/button-DtdCqoAQ.mjs";
import { _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D-NP5kbq.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-6xl px-4 py-24 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "That piece is not in the shop."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			children: "Back to the collection"
		})
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
