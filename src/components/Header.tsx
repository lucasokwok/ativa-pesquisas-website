import { NavLink } from "react-router-dom";
import logoWordmark from "../assets/brand/logo-wordmark.svg";
import { useLanguage } from "../hooks/useLanguage";

const linkBase =
  "text-sm tracking-wide uppercase transition-colors duration-200";
const linkActive = "text-brand";
const linkIdle = "text-text/70 hover:text-ink";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="relative z-30 border-b border-border bg-bg">
      <div className="flex w-full items-center justify-between px-6 py-5 sm:px-8 lg:px-32">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logoWordmark}
            alt="Ativa Pesquisas"
            className="h-10 w-auto"
          />
        </NavLink>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.home}
            </NavLink>

            <NavLink
              to="/tecnologia"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.technology}
            </NavLink>

            <NavLink
              to="/aplicacoes"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.applications}
            </NavLink>

            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.about}
            </NavLink>

            <NavLink
              to="/projetos"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.projects}
            </NavLink>

            <NavLink
              to="/contato"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              {t.header.nav.contact}
            </NavLink>
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
      </div>
    </header>
  );
}
