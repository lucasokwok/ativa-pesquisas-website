import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import { useLanguage } from "../hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.pages.projects;

  return (
    <div className="relative isolate overflow-x-hidden">
      <img
        src={logoOutline}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          fixed top-24 right-[-35%]
          z-0
          w-[110vw] max-w-none
          h-auto
          opacity-[0.04]
          lg:top-1/2 lg:right-0
          lg:-translate-y-1/2
          lg:translate-x-[20%]
          lg:w-[70vw] lg:max-w-[1200px]
          lg:opacity-10
        "
      />

      <div className="relative z-10">
        <section className="py-10 sm:py-14">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                {projects.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {projects.hero.title}
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-subtitle sm:text-lg">
                {projects.hero.description}
              </p>
            </div>
          </div>

          <div className="mt-8 px-4 sm:mt-10 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {projects.hero.mainPlaceholder}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {projects.hero.mainCaption}
                </p>
              </div>

              <div className="grid gap-4">
                {projects.hero.featuredItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6"
                  >
                    <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                      {item.label}
                    </p>

                    <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                {projects.portfolio.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {projects.portfolio.title}
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                {projects.portfolio.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
              {projects.portfolio.cards.map((project) => (
                <article
                  key={project.title}
                  className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                    {project.placeholder}
                  </div>

                  <p className="text-[11px] tracking-[0.22em] uppercase text-subtle sm:text-xs sm:tracking-[0.25em]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-base font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
              <div className="space-y-4">
                <p className="text-[11px] tracking-[0.25em] uppercase text-bg/70 sm:text-xs sm:tracking-[0.3em]">
                  {projects.methodology.eyebrow}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {projects.methodology.title}
                </h2>

                <p className="leading-relaxed text-bg/80">
                  {projects.methodology.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {projects.methodology.steps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl bg-bg/10 p-5 ring-1 ring-white/10 sm:rounded-2xl sm:p-6"
                  >
                    <p className="text-sm tracking-[0.25em] text-bg/60">
                      {item.step}
                    </p>

                    <h3 className="mt-3 text-base font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-bg/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                  {projects.highlights.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {projects.highlights.title}
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  {projects.highlights.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {projects.highlights.cards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-bg p-5 sm:rounded-2xl"
                    >
                      <h3 className="text-base font-semibold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-subtitle">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {projects.highlights.imagePlaceholder}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {projects.highlights.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-4 md:grid-cols-3">
              {projects.metrics.items.map((item) => (
                <div
                  key={`${item.label}-${item.value}`}
                  className="rounded-xl border border-border bg-bg p-6 text-center shadow-sm sm:rounded-2xl sm:p-8"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                    {item.label}
                  </p>

                  <p className="mt-4 text-3xl font-semibold text-ink">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="rounded-xl bg-bg/10 p-6 ring-1 ring-white/10 sm:rounded-2xl sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {projects.cta.title}
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                {projects.cta.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="btn w-full rounded-full bg-bg px-8 py-4 text-center text-base text-ink hover:-translate-y-[1px] hover:shadow-lg sm:w-auto"
                >
                  {projects.cta.primaryButton}
                </Link>

                <Link
                  to="/tecnologia"
                  className="btn w-full rounded-full border border-white/20 px-8 py-4 text-center text-base text-bg hover:-translate-y-[1px] hover:bg-bg/10 hover:shadow-lg sm:w-auto"
                >
                  {projects.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
