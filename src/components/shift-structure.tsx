export function ShiftStructure() {
  return (
    <section
      id="shifts"
      className="border-y border-card-border/50 bg-card-bg/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Shift Structure
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Two shifts. Maximum flexibility.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Each vehicle is shared between a primary and secondary driver. Pick
            the shift that fits your lifestyle.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="glass-card group rounded-2xl p-8 transition-all hover:border-accent/30">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Morning Shift</h3>
            <p className="mt-1 text-3xl font-bold text-amber-400">
              5 AM – 3 PM
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Catch the morning rush, airport runs, and business commuters.
              Great for early risers who want their evenings free.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                Airport Runs
              </span>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                Business Commute
              </span>
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                Daytime Demand
              </span>
            </div>
          </div>

          <div className="glass-card group rounded-2xl p-8 transition-all hover:border-accent/30">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#818cf8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Evening Shift</h3>
            <p className="mt-1 text-3xl font-bold text-indigo-400">
              5 PM – 3 AM
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ride the dinner rush, nightlife, and late-night demand. Surge
              pricing means higher earnings during peak hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
                Dinner & Events
              </span>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
                Nightlife
              </span>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
                Surge Pricing
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Secure Lockbox Key Exchange
                </h4>
                <p className="mt-1 text-sm text-muted">
                  Primary drivers keep the car at their place. Secondary drivers
                  pick up and return keys through a secure lockbox — simple,
                  contactless, and hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
