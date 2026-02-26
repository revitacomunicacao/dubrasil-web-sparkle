import { Clock, Server, Headphones, MessageCircle } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const services = [
  {
    icon: Clock,
    title: "DuBrasil Serviços",
    subtitle: "Ponto, Jornadas e Acessos",
    description:
      "Soluções completas em controle de ponto eletrônico, gestão de jornadas e controle de acesso. Equipamentos modernos, software em nuvem, consultoria trabalhista e suporte contínuo.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre as soluções de Ponto e Acesso da DuBrasil Serviços.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Server,
    title: "DuBrasil Sistemas",
    subtitle: "ERP e Gestão de Processos",
    description:
      "Sistemas ERP sob medida para automatizar e integrar processos da sua empresa. Do financeiro ao estoque, implantação completa com treinamento e acompanhamento consultivo.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre os Sistemas ERP da DuBrasil.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Headphones,
    title: "DuBrasil Nexa",
    subtitle: "Atendimento Multicanal",
    description:
      "Plataforma de atendimento integrada: WhatsApp, telefone, chat e redes sociais em um só lugar. PABX virtual, URA inteligente e relatórios completos para o seu time.",
    whatsappMsg: "Olá! Gostaria de saber mais sobre o atendimento multicanal DuBrasil Nexa.",
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
            Cada empresa do grupo é especialista em uma área — mas todas trabalham juntas para entregar resultado completo ao seu negócio.
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
                Falar com especialista
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
