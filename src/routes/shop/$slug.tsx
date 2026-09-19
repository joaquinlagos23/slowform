import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product-card";
import { QtyStepper } from "@/components/qty-stepper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { productBySlug, relatedProducts } from "@/lib/catalog";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">That piece is not in the shop.</h1>
      <Button asChild className="mt-6">
        <Link to="/shop">Back to the collection</Link>
      </Button>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(product.gallery[0] ?? product.image);
  const related = relatedProducts(product.slug);

  useEffect(() => {
    setActive(product.gallery[0] ?? product.image);
    setQty(1);
  }, [product]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">
        <Link to="/shop" className="hover:text-fg">
          Shop
        </Link>
        <span className="mx-2">/</span>
        {product.kind}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <img src={active} alt={product.name} className="aspect-square w-full object-cover" />
          </div>
          {product.gallery.length > 1 ? (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className={`overflow-hidden rounded-md ${active === src ? "ring-2 ring-primary" : ""}`}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{product.kind === "bundle" ? "set" : product.kind}</Badge>
            {product.bestseller ? <Badge variant="default">Often chosen</Badge> : null}
          </div>
          <h1 className="mt-4 font-display text-5xl text-fg">{product.name}</h1>
          <p className="mt-3 text-lg text-muted">{product.tagline}</p>
          <p className="mt-4 font-display text-3xl tabular-nums text-fg">
            {money(product.price)}
            {product.compareAt ? (
              <span className="ml-3 text-xl text-muted line-through">{money(product.compareAt)}</span>
            ) : null}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm text-fg">
            {product.details.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QtyStepper value={qty} onChange={setQty} />
            <Button
              size="lg"
              onClick={() => {
                add({
                  productId: product.slug,
                  name: product.name,
                  image: product.image,
                  unitPrice: product.price,
                  qty,
                });
                toast(`Added ${product.name}`);
              }}
            >
              Add to bag · {money(product.price * qty)}
            </Button>
          </div>
          {product.slug === "bloom" ? (
            <div className="mt-8 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Print file</p>
              <h2 className="mt-1 font-display text-2xl text-fg">K1C · PETG</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Floor-down, no supports. 196 × 50 mm so it fits a 220 mm bed with a 5 mm brim. Slice
                at 250 °C / 75 °C bed, 0.20 mm layers, 4 walls.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild>
                  <a href="/print/slowform-bloom.stl" download>
                    Download STL
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/print/slowform-bloom-k1c-petg.md" download>
                    Print settings
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
          {product.kind !== "stand" ? (
            <p className="mt-4 text-sm text-muted">
              Need a height that is not on the shelf?{" "}
              <Link to="/studio" className="text-fg underline underline-offset-4">
                Print a custom nest
              </Link>
              .
            </p>
          ) : (
            <p className="mt-4 text-sm text-muted">
              Want a different height or color?{" "}
              <Link to="/studio" className="text-fg underline underline-offset-4">
                Open the studio
              </Link>
              .
            </p>
          )}

          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">{spec.label}</dt>
                <dd className="mt-1 text-sm text-fg">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl text-fg">Also in the studio</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
