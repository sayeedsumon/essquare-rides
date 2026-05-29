const STATS = [
  {
    value: "$1,400-$1,600",
    label: "Weekly Take-Home",
    note: "Typical active-driver range",
  },
  {
    value: "$1/mile",
    label: "LA City Miles",
    note: "On eligible miles driven",
  },
  {
    value: "24/7",
    label: "Driver Support",
    note: "Help when you are on the road",
  },
  {
    value: "Black",
    label: "Car Access",
    note: "Premium Uber Black vehicles",
  },
];

export function Stats() {
  return (
    <section className="relative -mt-1 border-y border-card-border/50 bg-card-bg/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
