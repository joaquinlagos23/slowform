#!/usr/bin/env python3
"""Generate Slowform Bloom slow-feed bowl STL (mm) for Creality K1C / PETG."""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
import trimesh
from shapely.geometry import LineString, Point, Polygon
from shapely.ops import unary_union

OUT = Path("/workspace/public/print")
OUT.mkdir(parents=True, exist_ok=True)

# --- geometry (millimetres) -------------------------------------------------
N_PETALS = 5
R_MEAN = 88.0
PETAL = 0.11
WALL = 3.0
FLOOR = 3.2
HEIGHT = 48.0
HUB_R = 14.0
HUB_H = 24.0
SPIRAL_T = 2.52
SPIRAL_H = 28.0
SPIRAL_TURNS = 2.15
SAMPLES = 360


def flower_r(theta: np.ndarray, scale: float = 1.0) -> np.ndarray:
    return scale * R_MEAN * (1.0 + PETAL * np.cos(N_PETALS * theta))


def flower_poly(scale: float, inset: float = 0.0) -> Polygon:
    th = np.linspace(0, 2 * np.pi, SAMPLES, endpoint=False)
    r = np.maximum(flower_r(th, scale) - inset, 1.0)
    xy = np.column_stack((r * np.cos(th), r * np.sin(th)))
    return Polygon(xy).buffer(0)


def extrude(poly: Polygon, height: float, cap=True) -> trimesh.Trimesh:
    mesh = trimesh.creation.extrude_polygon(poly, height)
    if not cap:
        return mesh
    return mesh


def spiral_polygon() -> Polygon:
    inner = flower_poly(1.0, WALL + 5.0)
    r_end = float(np.sqrt(inner.area / np.pi)) - 3.0
    r_start = HUB_R + 3.0
    n = 900
    theta = np.linspace(0, SPIRAL_TURNS * 2 * np.pi, n)
    # Archimedean spiral that stays inside the cavity
    r = np.linspace(r_start, r_end, n)
    # slight petal modulation so pockets follow the bloom
    r = r * (1.0 + 0.04 * np.cos(N_PETALS * theta))
    pts = np.column_stack((r * np.cos(theta), r * np.sin(theta)))
    line = LineString(pts)
    return line.buffer(SPIRAL_T / 2, cap_style=2, join_style=2)


def build() -> trimesh.Trimesh:
    outer = flower_poly(1.0, 0.0)
    cavity = flower_poly(1.0, WALL)

    body = extrude(outer, HEIGHT)
    # Overshoot the top so the cavity actually opens — coincident faces
    # leave the extrusion cap in place.
    void = extrude(cavity, HEIGHT - FLOOR + 6)
    void.apply_translation((0, 0, FLOOR))
    bowl = trimesh.boolean.difference([body, void], engine="manifold")

    hub = trimesh.creation.cylinder(radius=HUB_R, height=HUB_H, sections=64)
    hub.apply_translation((0, 0, HUB_H / 2))
    # slight dome
    cap = trimesh.creation.icosphere(subdivisions=3, radius=HUB_R * 0.92)
    cap.apply_translation((0, 0, HUB_H - 2.0))

    spir = extrude(spiral_polygon(), SPIRAL_H)
    # keep spiral inside the cavity (don't pierce outer wall)
    clip = extrude(cavity, SPIRAL_H + 1)
    spir = trimesh.boolean.intersection([spir, clip], engine="manifold")

    merged = trimesh.boolean.union([bowl, hub, cap, spir], engine="manifold")
    merged.merge_vertices()
    # Do not fill_holes — that caps the bowl shut.
    merged.apply_translation(
        (
            -float((merged.bounds[0, 0] + merged.bounds[1, 0]) / 2),
            -float((merged.bounds[0, 1] + merged.bounds[1, 1]) / 2),
            -float(merged.bounds[0, 2]),
        )
    )
    # Fit an 8-inch nest on a 220 mm K1C bed (5 mm brim still clears).
    s = 196.0 / float(max(merged.extents[0], merged.extents[1]))
    merged.apply_scale(s)
    merged.apply_translation((0.0, 0.0, -float(merged.bounds[0, 2])))
    return merged


def main() -> None:
    mesh = build()
    assert mesh.is_watertight, "mesh is not watertight"
    extents = mesh.extents
    print("watertight", mesh.is_watertight)
    print("volume_cm3", round(mesh.volume / 1000, 1))
    print("extents_mm", np.round(extents, 2))
    print("triangles", len(mesh.faces))
    print("z", np.round(mesh.bounds[:, 2], 2))
    if extents[0] > 218 or extents[1] > 218:
        raise SystemExit(f"does not fit K1C 220 bed: {extents}")

    stl_path = OUT / "slowform-bloom.stl"
    mesh.export(stl_path, file_type="stl")
    print("wrote", stl_path, "bytes", stl_path.stat().st_size)

    settings = {
        "printer": "Creality K1C",
        "build_volume_mm": [220, 220, 250],
        "nozzle_mm": 0.4,
        "filament": "PETG",
        "part": "Slowform Bloom slow-feed bowl",
        "orientation": "Floor on the bed, petals up. No supports.",
        "process": {
            "layer_height_mm": 0.20,
            "first_layer_height_mm": 0.24,
            "line_width_mm": 0.42,
            "wall_loops": 4,
            "top_shell_layers": 5,
            "bottom_shell_layers": 6,
            "infill_percent": 25,
            "infill_pattern": "gyroid",
            "brim_type": "outer_only",
            "brim_width_mm": 5,
            "supports": False,
            "ironing": False,
            "fuzzy_skin": False,
        },
        "temperatures": {
            "nozzle_C": 250,
            "nozzle_first_layer_C": 255,
            "bed_C": 75,
            "bed_first_layer_C": 80,
            "chamber": "Door closed. Leave the top glass off or cracked so PETG does not heat-creep.",
        },
        "speeds_mm_s": {
            "first_layer": 40,
            "outer_wall": 80,
            "inner_wall": 140,
            "infill": 160,
            "travel": 300,
            "max_volumetric_mm3_s": 12,
        },
        "cooling": {
            "fan_percent": 40,
            "min_layer_time_s": 10,
            "fan_off_first_layers": 3,
        },
        "retraction": {
            "length_mm": 0.8,
            "speed_mm_s": 40,
            "z_hop_mm": 0.4,
            "pressure_advance": 0.05,
        },
        "bed": "Textured PEI. Glue stick or a thin PETG slurry. Wait for a full cooldown before removing.",
        "estimate": {
            "filament_g": round(mesh.volume * 0.00127, 0),
            "print_hours": "about 7–9 at these speeds",
        },
        "notes": [
            "STL units are millimetres. Do not scale in the slicer.",
            "Max diameter is under 196 mm so it fits a 220 mm K1C bed with a 5 mm brim.",
            "The 8-inch Slowform nest is 203 mm; this bowl sits in with clearance.",
            "PETG likes a hot first layer and a dry spool (50–55 C for 4–6 h if it has been open).",
        ],
    }
    (OUT / "slowform-bloom-k1c-petg.json").write_text(json.dumps(settings, indent=2))

    md = f"""# Slowform Bloom — K1C / PETG

Print the bowl **floor-down**. No supports. STL is in millimetres — do not scale.

## Machine
- Creality **K1C**, 0.4 mm nozzle
- Bed: 220 × 220 mm (this part is {extents[0]:.1f} × {extents[1]:.1f} × {extents[2]:.1f} mm)

## Temperatures
| | |
|---|---|
| Nozzle | **250 °C** (255 °C first layer) |
| Bed | **75 °C** (80 °C first layer) |
| Door | Closed |
| Lid | Off or cracked — PETG heat-creeps in a fully sealed K1C |

## Process
| | |
|---|---|
| Layer height | 0.20 mm (first 0.24 mm) |
| Line width | 0.42 mm |
| Walls | 4 |
| Top / bottom | 5 / 6 |
| Infill | 25% gyroid |
| Brim | 5 mm outer |
| Supports | None |
| Fan | 0% for 3 layers, then 40% |
| Min layer time | 10 s |

## Speeds (not PLA speeds)
| | |
|---|---|
| First layer | 40 mm/s |
| Outer wall | 80 mm/s |
| Inner wall | 140 mm/s |
| Infill | 160 mm/s |
| Volumetric cap | 12 mm³/s |

## Retraction
Direct drive: **0.8 mm** at 40 mm/s, Z-hop 0.4 mm. Pressure advance ≈ 0.05.

## Bed
Textured PEI plus glue stick. Let the plate cool to the click before prying — PETG holds on.

Dry the spool if it has been open. Wet PETG on a K1C is stringy and weak at the petal tips.

~{settings["estimate"]["filament_g"]:.0f} g, about 7–9 hours.
"""
    (OUT / "slowform-bloom-k1c-petg.md").write_text(md)
    print("settings written")


if __name__ == "__main__":
    main()
