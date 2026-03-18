import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.pages.contact;

  return (
    <div className="relative isolate overflow-x-hidden">
      <img
        src={logoOutline}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          fixed top-1/2 right-0
          -translate-y-1/2
          translate-x-[20%]
          z-0
          opacity-10
          w-[70vw] max-w-[1200px]
          h-auto
        "
      />

      <div className="relative z-10">
        <section className="py-14">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                {contact.hero.eyebrow}
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {contact.hero.title}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                {contact.hero.description}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-bg p-8 shadow-sm sm:p-10">
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  {contact.main.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {contact.main.email}
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-subtitle">
                  {contact.main.description}
                </p>

                <div className="mt-8">
                  <a
                    href={`mailto:${contact.main.email}`}
                    className="btn btn-pill-gray-to-blue btn-lg"
                  >
                    {contact.main.buttonLabel}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-6 sm:p-8">
                <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-border bg-bg text-text/60">
                  {contact.main.imagePlaceholder}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-4 md:grid-cols-3">
              {contact.main.cards.map((card) => (
                <div
                  key={`${card.eyebrow}-${card.title}`}
                  className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                >
                  <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                    {card.eyebrow}
                  </p>

                  <p className="mt-3 text-base font-semibold text-ink">
                    {card.title}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {contact.cta.title}
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                {contact.cta.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contact.main.email}`}
                  className="btn rounded-full bg-bg px-8 py-4 text-base text-ink hover:-translate-y-[1px] hover:shadow-lg"
                >
                  {contact.cta.primaryButton}
                </a>

                <Link
                  to="/sobre"
                  className="btn rounded-full border border-white/20 px-8 py-4 text-base text-bg hover:-translate-y-[1px] hover:bg-bg/10 hover:shadow-lg"
                >
                  {contact.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
