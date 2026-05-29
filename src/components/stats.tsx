const STATS = [
  {
    value: "$1,400-$1,600",
    label: "Weekly Range",
    note: "Typical active-driver range",
  },
  {
    value: "$1/mile",
    label: "LA Trips",
    note: "Extra Uber fleet advantage",
  },
  {
    value: "24/7",
    label: "24/7 Support",
    note: "Help when you are on the road",
  },
  {
    value: "Black",
    label: "Black Car",
    note: "Premium Uber Black vehicles",
  },
];

export function Stats() {
  return (
    <section className="relative -mt-1 border-y border-card-border/50 bg-card-bg/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 md:grid-cols-4 md:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center sm:p-5"
            >
              <p className="whitespace-nowrap text-[clamp(1.25rem,6vw,1.55rem)] font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-2 max-w-32 text-xs font-semibold uppercase tracking-[0.04em] text-accent sm:text-sm sm:tracking-[0.08em]">
                {stat.label}
              </p>
              <p className="mx-auto mt-2 max-w-36 text-xs leading-snug text-muted">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
