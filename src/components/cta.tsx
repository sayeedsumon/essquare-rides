export function CTA() {
  return (
    <section id="apply" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="cta-gradient mx-auto max-w-4xl rounded-3xl border border-card-border/50 p-12 text-center md:p-20">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to drive black cars in Los Angeles?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Join Essquare Rides for black car access, $1 per eligible mile,
            vehicle insurance coverage, and 24/7 driver support.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://forms.gle/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light"
            >
              Start Your Application
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
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
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              No vehicle needed
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Quick onboarding
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Start within a week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
