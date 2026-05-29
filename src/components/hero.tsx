import Image from "next/image";
import MercedesEqbHero from "@/assets/mercedes-eqb-hero.png";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Now recruiting in Los Angeles
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
                24/7 driver support
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Drive Black Cars in Los Angeles.
              <br />
              <span className="gradient-text">Earn More Per Mile.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Join Essquare Rides and drive premium black cars on Uber Black.
              For Los Angeles trips, Uber adds an extra{" "}
              <strong className="text-white">$1 per mile</strong> for our
              fleet, helping drivers earn more than regular Uber drivers.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              Most active drivers take home about $1,400-$1,600/week after
              standard deductions and charging costs. Actual earnings vary by
              hours, miles, demand, and tips.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#apply"
                className="animate-pulse-glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-light"
              >
                Join the Fleet
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#earnings"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
              >
                See Driver Advantage
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["$1/mile", "LA trips"],
                ["Uber Black", "Premium trips"],
                ["Insurance", "Vehicle covered"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center sm:text-left"
                >
                  <p className="break-words text-lg font-bold leading-tight text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_30%_10%,rgba(96,165,250,0.22),transparent_35%),linear-gradient(145deg,#121826,#05070d)] p-5 shadow-2xl shadow-black/50">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#070b12]">
                <Image
                  src={MercedesEqbHero}
                  alt="Mercedes-Benz EQB style black car in Los Angeles"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/55 to-transparent" />
                <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  <span>Black Car</span>
                  <span>Los Angeles</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {["Premium fleet", "Insured vehicle", "24/7 support"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
