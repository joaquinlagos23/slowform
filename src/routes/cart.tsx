import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { QtyStepper } from "@/components/qty-stepper";
import { Button } from "@/components/ui/button";
import { cartCount, cartTotal, useCart } from "@/lib/cart";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const count = cartCount(lines);
  const total = cartTotal(lines);

  if (count === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-fg">The bag is empty</h1>
        <p className="mt-3 text-muted">A bowl, a stand, or a custom nest — start wherever you like.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link to="/shop">Shop</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/studio">Studio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h1 className="font-display text-4xl text-fg">Bag</h1>
        <ul className="mt-8 divide-y divide-border">
          {lines.map((line) => (
            <li key={line.id} className="flex gap-4 py-5">
              <Link
                to="/shop/$slug"
                params={{ slug: line.productId.startsWith("custom") ? "mid-nest" : line.productId }}
                className="size-24 shrink-0 overflow-hidden rounded-md bg-surface"
              >
                <img src={line.image} alt="" className="size-full object-cover" />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-xl text-fg">{line.name}</p>
                    {line.detail ? <p className="mt-1 text-sm text-muted">{line.detail}</p> : null}
                  </div>
                  <p className="text-sm tabular-nums">{money(line.unitPrice * line.qty)}</p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <QtyStepper value={line.qty} onChange={(qty) => setQty(line.id, qty)} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Remove ${line.name}`}
                    onClick={() => remove(line.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <aside className="h-fit rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl">Summary</h2>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Pieces</dt>
            <dd className="tabular-nums">{count}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Printing</dt>
            <dd>Included</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Shipping</dt>
            <dd>{total >= 120 ? "Free" : money(12)}</dd>
          </div>
          <div className="flex justify-between border-t border-border pt-3 text-base">
            <dt>Total</dt>
            <dd className="tabular-nums">{money(total + (total >= 120 ? 0 : 12))}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Custom stands ship in 5–8 days. Ready-made bowls leave sooner. Free shipping over $120.
        </p>
        <Button asChild size="lg" className="mt-6 w-full">
          <Link to="/checkout">Checkout</Link>
        </Button>
      </aside>
    </div>
  );
}
