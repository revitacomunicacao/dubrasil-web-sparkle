import bgDuBrasilSolucoes from "@/assets/bgDuBrasilSolucoes.jpeg";
import bgMais from "@/assets/bgMais.jpeg";
import blocoNexa from "@/assets/bloco-nexa.webp";
import blocoServicos from "@/assets/bloco-servicos.webp";
import blocoSistemas from "@/assets/bloco-sistemas.webp";
import imgAcompanhamento from "@/assets/method-acompanhamento.jpeg";
import imgDiagnostico from "@/assets/method-diagnostico.jpeg";
import imgImplantacao from "@/assets/implantacao.jpeg";
import type { HomePageContent } from "@/types/cms";

/** Fallback idêntico ao conteúdo atual — evita flash visual se a API falhar. */
export const CMS_HOME_FALLBACK: HomePageContent = {
  hero: {
    titulo: "Tecnologia • Implantação • Acompanhamento",
    subtitulo: "Grupo DuBrasil Soluções",
    textoSuperior:
      "Tecnologia + implantação + acompanhamento para uma gestão mais segura e eficiente.",
    descricao:
      "Unimos soluções de jornadas e acessos, ERP e processos e atendimento multicanal, com implantação orientada e suporte consultivo para sua operação rodar com controle, rastreabilidade e resultado prático.",
    botao: {
      texto: "Quero ser direcionado para a solução certa",
      link: "#contato",
    },
    textoInferior: "Resposta rápida • Atendimento humano • Sem compromisso",
    imagemFundo: bgDuBrasilSolucoes,
  },
  about: {
    titulo: "Sobre o grupo",
    subtitulo: "Mais do que tecnologia:\r\nparceria real.",
    descricao:
      "O Grupo DuBrasil Soluções é um hub de soluções que une tecnologia, implantação orientada e acompanhamento consultivo para tornar a gestão das empresas mais segura, eficiente e previsível.",
    imagemFundo: bgMais,
    informacoes: [
      {
        iconKey: "AlertTriangle",
        descricao:
          "Nossa atuação nasceu da necessidade real do mercado: muitas empresas até possuem sistemas, mas continuam enfrentando retrabalho, processos despadronizados e riscos, principalmente quando o assunto envolve jornadas de trabalho, acessos, conformidade e rotina operacional.",
      },
      {
        iconKey: "Settings",
        descricao:
          "Por isso, a DuBrasil vai além da ferramenta: ajudamos a desenhar o cenário, configurar da forma correta, treinar as equipes e acompanhar o uso no dia a dia, garantindo resultado prático.\r\nEsse é o nosso diferencial: não entregamos apenas software, entregamos resultado.",
      },
      {
        iconKey: "Handshake",
        descricao:
          "Nosso compromisso é entregar uma experiência de ponta a ponta: diagnóstico, implantação personalizada, treinamento e acompanhamento, sempre com um atendimento humanizado, claro e orientado a solução.\r\nSe você busca mais do que um sistema e quer organização, rastreabilidade e tranquilidade na operação, o Grupo DuBrasil Soluções está pronto para te direcionar para o caminho certo.",
      },
    ],
  },
  solucoes: {
    titulo: "O que oferecemos",
    subtitulo: "Um grupo com três frentes de solução.",
    descricao:
      "Cada frente resolve um ponto crítico da operação com implantação personalizada, padronização de processos e acompanhamento consultivo. Esse é o nosso diferencial.",
    solucoes: [
      {
        iconKey: "Server",
        titulo: "DuBrasil Sistemas",
        subtitulo: "ERP e gestão de processos para operação organizada",
        descricao:
          "Mais controle sobre rotinas, financeiro e fluxo de trabalho para decisões mais seguras e uma gestão previsível.",
        palavrasChave: ["Controle financeiro", "Gestão de estoque", "Processos organizados"],
        botao: { texto: "Saiba mais", link: "https://revitacomunicacao.com.br/projetos/tga/" },
        imagem: blocoSistemas,
        tag: "ERP & Processos",
        textSide: "right",
        mobileBgPosition: "left center",
      },
      {
        iconKey: "Clock",
        titulo: "DuBrasil Serviços",
        subtitulo: "Ponto, Jornadas e Acessos com Segurança Jurídica",
        descricao:
          "Rastreabilidade, padronização e conformidade trabalhista para reduzir riscos, ajustes manuais e retrabalho.",
        palavrasChave: ["Gestão de jornadas", "Controle de acesso", "Conformidade trabalhista"],
        botao: { texto: "Saiba mais", link: "https://revitacomunicacao.com.br/projetos/dubrasil/" },
        imagem: blocoServicos,
        tag: "Jornadas & Acessos",
        textSide: "left",
        mobileBgPosition: "right center",
      },
      {
        iconKey: "Headphones",
        titulo: "DuBrasil Nexa",
        subtitulo: "Atendimento multicanal para vender e atender com controle",
        descricao: "Centralize conversas, simplifique processos e\r\nencante em cada atendimento.",
        palavrasChave: [
          "Centralização de canais",
          "Atendimento profissional",
          "Controle de conversas",
        ],
        botao: { texto: "Saiba mais", link: "https://revitacomunicacao.com.br/nexa/" },
        imagem: blocoNexa,
        tag: "Atendimento Multicanal",
        textSide: "right",
        mobileBgPosition: "left center",
      },
    ],
  },
  metodo: {
    titulo: "Nosso método",
    subtitulo: "Como entregamos\r\nna prática.",
    descricao:
      "Três etapas que garantem resultado real: da análise inicial ao acompanhamento contínuo. Esse é o diferencial que transforma tecnologia em impacto.",
    etapas: [
      {
        iconKey: "Search",
        titulo: "Diagnóstico do cenário",
        descricao:
          "Entendemos sua operação, seus objetivos e os gargalos que travam o crescimento antes de propor qualquer solução.",
        imagem: imgDiagnostico,
      },
      {
        iconKey: "Settings",
        titulo: "Implantação personalizada",
        descricao:
          "Configuramos, padronizamos e integramos a solução à sua rotina real, sem atalhos e sem improvisos.",
        imagem: imgImplantacao,
      },
      {
        iconKey: "GraduationCap",
        titulo: "Treinamento e acompanhamento consultivo",
        descricao:
          "Capacitamos sua equipe para uso pleno e seguimos acompanhando com ajustes finos e suporte contínuo.",
        imagem: imgAcompanhamento,
      },
    ],
    botao: {
      texto: "Quero esse diferencial na minha empresa",
      link: "#contato",
    },
  },
};
