const TESTIMONIALS = [
  {
    quote:
      "I was skeptical at first, but the numbers don't lie. I'm consistently taking home strong weekly earnings, and having the vehicle provided makes it easier to stay focused on driving.",
    name: "Marcus T.",
    role: "Essquare Rides Driver, 8 months",
  },
  {
    quote:
      "The $1 per mile concept is a game changer. I tried driving my own car on Uber before — this is a completely different setup.",
    name: "David R.",
    role: "Essquare Rides Driver, 6 months",
  },
  {
    quote:
      "Having a clear weekly earning goal changed everything for me. The morning shift works perfect with my schedule, and more active hours help me keep my take-home strong.",
    name: "James L.",
    role: "Essquare Rides Driver, 1 year",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-card-border/50 bg-card-bg/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What Our Drivers Say
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Hear from the fleet
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-8">
              <div className="mb-4 text-accent text-2xl">&ldquo;</div>
              <p className="text-base italic leading-relaxed text-muted">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-card-border/50 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
