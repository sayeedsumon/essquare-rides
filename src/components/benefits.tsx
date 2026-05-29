const BENEFITS = [
  {
    title: "Built for Active Drivers",
    description:
      "Uber adds an extra $1 per mile on Los Angeles trips for our fleet, helping active drivers earn more than regular Uber drivers.",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  },
  {
    title: "Premium Black Cars",
    description:
      "Get behind the wheel of premium black cars that fit the Uber Black experience.",
    icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-2.1-3.4C13.1 5.6 12 5 10.8 5H5.2C3.9 5 2.9 5.9 2.4 7L1 11v5c0 .6.4 1 1 1h1",
  },
  {
    title: "Insurance Covered",
    description:
      "Vehicle insurance is handled by Essquare Rides, so you can focus on trips and service.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Flexible Shift Options",
    description:
      "Choose morning or evening shifts that fit your life and driving style.",
    icon: "M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z",
  },
  {
    title: "24/7 Driver Support",
    description:
      "Our team is available around the clock when you need help on the road.",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
  {
    title: "Los Angeles Focus",
    description:
      "Drive with a local fleet partner focused on the Los Angeles black car market.",
    icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Drive With Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Everything you need to drive.
            <br />
            Built around support.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Essquare Rides gives drivers a practical setup: black car access,
            an Uber fleet earning advantage, insurance coverage, flexible
            shifts, and real support.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.055]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={benefit.icon} />
                  {benefit.title === "Premium Black Cars" && (
                    <>
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                    </>
                  )}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
