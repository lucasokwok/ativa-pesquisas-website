import { NavLink } from "react-router-dom";
import logo_wordmark from "../assets/brand/logo-wordmark.svg";

const linkBase =
  "text-sm tracking-wide uppercase transition-colors duration-200";
const linkActive = "text-brand";
const linkIdle = "text-text/70 hover:text-ink";

export default function Header() {
  return (
    <header className="relative z-30 bg-bg border-b border-border">
      <div className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-32 py-5">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo_wordmark}
            alt="Ativa Pesquisas"
            className="h-10 w-auto"
          />
        </NavLink>

        <nav className="flex items-center gap-5">
          <NavLink
            to="/tecnologia"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Tecnologia
          </NavLink>

          <NavLink
            to="/aplicacoes"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Aplicações
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/projetos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Projetos
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
