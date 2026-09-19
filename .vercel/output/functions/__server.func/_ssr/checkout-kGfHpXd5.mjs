import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as uid, r as money, t as Button } from "./button-DtdCqoAQ.mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cartTotal, c as useCart, i as cartCount, s as saveOrder } from "./router-DwpBD-wI.mjs";
import { n as Label, t as Input } from "./label-zutlDAZ7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-kGfHpXd5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const lines = useCart((s) => s.lines);
	const clear = useCart((s) => s.clear);
	const navigate = useNavigate();
	const count = cartCount(lines);
	const goods = cartTotal(lines);
	const shipping = goods >= 120 ? 0 : 12;
	const total = goods + shipping;
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const empty = count === 0;
	const yearOptions = (0, import_react.useMemo)(() => {
		const y = (/* @__PURE__ */ new Date()).getFullYear();
		return Array.from({ length: 8 }, (_, i) => y + i);
	}, []);
	function onSubmit(event) {
		event.preventDefault();
		if (empty) return;
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const address = String(data.get("address") ?? "").trim();
		const city = String(data.get("city") ?? "").trim();
		const region = String(data.get("region") ?? "").trim();
		const postal = String(data.get("postal") ?? "").trim();
		if (!name || !email || !address || !city || !region || !postal) {
			setError("Fill every field so we know where to ship the print.");
			return;
		}
		setError("");
		setBusy(true);
		const id = `SF-${uid().slice(0, 8).toUpperCase()}`;
		saveOrder({
			id,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			name,
			email,
			address,
			city,
			region,
			postal,
			lines,
			total
		});
		clear();
		navigate({
			to: "/order/$id",
			params: { id }
		});
	}
	if (empty) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Nothing to check out"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				children: "Return to the shop"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-fg",
					children: "Checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "This is a studio preview — no charge is taken. The order is saved on this device so you can see the confirmation."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "font-display text-2xl",
							children: "Ship to"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								label: "Name",
								autoComplete: "name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "email",
								label: "Email",
								type: "email",
								autoComplete: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "address",
							label: "Address",
							autoComplete: "street-address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "city",
									label: "City",
									autoComplete: "address-level2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "region",
									label: "Region",
									autoComplete: "address-level1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "postal",
									label: "Postal",
									autoComplete: "postal-code"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "font-display text-2xl",
							children: "Pay"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "card",
							label: "Card number",
							placeholder: "4242 4242 4242 4242"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "exp-m",
										children: "Month"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "exp-m",
										name: "exp-m",
										className: "h-11 w-full rounded-md border border-border bg-bg px-3 text-sm shadow-[var(--shadow-border)]",
										defaultValue: "12",
										children: Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: String(i + 1).padStart(2, "0") }, i + 1))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "exp-y",
										children: "Year"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "exp-y",
										name: "exp-y",
										className: "h-11 w-full rounded-md border border-border bg-bg px-3 text-sm shadow-[var(--shadow-border)]",
										children: yearOptions.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: y }, y))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "cvc",
									label: "CVC",
									placeholder: "123"
								})
							]
						})
					]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "w-full sm:w-auto",
					disabled: busy,
					children: ["Place order · ", money(total)]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							line.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" × ", line.qty]
							}),
							line.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs text-muted",
								children: line.detail
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: money(line.unitPrice * line.qty)
						})]
					}, line.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-between border-t border-border pt-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Shipping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: shipping === 0 ? "Free" : money(shipping)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: money(total)
					})]
				})
			]
		})]
	});
}
function Field({ name, label, type = "text", autoComplete, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			type,
			autoComplete,
			placeholder,
			required: true
		})]
	});
}
//#endregion
export { CheckoutPage as component };
