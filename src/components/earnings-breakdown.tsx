const ADVANTAGES = [
  {
    value: "$1",
    label: "Per Mile",
    title: "$1 Per Mile",
    description:
      "Earn an extra dollar per eligible mile you drive in Los Angeles City.",
    accent: "text-accent-light",
  },
  {
    value: "Black",
    label: "Car Access",
    title: "Black Car Access",
    description:
      "Drive premium vehicles positioned for Uber Black standards and higher-value trips.",
    accent: "text-white",
  },
  {
    value: "Insured",
    label: "Vehicle",
    title: "Insurance Covered",
    description: "Vehicle insurance is handled by Essquare Rides.",
    accent: "text-emerald-300",
  },
  {
    value: "24/7",
    label: "Support",
    title: "Driver Support",
    description:
      "Our team is available around the clock when you need help on the road.",
    accent: "text-amber-200",
  },
];

export function EarningsBreakdown() {
  return (
    <section
      id="earnings"
      className="border-y border-card-border/50 bg-card-bg/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Driver Advantage
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            A black car program built around what drivers need.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The concept is simple: premium black cars, Los Angeles driving,
            insurance handled, 24/7 support, and an extra dollar per eligible
            mile you drive.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((advantage) => (
            <div
              key={advantage.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <p className={`text-4xl font-bold ${advantage.accent}`}>
                {advantage.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {advantage.label}
              </p>
              <h3 className="mt-8 text-lg font-semibold text-white">
                {advantage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
