import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cartCount, cartTotal, saveOrder, useCart } from "@/lib/cart";
import { money, uid } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const navigate = useNavigate();
  const count = cartCount(lines);
  const goods = cartTotal(lines);
  const shipping = goods >= 120 ? 0 : 12;
  const total = goods + shipping;

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const empty = count === 0;

  const yearOptions = useMemo(() => {
    const y = new Date().getFullYear();
    return Array.from({ length: 8 }, (_, i) => y + i);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (empty) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const region = String(data.get("region") ?? "").trim();
    const postal = String(data.get("postal") ?? "").trim();
    if (!name || !email || !address || !city || !region || !postal) {
      setError("Fill every field so we know where to ship the print.");
      return;
    }
    setError("");
    setBusy(true);
    const id = `SF-${uid().slice(0, 8).toUpperCase()}`;
    saveOrder({
      id,
      createdAt: new Date().toISOString(),
      name,
      email,
      address,
      city,
      region,
      postal,
      lines,
      total,
    });
    clear();
    void navigate({ to: "/order/$id", params: { id } });
  }

  if (empty) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Nothing to check out</h1>
        <Button asChild className="mt-6">
          <Link to="/shop">Return to the shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={onSubmit} className="space-y-8">
        <div>
          <h1 className="font-display text-4xl text-fg">Checkout</h1>
          <p className="mt-2 text-sm text-muted">
            This is a studio preview — no charge is taken. The order is saved on this device so you
            can see the confirmation.
          </p>
        </div>

        <fieldset className="space-y-4">
          <legend className="font-display text-2xl">Ship to</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" autoComplete="name" />
            <Field name="email" label="Email" type="email" autoComplete="email" />
          </div>
          <Field name="address" label="Address" autoComplete="street-address" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Field name="city" label="City" autoComplete="address-level2" />
            <Field name="region" label="Region" autoComplete="address-level1" />
            <Field name="postal" label="Postal" autoComplete="postal-code" />
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-2xl">Pay</legend>
          <Field name="card" label="Card number" placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="exp-m">Month</Label>
              <select
                id="exp-m"
                name="exp-m"
                className="h-11 w-full rounded-md border border-border bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
                defaultValue="12"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1}>{String(i + 1).padStart(2, "0")}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="exp-y">Year</Label>
              <select
                id="exp-y"
                name="exp-y"
                className="h-11 w-full rounded-md border border-border bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
              >
                {yearOptions.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
            <Field name="cvc" label="CVC" placeholder="123" />
          </div>
        </fieldset>

        {error ? <p className="text-sm text-danger">{error}</p> : null}

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={busy}>
          Place order · {money(total)}
        </Button>
      </form>

      <aside className="h-fit rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-2xl">Order</h2>
        <ul className="mt-5 space-y-3">
          {lines.map((line) => (
            <li key={line.id} className="flex justify-between gap-3 text-sm">
              <span>
                {line.name}
                <span className="text-muted"> × {line.qty}</span>
                {line.detail ? <span className="mt-0.5 block text-xs text-muted">{line.detail}</span> : null}
              </span>
              <span className="tabular-nums">{money(line.unitPrice * line.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-between border-t border-border pt-4 text-sm">
          <span className="text-muted">Shipping</span>
          <span className="tabular-nums">{shipping === 0 ? "Free" : money(shipping)}</span>
        </div>
        <div className="mt-2 flex justify-between text-base">
          <span>Total</span>
          <span className="tabular-nums">{money(total)}</span>
        </div>
      </aside>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
