export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="mx-auto w-full max-w-page grid grid-rows-[auto_1fr_auto] gap-16 px-5 sm:px-8 py-8 flex-1">
        {/* Header */}
        <header className="flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-ink-0 no-underline font-medium text-[15px] tracking-snugger"
            aria-label="Wayam Labs"
          >
            <Mark className="w-[22px] h-[22px] text-ink-0" />
            <span>Wayam Labs</span>
          </a>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-caps uppercase text-ink-2">
            <span
              aria-hidden
              className="w-[7px] h-[7px] rounded-full bg-accent pulse-ring"
            />
            <span>In construction</span>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-col justify-center max-w-[22ch] self-center w-full py-8 sm:py-16">
          <div className="inline-flex items-center gap-3 mb-9 font-mono text-[12px] tracking-caps uppercase text-ink-2">
            <span aria-hidden className="inline-block w-7 h-px bg-border-default" />
            <span>Coming soon · 2026</span>
          </div>

          <h1 className="m-0 font-sans font-medium text-[clamp(44px,7vw,96px)] leading-[1.02] tracking-tightest text-ink-0 text-balance">
            We're building something{" "}
            <em className="not-italic font-serif italic font-normal text-accent tracking-snugger">
              considered
            </em>
            .
          </h1>

          <p className="mt-8 text-[19px] leading-[1.55] text-ink-2 max-w-[52ch] text-pretty">
            Wayam Labs builds technology for the people behind the work. Our
            products help professionals own their career story, and help
            companies find the people who'll actually thrive. The site is on
            the way.
          </p>

          <div className="mt-14">
            <a
              href="mailto:hello@wayamlabs.net"
              className="font-serif italic text-[22px] text-ink-0 no-underline tracking-snugger border-b border-border-default pb-[2px] transition-colors duration-200 hover:text-accent hover:border-accent"
            >
              hello@wayamlabs.net
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border-subtle font-mono text-[11px] tracking-caps uppercase text-ink-3">
          <div className="flex gap-[18px]">
            <a href="https://careerid.io" target="_blank" rel="noopener noreferrer" className="text-ink-2 no-underline hover:text-ink-0 transition-colors duration-200">CareerID</a>
            <span className="text-ink-2">JobRole</span>
            <span className="text-ink-2">CareerID Bridge</span>
          </div>
          <div className="text-ink-3">
            © {new Date().getFullYear()} Wayam Labs · Wayam — &quot;we&quot; in Sanskrit
          </div>
        </footer>
      </div>
    </main>
  );
}

function Mark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 18 L20 46 L26 32 L32 46 L38 32 L44 46 L56 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}
