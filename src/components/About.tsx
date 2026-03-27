import { useFadeUp } from "@/hooks/useFadeUp";
import imgParceriaReal from "@/assets/Mais do que tecnologia - parceria real.jpeg";

const About = () => {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();
  const ref3 = useFadeUp();

  return (
    <section id="sobre" className="bg-[#002147] text-dark-foreground py-24 sm:py-32 text-justify">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref1} className="fade-up max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400 mb-4">
            Sobre o grupo
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Mais do que tecnologia:
            <br />
            <span className="text-gray-400">parceria real.</span>
          </h2>
        </div>

        {/* Content spread out */}
        <div ref={ref2} className="fade-up max-w-4xl mx-auto space-y-8 mb-20">
          <p className="text-lg sm:text-xl leading-relaxed text-dark-foreground/70">
            O Grupo DuBrasil Soluções é um hub de soluções que une tecnologia, implantação orientada e acompanhamento consultivo para tornar a gestão das empresas mais segura, eficiente e previsível.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-dark-foreground/70">
            Nossa atuação nasceu da necessidade real do mercado: muitas empresas até possuem sistemas, mas continuam enfrentando retrabalho, processos despadronizados e riscos, principalmente quando o assunto envolve jornadas de trabalho, acessos, conformidade e rotina operacional.
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={imgParceriaReal}
              alt="Mais do que tecnologia: parceria real"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-lg sm:text-xl leading-relaxed text-dark-foreground/70">
            Por isso, a DuBrasil vai além da ferramenta: ajudamos a desenhar o cenário, configurar da forma correta, treinar as equipes e acompanhar o uso no dia a dia, garantindo resultado prático.
          </p>
        </div>

        {/* Differentiator highlight */}
        <div ref={ref3} className="fade-up max-w-4xl mx-auto mt-[-50px]">
          <div className="rounded-2xl bg-dark-foreground/5 px-8 py-4 sm:px-12 sm:py-6 text-center">
            <p className="text-xl sm:text-2xl leading-relaxed text-dark-foreground/80">
              Esse é o nosso <strong className="text-primary">diferencial</strong>: não entregamos apenas software, entregamos <strong className="text-primary">resultado</strong>.
            </p>
          </div>

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-dark-foreground/70">
              Nosso compromisso é entregar uma experiência de ponta a ponta: diagnóstico, implantação personalizada, treinamento e acompanhamento, sempre com um atendimento humanizado, claro e orientado a solução.
            </p>
            <p className="text-base leading-relaxed text-gray-400 font-medium italic">
              Se você busca mais do que um sistema e quer organização, rastreabilidade e tranquilidade na operação, o Grupo DuBrasil Soluções está pronto para te direcionar para o caminho certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
