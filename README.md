# Slowform

Slow-feed bowls nested in stands printed to the height of the animal who uses them.

This is the Grok Build shop: catalog, custom stand studio (live 3D), cart, checkout preview, height guide, and a printable **Bloom** bowl STL for a Creality K1C on PETG.

## Run it

```bash
npm install
npm run dev
```

App listens on port 8080.

## Print file

- [`public/print/slowform-bloom.stl`](public/print/slowform-bloom.stl) — Bloom bowl, ~196 × 50 mm, floor-down, no supports
- [`public/print/slowform-bloom-k1c-petg.md`](public/print/slowform-bloom-k1c-petg.md) — K1C / PETG slice settings

Regenerate the STL with `python3 scripts/make_bloom_bowl.py` (needs `trimesh`, `shapely`, `manifold3d`).

## Stack

TanStack Start, Tailwind v4, Zustand cart, React Three Fiber studio.
