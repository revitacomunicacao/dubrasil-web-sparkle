import { useFadeUp } from "@/hooks/useFadeUp";
import { Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useFadeUp();

  return (
    <section id="sobre" className="bg-dark text-dark-foreground py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary mb-4">
              Sobre o grupo
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Mais do que tecnologia:
              <br />
              <span className="text-primary">parceria real.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-dark-foreground/70">
              O Grupo DuBrasil Soluções nasceu da convicção de que tecnologia só faz sentido quando bem aplicada.
              Não vendemos sistemas — entregamos soluções implantadas, com treinamento e acompanhamento contínuo.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dark-foreground/70">
              Atuamos em Uberaba - MG e atendemos empresas de diversos segmentos em todo o Brasil.
              Nosso diferencial está no atendimento consultivo: entendemos o cenário do cliente antes de propor qualquer solução.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Shield,
                title: "Gestão Segura",
                desc: "Conformidade trabalhista, controle de acesso e processos protegidos.",
              },
              {
                icon: Users,
                title: "Atendimento Humano",
                desc: "Equipe dedicada que entende o seu negócio de verdade.",
              },
              {
                icon: TrendingUp,
                title: "Resultado Mensurável",
                desc: "Indicadores e relatórios para acompanhar cada evolução.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl bg-dark-foreground/5 p-6 transition-colors hover:bg-dark-foreground/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-dark-foreground/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
