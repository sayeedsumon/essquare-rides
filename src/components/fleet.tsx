export function Fleet() {
  return (
    <section id="fleet" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Fleet
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Premium vehicles, ready for Uber Black
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Every vehicle in our fleet meets Uber Black standards, with premium
            comfort and presentation for high-value trips.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Mercedes-Benz EQS",
              type: "All-Electric Sedan",
              features: ["Zero emissions", "Ultra-quiet ride", "Premium interior"],
            },
            {
              name: "BMW 7 Series",
              type: "Luxury Sedan",
              features: ["Executive class", "Smooth ride", "Advanced tech"],
            },
            {
              name: "Mercedes-Benz GLS",
              type: "Luxury SUV",
              features: ["Spacious cabin", "Airport favorite", "Premium comfort"],
            },
          ].map((car) => (
            <div
              key={car.name}
              className="glass-card group overflow-hidden rounded-2xl transition-all hover:border-accent/30"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-card-bg to-background flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mx-auto text-accent/30"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.1-3.4C13.1 5.6 12 5 10.8 5H5.2C3.9 5 2.9 5.9 2.4 7L1 11v5c0 .6.4 1 1 1h1" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {car.type}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {car.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {car.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-card-border/50 px-3 py-1 text-xs text-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
