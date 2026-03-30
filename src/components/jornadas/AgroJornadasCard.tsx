import SolutionCard from "@/components/jornadas/SolutionCard";
import bgAgro from "@/assets/dubrasil-jornadas-exemplo-2.jpeg";

const AgroJornadasCard = () => {
  const whatsappMessage =
    "Oi! Quero um diagnóstico da DuBrasil Serviços.\n\n" +
    "Minha necessidade é: Agro (jornadas/safra).\n\n" +
    "Tenho ___ pessoas e meu maior desafio hoje é: ___.";

  return (
    <SolutionCard
      backgroundImage={bgAgro}
      tag="ICP: agro/safra"
      title="Gestão de Jornadas no Agro: do campo à conformidade"
      description="Operações de safra e campo exigem controle simples de registrar e seguro de comprovar. A DuBrasil desenha o fluxo por frente/turno e padroniza regras para manter consistência mesmo com sazonalidade e alta rotatividade."
      bullets={[
        "Padronização por frente/área/turno",
        "Menos risco em auditorias e fiscalizações",
        "Operação orientada para a realidade do agro",
        "Acompanhamento nos primeiros ciclos",
      ]}
      ctaLabel="Minha operação é no agro — quero orientação"
      whatsappMessage={whatsappMessage}
    />
  );
};

export default AgroJornadasCard;

