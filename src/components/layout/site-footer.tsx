import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-fg">
            <Mark className="size-6 text-primary" />
            <span className="font-display text-xl">Slowform</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Slow feed bowls nested in stands printed to the height of the animal who uses them. Made
            to order, one print at a time.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Shop</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/shop" className="text-fg hover:text-primary">
                All products
              </Link>
            </li>
            <li>
              <Link to="/studio" className="text-fg hover:text-primary">
                Custom stand studio
              </Link>
            </li>
            <li>
              <Link to="/guide" className="text-fg hover:text-primary">
                Height guide
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Studio</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/story" className="text-fg hover:text-primary">
                How we print
              </Link>
            </li>
            <li className="text-muted">Printed after you order</li>
            <li className="text-muted">Ships in 5–8 days</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto flex max-w-6xl justify-between px-4 py-5 text-xs text-muted sm:px-6">
          <span>© {new Date().getFullYear()} Slowform Studio</span>
          <span>PETG stands · PP bowls</span>
        </p>
      </div>
    </footer>
  );
}
