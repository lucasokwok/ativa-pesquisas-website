import logoOutline from "../assets/home/home-bg-logo-outline.webp";

const capabilityCards = [
  {
    title: "(Edite) Caracterização",
    description: "(Edite) Descrição curta da capacidade técnica.",
  },
  {
    title: "(Edite) Formulação",
    description: "(Edite) Descrição curta da capacidade técnica.",
  },
  {
    title: "(Edite) Ensaios",
    description: "(Edite) Descrição curta da capacidade técnica.",
  },
  {
    title: "(Edite) Validação",
    description: "(Edite) Descrição curta da capacidade técnica.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "(Edite) Etapa 1",
    description: "(Edite) Descrição curta da etapa.",
  },
  {
    step: "02",
    title: "(Edite) Etapa 2",
    description: "(Edite) Descrição curta da etapa.",
  },
  {
    step: "03",
    title: "(Edite) Etapa 3",
    description: "(Edite) Descrição curta da etapa.",
  },
  {
    step: "04",
    title: "(Edite) Etapa 4",
    description: "(Edite) Descrição curta da etapa.",
  },
];

const structureCards = [
  {
    title: "(Edite) Infraestrutura",
    description: "(Edite) Descrição curta.",
  },
  {
    title: "(Edite) Métodos",
    description: "(Edite) Descrição curta.",
  },
  {
    title: "(Edite) Pesquisa aplicada",
    description: "(Edite) Descrição curta.",
  },
];

export default function Technology() {
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
                Tecnologia
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                (Edite) Tecnologia e capacidades da Ativa Pesquisas
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                (Edite) Texto introdutório da página de tecnologia.
              </p>
            </div>
          </div>

          <div className="mt-10 px-3 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM / BLOCO PRINCIPAL
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    BLOCO 1
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    BLOCO 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                Capacidades
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Competências e recursos tecnológicos
              </h2>
              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto de introdução da seção.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {capabilityCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                >
                  <div className="mb-4 h-10 w-10 rounded-full border border-border bg-muted" />
                  <h3 className="text-base font-semibold text-ink">
                    {card.title}
                  </h3>
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
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-bg/70">
                  Processo
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  (Edite) Como a tecnologia é aplicada
                </h2>

                <p className="leading-relaxed text-bg/80">
                  (Edite) Texto curto explicando o fluxo de atuação.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((item) => (
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
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  Estrutura
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) Laboratório, métodos e desenvolvimento
                </h2>

                <p className="leading-relaxed text-subtitle">
                  (Edite) Texto breve sobre estrutura e operação técnica.
                </p>

                <div className="mt-6 grid gap-4">
                  {structureCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-border bg-bg p-5"
                    >
                      <h3 className="text-base font-semibold text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-subtitle">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[4/5] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM / ESTRUTURA TÉCNICA
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
                Indicadores
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Destaques da atuação tecnológica
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto para contextualizar os destaques.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou marco técnico
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou marco técnico
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-subtle">
                  (Edite)
                </p>
                <p className="mt-4 text-3xl font-semibold text-ink">00</p>
                <p className="mt-2 text-sm text-subtitle">
                  (Edite) Indicador ou marco técnico
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                (Edite) Quer entender melhor nossa tecnologia?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                (Edite) Texto curto de chamada para contato ou aprofundamento.
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
