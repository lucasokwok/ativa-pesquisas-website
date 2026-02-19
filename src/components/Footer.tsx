export default function Footer() {
  return (
    <footer className="relative z-30 bg-bg border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-32 py-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-subtle">
            © {new Date().getFullYear()} Ativa Pesquisas
          </span>

          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ativapesquisas"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-text/70 transition-all duration-200 hover:bg-brand hover:text-bg hover:border-brand hover:-translate-y-[1px] hover:shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ativapesquisas/"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-text/70 transition-all duration-200 hover:bg-brand hover:text-bg hover:border-brand hover:-translate-y-[1px] hover:shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm-4.5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.2-2.45a1.05 1.05 0 1 1-1.05-1.05 1.05 1.05 0 0 1 1.05 1.05z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
