import ControlPontoCard from "@/components/jornadas/ControlPontoCard";
import AgroJornadasCard from "@/components/jornadas/AgroJornadasCard";
import AcessoCard from "@/components/jornadas/AcessoCard";
import IdentificacaoCard from "@/components/jornadas/IdentificacaoCard";

const NossasSolucoesJornadas = () => {
  return (
    <section id="solucoes" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Menos risco. Menos ajuste. Mais rotina e controle.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Muitas empresas têm ferramenta, mas não têm processo, configuração
            correta e rotina estável. A DuBrasil desenha o cenário, padroniza
            regras e garante execução para você operar com segurança, evidências
            e previsibilidade.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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

