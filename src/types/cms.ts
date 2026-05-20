export type CmsIconRef = {
  source: string;
  iconKey: string;
  iconSet: string | null;
  iconStyle: string | null;
};

export type CmsBotao = {
  texto: string;
  link: string;
};

export type CmsCampoBase = {
  nome: string;
  identificador: string;
  tipo: string;
};

export type CmsCampoTexto = CmsCampoBase & {
  tipo: "texto";
  valor: string;
};

export type CmsCampoFoto = CmsCampoBase & {
  tipo: "foto";
  valor: string;
};

export type CmsCampoBotao = CmsCampoBase & {
  tipo: "botao";
  valor: CmsBotao;
};

export type CmsInformacaoItem = {
  icone: CmsIconRef;
  descricao: string;
};

export type CmsSolucaoItem = {
  icone: CmsIconRef;
  titulo: string;
  subtitulo: string;
  descricao: string;
  "palavras-chave": string;
  botao: CmsBotao;
  imagem: string;
};

export type CmsEtapaItem = {
  icone: CmsIconRef;
  titulo: string;
  descricao: string;
  imagem: string;
};

export type CmsCampoRepetidor = CmsCampoBase & {
  tipo: "repetidor";
  valor: CmsInformacaoItem[] | CmsSolucaoItem[] | CmsEtapaItem[];
};

export type CmsCampo =
  | CmsCampoTexto
  | CmsCampoFoto
  | CmsCampoBotao
  | CmsCampoRepetidor;

export type CmsSecao = {
  id: number;
  nome: string;
  ordem: number;
  campos: CmsCampo[];
};

export type CmsPageData = {
  id: number;
  titulo: string;
  slug: string;
  status: string;
  campos: CmsCampo[];
  secoes: CmsSecao[];
};

export type CmsApiResponse = {
  success: boolean;
  data: CmsPageData;
  message: string;
};

export type HomeHeroContent = {
  titulo: string;
  subtitulo: string;
  textoSuperior: string;
  descricao: string;
  botao: CmsBotao;
  textoInferior: string;
  imagemFundo: string;
};

export type HomeAboutColumn = {
  iconKey: string;
  descricao: string;
};

export type HomeAboutContent = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagemFundo: string;
  informacoes: HomeAboutColumn[];
};

export type HomeSolucaoItem = {
  iconKey: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  palavrasChave: string[];
  botao: CmsBotao;
  imagem: string;
  tag: string;
  textSide: "left" | "right";
  mobileBgPosition: string;
};

export type HomeSolucoesContent = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  solucoes: HomeSolucaoItem[];
};

export type HomeEtapaItem = {
  iconKey: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

export type HomeMetodoContent = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  etapas: HomeEtapaItem[];
  botao: CmsBotao;
};

export type HomePageContent = {
  hero: HomeHeroContent;
  about: HomeAboutContent;
  solucoes: HomeSolucoesContent;
  metodo: HomeMetodoContent;
};
