import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCmsIcon } from "@/lib/cms-icons";
import { MetodoIntroText, MetodoSectionTitle } from "@/lib/cms-text";
import { CMS_HOME_FALLBACK } from "@/lib/cms-fallback";
import type { HomeMetodoContent } from "@/types/cms";

type MethodProps = {
  content?: HomeMetodoContent;
};

const Method = ({ content = CMS_HOME_FALLBACK.metodo }: MethodProps) => {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[#002147] py-16 text-white max-md:py-14 max-lg:py-20 sm:py-36 md:py-28"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 max-md:px-4 sm:px-6 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center max-md:mb-10 sm:mb-28 md:mb-20"
        >
          <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
            {content.titulo}
          </p>
          <h2 className="text-3xl leading-[1.05] tracking-tight max-md:text-balance sm:text-5xl md:text-6xl max-lg:text-4xl">
            <MetodoSectionTitle text={content.subtitulo} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[20px] leading-relaxed text-support">
            <MetodoIntroText text={content.descricao} />
          </p>
        </motion.div>

        <div className="flex flex-col gap-14 max-md:gap-12 sm:gap-32 md:gap-24">
          {content.etapas.map((step, i) => {
            const isReversed = i % 2 === 1;
            const Icon = getCmsIcon(step.iconKey);
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={step.titulo}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid items-center gap-8 max-md:gap-6 md:grid-cols-2 md:gap-16 lg:gap-20"
              >
                <div className={isReversed ? "md:order-2" : "md:order-1"}>
                  <div className="group relative">
                    <div className="absolute -inset-4 rounded-3xl bg-primary/15 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                      <img
                        src={step.imagem}
                        alt={step.titulo}
                        className="h-auto w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] max-md:max-h-[240px] max-md:object-[50%_35%] md:max-h-none md:object-center"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className={isReversed ? "md:order-1" : "md:order-2"}>
                  <div className="mb-5 flex items-center gap-3 max-md:mb-4 md:mb-6 md:gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 max-md:h-12 max-md:w-12 md:h-16 md:w-16">
                      <Icon className="text-primary max-md:h-6 max-md:w-6" size={28} />
                    </div>
                    <span className="select-none text-5xl font-bold text-primary/20 max-md:text-4xl md:text-7xl">
                      {num}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-bold leading-tight max-md:text-balance sm:text-[32px] lg:text-[38px]">
                    {step.titulo}
                  </h3>

                  <p className="mt-4 text-[20px] leading-relaxed text-white">{step.descricao}</p>

                  <div className="mt-8 h-1 w-20 rounded-full bg-primary/40" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center max-md:mt-10 md:mt-24"
        >
          <a
            href={content.botao.link}
            className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:brightness-110 hover:scale-105 max-md:mx-auto max-md:px-6 max-md:py-3.5 sm:w-auto md:px-10 md:py-5"
          >
            {content.botao.texto}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;
