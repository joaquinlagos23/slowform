import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/story")({ component: StoryPage });

function StoryPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Story</p>
          <h1 className="mt-2 font-display text-5xl text-fg">The missing piece was the stand.</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Slow-feed bowls already existed. Raised bowls already existed. They almost never fit
            each other, and the raised ones came in two heights for every dog on earth. Slowform
            prints the nest: a cradle sized to the bowl, legs sliced to the animal.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src="/products/printer.jpg"
            alt="3D printer in the Slowform studio"
            className="aspect-photo w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            {
              t: "Modeled as one piece",
              d: "The cradle, legs, and feet-wells are a single print. No screws, no wobbly hardware, no paint to chip into the bowl.",
            },
            {
              t: "PETG, not a mystery plastic",
              d: "Stands are PETG — tough, slightly flexible, dishwasher-safe on the top rack. Color is the filament. Bowls are food-grade polypropylene.",
            },
            {
              t: "Printed after you order",
              d: "There is no warehouse of stands in every height. We slice the file the day you check out. Typical print is 12–22 hours. Ships in 5–8 days.",
            },
          ].map((item) => (
            <div key={item.t}>
              <h2 className="font-display text-2xl text-fg">{item.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/products/cat.jpg"
            alt="A tabby cat using a low blush Slowform stand"
            className="aspect-photo w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl text-fg">Care</h2>
          <ul className="mt-5 space-y-3 text-muted">
            <li>Bowls: top-rack dishwasher, or a soak and a brush through the maze.</li>
            <li>Stands: top-rack or a warm cloth. Skip the broiler drawer and the microwave.</li>
            <li>Feet are TPU inserts. If one walks off, write us — we print replacements.</li>
            <li>Layer lines are the finish, unless you asked us to smooth. They wipe clean.</li>
          </ul>
          <Button asChild className="mt-8 w-fit">
            <Link to="/studio">Design yours</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
