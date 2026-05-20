import type {
  CmsCampo,
  CmsCampoBotao,
  CmsCampoFoto,
  CmsCampoRepetidor,
  CmsCampoTexto,
  CmsEtapaItem,
  CmsInformacaoItem,
  CmsPageData,
  CmsSecao,
  CmsSolucaoItem,
  HomePageContent,
} from "@/types/cms";

const SOLUCAO_TAGS = ["ERP & Processos", "Jornadas & Acessos", "Atendimento Multicanal"];
const SOLUCAO_TEXT_SIDES: Array<"left" | "right"> = ["right", "left", "right"];
const SOLUCAO_MOBILE_BG = ["left center", "right center", "left center"];

function getSecao(secoes: CmsSecao[], ordem: number): CmsSecao | undefined {
  return secoes.find((s) => s.ordem === ordem);
}

function campoTexto(campos: CmsCampo[], id: string): string {
  const c = campos.find((f) => f.identificador === id && f.tipo === "texto") as
    | CmsCampoTexto
    | undefined;
  return c?.valor ?? "";
}

function campoFoto(campos: CmsCampo[], id: string): string {
  const c = campos.find((f) => f.identificador === id && f.tipo === "foto") as
    | CmsCampoFoto
    | undefined;
  return c?.valor ?? "";
}

function campoBotao(campos: CmsCampo[], id: string) {
  const c = campos.find((f) => f.identificador === id && f.tipo === "botao") as
    | CmsCampoBotao
    | undefined;
  return c?.valor ?? { texto: "", link: "#" };
}

function campoRepetidor<T>(campos: CmsCampo[], id: string): T[] {
  const c = campos.find((f) => f.identificador === id && f.tipo === "repetidor") as
    | CmsCampoRepetidor
    | undefined;
  return (c?.valor ?? []) as T[];
}

function parseKeywords(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((k) => k.trim())
    .filter(Boolean);
}

export function parseHomePage(data: CmsPageData): HomePageContent {
  const { secoes } = data;
  const heroSec = getSecao(secoes, 1);
  const aboutSec = getSecao(secoes, 2);
  const solucoesSec = getSecao(secoes, 3);
  const metodoSec = getSecao(secoes, 4);

  if (!heroSec || !aboutSec || !solucoesSec || !metodoSec) {
    throw new Error("Seções da home incompletas no CMS");
  }

  const hc = heroSec.campos;
  const ac = aboutSec.campos;
  const sc = solucoesSec.campos;
  const mc = metodoSec.campos;

  const informacoes = campoRepetidor<CmsInformacaoItem>(ac, "informacoes");
  const solucoesRaw = campoRepetidor<CmsSolucaoItem>(sc, "solucoes");
  const etapasRaw = campoRepetidor<CmsEtapaItem>(mc, "etapas");

  return {
    hero: {
      titulo: campoTexto(hc, "titulo"),
      subtitulo: campoTexto(hc, "subtitulo"),
      textoSuperior: campoTexto(hc, "texto-superior"),
      descricao: campoTexto(hc, "descricao"),
      botao: campoBotao(hc, "botao"),
      textoInferior: campoTexto(hc, "texto-inferior"),
      imagemFundo: campoFoto(hc, "imagem-de-fundo"),
    },
    about: {
      titulo: campoTexto(ac, "titulo-1"),
      subtitulo: campoTexto(ac, "subtitulo-1"),
      descricao: campoTexto(ac, "descricao-1"),
      imagemFundo: campoFoto(ac, "imagem-de-fundo-1"),
      informacoes: informacoes.map((item) => ({
        iconKey: item.icone.iconKey,
        descricao: item.descricao,
      })),
    },
    solucoes: {
      titulo: campoTexto(sc, "titulo-2"),
      subtitulo: campoTexto(sc, "subtitulo-2"),
      descricao: campoTexto(sc, "descricao-2"),
      solucoes: solucoesRaw.map((item, i) => ({
        iconKey: item.icone.iconKey,
        titulo: item.titulo,
        subtitulo: item.subtitulo,
        descricao: item.descricao,
        palavrasChave: parseKeywords(item["palavras-chave"]),
        botao: item.botao,
        imagem: item.imagem,
        tag: SOLUCAO_TAGS[i] ?? "",
        textSide: SOLUCAO_TEXT_SIDES[i] ?? "right",
        mobileBgPosition: SOLUCAO_MOBILE_BG[i] ?? "center",
      })),
    },
    metodo: {
      titulo: campoTexto(mc, "titulo-3"),
      subtitulo: campoTexto(mc, "subtitulo-3"),
      descricao: campoTexto(mc, "descricao-3"),
      etapas: etapasRaw.map((item) => ({
        iconKey: item.icone.iconKey,
        titulo: item.titulo,
        descricao: item.descricao,
        imagem: item.imagem,
      })),
      botao: campoBotao(mc, "botao-1"),
    },
  };
}
