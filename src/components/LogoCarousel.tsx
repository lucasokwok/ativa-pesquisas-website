import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo } from "react";

type Partner = { name: string; href?: string; src?: string };

export default function LogoCarousel({ partners }: { partners: Partner[] }) {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const autoplay = useMemo(() => {
    if (reducedMotion) return undefined;

    return Autoplay({
      delay: 2200,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    });
  }, [reducedMotion]);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    autoplay ? [autoplay] : [],
  );

  useEffect(() => {
    if (!autoplay) return;

    const onVis = () => {
      if (document.hidden) autoplay.stop();
      else autoplay.play();
    };

    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [autoplay]);

  return (
    <section className="border-t border-border bg-bg py-10 sm:py-14">
      <div className="px-4 sm:px-8 lg:px-32">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-roledescription="carousel"
          aria-label="Apoiadores e fornecedores"
        >
          <div className="-ml-2 flex">
            {partners.map((p) => {
              const content = (
                <div
                  className="
                    flex h-full min-h-[132px] items-center justify-center
                    rounded-xl border border-border bg-white
                    p-4
                    transition-all duration-200
                    hover:-translate-y-[1px] hover:shadow-lg
                    sm:min-h-[160px] sm:rounded-2xl sm:p-6
                  "
                >
                  {p.src ? (
                    <img
                      src={p.src}
                      alt={p.name}
                      className="
                        h-24 w-auto max-w-full object-contain
                        opacity-70
                        transition-all duration-200
                        group-hover:opacity-100
                        sm:h-32
                        md:h-40
                        lg:h-48 lg:max-w-[720px]
                      "
                    />
                  ) : (
                    <span className="text-xs text-text/50">{p.name}</span>
                  )}
                </div>
              );

              return (
                <div
                  key={p.name}
                  className="
                    group
                    min-w-0 flex-[0_0_auto]
                    basis-[80%]
                    pl-2
                    sm:basis-1/2
                    md:basis-1/3
                    lg:basis-1/5
                  "
                >
                  {p.href ? (
                    <div
                      className="block h-full filter-none hover:filter-none"
                      aria-label={p.name}
                    >
                      {content}
                    </div>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
