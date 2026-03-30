import SolutionCard from "@/components/jornadas/SolutionCard";
import bgAcesso from "@/assets/Produto controle.png";

const AcessoCard = () => {
  const whatsappMessage =
    "Oi! Quero um diagnóstico da DuBrasil Serviços.\n\n" +
    "Minha necessidade é: Acesso.\n\n" +
    "Tenho ___ pessoas e meu maior desafio hoje é: ___.";

  return (
    <SolutionCard
      backgroundImage={bgAcesso}
      tag="ICP: portarias, refeitórios, academias"
      title="Controle de Acesso com equipamentos + software"
      description="Para ambientes com fluxo e necessidade de segurança. Implantamos soluções que combinam catracas/equipamentos e software, com regras por perfil e controle em tempo real."
      bullets={[
        "Controle de fluxo e segurança",
        "Regras por perfil (visitante, colaborador, aluno, prestador)",
        "Apoio a processos internos e conformidade",
        "Implantação e suporte para operação estável",
      ]}
      ctaLabel="Quero controlar acessos com mais segurança"
      whatsappMessage={whatsappMessage}
    />
  );
};

export default AcessoCard;

