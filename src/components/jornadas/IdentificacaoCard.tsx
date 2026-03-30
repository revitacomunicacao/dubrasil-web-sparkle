import SolutionCard from "@/components/jornadas/SolutionCard";
import bgIdentificacao from "@/assets/Produto identificacao.png";

const IdentificacaoCard = () => {
  const whatsappMessage =
    "Oi! Quero um diagnóstico da DuBrasil Serviços.\n\n" +
    "Minha necessidade é: Identificação.\n\n" +
    "Tenho ___ pessoas e meu maior desafio hoje é: ___.";

  return (
    <SolutionCard
      backgroundImage={bgIdentificacao}
      tag="ICP: empresas e operações presenciais"
      title="Identificação Corporativa: crachás e cordões personalizados"
      description="Padronize a identificação da equipe com materiais profissionais e personalizados. Além de reforçar organização e imagem, apoia políticas de acesso e segurança no ambiente."
      bullets={[
        "Padronização e imagem profissional",
        "Organização e reconhecimento interno",
        "Integração com processos de controle de acesso",
      ]}
      ctaLabel="Quero padronizar a identificação da equipe"
      whatsappMessage={whatsappMessage}
    />
  );
};

export default IdentificacaoCard;

