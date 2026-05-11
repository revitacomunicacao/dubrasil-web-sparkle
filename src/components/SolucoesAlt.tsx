import {
  ArrowRight,
  Sparkles,
  Clock,
  Server,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import bgServicos from "@/assets/bloco-servicos.webp";
import bgSistemas from "@/assets/bloco-sistemas.webp";
import bgNexa from "@/assets/bloco-nexa.webp";

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
  textSide: "left" | "right";
};

const produtos: Produto[] = [
  {
    tag: "Jornadas & Acessos",
    title: "DuBrasil Serviços",
    subtitle: "Ponto, Jornadas e Acessos com Segurança Jurídica",
    description:
      "Rastreabilidade, padronização e conformidade trabalhista para reduzir riscos, ajustes manuais e retrabalho.",
    image: bgServicos,
    icon: Clock,
    bullets: [
      "Gestão de jornadas",
      "Controle de acesso",
      "Conformidade trabalhista",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/projetos/dubrasil/",
    textSide: "left",
  },
  {
    tag: "ERP & Processos",
    title: "DuBrasil Sistemas",
    subtitle: "ERP e gestão de processos para operação organizada",
    description:
      "Mais controle sobre rotinas, financeiro e fluxo de trabalho para decisões mais seguras e uma gestão previsível.",
    image: bgSistemas,
    icon: Server,
    bullets: [
      "Controle financeiro",
      "Gestão de estoque",
      "Processos organizados",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/projetos/tga/",
    textSide: "right",
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
    image: bgNexa,
    icon: Headphones,
    bullets: [
      "Centralização de canais",
      "Atendimento profissional",
      "Controle de conversas",
    ],
    ctaLabel: "Saiba mais",
    ctaLink: "https://revitacomunicacao.com.br/nexa/",
    textSide: "right",
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

          <h2 className="mt-5 text-3xl md:text-5xl text-[#08284e] font-bold tracking-tight">
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

      {/* Faixas full-width com background image */}
      <div className="w-full space-y-6 md:space-y-10">
        {produtos.map((p, i) => {
          const Icon = p.icon;
          const isLeft = p.textSide === "left";

          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="relative w-full overflow-hidden bg-[#f3f4f6]"
            >
              {/* Background illustration */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-hidden="true"
              />
              {/* Soft overlay for legibility on the text side */}
              <div
                className={cn(
                  "absolute inset-0 hidden md:block",
                  isLeft
                    ? "bg-gradient-to-r from-white via-white/85 to-transparent"
                    : "bg-gradient-to-l from-white via-white/85 to-transparent"
                )}
                aria-hidden="true"
              />
              {/* Mobile overlay (full white wash for legibility) */}
              <div
                className="absolute inset-0 bg-white/85 md:hidden"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 min-h-[480px] md:min-h-[560px]">
                <div
                  className={cn(
                    "grid md:grid-cols-2 items-center",
                    isLeft ? "" : ""
                  )}
                >
                  <div
                    className={cn(
                      "max-w-xl",
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    )}
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08284e]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-primary font-semibold">
                      {p.subtitle}
                    </p>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-[#08284e]/70">
                      {p.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {p.bullets.map((b) => (
                        <div
                          key={b}
                          className="rounded-full border border-[#08284e]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#08284e]"
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
                        {p.ctaLabel}
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
