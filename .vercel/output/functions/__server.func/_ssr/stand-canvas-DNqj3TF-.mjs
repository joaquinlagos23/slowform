import { i as __toESM } from "../_runtime.mjs";
import { d as productBySlug, l as filamentById } from "./catalog-ChWt65pM.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as RepeatWrapping, i as CanvasTexture, n as OrbitControls, o as SRGBColorSpace, r as Canvas, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stand-canvas-DNqj3TF-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IN = .038;
function StandCanvas({ config }) {
	const height = config.heightIn * IN;
	const lookY = Math.max(height * .55, .12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				.62,
				.48,
				.78
			],
			fov: 28
		},
		dpr: [1, 1.75],
		gl: {
			antialias: true,
			alpha: true
		},
		className: "h-full w-full touch-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#eae4d8"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .85 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					1.4,
					2.2,
					1.1
				],
				intensity: 1.35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-1.2,
					.6,
					-.8
				],
				intensity: .35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rig, { config }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					0,
					0
				],
				opacity: .28,
				scale: 2.2,
				blur: 2.4,
				far: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: false,
				minPolarAngle: .55,
				maxPolarAngle: 1.35,
				minDistance: .5,
				maxDistance: 1.4,
				autoRotate: true,
				autoRotateSpeed: .55,
				target: [
					0,
					lookY,
					0
				]
			})
		]
	});
}
function Rig({ config }) {
	const height = config.heightIn * IN;
	const radius = config.diameterIn / 2 * IN;
	const color = filamentById(config.colorId).hex;
	const bowl = config.bowlSlug ? productBySlug(config.bowlSlug) : null;
	const bowlColor = bowl?.bowlColor ?? "#d7c4a8";
	const gap = radius * 2 + .05;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: config.nests === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cradle, {
			height,
			radius,
			color,
			layered: config.finish === "layered",
			position: [
				-gap / 2,
				0,
				0
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cradle, {
			height,
			radius,
			color,
			layered: config.finish === "layered",
			position: [
				gap / 2,
				0,
				0
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				height * .72,
				0
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.018,
				.018,
				gap,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FdmMaterial, {
				color,
				layered: config.finish === "layered"
			})]
		}),
		bowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bowl, {
			radius,
			color: bowlColor,
			position: [
				-gap / 2,
				height,
				0
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bowl, {
			radius,
			color: "#cfc6b6",
			position: [
				gap / 2,
				height,
				0
			],
			water: true
		})] }) : null
	] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cradle, {
		height,
		radius,
		color,
		layered: config.finish === "layered",
		position: [
			0,
			0,
			0
		]
	}), bowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bowl, {
		radius,
		color: bowlColor,
		position: [
			0,
			height,
			0
		]
	}) : null] }) });
}
function Cradle({ height, radius, color, layered, position }) {
	const legLen = Math.max(height - .02, .06);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					height,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					radius * .92,
					.018,
					14,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FdmMaterial, {
					color,
					layered
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					height - .012,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					radius * .78,
					radius * .78,
					.014,
					40
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FdmMaterial, {
					color,
					layered
				})]
			}),
			[
				0,
				1,
				2
			].map((i) => {
				const a = i / 3 * Math.PI * 2 + Math.PI / 6;
				const x = Math.cos(a) * radius * .7;
				const z = Math.sin(a) * radius * .7;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						x * 1.1,
						legLen / 2,
						z * 1.1
					],
					rotation: [
						.22 * Math.cos(a + Math.PI),
						0,
						-.22 * Math.sin(a + Math.PI)
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.014,
						.022,
						legLen,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FdmMaterial, {
						color,
						layered
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						x * 1.2,
						.012,
						z * 1.2
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.018,
						16,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2824",
						roughness: .9
					})]
				})] }, i);
			})
		]
	});
}
function Bowl({ radius, color, position, water = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				radius * .82,
				radius * .74,
				.055,
				40
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .45
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.03,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					radius * .8,
					.012,
					10,
					40
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					roughness: .4
				})]
			}),
			!water ? [
				.22,
				.4,
				.58
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.01,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					radius * t * .82,
					.007,
					8,
					28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					roughness: .55
				})]
			}, t)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.014,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					radius * .7,
					radius * .7,
					.01,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#9eb7c4",
					roughness: .15,
					metalness: .1
				})]
			})
		]
	});
}
function FdmMaterial({ color, layered }) {
	const map = (0, import_react.useMemo)(() => {
		const canvas = document.createElement("canvas");
		canvas.width = 8;
		canvas.height = 128;
		const ctx = canvas.getContext("2d");
		if (!ctx) return null;
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, 8, 128);
		if (layered) {
			ctx.fillStyle = "rgba(0,0,0,0.18)";
			for (let y = 0; y < 128; y += 3) ctx.fillRect(0, y, 8, 1);
			ctx.fillStyle = "rgba(255,255,255,0.1)";
			for (let y = 1; y < 128; y += 3) ctx.fillRect(0, y, 8, 1);
		}
		const tex = new CanvasTexture(canvas);
		tex.wrapS = RepeatWrapping;
		tex.wrapT = RepeatWrapping;
		tex.repeat.set(2, 7);
		tex.colorSpace = SRGBColorSpace;
		return tex;
	}, [color, layered]);
	const mapRef = (0, import_react.useRef)(map);
	mapRef.current = map;
	(0, import_react.useEffect)(() => () => mapRef.current?.dispose(), [map]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: layered ? "#ffffff" : color,
		map: layered ? map : void 0,
		roughness: layered ? .74 : .38,
		metalness: .03
	});
}
//#endregion
export { StandCanvas as default };
