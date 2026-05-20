import type { ReactNode } from "react";

/** Quebra \\r\\n em parágrafos preservando o layout atual. */
export function splitCmsParagraphs(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Descrição com quebras de linha (ex.: Nexa). */
export function CmsLineBreakText({ text }: { text: string }) {
  const parts = splitCmsParagraphs(text);
  if (parts.length <= 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {part}
        </span>
      ))}
    </>
  );
}

/** "Grupo DuBrasil Soluções" → Grupo + DuBrasil (destaque) + Soluções */
export function HeroMainTitle({ text }: { text: string }) {
  const match = text.match(/^(.*?)(DuBrasil)(.*)$/i);
  if (!match) {
    return <span className="font-light">{text}</span>;
  }
  const [, before, brand, after] = match;
  return (
    <>
      <span className="font-light">{before}</span>
      <span className="font-extrabold text-primary">{brand}</span>
      <span className="font-light">{after}</span>
    </>
  );
}

/** "Mais do que tecnologia:\r\nparceria real." */
export function AboutSectionTitle({ text }: { text: string }) {
  const lines = splitCmsParagraphs(text.replace(/:\s*$/, ":"));
  if (lines.length >= 2) {
    return (
      <>
        <span className="font-light">{lines[0].replace(/:$/, ":")}</span>
        <br />
        <span className="font-extrabold text-primary">{lines[1]}</span>
      </>
    );
  }
  const colonIdx = text.indexOf(":");
  if (colonIdx === -1) {
    return <span className="font-light">{text}</span>;
  }
  const light = text.slice(0, colonIdx + 1);
  const bold = text.slice(colonIdx + 1).trim();
  return (
    <>
      <span className="font-light">{light}</span>
      {bold && (
        <>
          <br />
          <span className="font-extrabold text-primary">{bold}</span>
        </>
      )}
    </>
  );
}

/** "Um grupo com três frentes de solução." */
export function SolucoesSectionTitle({ text }: { text: string }) {
  const match = text.match(/^(.*?)(três frentes)(.*)$/i);
  if (!match) {
    return <span className="font-light">{text}</span>;
  }
  const [, before, highlight, after] = match;
  return (
    <>
      <span className="font-light">{before}</span>
      <span className="font-extrabold text-primary">{highlight}</span>
      <span className="font-light">{after}</span>
    </>
  );
}

/** "Como entregamos\r\nna prática." */
export function MetodoSectionTitle({ text }: { text: string }) {
  const lines = splitCmsParagraphs(text);
  if (lines.length >= 2) {
    return (
      <>
        <span className="font-light">{lines[0]}</span>
        <br />
        <span className="font-extrabold text-primary">{lines[1]}</span>
      </>
    );
  }
  return <span className="font-light">{text}</span>;
}

function highlightWords(
  text: string,
  words: string[],
  className: string
): ReactNode[] {
  if (!words.length) return [text];
  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    words.some((w) => part.toLowerCase() === w.toLowerCase()) ? (
      <strong key={i} className={className}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

/** Destaca "diferencial" no fim (seção soluções). */
export function SolucoesIntroText({ text }: { text: string }) {
  const match = text.match(/^(.*)(diferencial)\.?$/i);
  if (!match) return <>{text}</>;
  const [, before] = match;
  return (
    <>
      {before.trimEnd()}{" "}
      <strong className="font-extrabold text-primary">diferencial</strong>.
    </>
  );
}

/** Destaca "resultado real" e "diferencial" (método). */
export function MetodoIntroText({ text }: { text: string }) {
  const parts = text.split(/(resultado real|diferencial)/gi);
  return (
    <>
      {parts.map((part, i) => {
        const lower = part.toLowerCase();
        if (lower === "resultado real" || lower === "diferencial") {
          return (
            <strong key={i} className="text-primary">
              {part}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}

/** Colunas do Sobre — 2º e 3º blocos com estilos extras. */
export function AboutColumnBody({
  index,
  descricao,
}: {
  index: number;
  descricao: string;
}) {
  const paragraphs = splitCmsParagraphs(descricao);

  if (index === 1 && paragraphs.length >= 2) {
    const second = paragraphs[1];
    return (
      <>
        <p className="contents">{paragraphs[0]}</p>
        <span className="mt-6 block text-lg leading-relaxed text-white sm:text-xl">
          {highlightWords(second, ["diferencial", "resultado"], "font-semibold text-white")}
        </span>
      </>
    );
  }

  if (index === 2 && paragraphs.length >= 2) {
    return (
      <>
        <p className="contents">{paragraphs[0]}</p>
        <span className="mt-6 block text-base font-medium italic leading-relaxed text-white">
          {paragraphs[1]}
        </span>
      </>
    );
  }

  return <>{paragraphs.join(" ")}</>;
}
