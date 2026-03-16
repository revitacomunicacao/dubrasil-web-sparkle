import {
  ArrowRight,
  MessagesSquare,
  ShieldCheck,
  Gauge,
  Sparkles,
  MessageCircle,
  Clock,
  Server,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import fotoControle from "@/assets/Produto controle.png";
import fotoSecullum from "@/assets/Produto secullum.png";
import fotoRelogio from "@/assets/Produto relogio.png";
import fotoIdentificacao from "@/assets/Produto identificacao.png";
import fotoTga from "@/assets/tga.jpg.jpeg";
import fotoNexa from "@/assets/nexa.jpg.jpeg";

type Produto = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  icon: React.ElementType;
  bullets: string[];
  ctaLabel: string;
  whatsappMsg: string;
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
    ctaLabel: "Quero um diagnóstico agora",
    whatsappMsg:
      "Oi! Quero um diagnóstico de Ponto/Jornadas + Controle de Acesso/Identificação.\n\nMinha operação é ( ) escritório ( ) turnos ( ) externo/campo e tenho ___ pessoas.",
  },
  {
    tag: "ERP & Processos",
    title: "DuBrasil Sistemas",
    subtitle: "ERP e gestão de processos para operação organizada",
    description:
      "Mais controle sobre rotinas, financeiro e fluxo de trabalho — para decisões mais seguras e uma gestão previsível.",
    image: fotoTga,
    icon: Server,
    bullets: [
      "Controle financeiro",
      "Gestão de estoque",
      "Processos organizados",
    ],
    ctaLabel: "Quero organizar minha gestão",
    whatsappMsg:
      "Oi! Quero organizar minha gestão com ERP/processos.\n\nMinha prioridade é: ( ) financeiro ( ) estoque ( ) emissão/NF ( ) processos.",
  },
  {
    tag: "Atendimento Multicanal",
    title: "DuBrasil Nexa",
    subtitle: "Atendimento multicanal para vender e atender com controle",
    description:
      "Centralize conversas, simplifique processos e encante em cada atendimento.",
    image: fotoNexa,
    icon: Headphones,
    bullets: [
      "Centralização de canais",
      "Atendimento profissional",
      "Controle de conversas",
    ],
    ctaLabel: "Quero profissionalizar meu atendimento",
    whatsappMsg:
      "Oi! Quero profissionalizar meu atendimento.\n\nUso hoje ( ) WhatsApp ( ) Instagram ( ) outros e tenho ___ atendentes.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const SolucoesAlt = () => {
  return (
    <section
      id="solucoes"
      className="section-padding bg-background py-24 sm:py-32 relative overflow-hidden"
    >

      <div className="relative container mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />O que oferecemos
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-foreground">
              Um grupo, três frentes de solução.
            </h2>

            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              Cada frente resolve um ponto crítico da operação — com implantação
              personalizada, padronização de processos e acompanhamento
              consultivo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110"
            >
              Falar com especialista <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Cards alternados */}
        <div className="flex flex-col gap-10">
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
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border",
                  "bg-gradient-to-br from-primary/10 to-primary/5",
                  "grid gap-0 md:grid-cols-12"
                )}
              >
                {/* Image side */}
                <div
                  className={cn(
                    "relative md:col-span-5",
                    invert ? "md:order-2" : "md:order-1"
                  )}
                >
                  <div className="relative h-[260px] md:h-full md:min-h-[360px] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                    {/* Tag */}
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-4 py-2 text-sm text-foreground/80">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {p.tag}
                    </div>

                    {/* Title overlay (mobile) */}
                    <div className="absolute bottom-5 left-6 right-6 md:hidden">
                      <h3 className="text-xl font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-primary font-medium">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={cn(
                    "p-8 md:p-12 md:col-span-7",
                    invert ? "md:order-1" : "md:order-2"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="hidden md:block text-2xl md:text-3xl font-bold text-white">
                        {p.title}
                      </h3>
                      <p className="hidden md:block mt-1 text-sm font-medium text-primary">
                        {p.subtitle}
                      </p>
                      <p className="mt-0 md:mt-3 text-white/60 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {p.bullets.map((b) => (
                      <div
                        key={b}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                      >
                        {b}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href={`https://wa.me/5534999999999?text=${encodeURIComponent(p.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-110 hover:scale-105"
                    >
                      <MessageCircle size={16} />
                      {p.ctaLabel}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucoesAlt;
