import { i as __toESM } from "../_runtime.mjs";
import { a as applySize, c as describeStand, i as SIZE_COPY, l as filamentById, n as FILAMENTS, o as applySpecies, s as bowls, t as DEFAULT_CONFIG, u as priceStand } from "./catalog-ChWt65pM.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn, r as money, t as Button } from "./button-DtdCqoAQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useCart } from "./router-DwpBD-wI.mjs";
import { n as Label, t as Input } from "./label-zutlDAZ7.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-DDUgSA2G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StandCanvas = (0, import_react.lazy)(() => import("./stand-canvas-DNqj3TF-.mjs"));
function StandPreview({ config }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewFallback, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewFallback, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandCanvas, { config })
	});
}
function PreviewFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-80 w-full items-center justify-center bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-24 rounded-full border border-border" })
	});
}
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-stone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-primary shadow-[var(--shadow-border)] transition-transform duration-(--motion-quick) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 active:scale-95" })]
}));
Slider.displayName = Slider$1.displayName;
function StudioPage() {
	const [config, setConfig] = (0, import_react.useState)(DEFAULT_CONFIG);
	const add = useCart((s) => s.add);
	const price = (0, import_react.useMemo)(() => priceStand(config), [config]);
	const color = filamentById(config.colorId);
	const set = (patch) => setConfig((c) => ({
		...c,
		...patch
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: "Studio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl text-fg",
				children: "Print a stand"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: "Height, nest, and filament — the model updates as you go. We slice it after checkout and start the print that night."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[min(72vw,28rem)] lg:h-[36rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandPreview, { config })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl text-fg",
							children: [color.name, " nest"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: describeStand(config)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums text-fg",
							children: money(price)
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Who it is for",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: ["dog", "cat"].map((species) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.species === species,
									onClick: () => setConfig((c) => applySpecies(c, species)),
									children: species === "dog" ? "Dog" : "Cat"
								}, species))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Size",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: Object.keys(SIZE_COPY).filter((size) => config.species === "dog" || size === "xs" || size === "sm").map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.size === size,
									onClick: () => setConfig((c) => applySize(c, size)),
									children: SIZE_COPY[size].label
								}, size))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: config.species === "cat" ? SIZE_COPY[config.size].cat : SIZE_COPY[config.size].dog
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Rim height",
							extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-fg",
								children: [config.heightIn.toFixed(1), " in"]
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 3,
								max: 14,
								step: .5,
								value: [config.heightIn],
								onValueChange: ([value]) => set({ heightIn: value ?? config.heightIn })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Measure to the withers, then drop an inch so the neck stays level — details in the guide."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Nest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.nests === 1,
									onClick: () => set({ nests: 1 }),
									children: "Single"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.nests === 2,
									onClick: () => set({ nests: 2 }),
									children: "Twin"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-2",
								children: [
									6,
									8,
									10
								].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
									active: config.diameterIn === d,
									onClick: () => set({ diameterIn: d }),
									children: [d, " in bowl"]
								}, d))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Filament",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: FILAMENTS.map((filament) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": filament.name,
									title: filament.name,
									onClick: () => set({ colorId: filament.id }),
									className: cn("size-9 rounded-full shadow-[var(--shadow-border)]", config.colorId === filament.id && "ring-2 ring-primary ring-offset-2 ring-offset-bg"),
									style: { backgroundColor: filament.hex }
								}, filament.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [color.name, " PETG — the color is the plastic."]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Print finish",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: ["layered", "smoothed"].map((finish) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.finish === finish,
									onClick: () => set({ finish }),
									children: finish === "layered" ? "Visible layers" : "Smoothed"
								}, finish))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nameplate",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								maxLength: 12,
								placeholder: "Optional, 12 characters",
								value: config.nameplate,
								onChange: (e) => set({ nameplate: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nest a bowl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.bowlSlug === null,
									onClick: () => set({ bowlSlug: null }),
									children: "Stand only"
								}), bowls().map((bowl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: config.bowlSlug === bowl.slug,
									onClick: () => set({ bowlSlug: bowl.slug }),
									children: bowl.name
								}, bowl.slug))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-bg p-4 shadow-[var(--shadow-border-hover)] lg:static sticky bottom-3 z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.14em] text-muted",
									children: "Printed to order"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl tabular-nums",
									children: money(price)
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									onClick: () => {
										add({
											productId: `custom:${JSON.stringify(config)}`,
											name: "Custom nest",
											image: "/products/stand-sage.jpg",
											unitPrice: price,
											detail: describeStand(config)
										});
										toast("Custom nest added to the bag");
									},
									children: "Add to bag"
								})]
							})
						})
					]
				})]
			})
		]
	});
}
function Field({ label, extra, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), extra]
	}), children] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-4 text-sm transition-colors duration-(--motion-quick)", active ? "bg-primary text-primary-fg" : "bg-surface text-fg hover:bg-stone"),
		children
	});
}
//#endregion
export { StudioPage as component };
