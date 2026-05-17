import { AlertTriangle, Settings, Handshake } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";
import imgParceriaHero from "@/assets/bgMais.jpeg";
import imgNossa from "@/assets/bgNossa.jpeg";
import imgVai from "@/assets/bgVai.jpeg";
import imgNosso from "@/assets/bgNosso.jpeg";
import imgParceriaCol1 from "@/assets/Mais do que tecnologia - parceria real 02.jpg.jpeg";
import imgParceriaCol2 from "@/assets/Mais do que tecnologia - parceria real 03.jpg.jpeg";
import imgParceriaCol3 from "@/assets/Mais do que tecnologia - parceria real 04.jpg.jpeg";

const columnImages = [imgNossa, imgVai, imgNosso];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Gradiente nas 3 colunas — mesma ideia de antes, um pouco mais leve */
const COLUMN_GRADIENT =
  "bg-gradient-to-b from-black/52 via-[#0a2848]/72 to-[#010812]/82";

const About = () => {
  const refTop = useFadeUp();
  const refBottom = useFadeUp();

  const columns = [
    {
      icon: AlertTriangle,
      body: (
        <>
          Nossa atuação nasceu da necessidade real do mercado: muitas empresas até possuem sistemas, mas continuam enfrentando retrabalho, processos despadronizados e riscos, principalmente quando o assunto envolve jornadas de trabalho, acessos, conformidade e rotina operacional.
        </>
      ),
    },
    {
      icon: Settings,
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
      icon: Handshake,
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
      {/* Parte 1: duas colunas (imagem à esquerda, texto à direita) */}
      <div ref={refTop} className="fade-up relative w-full">
        <div className="grid w-full min-h-0 md:grid-cols-12 md:h-[500px]">
          {/* Imagem (esquerda) */}
          <div className="relative order-2 overflow-hidden md:order-1 md:col-span-7">
            <div className="relative h-[220px] sm:h-[300px] md:h-full">
              <img
                src={imgParceriaHero}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[42%_center] opacity-70 max-md:object-[50%_30%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35 max-md:bg-[#002147]/45" aria-hidden />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#002147]/45 to-[#002147] max-md:bg-gradient-to-t max-md:from-[#002147] max-md:via-[#002147]/70 max-md:to-transparent"
                aria-hidden
              />
            </div>
          </div>

          {/* Texto (direita) */}
          <div className="order-1 flex flex-col justify-center px-5 py-10 sm:px-6 sm:py-12 md:order-2 md:col-span-5 md:py-28 md:px-10 max-lg:px-6 max-lg:py-14">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/90">
              Sobre o grupo
            </p>
            <h2 className="mb-6 text-2xl leading-tight tracking-tight max-md:text-balance sm:text-4xl md:text-5xl">
              <span className="font-light">Mais do que tecnologia:</span>
              <br />
              <span className="font-extrabold text-primary">parceria real.</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
              O Grupo DuBrasil Soluções é um hub de soluções que une tecnologia,
              implantação orientada e acompanhamento consultivo para tornar a
              gestão das empresas mais segura, eficiente e previsível.
            </p>
          </div>
        </div>
      </div>

      {/* Partes 2–4 (opção com imagem): oculto por enquanto */}
      <div className="hidden">
        <div
          ref={refBottom}
          className="fade-up flex w-full flex-col md:h-[min(520px,66vh)] md:min-h-0 md:flex-row md:overflow-hidden"
        >
          {columns.map((col, i) => (
            <div
              key={i}
              className={cn(
                "relative isolate flex min-h-[240px] w-full flex-col overflow-hidden border-t border-white/10 md:h-full md:min-h-0 md:max-h-full md:flex-1 md:border-t-0 md:border-l md:border-white/10 first:md:border-l-0"
              )}
            >
              <img
                src={columnImages[i]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/45" aria-hidden />
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#08284e]/25 via-dark/85 to-primary/35"
                aria-hidden
              />

              <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-10 sm:px-8 md:px-8">
                <div className="flex w-full flex-1 items-center justify-center">
                  <div className="flex w-full max-w-[min(100%,28rem)] flex-col justify-center text-center text-base leading-relaxed text-white sm:text-lg md:w-[92%] md:max-w-[28rem] [text-shadow:0_1px_14px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.65)]">
                    {col.body}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teste duplicado: três colunas sem imagem (cores sólidas) */}
      <div className="flex w-full flex-col md:h-[min(520px,66vh)] md:min-h-0 md:flex-row md:overflow-hidden">
        {columns.map((col, i) => {
          const Icon = col.icon;
          const solidBg = ["#29aae1", "#0f4b94", "#08284e"][i] ?? "#08284e";
          return (
            <div
              key={`solid-${i}`}
              className={cn(
                "relative isolate flex min-h-[280px] w-full flex-col overflow-hidden border-t border-white/10 max-md:min-h-[300px] md:h-full md:min-h-0 md:max-h-full md:flex-1 md:border-t-0 md:border-l md:border-white/10 first:md:border-l-0"
              )}
              style={{ backgroundColor: solidBg }}
            >
              <div className="absolute inset-0 bg-black/10 max-md:bg-black/15" aria-hidden />

              <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center overflow-hidden px-5 pb-8 pt-10 sm:px-8 max-md:px-5 md:px-8 md:pb-10 md:pt-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-iconDark max-md:h-14 max-md:w-14 md:h-20 md:w-20">
                  <Icon className="h-8 w-8 text-white/80 max-md:h-7 max-md:w-7 md:h-10 md:w-10" strokeWidth={1.5} />
                </div>

                <div className="mt-6 flex w-full flex-1 items-center justify-center max-md:mt-5 md:mt-8">
                  <div className="flex w-full max-w-[min(100%,28rem)] flex-col justify-center text-center text-base leading-relaxed text-white sm:text-lg md:w-[92%] md:max-w-[28rem]">
                    {col.body}
                  </div>
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
