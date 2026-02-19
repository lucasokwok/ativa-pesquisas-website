import hero01 from "../assets/home/home-hero-01.webp";
import hero02 from "../assets/home/home-hero-02.webp";
import hero03 from "../assets/home/home-hero-03.webp";
import logoOutline from "../assets/home/home-bg-logo-outline.webp";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-hidden space-y-14">
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

      {/* imagens hero */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="space-y-8">
          <div className="px-6 sm:px-8 lg:px-32">
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-400">
                Ativa Pesquisas
              </p>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Mitigação de biocorrosão em concreto com foco em durabilidade
                sustentável
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-subtle sm:text-lg">
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

          <div className="px-3 sm:px-4 lg:px-10">
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

        <section className="px-6 sm:px-8 lg:px-32">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            O desafio
          </h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            Ambientes com elevada agressividade química e atividade
            microbiológica aceleram a degradação de estruturas de concreto,
            reduzindo vida útil e aumentando custo de manutenção.
          </p>
        </section>
      </div>
    </div>
  );
}
