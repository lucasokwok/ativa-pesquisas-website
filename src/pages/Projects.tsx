import logoOutline from "../assets/home/home-bg-logo-outline.webp";

const featuredProjects = [
  {
    title: "(Edite) Projeto em destaque 01",
    description:
      "(Edite) Texto curto sobre objetivo, escopo e diferencial do projeto.",
  },
  {
    title: "(Edite) Projeto em destaque 02",
    description:
      "(Edite) Texto curto sobre objetivo, escopo e diferencial do projeto.",
  },
];

const projectCards = [
  {
    title: "(Edite) Projeto 01",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
  {
    title: "(Edite) Projeto 02",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
  {
    title: "(Edite) Projeto 03",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
  {
    title: "(Edite) Projeto 04",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
  {
    title: "(Edite) Projeto 05",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
  {
    title: "(Edite) Projeto 06",
    category: "(Edite) Categoria",
    description: "(Edite) Descrição curta do projeto.",
  },
];

const projectStages = [
  {
    step: "01",
    title: "(Edite) Pesquisa e diagnóstico",
    description: "(Edite) Texto curto sobre a etapa.",
  },
  {
    step: "02",
    title: "(Edite) Desenvolvimento técnico",
    description: "(Edite) Texto curto sobre a etapa.",
  },
  {
    step: "03",
    title: "(Edite) Validação e testes",
    description: "(Edite) Texto curto sobre a etapa.",
  },
  {
    step: "04",
    title: "(Edite) Aplicação e acompanhamento",
    description: "(Edite) Texto curto sobre a etapa.",
  },
];

const highlights = [
  {
    title: "(Edite) Soluções sob medida",
    description: "(Edite) Texto curto.",
  },
  {
    title: "(Edite) Base científica",
    description: "(Edite) Texto curto.",
  },
  {
    title: "(Edite) Aplicação prática",
    description: "(Edite) Texto curto.",
  },
];

export default function Projects() {
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
                Projetos
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                (Edite) Projetos e iniciativas desenvolvidos pela Ativa
                Pesquisas
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                (Edite) Texto introdutório sobre a natureza dos projetos,
                escopos de atuação e desenvolvimento técnico.
              </p>
            </div>
          </div>

          <div className="mt-10 px-3 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM / PROJETO PRINCIPAL
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Legenda ou resumo do projeto em destaque.
                </p>
              </div>

              <div className="grid gap-4">
                {featuredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                  >
                    <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                      (Edite) Destaque
                    </p>

                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-subtitle">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                Portfólio de projetos
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Projetos em diferentes frentes de atuação
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto explicando os tipos de projetos
                desenvolvidos.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projectCards.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                >
                  <div className="mb-5 aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM
                  </div>

                  <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-base font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-subtitle">
                    {project.description}
                  </p>
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
                  Metodologia
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  (Edite) Etapas de desenvolvimento dos projetos
                </h2>

                <p className="leading-relaxed text-bg/80">
                  (Edite) Texto curto sobre como os projetos são conduzidos.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {projectStages.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl bg-bg/10 p-6 ring-1 ring-white/10"
                  >
                    <p className="text-sm tracking-[0.25em] text-bg/60">
                      {item.step}
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  Diferenciais
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) O que orienta nossos projetos
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  (Edite) Texto breve sobre abordagem técnica, aplicada e
                  científica.
                </p>

                <div className="mt-8 grid gap-4">
                  {highlights.map((item) => (
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
                  IMAGEM / PROJETO / PESQUISA APLICADA
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
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou número relacionado aos projetos
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou número relacionado aos projetos
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou número relacionado aos projetos
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                (Edite) Quer desenvolver um projeto com a Ativa Pesquisas?
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
                  href="/tecnologia"
                  className="btn rounded-full border border-white/20 px-8 py-4 text-base text-bg hover:bg-bg/10 hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Ver tecnologia
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
