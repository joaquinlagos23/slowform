import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getOrder, type Order } from "@/lib/cart";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/order/$id")({ component: OrderPage });

function OrderPage() {
  const { id } = Route.useParams();
  const [order, setOrder] = useState<Order | null | undefined>(undefined);

  useEffect(() => {
    setOrder(getOrder(id) ?? null);
  }, [id]);

  if (order === undefined) {
    return <div className="mx-auto max-w-xl px-4 py-24 text-muted">Looking up the order…</div>;
  }

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">We cannot find that order</h1>
        <p className="mt-3 text-muted">Confirmations live on this device after checkout.</p>
        <Button asChild className="mt-6">
          <Link to="/shop">Back to the shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Order {order.id}</p>
      <h1 className="mt-2 font-display text-5xl text-fg">We have the file.</h1>
      <p className="mt-4 text-muted">
        {order.name}, a note is on its way to {order.email}. Custom prints go on the printers
        tonight; ready-made bowls leave with the next parcel.
      </p>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {order.lines.map((line) => (
          <li key={line.id} className="flex justify-between gap-3 py-4 text-sm">
            <span>
              {line.name} × {line.qty}
              {line.detail ? <span className="mt-0.5 block text-muted">{line.detail}</span> : null}
            </span>
            <span className="tabular-nums">{money(line.unitPrice * line.qty)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <span>Total</span>
        <span className="tabular-nums">{money(order.total)}</span>
      </div>
      <p className="mt-6 text-sm text-muted">
        Ships to {order.address}, {order.city} {order.region} {order.postal}.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}
