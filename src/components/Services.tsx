import { Clock, Server, Headphones, MessageCircle } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const services = [
  {
    icon: Clock,
    title: "DuBrasil Serviços",
    subtitle: "Ponto, Jornadas e Acessos com Segurança Jurídica",
    description:
      "Rastreabilidade, padronização e conformidade trabalhista para reduzir riscos, ajustes manuais e retrabalho.",
    ctaLabel: "Quero um diagnóstico agora",
    whatsappMsg: "Oi! Quero um diagnóstico de Ponto/Jornadas + Controle de Acesso/Identificação.\n\nMinha operação é ( ) escritório ( ) turnos ( ) externo/campo e tenho ___ pessoas.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Server,
    title: "DuBrasil Sistemas",
    subtitle: "ERP e gestão de processos para operação organizada",
    description:
      "Mais controle sobre rotinas, financeiro e fluxo de trabalho — para decisões mais seguras e uma gestão previsível.",
    ctaLabel: "Quero organizar minha gestão",
    whatsappMsg: "Oi! Quero organizar minha gestão com ERP/processos.\n\nMinha prioridade é: ( ) financeiro ( ) estoque ( ) emissão/NF ( ) processos.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Headphones,
    title: "DuBrasil Nexa",
    subtitle: "Atendimento multicanal para vender e atender com controle",
    description:
      "Centralize conversas, simplifique processos e encante em cada atendimento.",
    ctaLabel: "Quero profissionalizar meu atendimento",
    whatsappMsg: "Oi! Quero profissionalizar meu atendimento.\n\nUso hoje ( ) WhatsApp ( ) Instagram ( ) outros e tenho ___ atendentes.",
    gradient: "from-primary/10 to-primary/5",
  },
];

const Services = () => {
  const ref = useFadeUp();

  return (
    <section id="solucoes" className="bg-background py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Um grupo, três frentes de solução.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cada frente resolve um ponto crítico da operação — com implantação personalizada, padronização de processos e acompanhamento consultivo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`group rounded-2xl bg-gradient-to-br ${svc.gradient} border border-border p-8 sm:p-10 transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4">
                <svc.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{svc.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{svc.subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {svc.description}
              </p>
              <a
                href={`https://wa.me/5534999999999?text=${encodeURIComponent(svc.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-110 hover:scale-105"
              >
                <MessageCircle size={16} />
                {svc.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
