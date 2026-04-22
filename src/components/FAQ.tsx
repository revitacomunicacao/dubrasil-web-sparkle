import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que o Grupo DuBrasil Solucoes faz na pratica?",
    answer:
      "Unimos tecnologia com implantacao orientada e acompanhamento consultivo para organizar processos, reduzir retrabalho e dar mais previsibilidade para a operacao.",
  },
  {
    question: "A DuBrasil so vende software?",
    answer:
      "Nao. Nosso diferencial e atuar de ponta a ponta: diagnostico do cenario, configuracao personalizada, treinamento da equipe e suporte continuo para garantir resultado real.",
  },
  {
    question: "Como funciona o metodo de implantacao?",
    answer:
      "Seguimos tres etapas claras: diagnostico do cenario, implantacao personalizada e treinamento com acompanhamento consultivo. Isso ajuda a evitar improviso e acelerar a adocao da solucao.",
  },
  {
    question: "Quais areas consigo melhorar com as solucoes da DuBrasil?",
    answer:
      "Atuamos em frentes como controle de ponto e acesso, ERP e gestao de processos, alem de atendimento multicanal com o Nexa para centralizar conversas e aumentar a produtividade.",
  },
  {
    question: "As solucoes servem para empresas de diferentes segmentos?",
    answer:
      "Sim. Adaptamos a implantacao para a realidade de cada empresa, considerando rotina operacional, tamanho da equipe, objetivos de gestao e requisitos de conformidade.",
  },
  {
    question: "Como posso falar com um especialista?",
    answer:
      "Voce pode preencher o formulario da secao de contato para abrir o WhatsApp com a mensagem pronta. Nossa equipe retorna para entender o cenario e indicar o melhor caminho.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#ededed] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl text-foreground leading-[1.05]">
            <span className="font-light">Perguntas </span>
            <span className="font-extrabold text-primary">frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas rapidas sobre como o Grupo DuBrasil Solucoes atua para
            transformar a rotina operacional das empresas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
