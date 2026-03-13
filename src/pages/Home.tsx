import hero01 from "../assets/home/home-hero-01.webp";
import hero02 from "../assets/home/home-hero-02.webp";
import hero03 from "../assets/home/home-hero-03.webp";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import LogoCarousel from "../components/LogoCarousel";
import { partners } from "../data/partners";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-hidden">
      {/* BG logo flutuante */}
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
        {/* HERO */}
        <section className="py-14">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                Ativa Pesquisas
              </p>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Mitigação de biocorrosão em concreto com foco em durabilidade
                sustentável
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                Pesquisa e desenvolvimento de composições especiais com baixa
                porosidade, alta resistência mecânica e neutralização
                microbiológica em ambientes agressivos.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="/sobre" className="btn btn-pill-gray-to-blue btn-lg">
                  Conheça a empresa
                </a>
              </div>
            </div>
          </div>

          <div className="px-3 sm:px-4 lg:px-10 mt-10">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={hero01}
                  alt="Laboratório e caracterização de materiais"
                  className="w-full h-auto transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={hero02}
                  alt="Estruturas de concreto em ambiente agressivo"
                  className="w-full h-auto transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={hero03}
                  alt="Aplicação e desempenho em durabilidade sustentável"
                  className="w-full h-auto transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-bg/70">
                  (Edite) Nossa abordagem
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  (Edite) Materiais e composições para ambientes agressivos
                </h2>

                <p className="leading-relaxed text-bg/80">
                  (Edite este texto) Explique em 2–3 linhas o que vocês fazem,
                  como atuam e qual diferencial técnico.
                </p>

                <ul className="mt-4 space-y-2 text-bg/85">
                  <li>• (Edite) Baixa porosidade</li>
                  <li>• (Edite) Neutralização microbiológica</li>
                  <li>• (Edite) Durabilidade e sustentabilidade</li>
                </ul>
              </div>

              {/* Placeholder de imagem (substitua por <img /> depois) */}
              <div className="rounded-2xl bg-bg/10 ring-1 ring-white/10 p-6">
                <div className="aspect-[16/10] rounded-xl bg-bg/10 flex items-center justify-center text-bg/70">
                  IMAGEM AQUI (substitua por um &lt;img /&gt;)
                </div>
                <p className="mt-3 text-sm text-bg/70">
                  (Opcional) legenda/descrição curta da imagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border bg-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              (Edite) Tecnologia e capacidades
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-subtitle">
              (Edite) Uma frase explicando seu laboratório, métodos, validações,
              etc.
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  t: "(Edite) Caracterização",
                  d: "(Edite) SEM, DRX, Raman...",
                },
                {
                  t: "(Edite) Desenvolvimento",
                  d: "(Edite) Ligantes, aditivos...",
                },
                {
                  t: "(Edite) Ensaios",
                  d: "(Edite) Durabilidade, resistência...",
                },
              ].map((card) => (
                <div
                  key={card.t}
                  className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-ink">{card.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {card.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border bg-muted">
          <div className="px-6 sm:px-8 lg:px-32">
            <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              (Edite) Aplicações
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-subtitle">
              (Edite) Cite setores/ambientes onde as soluções se aplicam.
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {/* Grande */}
              <div className="lg:col-span-2 rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM 1 (substitua por &lt;img /&gt;)
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Título/legenda da aplicação.
                </p>
              </div>

              {/* Coluna com 2 menores */}
              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM 2
                  </div>
                  <p className="mt-3 text-sm text-subtitle">(Edite) Legenda.</p>
                </div>

                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM 3
                  </div>
                  <p className="mt-3 text-sm text-subtitle">(Edite) Legenda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 ring-1 ring-white/10 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                (Edite) Vamos falar sobre seu projeto?
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                (Edite) Convite curto para contato: diagnóstico, proposta,
                parceria, etc.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contato"
                  className="btn rounded-full px-8 py-4 text-base bg-bg text-ink hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Entrar em contato
                </a>
                <a
                  href="/projetos"
                  className="btn rounded-full px-8 py-4 text-base border border-white/20 text-bg hover:bg-bg/10 hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </section>
        <LogoCarousel partners={partners} />
      </div>
    </div>
  );
}
