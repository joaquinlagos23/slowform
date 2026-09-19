import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DtdCqoAQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function money(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: value % 1 === 0 ? 0 : 2
	}).format(value);
}
function uid() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `sf_${Math.random().toString(36).slice(2, 10)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[transform,background-color,color,box-shadow,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:bg-primary/90",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:bg-stone",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			ghost: "text-fg hover:bg-surface",
			inverse: "bg-fg text-bg hover:bg-fg/90"
		},
		size: {
			default: "h-11 px-5 text-sm rounded-full",
			sm: "h-9 px-3.5 text-sm rounded-full",
			lg: "h-12 px-6 text-base rounded-full",
			icon: "size-11 rounded-full",
			"icon-sm": "size-9 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { uid as i, cn as n, money as r, Button as t };
