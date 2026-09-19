import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { StandPreview } from "@/components/stand-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/lib/cart";
import {
  applySize,
  applySpecies,
  bowls,
  DEFAULT_CONFIG,
  describeStand,
  FILAMENTS,
  filamentById,
  priceStand,
  SIZE_COPY,
  type Finish,
  type PetSize,
  type Species,
  type StandConfig,
} from "@/lib/catalog";
import { cn, money } from "@/lib/utils";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  const [config, setConfig] = useState<StandConfig>(DEFAULT_CONFIG);
  const add = useCart((s) => s.add);
  const price = useMemo(() => priceStand(config), [config]);
  const color = filamentById(config.colorId);

  const set = (patch: Partial<StandConfig>) => setConfig((c) => ({ ...c, ...patch }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Studio</p>
      <h1 className="mt-2 font-display text-5xl text-fg">Print a stand</h1>
      <p className="mt-4 max-w-xl text-muted">
        Height, nest, and filament — the model updates as you go. We slice it after checkout and
        start the print that night.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <div className="h-[min(72vw,28rem)] lg:h-[36rem]">
            <StandPreview config={config} />
          </div>
          <div className="flex items-center justify-between border-t border-border px-5 py-4">
            <div>
              <p className="font-display text-xl text-fg">{color.name} nest</p>
              <p className="text-sm text-muted">{describeStand(config)}</p>
            </div>
            <p className="font-display text-2xl tabular-nums text-fg">{money(price)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Field label="Who it is for">
            <div className="flex gap-2">
              {(["dog", "cat"] as Species[]).map((species) => (
                <Chip
                  key={species}
                  active={config.species === species}
                  onClick={() => setConfig((c) => applySpecies(c, species))}
                >
                  {species === "dog" ? "Dog" : "Cat"}
                </Chip>
              ))}
            </div>
          </Field>

          <Field label="Size">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(SIZE_COPY) as PetSize[])
                .filter((size) => config.species === "dog" || size === "xs" || size === "sm")
                .map((size) => (
                  <Chip
                    key={size}
                    active={config.size === size}
                    onClick={() => setConfig((c) => applySize(c, size))}
                  >
                    {SIZE_COPY[size].label}
                  </Chip>
                ))}
            </div>
            <p className="mt-2 text-sm text-muted">
              {config.species === "cat" ? SIZE_COPY[config.size].cat : SIZE_COPY[config.size].dog}
            </p>
          </Field>

          <Field
            label="Rim height"
            extra={<span className="tabular-nums text-fg">{config.heightIn.toFixed(1)} in</span>}
          >
            <Slider
              min={3}
              max={14}
              step={0.5}
              value={[config.heightIn]}
              onValueChange={([value]) => set({ heightIn: value ?? config.heightIn })}
            />
            <p className="mt-2 text-sm text-muted">
              Measure to the withers, then drop an inch so the neck stays level — details in the
              guide.
            </p>
          </Field>

          <Field label="Nest">
            <div className="flex gap-2">
              <Chip active={config.nests === 1} onClick={() => set({ nests: 1 })}>
                Single
              </Chip>
              <Chip active={config.nests === 2} onClick={() => set({ nests: 2 })}>
                Twin
              </Chip>
            </div>
            <div className="mt-3 flex gap-2">
              {([6, 8, 10] as const).map((d) => (
                <Chip key={d} active={config.diameterIn === d} onClick={() => set({ diameterIn: d })}>
                  {d} in bowl
                </Chip>
              ))}
            </div>
          </Field>

          <Field label="Filament">
            <div className="flex flex-wrap gap-2">
              {FILAMENTS.map((filament) => (
                <button
                  key={filament.id}
                  type="button"
                  aria-label={filament.name}
                  title={filament.name}
                  onClick={() => set({ colorId: filament.id })}
                  className={cn(
                    "size-9 rounded-full shadow-[var(--shadow-border)]",
                    config.colorId === filament.id && "ring-2 ring-primary ring-offset-2 ring-offset-bg",
                  )}
                  style={{ backgroundColor: filament.hex }}
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-muted">{color.name} PETG — the color is the plastic.</p>
          </Field>

          <Field label="Print finish">
            <div className="flex gap-2">
              {(["layered", "smoothed"] as Finish[]).map((finish) => (
                <Chip
                  key={finish}
                  active={config.finish === finish}
                  onClick={() => set({ finish })}
                >
                  {finish === "layered" ? "Visible layers" : "Smoothed"}
                </Chip>
              ))}
            </div>
          </Field>

          <Field label="Nameplate">
            <Input
              maxLength={12}
              placeholder="Optional, 12 characters"
              value={config.nameplate}
              onChange={(e) => set({ nameplate: e.target.value })}
            />
          </Field>

          <Field label="Nest a bowl">
            <div className="flex flex-wrap gap-2">
              <Chip active={config.bowlSlug === null} onClick={() => set({ bowlSlug: null })}>
                Stand only
              </Chip>
              {bowls().map((bowl) => (
                <Chip
                  key={bowl.slug}
                  active={config.bowlSlug === bowl.slug}
                  onClick={() => set({ bowlSlug: bowl.slug })}
                >
                  {bowl.name}
                </Chip>
              ))}
            </div>
          </Field>

          <div className="rounded-xl bg-bg p-4 shadow-[var(--shadow-border-hover)] lg:static sticky bottom-3 z-10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Printed to order</p>
                <p className="font-display text-2xl tabular-nums">{money(price)}</p>
              </div>
              <Button
                size="lg"
                onClick={() => {
                  add({
                    productId: `custom:${JSON.stringify(config)}`,
                    name: "Custom nest",
                    image: "/products/stand-sage.jpg",
                    unitPrice: price,
                    detail: describeStand(config),
                  });
                  toast("Custom nest added to the bag");
                }}
              >
                Add to bag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  extra,
  children,
}: {
  label: string;
  extra?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <Label>{label}</Label>
        {extra}
      </div>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-4 text-sm transition-colors duration-(--motion-quick)",
        active ? "bg-primary text-primary-fg" : "bg-surface text-fg hover:bg-stone",
      )}
    >
      {children}
    </button>
  );
}
