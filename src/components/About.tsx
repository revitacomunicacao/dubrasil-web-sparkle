import { useState, useEffect } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";
import imgParceriaHero from "@/assets/Mais do que tecnologia - parceria real 01.jpg.jpeg";
import imgParceriaCol1 from "@/assets/Mais do que tecnologia - parceria real 02.jpg.jpeg";
import imgParceriaCol2 from "@/assets/Mais do que tecnologia - parceria real 03.jpg.jpeg";
import imgParceriaCol3 from "@/assets/Mais do que tecnologia - parceria real 04.jpg.jpeg";

const columnImages = [imgParceriaCol1, imgParceriaCol2, imgParceriaCol3];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Gradiente nas 3 colunas — mesma ideia de antes, um pouco mais leve */
const COLUMN_GRADIENT =
  "bg-gradient-to-b from-black/52 via-[#0a2848]/72 to-[#010812]/82";

/** Pesos iguais aos antigos flex-[2.15] / flex-[0.62] — em % a largura anima de forma suave nos browsers. */
function columnWidthPercent(index: number, hovered: number | null): string {
  if (hovered === null) return `${100 / 3}%`;
  const weights = [0.62, 0.62, 0.62];
  weights[hovered] = 2.15;
  const sum = weights[0] + weights[1] + weights[2];
  return `${(weights[index] / sum) * 100}%`;
}

const COL_EXPAND_MS = 2200;
const COL_EXPAND_EASING = "cubic-bezier(0.45, 0, 0.25, 1)";

const About = () => {
  const refTop = useFadeUp();
  const refBottom = useFadeUp();
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const columns = [
    {
      body: (
        <>
          Nossa atuação nasceu da necessidade real do mercado: muitas empresas até possuem sistemas, mas continuam enfrentando retrabalho, processos despadronizados e riscos, principalmente quando o assunto envolve jornadas de trabalho, acessos, conformidade e rotina operacional.
        </>
      ),
    },
    {
      body: (
        <>
          Por isso, a DuBrasil vai além da ferramenta: ajudamos a desenhar o cenário, configurar da forma correta, treinar as equipes e acompanhar o uso no dia a dia, garantindo resultado prático.
          <span className="mt-6 block text-lg sm:text-xl leading-relaxed text-white">
            Esse é o nosso <strong className="font-semibold text-white">diferencial</strong>: não entregamos apenas software, entregamos <strong className="font-semibold text-white">resultado</strong>.
          </span>
        </>
      ),
    },
    {
      body: (
        <>
          Nosso compromisso é entregar uma experiência de ponta a ponta: diagnóstico, implantação personalizada, treinamento e acompanhamento, sempre com um atendimento humanizado, claro e orientado a solução.
          <span className="mt-6 block text-base leading-relaxed font-medium italic text-white">
            Se você busca mais do que um sistema e quer organização, rastreabilidade e tranquilidade na operação, o Grupo DuBrasil Soluções está pronto para te direcionar para o caminho certo.
          </span>
        </>
      ),
    },
  ];

  return (
    <section id="sobre" className="w-full overflow-hidden bg-[#002147] text-white">
      {/* Parte 1: full width, imagem de fundo, conteúdo centralizado */}
      <div
        ref={refTop}
        className="fade-up relative w-full min-h-[min(600px,78vh)]"
      >
        <img
          src={imgParceriaHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/38 via-black/44 to-[#002147]/82"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[min(600px,78vh)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24 md:py-28 [text-shadow:0_1px_16px_rgba(0,0,0,0.45),0_1px_3px_rgba(0,0,0,0.65)]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/90">
            Sobre o grupo
          </p>
          <h2 className="mb-6 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="font-light">Mais do que tecnologia:</span>
            <br />
            <span className="font-extrabold text-primary">parceria real.</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
            O Grupo DuBrasil Soluções é um hub de soluções que une tecnologia, implantação orientada e acompanhamento consultivo para tornar a gestão das empresas mais segura, eficiente e previsível.
          </p>
        </div>
      </div>

      {/* Partes 2–4: três colunas edge-to-edge */}
      <div
        ref={refBottom}
        className="fade-up flex w-full flex-col md:h-[min(440px,58vh)] md:min-h-0 md:flex-row md:overflow-hidden"
        onMouseLeave={() => setHoveredCol(null)}
      >
        {columns.map((col, i) => {
          const isHovered = hoveredCol === i;
          const widthPct = columnWidthPercent(i, hoveredCol);
          return (
            <div
              key={i}
              className={cn(
                "relative isolate flex min-h-[240px] w-full flex-col overflow-hidden border-t border-white/10 md:h-full md:min-h-0 md:max-h-full md:w-auto md:flex-none md:flex-col md:border-t-0 md:border-l md:border-white/10 first:md:border-l-0"
              )}
              style={
                desktop
                  ? {
                      width: widthPct,
                      flexShrink: 0,
                      flexGrow: 0,
                      transitionProperty: "width",
                      transitionDuration: `${COL_EXPAND_MS}ms`,
                      transitionTimingFunction: COL_EXPAND_EASING,
                    }
                  : undefined
              }
              onMouseEnter={() => setHoveredCol(i)}
            >
            <img
              src={columnImages[i]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
              <div
                className={cn(
                  "absolute inset-0 transition-opacity ease-in-out",
                  COLUMN_GRADIENT,
                  isHovered ? "opacity-[0.72]" : "opacity-100"
                )}
                style={{
                  transitionDuration: `${COL_EXPAND_MS}ms`,
                  transitionTimingFunction: COL_EXPAND_EASING,
                }}
                aria-hidden
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black transition-opacity ease-in-out",
                  isHovered ? "opacity-[0.20]" : "opacity-[0.34]"
                )}
                style={{
                  transitionDuration: `${COL_EXPAND_MS}ms`,
                  transitionTimingFunction: COL_EXPAND_EASING,
                }}
                aria-hidden
              />
              <div className="relative z-10 flex min-h-[240px] w-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-8 sm:px-8 md:h-full md:min-h-0 md:flex-1 md:px-5">
                <div
                  className={cn(
                    "flex min-h-0 max-h-full w-full max-w-[min(100%,24rem)] flex-col justify-center overflow-hidden text-center text-base leading-relaxed text-white sm:text-lg md:w-[92%] md:max-w-[26rem] md:flex-1 [text-shadow:0_1px_14px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.65)]",
                    desktop && hoveredCol !== null && !isHovered && "opacity-80"
                  )}
                >
                  {col.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
