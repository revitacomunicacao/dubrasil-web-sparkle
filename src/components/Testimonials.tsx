import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Diretor Administrativo",
    company: "Indústria Alimentícia",
    text: "Com a DuBrasil conseguimos organizar toda a gestão de ponto e acessos. Antes tínhamos ajustes manuais constantes. Hoje a operação roda com rastreabilidade e segurança jurídica.",
  },
  {
    name: "Fernanda Souza",
    role: "Gerente de RH",
    company: "Rede de Clínicas",
    text: "A implantação foi personalizada para a nossa realidade. A equipe da DuBrasil acompanhou cada etapa, treinando nossos colaboradores e garantindo que o sistema funcionasse de verdade no dia a dia.",
  },
  {
    name: "Marcos Oliveira",
    role: "Sócio-diretor",
    company: "Grupo de Concessionárias",
    text: "O ERP trouxe uma visão integrada que a gente não tinha. Financeiro, estoque e processos em um lugar só. O diferencial da DuBrasil é o acompanhamento consultivo que não para após a instalação.",
  },
  {
    name: "Ana Paula Martins",
    role: "Coordenadora de Atendimento",
    company: "E-commerce Regional",
    text: "O Nexa transformou nosso atendimento. Centralizamos WhatsApp, e-mail e chat em um único painel. A agilidade aumentou e conseguimos atender o dobro sem perder qualidade.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-muted/30 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl text-foreground leading-[1.05]">
            <span className="font-light">Experiências dos </span>
            <span className="font-extrabold text-primary">nossos clientes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como empresas reais estão transformando suas operações com o apoio do Grupo DuBrasil Soluções.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-background rounded-3xl border border-border shadow-xl p-8 sm:p-12 md:p-16 min-h-[320px] flex flex-col justify-center">
            <Quote className="text-primary/20 h-12 w-12 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                  "{t.text}"
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border bg-background hover:bg-muted transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-border bg-background hover:bg-muted transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
