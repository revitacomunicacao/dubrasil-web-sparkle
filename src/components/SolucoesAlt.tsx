// src/components/SolucoesAlt.tsx
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  MessagesSquare,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import fotoControle from "@/assets/Produto controle.png"
import fotoSecullum from "@/assets/Produto secullum.png"
import fotoRelogio from "@/assets/Produto relogio.png"
import fotoIdentificacao from "@/assets/Produto identificacao.png"
import fotoTga from "@/assets/tga.jpg.jpeg"
import fotoNexa from "@/assets/nexa.jpg.jpeg"

type Produto = {
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  icon: React.ElementType;
  bullets: string[];
};

const produtos: Produto[] = [
  {
    tag: "Centralização",
    title: "Secullum Web",
    description:
      "A solução completa para a gestão de ponto e controle de jornadas. Software moderno e intuitivo para simplificar o controle de frequência e otimizar a rotina de RH.",
    image:
      fotoSecullum,
    link: "/produtos/secullum-web",
    icon: MessagesSquare,
    bullets: [
      "Gestão de jornadas",
      "Rotina de RH simplificada",
      "Visão centralizada",
    ],
  },
  {
    tag: "Conformidade",
    title: "Relógio Eletrônico de Ponto (REP)",
    description:
      "Segurança e conformidade no registro das jornadas. Garante precisão, transparência e rastreabilidade no controle das horas trabalhadas.",
    image:
      fotoRelogio,
    link: "/produtos/relogio-ponto",
    icon: ShieldCheck,
    bullets: [
      "Precisão no registro",
      "Rastreabilidade",
      "Conformidade e segurança",
    ],
  },
  {
    tag: "Segurança",
    title: "Controle de Acesso",
    description:
      "Tecnologia para monitorar com eficiência e segurança. Gerencie entradas e saídas de pessoas e veículos com praticidade e confiabilidade.",
    image:
      fotoControle,
    link: "/produtos/controle-acesso",
    icon: Gauge,
    bullets: [
      "Entradas e saídas",
      "Monitoramento eficiente",
      "Confiabilidade operacional",
    ],
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const SolucoesAlt = () => {
  return (
    <section
      id="solucoes"
      className="section-padding bg-black py-10 relative overflow-hidden"
    >
      {/* Background decor alinhado ao “dark premium” */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      <div className="relative container mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-primary" />O que oferecemos
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-section-dark-foreground">
              Nossas Soluções
            </h2>

            <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed">
              Uma apresentação mais elaborada e ilustrada — mantendo o visual
              escuro, premium e as mesmas imagens do componente original.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="secondary" className="rounded-full">
              Ver soluções <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/10"
            >
              Falar com especialista
            </Button>
          </div>
        </div>

        {/* Conteúdo: blocos alternados com imagem grande */}
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
                  "group relative overflow-hidden rounded-3xl border border-white/10",
                  "bg-white/[0.04] backdrop-blur",
                  "grid gap-0 md:grid-cols-12",
                )}
              >
                {/* Image side */}
                <div
                  className={cn(
                    "relative md:col-span-5",
                    invert ? "md:order-2" : "md:order-1",
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
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {p.tag}
                    </div>

                    {/* Title overlay (mobile) */}
                    <div className="absolute bottom-5 left-6 right-6 md:hidden">
                      <h3 className="text-xl font-bold text-white">
                        {p.title}
                      </h3>
                      <div className="mt-2 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                        Saiba mais <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={cn(
                    "p-8 md:p-12 md:col-span-7",
                    invert ? "md:order-1" : "md:order-2",
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
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={p.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Saiba mais <ArrowRight size={16} />
                    </Link>

                    <Link
                      to={p.link}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Ver detalhes do produto
                    </Link>
                  </div>
                </div>

                {/* Whole-card link overlay (mantém UX similar ao original) */}
                <Link
                  to={p.link}
                  className="absolute inset-0"
                  aria-label={`Abrir ${p.title}`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucoesAlt;
