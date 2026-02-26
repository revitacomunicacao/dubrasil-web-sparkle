import { useFadeUp } from "@/hooks/useFadeUp";
import { Search, Settings, GraduationCap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico do cenário",
    desc: "Entender operação e objetivo.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Implantação personalizada",
    desc: "Configuração e padronização.",
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Treinamento e acompanhamento consultivo",
    desc: "Uso real e ajustes finos.",
  },
];

const Method = () => {
  const ref = useFadeUp();

  return (
    <section id="metodo" className="bg-background py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Como entregamos na prática
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="relative text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="text-primary" size={32} />
              </div>
              <span className="text-5xl font-bold text-primary/20">{step.num}</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
