import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SIZE_COPY } from "@/lib/catalog";

export const Route = createFileRoute("/guide")({ component: GuidePage });

const ROWS = (Object.keys(SIZE_COPY) as Array<keyof typeof SIZE_COPY>).map((key) => {
  const row = SIZE_COPY[key];
  return {
    size: row.label,
    dog: row.dog,
    height: `${row.heightDog} in`,
    nest: `${row.diameter} in`,
  };
});

function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Guide</p>
      <h1 className="mt-2 font-display text-5xl text-fg">Height, then maze.</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        A raised bowl that is too tall is as awkward as one on the floor. Measure once, print once.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">How to measure</h2>
        <ol className="mt-5 space-y-4 text-base leading-relaxed text-muted">
          <li>
            <span className="font-medium text-fg">1. Withers, not the head.</span> Have them stand
            square. Measure from the floor to the top of the shoulder blade.
          </li>
          <li>
            <span className="font-medium text-fg">2. Drop an inch.</span> Rim height should sit
            slightly below the withers so the neck stays long and level, not cranked up.
          </li>
          <li>
            <span className="font-medium text-fg">3. Fit the muzzle to the maze.</span> Short faces
            get Pebble. Dedicated gulpers get Labyrinth. Everyone else can start with Spiral.
          </li>
        </ol>
      </section>

      <section className="mt-12 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium">Typical dog</th>
              <th className="px-4 py-3 font-medium">Rim</th>
              <th className="px-4 py-3 font-medium">Nest</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.size} className="border-t border-border">
                <td className="px-4 py-3 text-fg">{row.size}</td>
                <td className="px-4 py-3 text-muted">{row.dog}</td>
                <td className="px-4 py-3 tabular-nums text-fg">{row.height}</td>
                <td className="px-4 py-3 tabular-nums text-fg">{row.nest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="mt-3 text-sm text-muted">
        Cats: 3.5-inch rim, 6-inch nest. Seniors who struggle to fold down can go a half-inch higher
        than the chart — still below the withers.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-fg">What slow feeding actually does</h2>
        <p className="mt-4 leading-relaxed text-muted">
          A maze does not shrink a portion. It stretches the time it takes to finish one. Ten
          minutes instead of forty seconds means less air swallowed, less regurgitation, and a dog
          who is still working when you put the kettle on. It is enrichment that happens to be
          dinner. It is not a treatment for bloat, dental disease, or anxiety — talk to a vet if
          those are in the room.
        </p>
      </section>

      <section className="mt-12 overflow-hidden rounded-xl">
        <img
          src="/products/frenchie.jpg"
          alt="A French bulldog eating from a low sand stand"
          className="aspect-photo w-full object-cover"
        />
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/studio">Print from these numbers</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/shop">Shop ready-made</Link>
        </Button>
      </div>
    </div>
  );
}
