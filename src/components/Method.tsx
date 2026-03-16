import { motion } from "framer-motion";
import { Search, Settings, GraduationCap } from "lucide-react";
import imgDiagnostico from "@/assets/method-diagnostico.jpg";
import imgImplantacao from "@/assets/method-implantacao.jpg";
import imgAcompanhamento from "@/assets/method-acompanhamento.jpg";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico do cenário",
    desc: "Entendemos sua operação, seus objetivos e os gargalos que travam o crescimento — antes de propor qualquer solução.",
    image: imgDiagnostico,
  },
  {
    num: "02",
    icon: Settings,
    title: "Implantação personalizada",
    desc: "Configuramos, padronizamos e integramos a solução à sua rotina real — sem atalhos e sem improvisos.",
    image: imgImplantacao,
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Treinamento e acompanhamento consultivo",
    desc: "Capacitamos sua equipe para uso pleno e seguimos acompanhando com ajustes finos e suporte contínuo.",
    image: imgAcompanhamento,
  },
];

const Method = () => {
  return (
    <section id="metodo" className="bg-muted/30 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — estilo Apple: grande, centrado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-20 sm:mb-28"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Nosso método
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Como entregamos
            <br />
            <span className="text-primary">na prática.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Três etapas que garantem resultado real — da análise inicial ao acompanhamento contínuo.
          </p>
        </motion.div>

        {/* Steps — layout alternado Apple-style */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid items-center gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative group">
                    {/* Glow behind image */}
                    <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                      <step.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-6xl font-bold text-primary/15 select-none">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-8 h-px w-16 bg-primary/30 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Method;
