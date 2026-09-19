//#region node_modules/.nitro/vite/services/ssr/assets/catalog-ChWt65pM.js
var FILAMENTS = [
	{
		id: "bone",
		name: "Bone",
		hex: "#e6d9c4"
	},
	{
		id: "sand",
		name: "Sand",
		hex: "#c4a882"
	},
	{
		id: "clay",
		name: "Clay",
		hex: "#a86b4f"
	},
	{
		id: "blush",
		name: "Blush",
		hex: "#c9a39a"
	},
	{
		id: "sage",
		name: "Sage",
		hex: "#6b7f6a"
	},
	{
		id: "forest",
		name: "Forest",
		hex: "#3d5a45"
	},
	{
		id: "slate",
		name: "Slate",
		hex: "#5c6570"
	},
	{
		id: "charcoal",
		name: "Charcoal",
		hex: "#3a3937"
	}
];
var SIZE_COPY = {
	xs: {
		label: "XS",
		dog: "Under 12 lb",
		cat: "Most cats",
		heightDog: 3.5,
		heightCat: 3.5,
		diameter: 6
	},
	sm: {
		label: "Small",
		dog: "12–25 lb",
		cat: "Large cats",
		heightDog: 5.5,
		heightCat: 4,
		diameter: 8
	},
	md: {
		label: "Medium",
		dog: "25–50 lb",
		cat: "—",
		heightDog: 8,
		heightCat: 4.5,
		diameter: 8
	},
	lg: {
		label: "Large",
		dog: "50–90 lb",
		cat: "—",
		heightDog: 10.5,
		heightCat: 5,
		diameter: 10
	},
	xl: {
		label: "Giant",
		dog: "90 lb and up",
		cat: "—",
		heightDog: 13,
		heightCat: 5,
		diameter: 10
	}
};
var DEFAULT_CONFIG = {
	species: "dog",
	size: "md",
	heightIn: 8,
	nests: 1,
	diameterIn: 8,
	colorId: "sage",
	finish: "layered",
	nameplate: "",
	bowlSlug: "spiral"
};
var PRODUCTS = [
	{
		slug: "spiral",
		kind: "bowl",
		name: "Spiral",
		tagline: "A single path that makes them work for every bite.",
		price: 34,
		image: "/products/spiral.jpg",
		gallery: [
			"/products/spiral.jpg",
			"/products/kibble.jpg",
			"/products/set-sand.jpg"
		],
		description: "The bowl that started the studio. A continuous spiral maze drops eating speed without turning dinner into a puzzle they give up on. Wide enough for a medium muzzle, deep enough that kibble stays in the channel.",
		details: [
			"Food-grade polypropylene",
			"Fits the 8-inch Slowform nest",
			"Top-rack dishwasher safe",
			"Holds about 2 cups"
		],
		specs: [
			{
				label: "Diameter",
				value: "8 in"
			},
			{
				label: "Hold",
				value: "2 cups"
			},
			{
				label: "Muzzle",
				value: "Small–medium"
			},
			{
				label: "Pace",
				value: "About 2× slower"
			}
		],
		featured: true,
		bestseller: true,
		bowlColor: "#b56845"
	},
	{
		slug: "pebble",
		kind: "bowl",
		name: "Pebble",
		tagline: "A field of rounded islands. Gentle on brachycephalic faces.",
		price: 32,
		image: "/products/pebble.jpg",
		gallery: [
			"/products/pebble.jpg",
			"/products/frenchie.jpg",
			"/products/kibble.jpg"
		],
		description: "Raised pebbles scatter kibble so short-nosed dogs can eat without jamming a snout into a trench. The islands are fully rounded — no sharp maze walls — and the bowl still sits true in an 8-inch nest.",
		details: [
			"Rounded pebble field, no sharp ridges",
			"Designed with Frenchies and Pugs in mind",
			"Food-grade polypropylene",
			"Top-rack dishwasher safe"
		],
		specs: [
			{
				label: "Diameter",
				value: "8 in"
			},
			{
				label: "Hold",
				value: "1.75 cups"
			},
			{
				label: "Muzzle",
				value: "Short and wide"
			},
			{
				label: "Pace",
				value: "About 1.5× slower"
			}
		],
		featured: true,
		bowlColor: "#7a8b74"
	},
	{
		slug: "labyrinth",
		kind: "bowl",
		name: "Labyrinth",
		tagline: "Concentric ridges for dogs who inhale dinner.",
		price: 36,
		image: "/products/labyrinth.jpg",
		gallery: ["/products/labyrinth.jpg", "/products/kibble.jpg"],
		description: "Tight concentric channels for the dedicated gulper. Each ring is a speed bump. Best for medium and long muzzles that can follow a path; skip this one for very short faces.",
		details: [
			"Deep concentric maze",
			"Highest slow-down of the collection",
			"Food-grade polypropylene",
			"Fits the 8-inch nest"
		],
		specs: [
			{
				label: "Diameter",
				value: "8 in"
			},
			{
				label: "Hold",
				value: "2 cups"
			},
			{
				label: "Muzzle",
				value: "Medium–long"
			},
			{
				label: "Pace",
				value: "About 3× slower"
			}
		],
		bestseller: true,
		bowlColor: "#3a3937"
	},
	{
		slug: "bloom",
		kind: "bowl",
		name: "Bloom",
		tagline: "Petal walls that fan kibble outward.",
		price: 38,
		image: "/products/bloom.jpg",
		gallery: ["/products/bloom.jpg", "/products/cat.jpg"],
		description: "Overlapping petals create pockets instead of a single trench. A quieter, more decorative maze that still slows a fast eater — and the 8-inch nest loves it. Works for cats and small dogs in a 6-inch custom nest too.",
		details: [
			"Petal pockets, not a single spiral",
			"Gentle enough for cats",
			"Food-grade polypropylene",
			"Top-rack dishwasher safe"
		],
		specs: [
			{
				label: "Diameter",
				value: "8 in"
			},
			{
				label: "Hold",
				value: "1.5 cups"
			},
			{
				label: "Muzzle",
				value: "Cat to medium dog"
			},
			{
				label: "Pace",
				value: "About 2× slower"
			}
		],
		featured: true,
		bowlColor: "#c9a39a"
	},
	{
		slug: "current",
		kind: "bowl",
		name: "Current",
		tagline: "Wave channels that keep wet and dry food moving, not stuck.",
		price: 36,
		image: "/products/current.jpg",
		gallery: ["/products/current.jpg", "/products/kibble.jpg"],
		description: "S-shaped wave walls are easier to rinse than a tight maze and kinder to wet food. The current pattern slows without trapping pâté in a corner you will later regret.",
		details: [
			"Open wave channels",
			"Wet-food friendly",
			"Food-grade polypropylene",
			"Fits the 8-inch nest"
		],
		specs: [
			{
				label: "Diameter",
				value: "8 in"
			},
			{
				label: "Hold",
				value: "2 cups"
			},
			{
				label: "Muzzle",
				value: "All"
			},
			{
				label: "Pace",
				value: "About 1.8× slower"
			}
		],
		bowlColor: "#6a7b8a"
	},
	{
		slug: "mid-nest",
		kind: "stand",
		name: "Mid Nest",
		tagline: "The 8-inch stand. Printed in sage, nested for our 8-inch bowls.",
		price: 64,
		image: "/products/stand-sage.jpg",
		gallery: [
			"/products/stand-sage.jpg",
			"/products/hero.jpg",
			"/products/set-sand.jpg"
		],
		description: "A three-legged cradle printed as one piece in PETG. The nest is sized to our 8-inch bowls so the dish drops in and stays put. Eight inches to the rim is the height we print most often — typical for a 25–50 lb dog.",
		details: [
			"Printed to order in PETG",
			"8-inch nest, 8-inch rim height",
			"TPU feet that will not skate",
			"Color is the filament — no paint"
		],
		specs: [
			{
				label: "Height",
				value: "8 in"
			},
			{
				label: "Nest",
				value: "8 in bowl"
			},
			{
				label: "Material",
				value: "PETG"
			},
			{
				label: "Print time",
				value: "About 14 hours"
			}
		],
		featured: true,
		bestseller: true,
		bowlColor: "#6b7f6a"
	},
	{
		slug: "low-nest",
		kind: "stand",
		name: "Low Nest",
		tagline: "A 5-inch cradle for small dogs who still deserve a stand.",
		price: 54,
		image: "/products/frenchie.jpg",
		gallery: [
			"/products/frenchie.jpg",
			"/products/set-sand.jpg",
			"/products/pebble.jpg"
		],
		description: "Not every raised bowl should be tall. Low Nest is for terriers, Frenchies, and anyone whose withers sit closer to the floor. Same sculptural print, shorter legs, 8-inch nest.",
		details: [
			"5.5-inch rim height",
			"8-inch nest",
			"Printed in sand PETG",
			"TPU feet included"
		],
		specs: [
			{
				label: "Height",
				value: "5.5 in"
			},
			{
				label: "Nest",
				value: "8 in bowl"
			},
			{
				label: "Material",
				value: "PETG"
			},
			{
				label: "Best for",
				value: "12–25 lb dogs"
			}
		],
		bowlColor: "#c4a882"
	},
	{
		slug: "twin-cradle",
		kind: "stand",
		name: "Twin Cradle",
		tagline: "Food and water, one print, two nests.",
		price: 88,
		image: "/products/twin.jpg",
		gallery: ["/products/twin.jpg", "/products/stand-sage.jpg"],
		description: "A bridged dual nest printed as a single piece. One side for a slow-feed bowl, one for water. The span is short enough to sit on a standard mat, long enough that kibble does not migrate into the water dish.",
		details: [
			"Two 8-inch nests",
			"8-inch rim height",
			"Charcoal PETG",
			"Bowls sold separately — or take The Morning Pair"
		],
		specs: [
			{
				label: "Height",
				value: "8 in"
			},
			{
				label: "Nests",
				value: "Two × 8 in"
			},
			{
				label: "Material",
				value: "PETG"
			},
			{
				label: "Print time",
				value: "About 22 hours"
			}
		],
		featured: true,
		bowlColor: "#3a3937"
	},
	{
		slug: "cat-perch",
		kind: "stand",
		name: "Cat Perch",
		tagline: "A 3.5-inch nest for cats who prefer not to crouch.",
		price: 48,
		image: "/products/cat.jpg",
		gallery: ["/products/cat.jpg", "/products/bloom.jpg"],
		description: "Cats are not small dogs. Cat Perch is a low, stable 6-inch nest at whisker-friendly height. Pair it with Bloom or Spiral. Printed in blush PETG.",
		details: [
			"3.5-inch rim height",
			"6-inch nest",
			"Wide tripod that cats cannot tip",
			"Printed in blush PETG"
		],
		specs: [
			{
				label: "Height",
				value: "3.5 in"
			},
			{
				label: "Nest",
				value: "6 in bowl"
			},
			{
				label: "Material",
				value: "PETG"
			},
			{
				label: "Best for",
				value: "Cats"
			}
		],
		bowlColor: "#c9a39a"
	},
	{
		slug: "spiral-set",
		kind: "bundle",
		name: "The Spiral Set",
		tagline: "Spiral bowl nested in a sand Mid Nest. The classic pairing.",
		price: 86,
		compareAt: 98,
		image: "/products/set-sand.jpg",
		gallery: [
			"/products/set-sand.jpg",
			"/products/spiral.jpg",
			"/products/hero.jpg"
		],
		description: "The pairing we print most. A terracotta Spiral seated in an 8-inch sand stand. Ready to put down the night it arrives — no measuring, no Studio visit required.",
		details: [
			"Includes Spiral bowl and Mid Nest in sand",
			"8-inch height, 8-inch nest",
			"Saves $12 versus buying apart",
			"Ships as one kit"
		],
		specs: [
			{
				label: "Height",
				value: "8 in"
			},
			{
				label: "Bowl",
				value: "Spiral, 2 cups"
			},
			{
				label: "Stand color",
				value: "Sand"
			},
			{
				label: "Ships",
				value: "5–8 days"
			}
		],
		featured: true,
		bestseller: true,
		bowlColor: "#c4a882"
	},
	{
		slug: "morning-pair",
		kind: "bundle",
		name: "The Morning Pair",
		tagline: "Twin Cradle with Spiral and Pebble already nested.",
		price: 142,
		compareAt: 154,
		image: "/products/twin.jpg",
		gallery: [
			"/products/twin.jpg",
			"/products/spiral.jpg",
			"/products/pebble.jpg"
		],
		description: "Breakfast, solved. Dual charcoal stand, Spiral for kibble, Pebble for whatever they prefer on the other side — water, wet food, or a second course.",
		details: [
			"Twin Cradle in charcoal",
			"Spiral and Pebble bowls included",
			"8-inch height",
			"Saves $12 versus buying apart"
		],
		specs: [
			{
				label: "Height",
				value: "8 in"
			},
			{
				label: "Nests",
				value: "Two"
			},
			{
				label: "Bowls",
				value: "Spiral + Pebble"
			},
			{
				label: "Ships",
				value: "5–8 days"
			}
		],
		bowlColor: "#3a3937"
	}
];
function productBySlug(slug) {
	return PRODUCTS.find((p) => p.slug === slug);
}
function bowls() {
	return PRODUCTS.filter((p) => p.kind === "bowl");
}
function filamentById(id) {
	return FILAMENTS.find((f) => f.id === id) ?? FILAMENTS[0];
}
function applySize(config, size) {
	const preset = SIZE_COPY[size];
	return {
		...config,
		size,
		heightIn: config.species === "cat" ? preset.heightCat : preset.heightDog,
		diameterIn: config.species === "cat" ? 6 : preset.diameter
	};
}
function applySpecies(config, species) {
	const next = {
		...config,
		species
	};
	if (species === "cat") return applySize({
		...next,
		size: "xs"
	}, "xs");
	return applySize(next, config.size === "xs" ? "md" : config.size);
}
function priceStand(config) {
	const base = 52;
	const height = Math.max(0, config.heightIn - 3) * 3.5;
	const dual = config.nests === 2 ? 24 : 0;
	const dia = config.diameterIn === 10 ? 8 : config.diameterIn === 6 ? 0 : 4;
	const finish = config.finish === "smoothed" ? 10 : 0;
	const plate = config.nameplate.trim() ? 14 : 0;
	const bowl = config.bowlSlug ? productBySlug(config.bowlSlug)?.price ?? 0 : 0;
	return Math.round((base + height + dual + dia + finish + plate + bowl) * 100) / 100;
}
function describeStand(config) {
	const color = filamentById(config.colorId).name;
	const bowl = config.bowlSlug ? productBySlug(config.bowlSlug)?.name : null;
	const bits = [
		`${config.heightIn} in`,
		`${config.diameterIn} in nest`,
		config.nests === 2 ? "twin" : "single",
		color,
		config.finish === "layered" ? "visible layers" : "smoothed"
	];
	if (config.nameplate.trim()) bits.push(`“${config.nameplate.trim()}”`);
	if (bowl) bits.push(`${bowl} bowl`);
	return bits.join(" · ");
}
function relatedProducts(slug, limit = 3) {
	const current = productBySlug(slug);
	if (!current) return PRODUCTS.slice(0, limit);
	return PRODUCTS.filter((p) => p.slug !== slug).sort((a, b) => {
		if (a.kind === current.kind && b.kind !== current.kind) return -1;
		if (b.kind === current.kind && a.kind !== current.kind) return 1;
		return 0;
	}).slice(0, limit);
}
//#endregion
export { applySize as a, describeStand as c, productBySlug as d, relatedProducts as f, SIZE_COPY as i, filamentById as l, FILAMENTS as n, applySpecies as o, PRODUCTS as r, bowls as s, DEFAULT_CONFIG as t, priceStand as u };
