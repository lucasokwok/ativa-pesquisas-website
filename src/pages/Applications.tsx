import logoOutline from "../assets/home/home-bg-logo-outline.webp";

const applicationCards = [
  {
    title: "(Edite) Estações de tratamento",
    description:
      "(Edite) Texto curto sobre a aplicação em estruturas expostas a ambientes agressivos.",
  },
  {
    title: "(Edite) Infraestrutura industrial",
    description:
      "(Edite) Texto curto sobre a aplicação em estruturas e instalações técnicas.",
  },
  {
    title: "(Edite) Ambientes com ataque químico",
    description:
      "(Edite) Texto curto sobre a aplicação em áreas sujeitas à degradação acelerada.",
  },
  {
    title: "(Edite) Sistemas de armazenamento",
    description:
      "(Edite) Texto curto sobre a aplicação em reservatórios, contenções ou superfícies especiais.",
  },
];

const galleryItems = [
  {
    title: "(Edite) Aplicação 01",
    description: "(Edite) Legenda curta da imagem.",
    size: "large",
  },
  {
    title: "(Edite) Aplicação 02",
    description: "(Edite) Legenda curta da imagem.",
    size: "small",
  },
  {
    title: "(Edite) Aplicação 03",
    description: "(Edite) Legenda curta da imagem.",
    size: "small",
  },
  {
    title: "(Edite) Aplicação 04",
    description: "(Edite) Legenda curta da imagem.",
    size: "small",
  },
  {
    title: "(Edite) Aplicação 05",
    description: "(Edite) Legenda curta da imagem.",
    size: "small",
  },
];

const sectors = [
  {
    title: "(Edite) Saneamento",
    description: "(Edite) Texto curto sobre essa frente de aplicação.",
  },
  {
    title: "(Edite) Indústria",
    description: "(Edite) Texto curto sobre essa frente de aplicação.",
  },
  {
    title: "(Edite) Armazenamento",
    description: "(Edite) Texto curto sobre essa frente de aplicação.",
  },
  {
    title: "(Edite) Estruturas especiais",
    description: "(Edite) Texto curto sobre essa frente de aplicação.",
  },
];

export default function Applications() {
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
                Aplicações
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                (Edite) Aplicações das soluções desenvolvidas pela Ativa
                Pesquisas
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                (Edite) Texto introdutório sobre os contextos de uso, setores e
                ambientes onde a tecnologia pode ser aplicada.
              </p>
            </div>
          </div>

          <div className="mt-10 px-3 sm:px-4 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-border bg-bg p-4">
                <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM PRINCIPAL / APLICAÇÃO EM DESTAQUE
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Legenda ou destaque principal da aplicação.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM SECUNDÁRIA 01
                  </div>
                  <p className="mt-3 text-sm text-subtitle">
                    (Edite) Legenda curta.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM SECUNDÁRIA 02
                  </div>
                  <p className="mt-3 text-sm text-subtitle">
                    (Edite) Legenda curta.
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
                Frentes de aplicação
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                (Edite) Setores e ambientes de atuação
              </h2>

              <p className="mt-3 leading-relaxed text-subtitle">
                (Edite) Texto curto explicando a amplitude das aplicações.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {applicationCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
                >
                  <div className="mb-4 aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                    IMAGEM
                  </div>

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
                  Galeria
                </p>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  (Edite) Exemplos visuais de aplicações
                </h2>

                <p className="leading-relaxed text-bg/80">
                  (Edite) Texto curto para introduzir a galeria de imagens e
                  contextos de uso.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {galleryItems.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className={
                      item.size === "large"
                        ? "sm:col-span-2 rounded-2xl bg-bg/10 p-4 ring-1 ring-white/10"
                        : "rounded-2xl bg-bg/10 p-4 ring-1 ring-white/10"
                    }
                  >
                    <div
                      className={
                        item.size === "large"
                          ? "aspect-[16/9] rounded-xl bg-bg/10 flex items-center justify-center text-bg/65"
                          : "aspect-[4/3] rounded-xl bg-bg/10 flex items-center justify-center text-bg/65"
                      }
                    >
                      IMAGEM
                    </div>

                    <h3 className="mt-4 text-base font-semibold">
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
                  Contextos de uso
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  (Edite) Aplicações em diferentes cenários técnicos
                </h2>

                <p className="mt-3 leading-relaxed text-subtitle">
                  (Edite) Texto breve sobre adaptação da tecnologia a diferentes
                  demandas e ambientes.
                </p>

                <div className="mt-8 grid gap-4">
                  {sectors.map((item) => (
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
                  IMAGEM / APLICAÇÃO TÉCNICA
                </div>
                <p className="mt-3 text-sm text-subtitle">
                  (Edite) Legenda opcional da imagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  (Edite) Aplicação complementar 01
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  (Edite) Texto curto.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  (Edite) Aplicação complementar 02
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  (Edite) Texto curto.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-text/60">
                  IMAGEM
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  (Edite) Aplicação complementar 03
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  (Edite) Texto curto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                (Edite) Quer avaliar a aplicação no seu contexto?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                (Edite) Texto curto de encerramento e convite para contato ou
                análise técnica.
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
