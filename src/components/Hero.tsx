import { MessageCircle, ArrowRight } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const WHATSAPP_URL = "https://wa.me/5534999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20DuBrasil.";

const Hero = () => {
  const ref = useFadeUp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-dark-foreground">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />

      <div ref={ref} className="fade-up relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Tecnologia &bull; Implantação &bull; Acompanhamento
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Grupo DuBrasil Soluções
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-dark-foreground/70 sm:text-xl">
          Tecnologia + implantação + acompanhamento para uma gestão mais segura e eficiente.
          Somos um grupo de empresas especializado em conectar soluções reais às necessidades do seu negócio.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-whatsapp-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:scale-105"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:scale-105"
          >
            Quero ser direcionado
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="mt-8 text-sm text-dark-foreground/50">
          Resposta rápida &bull; Atendimento humano &bull; Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default Hero;
