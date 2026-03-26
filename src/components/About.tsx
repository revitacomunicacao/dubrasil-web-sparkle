import { useFadeUp } from "@/hooks/useFadeUp";

const About = () => {
  const ref = useFadeUp();

  return (
    <section id="sobre" className="bg-[#002147] text-dark-foreground py-24 sm:py-32">
      <div ref={ref} className="fade-up mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400 mb-4">
              Sobre o grupo
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Mais do que tecnologia:
              <br />
              <span className="text-gray-400">parceria real.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-dark-foreground/70">
              O Grupo DuBrasil Soluções é um hub de soluções que une tecnologia, implantação orientada e acompanhamento consultivo para tornar a gestão das empresas mais segura, eficiente e previsível.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dark-foreground/70">
              Nossa atuação nasceu da necessidade real do mercado: muitas empresas até possuem sistemas, mas continuam enfrentando retrabalho, processos despadronizados e riscos, principalmente quando o assunto envolve jornadas de trabalho, acessos, conformidade e rotina operacional. Por isso, a DuBrasil vai além da ferramenta: ajudamos a desenhar o cenário, configurar da forma correta, treinar as equipes e acompanhar o uso no dia a dia, garantindo resultado prático.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dark-foreground/70">
              Esse é o nosso <strong className="text-primary">diferencial</strong>: não entregamos apenas software, entregamos <strong className="text-primary">resultado</strong>.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-dark-foreground/70 mb-6">
              Hoje, o Grupo está estruturado em três frentes:
            </p>
            <div className="grid gap-4">
              <div className="flex gap-4 rounded-xl bg-dark-foreground/5 p-5 transition-colors hover:bg-dark-foreground/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <span className="text-gray-400 font-bold text-sm">S</span>
                </div>
                <p className="text-sm text-dark-foreground/70 leading-relaxed">
                  <strong className="text-dark-foreground">DuBrasil Serviços</strong> · Gestão de Ponto e Jornadas, Controle de Acesso e Identificação Corporativa, com foco em rastreabilidade, padronização e segurança jurídica, reduzindo riscos trabalhistas e falhas operacionais.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-dark-foreground/5 p-5 transition-colors hover:bg-dark-foreground/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <span className="text-gray-400 font-bold text-sm">E</span>
                </div>
                <p className="text-sm text-dark-foreground/70 leading-relaxed">
                  <strong className="text-dark-foreground">DuBrasil Sistemas</strong> · ERP e gestão de processos para organizar rotinas, integrar áreas e apoiar decisões mais seguras, com implantação alinhada à realidade de cada operação.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-dark-foreground/5 p-5 transition-colors hover:bg-dark-foreground/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <span className="text-gray-400 font-bold text-sm">N</span>
                </div>
                <p className="text-sm text-dark-foreground/70 leading-relaxed">
                  <strong className="text-dark-foreground">DuBrasil Nexa</strong> · Atendimento multicanal para centralizar conversas, distribuir atendimentos e aumentar controle e agilidade nas áreas de atendimento e vendas.
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-dark-foreground/70">
              Nosso compromisso é entregar uma experiência de ponta a ponta: diagnóstico, implantação personalizada, treinamento e acompanhamento, sempre com um atendimento humanizado, claro e orientado a solução.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 font-medium italic">
              Se você busca mais do que um sistema e quer organização, rastreabilidade e tranquilidade na operação, o Grupo DuBrasil Soluções está pronto para te direcionar para o caminho certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
