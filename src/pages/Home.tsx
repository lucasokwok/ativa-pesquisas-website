import { Link } from "react-router-dom";
import hero01 from "../assets/home/home-hero-01.webp";
import hero02 from "../assets/home/home-hero-02.webp";
import hero03 from "../assets/home/home-hero-03.webp";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import LogoCarousel from "../components/LogoCarousel";
import { partners } from "../data/partners";
import { useLanguage } from "../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  const home = t.pages.home;

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
                {home.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {home.hero.title}
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-subtitle sm:text-lg">
                {home.hero.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/sobre"
                  className="btn btn-pill-gray-to-blue btn-lg w-full text-center sm:w-auto"
                >
                  {home.hero.ctaLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 px-4 sm:mt-10 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={hero01}
                  alt={home.hero.images.hero01Alt}
                  className="h-auto w-full transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={hero02}
                  alt={home.hero.images.hero02Alt}
                  className="h-auto w-full transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={hero03}
                  alt={home.hero.images.hero03Alt}
                  className="h-auto w-full transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-bg/70 sm:text-xs sm:tracking-[0.3em]">
                  {home.approach.eyebrow}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {home.approach.title}
                </h2>

                <p className="leading-relaxed text-bg/80">
                  {home.approach.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-bg/85 sm:text-base">
                  {home.approach.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-bg/10 p-5 ring-1 ring-white/10 sm:rounded-2xl sm:p-6">
                <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-bg/10 px-4 text-center text-sm text-bg/70 sm:text-base">
                  {home.approach.imagePlaceholder}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bg/70">
                  {home.approach.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {home.technology.title}
            </h2>

            <p className="mt-3 max-w-3xl leading-relaxed text-subtitle">
              {home.technology.description}
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
              {home.technology.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6"
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
        </section>

        <section className="border-t border-border bg-muted py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {home.applications.title}
            </h2>

            <p className="mt-3 max-w-3xl leading-relaxed text-subtitle">
              {home.applications.description}
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-bg p-4 lg:col-span-2 sm:rounded-2xl">
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {home.applications.featured.placeholder}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {home.applications.featured.caption}
                </p>
              </div>

              <div className="grid gap-4">
                {home.applications.secondary.map((item) => (
                  <div
                    key={item.placeholder}
                    className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                      {item.placeholder}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-subtitle">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="rounded-xl bg-bg/10 p-6 ring-1 ring-white/10 sm:rounded-2xl sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {home.cta.title}
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                {home.cta.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="btn w-full rounded-full bg-bg px-8 py-4 text-center text-base text-ink hover:-translate-y-[1px] hover:shadow-lg sm:w-auto"
                >
                  {home.cta.primaryButton}
                </Link>

                <Link
                  to="/projetos"
                  className="btn w-full rounded-full border border-white/20 px-8 py-4 text-center text-base text-bg hover:-translate-y-[1px] hover:bg-bg/10 hover:shadow-lg sm:w-auto"
                >
                  {home.cta.secondaryButton}
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
