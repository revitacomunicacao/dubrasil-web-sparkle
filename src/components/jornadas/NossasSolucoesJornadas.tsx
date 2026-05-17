import ControlPontoCard from "@/components/jornadas/ControlPontoCard";
import AgroJornadasCard from "@/components/jornadas/AgroJornadasCard";
import AcessoCard from "@/components/jornadas/AcessoCard";
import IdentificacaoCard from "@/components/jornadas/IdentificacaoCard";

const NossasSolucoesJornadas = () => {
  return (
    <section id="solucoes" className="bg-background py-14 max-md:py-12 sm:py-32 md:py-24">
      <div className="mx-auto max-w-7xl px-4 max-md:px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground max-md:text-balance sm:text-4xl md:text-5xl">
            Menos risco. Menos ajuste. Mais rotina e controle.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Muitas empresas têm ferramenta, mas não têm processo, configuração
            correta e rotina estável. A DuBrasil desenha o cenário, padroniza
            regras e garante execução para você operar com segurança, evidências
            e previsibilidade.
          </p>
        </div>

        <div className="mt-10 grid gap-6 max-md:mt-8 md:mt-16 md:grid-cols-2 md:gap-8">
          <ControlPontoCard />
          <AgroJornadasCard />
          <AcessoCard />
          <IdentificacaoCard />
        </div>
      </div>
    </section>
  );
};

export default NossasSolucoesJornadas;

