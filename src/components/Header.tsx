import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoWordmark from "../assets/brand/logo-wordmark.svg";
import { useLanguage } from "../hooks/useLanguage";

const linkBase =
  "text-sm tracking-wide uppercase transition-colors duration-200";
const linkActive = "text-brand";
const linkIdle = "text-text/70 hover:text-ink";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { to: "/", label: t.header.nav.home },
    { to: "/tecnologia", label: t.header.nav.technology },
    { to: "/aplicacoes", label: t.header.nav.applications },
    { to: "/sobre", label: t.header.nav.about },
    { to: "/projetos", label: t.header.nav.projects },
    { to: "/contato", label: t.header.nav.contact },
  ];

  return (
    <header className="relative z-30 border-b border-border bg-bg">
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-8 sm:py-5 lg:px-32">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={closeMobileMenu}
        >
          <img
            src={logoWordmark}
            alt="Ativa Pesquisas"
            className="h-8 w-auto sm:h-10"
          />
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div
            className="flex items-center rounded-full border border-border bg-muted p-1"
            aria-label={t.header.languageSwitcherLabel}
          >
            <button
              type="button"
              onClick={() => setLanguage("pt")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 ${
                language === "pt"
                  ? "bg-brand text-bg"
                  : "text-text/70 hover:text-ink"
              }`}
            >
              {t.common.language.pt}
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 ${
                language === "en"
                  ? "bg-brand text-bg"
                  : "text-text/70 hover:text-ink"
              }`}
            >
              {t.common.language.en}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div
            className="flex items-center rounded-full border border-border bg-muted p-1"
            aria-label={t.header.languageSwitcherLabel}
          >
            <button
              type="button"
              onClick={() => setLanguage("pt")}
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-200 sm:px-3 sm:text-xs ${
                language === "pt"
                  ? "bg-brand text-bg"
                  : "text-text/70 hover:text-ink"
              }`}
            >
              {t.common.language.pt}
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-200 sm:px-3 sm:text-xs ${
                language === "en"
                  ? "bg-brand text-bg"
                  : "text-text/70 hover:text-ink"
              }`}
            >
              {t.common.language.en}
            </button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text/70 transition-all duration-200 hover:border-brand hover:text-ink"
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border bg-bg transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 sm:px-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                [
                  "border-b border-border/70 py-4 text-sm tracking-[0.18em] uppercase transition-colors duration-200 last:border-b-0",
                  isActive ? "text-brand" : "text-text/70 hover:text-ink",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
