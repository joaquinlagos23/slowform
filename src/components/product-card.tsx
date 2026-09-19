import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/catalog";
import { money } from "@/lib/utils";

function kindLabel(kind: Product["kind"]) {
  if (kind === "bowl") return "Bowl";
  if (kind === "stand") return "Stand";
  return "Set";
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-(--motion-fast) ease-(--ease-out) group-hover:shadow-[var(--shadow-border-hover)]">
        <div className="relative aspect-square overflow-hidden bg-stone">
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-cover transition-transform duration-(--motion-slow) ease-(--ease-out) group-hover:scale-[1.03]"
          />
          {product.bestseller ? (
            <Badge variant="default" className="absolute top-3 left-3">
              Often chosen
            </Badge>
          ) : null}
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">{kindLabel(product.kind)}</p>
          <h3 className="font-display text-xl tracking-tight text-fg">{product.name}</h3>
        </div>
        <p className="text-sm tabular-nums text-fg">
          {money(product.price)}
          {product.compareAt ? (
            <span className="ml-2 text-muted line-through">{money(product.compareAt)}</span>
          ) : null}
        </p>
      </div>
      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
    </Link>
  );
}
