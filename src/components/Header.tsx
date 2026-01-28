import { NavLink } from "react-router-dom";

const linkBase = "text-sm tracking-wide uppercase hover:text-white transition";
const linkActive = "text-white";
const linkIdle = "text-zinc-300";

export default function Header() {
  return (
    <header className="border-b border-zinc-800/80">
      <div className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-32 py-5">
        <NavLink
          to="/"
          className="text-sm font-semibold tracking-widest uppercase"
        >
          Ativa Pesquisas
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
