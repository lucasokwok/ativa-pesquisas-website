import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo } from "react";

type Partner = { name: string; href?: string; src?: string };

export default function PartnersCarousel({
  partners,
}: {
  partners: Partner[];
}) {
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

  // opcional: pausa/retoma quando aba perde foco
  useEffect(() => {
    if (!autoplay) return;
    const onVis = () => (document.hidden ? autoplay.stop() : autoplay.play());
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [autoplay]);

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
      aria-roledescription="carousel"
      aria-label="Apoiadores e fornecedores"
    >
      <div className="flex">
        {partners.map((p) => {
          const Content = (
            <div
              className="
                flex items-center justify-center
                rounded-2xl border border-border bg-white
                p-6
                transition-all duration-200
                hover:-translate-y-[1px] hover:shadow-lg
              "
            >
              {p.src ? (
                <img
                  src={p.src}
                  alt={p.name}
                  className="
                    h-48 w-auto max-w-[720px] object-contain
                    opacity-70 
                    transition-all duration-200
                    group-hover:opacity-100 group-hover:grayscale-0
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
                flex-[0_0_auto]
                basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5
                px-2
              "
            >
              {p.href ? (
                <div
                  className="block filter-none hover:filter-none"
                  aria-label={p.name}
                >
                  {Content}
                </div>
              ) : (
                Content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
