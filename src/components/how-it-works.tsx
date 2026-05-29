const STEPS = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Fill out a quick application. You'll need a valid CA license, clean driving record, and 2+ years of driving experience.",
  },
  {
    number: "02",
    title: "Screening & Background Check",
    description:
      "We review your application and run a standard background and driving record check along with required screening.",
  },
  {
    number: "03",
    title: "Orientation & Assignment",
    description:
      "Complete a brief orientation, learn our service standards, and get assigned as a primary or secondary driver on a luxury vehicle.",
  },
  {
    number: "04",
    title: "Start Earning",
    description:
      "Pick up your keys from a secure lockbox, hit the road, and start earning. It's that simple.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            From application to your first ride
          </h2>
          <p className="mt-4 text-lg text-muted">
            Our onboarding process is fast and straightforward. Most drivers are
            on the road within a week.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="absolute top-8 left-[calc(100%-1rem)] hidden h-px w-8 bg-card-border lg:block" />
              )}
              <p className="text-5xl font-bold text-accent/20">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
