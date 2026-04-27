import {
  ArrowRight,
  Sparkles,
  Clock,
  Server,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import fotoSecullum from "@/assets/bgServicos.jpeg";
import fotoTga from "@/assets/bgSistemas.jpeg";
import fotoNexa from "@/assets/bgNexa.jpeg";

type Produto = {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  image: string;
  tag: string;
  icon: React.ElementType;
  bullets: string[];
  ctaLabel: string;
  ctaLink: string;
};

const produtos: Produto[] = [
  {
    tag: "Jornadas & Acessos",
    title: "DuBrasil Serviços",
    subtitle: "Ponto, Jornadas e Acessos com Segurança Jurídica",
    description:
      "Rastreabilidade, padronização e conformidade trabalhista para reduzir riscos, ajustes manuais e retrabalho.",
    image: fotoSecullum,
    icon: Clock,
    bullets: [
      "Gestão de jornadas",
      "Controle de acesso",
      "Conformidade trabalhista",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/projetos/dubrasil/",
  },
  {
    tag: "ERP & Processos",
    title: "DuBrasil Sistemas",
    subtitle: "ERP e gestão de processos para operação organizada",
    description:
      "Mais controle sobre rotinas, financeiro e fluxo de trabalho para decisões mais seguras e uma gestão previsível.",
    image: fotoTga,
    icon: Server,
    bullets: [
      "Controle financeiro",
      "Gestão de estoque",
      "Processos organizados",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/projetos/tga/",
  },
  {
    tag: "Atendimento Multicanal",
    title: "DuBrasil Nexa",
    subtitle: "Atendimento multicanal para vender e atender com controle",
    description: (
      <>
        Centralize conversas, simplifique processos e
        <br />
        encante em cada atendimento.
      </>
    ),
    image: fotoNexa,
    icon: Headphones,
    bullets: [
      "Centralização de canais",
      "Atendimento profissional",
      "Controle de conversas",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/nexa/",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const SolucoesAlt = () => {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-background pt-24 sm:pt-32 pb-16"
    >
      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 mb-14 md:mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-primary px-4 py-2 text-sm text-white/80">
            <Sparkles className="h-4 w-4 text-white" />
            O que oferecemos
          </div>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">
            <span className="font-light">Um grupo com </span>
            <span className="font-extrabold text-primary">três frentes</span>
            <span className="font-light"> de solução.</span>
          </h2>

          <p className="mt-4 text-support text-base md:text-lg leading-relaxed">
            Cada frente resolve um ponto crítico da operação com implantação
            personalizada, padronização de processos e acompanhamento consultivo.
            Esse é o nosso{" "}
            <strong className="font-extrabold text-primary">diferencial</strong>.
          </p>
        </div>
      </div>

      {/* Faixas full-width (sem card) */}
      <div className="w-full space-y-10">
        {produtos.map((p, i) => {
          const Icon = p.icon;
          const invert = i % 2 === 1;

          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="w-full bg-[#00234D]"
            >
              <div className={cn("grid w-full md:grid-cols-12", "min-h-[420px]")}>
                {/* Image column (only image) */}
                <div
                  className={cn(
                    "relative md:col-span-4",
                    invert ? "md:order-2" : "md:order-1"
                  )}
                >
                  <div className="relative h-[300px] md:h-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text column (centered) */}
                <div
                  className={cn(
                    "md:col-span-8",
                    invert ? "md:order-1" : "md:order-2"
                  )}
                >
                  <div className="flex h-full items-center justify-center px-6 py-12 md:px-12">
                    <div className="w-full max-w-3xl text-center">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-iconDark">
                        <Icon className="h-10 w-10 text-white/80" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-primary font-semibold">
                        {p.subtitle}
                      </p>
                      <p className="mt-5 text-support leading-relaxed">
                        {p.description}
                      </p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {p.bullets.map((b) => (
                          <div
                            key={b}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-4 text-[18px] leading-relaxed text-white"
                          >
                            {b}
                          </div>
                        ))}
                      </div>

                      <div className="mt-10">
                        <a
                          href={p.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105"
                        >
                          <ArrowRight size={16} />
                          {p.ctaLabel}
                        </a>
                      </div>
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
