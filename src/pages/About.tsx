import logoOutline from "../assets/home/home-bg-logo-outline.webp";
import LogoCarousel from "../components/LogoCarousel";
import { partners } from "../data/partners";

const founders = [
  {
    name: "(Edite) Dr. Fernando S. Ortega",
    role: "(Edite) Co-fundador",
    bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
    linkedin: "#",
  },
  {
    name: "(Edite) Dra. Ivone Regina de Oliveira",
    role: "(Edite) Co-fundadora",
    bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
    linkedin: "#",
  },
  {
    name: "(Edite) Me. Indira Teixeira Oliveira",
    role: "(Edite) Co-fundadora",
    bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
    linkedin: "#",
  },
];

const milestones = [
  {
    year: "(Edite)",
    title: "(Edite) Origem da iniciativa",
    description:
      "(Edite) Texto curto sobre o início da pesquisa, motivação e contexto.",
  },
  {
    year: "(Edite)",
    title: "(Edite) Consolidação técnica",
    description:
      "(Edite) Texto curto sobre desenvolvimento, validação ou avanço institucional.",
  },
  {
    year: "(Edite)",
    title: "(Edite) Expansão e aplicações",
    description:
      "(Edite) Texto curto sobre amadurecimento do projeto e evolução da atuação.",
  },
];

const values = [
  {
    title: "(Edite) Pesquisa aplicada",
    description: "(Edite) Texto curto.",
  },
  {
    title: "(Edite) Rigor técnico",
    description: "(Edite) Texto curto.",
  },
  {
    title: "(Edite) Sustentabilidade",
    description: "(Edite) Texto curto.",
  },
];

const identityHighlights = [
  {
    title: "(Edite) Inspiração arquitetônica",
    description:
      "(Edite) Texto curto sobre a inspiração da marca no Arco da Inovação.",
  },
  {
    title: "(Edite) Conexão com a cidade",
    description:
      "(Edite) Texto curto sobre São José dos Campos como sede e referência tecnológica.",
  },
  {
    title: "(Edite) Simbologia da marca",
    description:
      "(Edite) Texto curto sobre forma, conceito e significado visual da logo.",
  },
];

const cityHighlights = [
  {
    title: "(Edite) Cidade-sede",
    description:
      "(Edite) Texto curto sobre São José dos Campos e sua relevância.",
  },
  {
    title: "(Edite) Inovação e tecnologia",
    description: "(Edite) Texto curto sobre o ambiente tecnológico da cidade.",
  },
  {
    title: "(Edite) Identidade regional",
    description:
      "(Edite) Texto curto sobre o vínculo da Ativa com sua origem local.",
  },
];

export default function About() {
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
                Sobre
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                (Edite) A história da Ativa Pesquisas
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                (Edite) Texto introdutório apresentando a empresa, sua origem e
                propósito.
              </p>
            </div>
          </div>

          <div className="mt-10 px-3 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM PRINCIPAL / HISTÓRIA
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                  <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                    (Edite)
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                    (Edite) Nossa trajetória
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    (Edite) Texto curto sobre a origem e evolução da Ativa
                    Pesquisas.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                  <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                    (Edite)
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                    (Edite) Propósito
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-subtitle">
                    (Edite) Texto curto sobre missão, visão ou direcionamento
                    estratégico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                Fundadores
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Liderança e experiência técnica
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto apresentando os três fundadores.
              </p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-3">
              {founders.map((founder) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-2xl border border-border bg-bg shadow-sm"
                >
                  <div className="p-4">
                    <div className="aspect-[4/5] rounded-xl bg-muted flex items-center justify-center text-text/60">
                      FOTO DO FUNDADOR
                    </div>
                  </div>

                  <div className="border-t border-border px-6 py-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                      {founder.role}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-ink">
                      {founder.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-subtitle">
                      {founder.bio}
                    </p>

                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-[1px] hover:border-brand hover:text-brand"
                    >
                      LinkedIn
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-bg/70">
                  Linha do tempo
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  (Edite) Principais marcos da trajetória
                </h2>

                <p className="leading-relaxed text-bg/80">
                  (Edite) Texto curto contextualizando a evolução da empresa.
                </p>
              </div>

              <div className="grid gap-4">
                {milestones.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="rounded-2xl bg-bg/10 p-6 ring-1 ring-white/10"
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

        <section className="border-t border-border bg-muted py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  Identidade visual
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) A logo da Ativa e sua inspiração no Arco da Inovação
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  (Edite) Texto principal explicando que a identidade visual da
                  Ativa foi inspirada no Arco da Inovação, em São José dos
                  Campos, e como isso se conecta com pesquisa, tecnologia e
                  futuro.
                </p>

                <div className="mt-8 grid gap-4">
                  {identityHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-bg p-5"
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
                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    LOGO DA ATIVA
                  </div>
                  <p className="mt-3 text-sm text-subtitle">
                    (Edite) Legenda sobre a marca.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    FOTO DO ARCO DA INOVAÇÃO
                  </div>
                  <p className="mt-3 text-sm text-subtitle">
                    (Edite) Legenda sobre a inspiração arquitetônica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[4/5] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM / SÃO JOSÉ DOS CAMPOS
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Legenda opcional sobre a cidade-sede.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  Cidade-sede
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) São José dos Campos como parte da identidade da Ativa
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  (Edite) Texto principal sobre São José dos Campos ser uma das
                  cidades mais tecnológicas do Brasil e como esse contexto
                  fortalece a imagem e o posicionamento da Ativa Pesquisas.
                </p>

                <div className="mt-8 grid gap-4">
                  {cityHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-muted p-5"
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

        <section className="border-t border-border bg-muted py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  Identidade
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) Valores que orientam a Ativa Pesquisas
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  (Edite) Texto breve sobre os princípios que sustentam a
                  atuação da empresa.
                </p>

                <div className="mt-8 grid gap-4">
                  {values.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-bg p-5"
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

              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[4/5] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM / INSTITUIÇÃO / PESQUISA
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Legenda opcional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                Instituições parceiras
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Rede institucional e colaboração em pesquisa
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto para introduzir o carrossel de instituições
                parceiras.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <LogoCarousel partners={partners} />
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                (Edite) Quer conhecer melhor nossa trajetória?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                (Edite) Texto curto de encerramento e convite para contato.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contato"
                  className="btn rounded-full bg-bg px-8 py-4 text-base text-ink hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Entrar em contato
                </a>

                <a
                  href="/projetos"
                  className="btn rounded-full border border-white/20 px-8 py-4 text-base text-bg hover:bg-bg/10 hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
