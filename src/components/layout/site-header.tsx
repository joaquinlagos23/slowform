import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cartCount, useCart } from "@/lib/cart";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/studio", label: "Studio" },
  { to: "/guide", label: "Guide" },
  { to: "/story", label: "Story" },
] as const;

export function SiteHeader() {
  const lines = useCart((s) => s.lines);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setReady(true), []);
  const count = ready ? cartCount(lines) : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-fg">
          <Mark className="size-7 text-primary" />
          <span className="font-display text-xl tracking-tight">Slowform</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted transition-colors duration-(--motion-quick) hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="Cart">
            <Link to="/cart" className="relative">
              <ShoppingBag className="size-5" />
              {count > 0 ? (
                <span className="absolute top-1.5 right-1.5 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-xs leading-4 font-medium text-primary-fg tabular-nums">
                  {count}
                </span>
              ) : null}
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-10">Slowform</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex h-12 items-center text-lg text-fg"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/cart"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center text-lg text-fg"
                >
                  Cart{count ? ` (${count})` : ""}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
