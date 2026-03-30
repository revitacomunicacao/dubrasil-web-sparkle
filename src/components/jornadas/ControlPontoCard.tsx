import SolutionCard from "@/components/jornadas/SolutionCard";
import bgPonto from "@/assets/dubrasil-jornadas-exemplo-1.jpeg";

const ControlPontoCard = () => {
  const whatsappMessage =
    "Oi! Quero um diagnóstico da DuBrasil Serviços.\n\n" +
    "Minha necessidade é: Ponto/Jornadas.\n\n" +
    "Tenho ___ pessoas e meu maior desafio hoje é: ___.";

  return (
    <SolutionCard
      backgroundImage={bgPonto}
      tag="ICP: DP/RH/gestores"
      title="Controle de Ponto com fechamento organizado"
      description="Para empresas que querem transformar o controle de ponto em uma rotina confiável. Configuramos regras, treinamos os perfis e acompanhamos o fechamento para reduzir inconsistências e retrabalho."
      bullets={[
        "Regras claras (BH, escalas, tolerâncias e políticas)",
        "Menos ajustes manuais e divergências",
        "Evidências para auditorias e fiscalizações",
        "Implantação assistida + acompanhamento",
      ]}
      ctaLabel="Quero melhorar meu fechamento do ponto"
      whatsappMessage={whatsappMessage}
    />
  );
};

export default ControlPontoCard;

