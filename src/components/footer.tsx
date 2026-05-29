export function Footer() {
  return (
    <footer className="border-t border-card-border/50 bg-card-bg/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              className="text-accent"
            >
              <path
                d="M14 2L6 14h6l-2 12 10-14h-6l2-10z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              Essquare Rides
            </span>
          </div>

          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Essquare LLC dba Essquare Rides.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-sm text-muted hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
