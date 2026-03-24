import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import LogoCarousel from "../components/LogoCarousel";
import { useLanguage } from "../hooks/useLanguage";
import { colleges } from "../data/colleges";

export default function About() {
  const { t } = useLanguage();
  const about = t.pages.about;

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
                {about.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {about.hero.title}
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-subtitle sm:text-lg">
                {about.hero.description}
              </p>
            </div>
          </div>

          <div className="mt-8 px-4 sm:mt-10 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {about.hero.mainPlaceholder}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                    {about.hero.trajectoryEyebrow}
                  </p>

                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {about.hero.trajectoryTitle}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    {about.hero.trajectoryDescription}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-bg p-5 shadow-sm sm:rounded-2xl sm:p-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                    {about.hero.purposeEyebrow}
                  </p>

                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {about.hero.purposeTitle}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    {about.hero.purposeDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                {about.founders.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {about.founders.title}
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                {about.founders.description}
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 xl:grid-cols-3">
              {about.founders.items.map((founder) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-xl border border-border bg-bg shadow-sm sm:rounded-2xl"
                >
                  <div className="p-4">
                    <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                      {founder.photoPlaceholder}
                    </div>
                  </div>

                  <div className="border-t border-border px-5 py-5 sm:px-6 sm:py-6">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-subtle sm:text-xs sm:tracking-[0.25em]">
                      {founder.role}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-ink">
                      {founder.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-subtitle">
                      {founder.bio}
                    </p>

                    <a
                      href={founder.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-[1px] hover:border-brand hover:text-brand"
                    >
                      {founder.linkedinLabel}
                    </a>
                  </div>
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
                  {about.timeline.eyebrow}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {about.timeline.title}
                </h2>

                <p className="leading-relaxed text-bg/80">
                  {about.timeline.description}
                </p>
              </div>

              <div className="grid gap-4">
                {about.timeline.items.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="rounded-xl bg-bg/10 p-5 ring-1 ring-white/10 sm:rounded-2xl sm:p-6"
                  >
                    <p className="text-sm tracking-[0.25em] uppercase text-bg/60">
                      {item.year}
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
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                  {about.logoInspiration.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {about.logoInspiration.title}
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  {about.logoInspiration.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {about.logoInspiration.cards.map((item) => (
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

              <div className="grid gap-4">
                <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                    {about.logoInspiration.logoPlaceholder}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    {about.logoInspiration.logoCaption}
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                  <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                    {about.logoInspiration.landmarkPlaceholder}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    {about.logoInspiration.landmarkCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="rounded-xl border border-border bg-bg p-4 sm:rounded-2xl">
                <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-muted px-4 text-center text-sm text-text/60 sm:text-base">
                  {about.city.imagePlaceholder}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {about.city.imageCaption}
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                  {about.city.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {about.city.title}
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  {about.city.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {about.city.cards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-muted p-5 sm:rounded-2xl"
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
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                  {about.values.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {about.values.title}
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  {about.values.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {about.values.cards.map((item) => (
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
                  {about.values.imagePlaceholder}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-subtitle">
                  {about.values.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-12 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-subtle sm:text-xs sm:tracking-[0.3em]">
                {about.partners.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {about.partners.title}
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                {about.partners.description}
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <LogoCarousel partners={colleges} />
          </div>
        </section>

        <section className="bg-brand py-12 text-bg sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="rounded-xl bg-bg/10 p-6 ring-1 ring-white/10 sm:rounded-2xl sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {about.cta.title}
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                {about.cta.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="btn w-full rounded-full bg-bg px-8 py-4 text-center text-base text-ink hover:-translate-y-[1px] hover:shadow-lg sm:w-auto"
                >
                  {about.cta.primaryButton}
                </Link>

                <Link
                  to="/projetos"
                  className="btn w-full rounded-full border border-white/20 px-8 py-4 text-center text-base text-bg hover:-translate-y-[1px] hover:bg-bg/10 hover:shadow-lg sm:w-auto"
                >
                  {about.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
