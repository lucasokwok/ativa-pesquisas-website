import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import { useLanguage } from "../hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  const notFound = t.pages.notFound;

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

      <div className="relative z-10 flex min-h-[calc(100vh-140px)] items-center sm:min-h-[calc(100vh-160px)]">
        <section className="w-full py-10 sm:py-16">
          <div className="px-4 sm:px-8 lg:px-32">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-bg/95 p-6 shadow-sm backdrop-blur-sm sm:rounded-3xl sm:p-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-subtle sm:text-xs sm:tracking-[0.35em]">
                404
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {notFound.title}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-subtitle sm:text-lg">
                {notFound.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="btn btn-pill-gray-to-blue btn-lg w-full text-center sm:w-auto"
                >
                  {notFound.buttonLabel}
                </Link>

                <Link
                  to="/contato"
                  className="btn w-full rounded-full border border-border px-8 py-4 text-center text-base text-ink hover:-translate-y-[1px] hover:shadow-lg sm:w-auto"
                >
                  {t.common.buttons.contact}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
