import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getCmsIcon } from "@/lib/cms-icons";
import {
  CmsLineBreakText,
  SolucoesIntroText,
  SolucoesSectionTitle,
} from "@/lib/cms-text";
import type { HomeSolucoesContent } from "@/types/cms";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SolucoesAltProps = {
  content: HomeSolucoesContent;
};

const SolucoesAlt = ({ content }: SolucoesAltProps) => {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-background pb-16 pt-16 max-md:pt-14 max-md:pb-10 sm:pt-32 md:pt-24"
    >
      <div className="relative mx-auto mb-10 max-w-7xl px-4 max-md:mb-8 sm:px-6 md:mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-primary px-4 py-2 text-sm text-white/80">
            <Sparkles className="h-4 w-4 text-white" />
            {content.titulo}
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#08284e] max-md:text-balance sm:text-3xl md:text-5xl">
            <SolucoesSectionTitle text={content.subtitulo} />
          </h2>

          <p className="mt-4 text-base leading-relaxed text-support md:text-lg">
            <SolucoesIntroText text={content.descricao} />
          </p>
        </div>
      </div>

      <div className="w-full space-y-6 md:space-y-10">
        {content.solucoes.map((p, i) => {
          const Icon = getCmsIcon(p.iconKey);
          const isLeft = p.textSide === "left";

          return (
            <motion.article
              key={p.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="relative isolate w-full overflow-hidden bg-[#f3f4f6]"
            >
              <div
                className="absolute inset-0 z-0 hidden bg-cover bg-center bg-no-repeat md:block"
                style={{ backgroundImage: `url(${p.imagem})` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 z-0 bg-cover bg-no-repeat md:hidden"
                style={{
                  backgroundImage: `url(${p.imagem})`,
                  backgroundPosition: p.mobileBgPosition,
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[#002147]/85 md:hidden"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto min-h-[400px] max-w-7xl px-4 py-12 max-md:min-h-[380px] sm:px-6 md:min-h-[560px] md:px-6 md:py-24">
                <div className={cn("grid items-center md:grid-cols-2")}>
                  <div
                    className={cn(
                      "max-w-xl",
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    )}
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 max-md:mb-4 md:mb-6 md:h-14 md:w-14">
                      <Icon
                        className="h-6 w-6 text-primary max-md:h-6 max-md:w-6 md:h-7 md:w-7"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-[#08284e] max-md:text-balance max-md:text-white sm:text-3xl md:text-4xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 font-semibold text-primary">{p.subtitulo}</p>
                    <p className="mt-5 text-base leading-relaxed text-[#08284e]/70 max-md:text-white/90 md:text-lg">
                      <CmsLineBreakText text={p.descricao} />
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 max-md:mt-5 md:mt-8 md:gap-3">
                      {p.palavrasChave.map((b) => (
                        <div
                          key={b}
                          className="rounded-full border border-[#08284e]/10 bg-white/80 px-3.5 py-2 text-sm font-medium text-[#08284e] backdrop-blur-sm max-md:py-2 md:bg-white/70 md:px-4"
                        >
                          {b}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 max-md:mt-6 md:mt-10">
                      <a
                        href={p.botao.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 max-md:max-w-sm max-md:py-3.5 sm:w-auto"
                      >
                        {p.botao.texto}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default SolucoesAlt;
