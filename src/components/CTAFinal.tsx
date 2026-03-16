import { MessageCircle } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const WHATSAPP_URL = "https://wa.me/5534999999999?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20DuBrasil.";

const CTAFinal = () => {
  const ref = useFadeUp();

  return (
    <section className="bg-primary py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl text-balance">
          Fale com um especialista e receba um direcionamento em minutos.
        </h2>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-10 py-5 text-lg font-bold text-whatsapp-foreground shadow-2xl transition-all hover:brightness-110 hover:scale-105"
        >
          <MessageCircle size={24} />
          Quero meu direcionamento no WhatsApp
        </a>

        <p className="mt-6 text-sm text-primary-foreground/60">
          Sem compromisso &bull; Atendimento humano &bull; Resposta rápida
        </p>
      </div>
    </section>
  );
};

export default CTAFinal;
