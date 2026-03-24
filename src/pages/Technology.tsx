import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import LogoCarousel from "../components/LogoCarousel";
import { partners } from "../data/partners";
import { useLanguage } from "../hooks/useLanguage";

export default function Technology() {
  const { t } = useLanguage();
  const technology = t.pages.technology;

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
              <p className="text-[11px] uppercase tracking-[0.25em] text-subtle sm:text-xs sm:tracking-[0.3em]">
                {technology.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {technology.hero.title}
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-subtitle sm:text-lg">
                {technology.hero.description}
              </p>
            </div>
          </div>

          <div className="mt-8 px-4 sm:mt-10 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {technology.hero.mainPlaceholder}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                    {technology.hero.block01Placeholder}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                    {technology.hero.block02Placeholder}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-subtle sm:text-xs sm:tracking-[0.3em]">
                {technology.capabilities.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {technology.capabilities.title}
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                {technology.capabilities.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
              {technology.capabilities.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="mb-4 h-10 w-10 rounded-full border border-border bg-muted" />

                  <h3 className="text-base font-semibold text-ink">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-bg/70 sm:text-xs sm:tracking-[0.3em]">
                  {technology.process.eyebrow}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {technology.process.title}
                </h2>

                <p className="leading-relaxed text-bg/80">
                  {technology.process.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technology.process.steps.map((item) => (
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
                <p className="text-[11px] uppercase tracking-[0.25em] text-subtle sm:text-xs sm:tracking-[0.3em]">
                  {technology.structure.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {technology.structure.title}
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  {technology.structure.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {technology.structure.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-xl border border-border bg-bg p-5 sm:rounded-2xl"
                    >
                      <h3 className="text-base font-semibold text-ink">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-subtitle">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {technology.structure.imagePlaceholder}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {technology.structure.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-subtle sm:text-xs sm:tracking-[0.3em]">
                {technology.indicators.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {technology.indicators.title}
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                {technology.indicators.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
              {technology.indicators.items.map((item) => (
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
                {technology.cta.title}
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                {technology.cta.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="btn w-full rounded-full bg-bg px-8 py-4 text-center text-base text-ink hover:-translate-y-[1px] hover:shadow-lg sm:w-auto"
                >
                  {technology.cta.primaryButton}
                </Link>

                <Link
                  to="/projetos"
                  className="btn w-full rounded-full border border-white/20 px-8 py-4 text-center text-base text-bg hover:-translate-y-[1px] hover:bg-bg/10 hover:shadow-lg sm:w-auto"
                >
                  {technology.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LogoCarousel partners={partners} />
      </div>
    </div>
  );
}
