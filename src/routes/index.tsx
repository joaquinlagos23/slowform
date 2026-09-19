import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Slow feed bowls · 3D-printed stands
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-fg sm:text-6xl lg:text-7xl">
            A slower bowl.
            <span className="mt-2 block italic text-primary">A stand made for them.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Off-the-shelf raised bowls are one height. Floor bowls make them gulp. We print a nest
            to your bowl, sliced to the animal who uses it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/studio">
                Design a stand
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/shop">Shop the collection</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img
            src="/products/hero.jpg"
            alt="A golden dog eating from a maze bowl nested in a sage 3D-printed stand"
            className="aspect-photo w-full object-cover lg:aspect-square"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Slow the meal",
              d: "Maze, pebble, and wave bowls that turn gulping into a paced ten minutes.",
            },
            {
              n: "02",
              t: "Match the height",
              d: "Rim height from 3.5 inches for cats to 13 for giants. Not a one-size riser.",
            },
            {
              n: "03",
              t: "Print the nest",
              d: "Each stand is PETG, printed after you order, with a cradle sized to the bowl.",
            },
          ].map((item) => (
            <div key={item.n}>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">{item.n}</p>
              <h2 className="mt-3 font-display text-2xl text-fg">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-primary">Collection</p>
            <h2 className="mt-2 font-display text-4xl text-fg">Ready to nest</h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/shop">
              All products
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-fg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-primary-fg/70">The Studio</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Dial in height, color, and nest. Watch the stand take shape.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-fg/80">
              Pick a size, a filament, one nest or two. Add a nameplate. We slice the file the same
              day and print overnight.
            </p>
            <Button asChild size="lg" variant="inverse" className="mt-8">
              <Link to="/studio">
                Open the studio
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/products/printer.jpg"
              alt="A desktop 3D printer producing a sage PETG stand"
              className="aspect-photo w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-surface">
          <img
            src="/products/kibble.jpg"
            alt="Kibble resting in the ridges of a spiral slow-feed bowl"
            className="aspect-photo w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Why slow</p>
          <h2 className="mt-3 font-display text-4xl text-fg">Gulping is a design problem.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Fast eating is linked to regurgitation, extra air, and in deep-chested dogs, a higher
            bloat risk. A maze does not treat a medical condition — it buys minutes. Pair it with a
            height that lets the neck stay level, and dinner gets quieter for everyone in the room.
          </p>
          <Button asChild variant="outline" className="mt-6 w-fit">
            <Link to="/guide">Read the height guide</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
