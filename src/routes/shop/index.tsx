import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS, type ProductKind } from "@/lib/catalog";

export const Route = createFileRoute("/shop/")({ component: ShopPage });

const FILTERS: { id: "all" | ProductKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bowl", label: "Bowls" },
  { id: "stand", label: "Stands" },
  { id: "bundle", label: "Sets" },
];

function ShopPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const items = useMemo(
    () => PRODUCTS.filter((p) => filter === "all" || p.kind === filter),
    [filter],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-primary">Shop</p>
      <h1 className="mt-2 font-display text-5xl text-fg">The collection</h1>
      <p className="mt-4 max-w-xl text-muted">
        Slow-feed bowls in five patterns, ready-made stands in the heights we print most, and kits
        that nest them together. Anything else is a Studio print.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <Button
            key={item.id}
            type="button"
            size="sm"
            variant={filter === item.id ? "default" : "outline"}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
