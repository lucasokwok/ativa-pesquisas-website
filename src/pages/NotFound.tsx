import { Link } from "react-router-dom";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import { useLanguage } from "../hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();
  const notFound = t.pages.notFound;

  return (
    <div className="relative isolate overflow-hidden">
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

      <div className="relative z-10 flex min-h-[calc(100vh-160px)] items-center">
        <section className="w-full py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-bg/95 p-8 shadow-sm backdrop-blur-sm sm:p-12">
              <p className="text-xs uppercase tracking-[0.35em] text-subtle">
                404
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {notFound.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                {notFound.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/" className="btn btn-pill-gray-to-blue btn-lg">
                  {notFound.buttonLabel}
                </Link>

                <Link
                  to="/contato"
                  className="btn rounded-full border border-border px-8 py-4 text-base text-ink hover:-translate-y-[1px] hover:shadow-lg"
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
