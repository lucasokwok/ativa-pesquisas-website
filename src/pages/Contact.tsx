import logoOutline from "../assets/home/home-bg-logo-outline.webp";

export default function Contact() {
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
                Contato
              </p>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Entre em contato com a Ativa Pesquisas
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtitle sm:text-lg">
                Utilize o canal abaixo para entrar em contato.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-bg py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-border bg-bg p-8 shadow-sm sm:p-10">
                <p className="text-xs tracking-[0.3em] uppercase text-subtle">
                  E-mail
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  contato@ativapesquisas.com.br
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-subtitle">
                  (Edite) Texto curto sobre atendimento, parcerias, projetos ou
                  solicitações técnicas.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:contato@ativapesquisas.com.br"
                    className="btn btn-pill-gray-to-blue btn-lg"
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-6 sm:p-8">
                <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-border bg-bg text-text/60">
                  IMAGEM / BLOCO INSTITUCIONAL
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-16">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                  Canal principal
                </p>
                <p className="mt-3 text-base font-semibold text-ink">E-mail</p>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  contato@ativapesquisas.com.br
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                  (Edite)
                </p>
                <p className="mt-3 text-base font-semibold text-ink">
                  (Edite) Informação
                </p>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  (Edite) Texto complementar de contato.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm">
                <p className="text-xs tracking-[0.25em] uppercase text-subtle">
                  (Edite)
                </p>
                <p className="mt-3 text-base font-semibold text-ink">
                  (Edite) Informação
                </p>
                <p className="mt-2 text-sm leading-relaxed text-subtitle">
                  (Edite) Texto complementar de contato.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-bg">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="rounded-2xl bg-bg/10 p-8 ring-1 ring-white/10 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Vamos conversar?
              </h2>

              <p className="mt-3 max-w-2xl leading-relaxed text-bg/80">
                Para informações institucionais, projetos, parcerias ou
                solicitações técnicas, entre em contato pelo e-mail abaixo.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contato@ativapesquisas.com.br"
                  className="btn rounded-full bg-bg px-8 py-4 text-base text-ink hover:-translate-y-[1px] hover:shadow-lg"
                >
                  contato@ativapesquisas.com.br
                </a>

                <a
                  href="/sobre"
                  className="btn rounded-full border border-white/20 px-8 py-4 text-base text-bg hover:bg-bg/10 hover:-translate-y-[1px] hover:shadow-lg"
                >
                  Conhecer a empresa
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
