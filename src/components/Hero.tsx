import { ArrowRight } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";
import { HeroMainTitle } from "@/lib/cms-text";
import type { HomeHeroContent } from "@/types/cms";

type HeroProps = {
  content: HomeHeroContent;
};

const Hero = ({ content }: HeroProps) => {
  const ref = useFadeUp();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center text-dark-foreground max-md:min-h-[85vh] max-md:[background-position:center_22%] max-lg:min-h-[90vh] max-lg:[background-position:center_28%]"
      style={{ backgroundImage: `url(${content.imagemFundo})` }}
    >
      <div className="absolute inset-0 bg-black/75 max-md:bg-black/88" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#002147]/45 via-dark/90 to-primary/35 max-md:from-[#002147]/62 max-md:via-dark/94"
        aria-hidden
      />

      <div
        ref={ref}
        className="fade-up relative z-10 mx-auto max-w-4xl px-6 py-32 text-center max-md:px-4 max-md:py-20 max-lg:py-24"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {content.titulo}
        </p>

        <h1 className="mb-6 text-balance text-4xl leading-tight tracking-tight max-md:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <HeroMainTitle text={content.subtitulo} />
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg font-medium leading-relaxed text-dark-foreground/70 sm:text-xl">
          {content.textoSuperior}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-dark-foreground/60 sm:text-lg">
          {content.descricao}
        </p>

        <div className="flex justify-center max-md:px-1">
          <a
            href={content.botao.link}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:scale-105 max-md:w-full max-md:max-w-md max-md:px-6 max-md:py-3.5 max-md:text-center"
          >
            {content.botao.texto}
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="mt-8 text-sm text-dark-foreground/50">{content.textoInferior}</p>
      </div>
    </section>
  );
};

export default Hero;
