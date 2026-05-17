import { motion } from "framer-motion";
import { Search, Settings, GraduationCap, ArrowRight } from "lucide-react";
import imgDiagnostico from "@/assets/method-diagnostico.jpeg";
import imgImplantacao from "@/assets/implantacao.jpeg";
import imgAcompanhamento from "@/assets/method-acompanhamento.jpeg";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico do cenário",
    desc: "Entendemos sua operação, seus objetivos e os gargalos que travam o crescimento antes de propor qualquer solução.",
    image: imgDiagnostico,
  },
  {
    num: "02",
    icon: Settings,
    title: "Implantação personalizada",
    desc: "Configuramos, padronizamos e integramos a solução à sua rotina real, sem atalhos e sem improvisos.",
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
    <section id="metodo" className="relative overflow-hidden bg-[#002147] py-16 text-white max-md:py-14 max-lg:py-20 sm:py-36 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 max-md:px-4 sm:px-6 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center max-md:mb-10 sm:mb-28 md:mb-20"
        >
          <p className="text-[16px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Nosso método
          </p>
          <h2 className="text-3xl leading-[1.05] tracking-tight max-md:text-balance sm:text-5xl md:text-6xl max-lg:text-4xl">
            <span className="font-light">Como entregamos</span>
            <br />
            <span className="font-extrabold text-primary">na prática.</span>
          </h2>
          <p className="mt-6 text-[20px] text-support leading-relaxed max-w-xl mx-auto">
            Três etapas que garantem <strong className="text-primary">resultado real</strong>: da análise inicial ao acompanhamento contínuo. Esse é o <strong className="text-primary">diferencial</strong> que transforma tecnologia em impacto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-14 max-md:gap-12 sm:gap-32 md:gap-24">
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid items-center gap-8 max-md:gap-6 md:grid-cols-2 md:gap-16 lg:gap-20"
              >
                {/* Image */}
                <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-primary/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-auto w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] max-md:max-h-[240px] max-md:object-[50%_35%] md:max-h-none md:object-center"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "md:order-1" : "md:order-2"}`}>
                  <div className="mb-5 flex items-center gap-3 max-md:mb-4 md:mb-6 md:gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 max-md:h-12 max-md:w-12 md:h-16 md:w-16">
                      <step.icon className="text-primary max-md:h-6 max-md:w-6" size={28} />
                    </div>
                    <span className="select-none text-5xl font-bold text-primary/20 max-md:text-4xl md:text-7xl">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-bold leading-tight max-md:text-balance sm:text-[32px] lg:text-[38px]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[20px] text-white leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-8 h-1 w-20 bg-primary/40 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below method */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center max-md:mt-10 md:mt-24"
        >
          <a
            href="#contato"
            className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:brightness-110 hover:scale-105 max-md:mx-auto max-md:px-6 max-md:py-3.5 sm:w-auto md:px-10 md:py-5"
          >
            Quero esse diferencial na minha empresa
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;
