import { useFadeUp } from "@/hooks/useFadeUp";
import { getCmsIcon } from "@/lib/cms-icons";
import { AboutColumnBody, AboutSectionTitle } from "@/lib/cms-text";
import type { HomeAboutContent } from "@/types/cms";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const COLUMN_BG = ["#29aae1", "#0f4b94", "#08284e"];

type AboutProps = {
  content: HomeAboutContent;
};

const About = ({ content }: AboutProps) => {
  const refTop = useFadeUp();

  return (
    <section id="sobre" className="w-full overflow-hidden bg-[#002147] text-white">
      <div ref={refTop} className="fade-up relative w-full">
        <div className="grid w-full min-h-0 md:grid-cols-12 md:h-[500px]">
          <div className="relative order-2 overflow-hidden md:order-1 md:col-span-7">
            <div className="relative h-[220px] sm:h-[300px] md:h-full">
              <img
                src={content.imagemFundo}
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

          <div className="order-1 flex flex-col justify-center px-5 py-10 sm:px-6 sm:py-12 md:order-2 md:col-span-5 md:py-28 md:px-10 max-lg:px-6 max-lg:py-14">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/90">
              {content.titulo}
            </p>
            <h2 className="mb-6 text-2xl leading-tight tracking-tight max-md:text-balance sm:text-4xl md:text-5xl">
              <AboutSectionTitle text={content.subtitulo} />
            </h2>
            <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
              {content.descricao}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col md:h-[min(520px,66vh)] md:min-h-0 md:flex-row md:overflow-hidden">
        {content.informacoes.map((col, i) => {
          const Icon = getCmsIcon(col.iconKey);
          const solidBg = COLUMN_BG[i] ?? "#08284e";
          return (
            <div
              key={`${col.iconKey}-${i}`}
              className={cn(
                "relative isolate flex min-h-[280px] w-full flex-col overflow-hidden border-t border-white/10 max-md:min-h-[300px] md:h-full md:min-h-0 md:max-h-full md:flex-1 md:border-t-0 md:border-l md:border-white/10 first:md:border-l-0"
              )}
              style={{ backgroundColor: solidBg }}
            >
              <div className="absolute inset-0 bg-black/10 max-md:bg-black/15" aria-hidden />

              <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center overflow-hidden px-5 pb-8 pt-10 sm:px-8 max-md:px-5 md:px-8 md:pb-10 md:pt-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-iconDark max-md:h-14 max-md:w-14 md:h-20 md:w-20">
                  <Icon
                    className="h-8 w-8 text-white/80 max-md:h-7 max-md:w-7 md:h-10 md:w-10"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mt-6 flex w-full flex-1 items-center justify-center max-md:mt-5 md:mt-8">
                  <div className="flex w-full max-w-[min(100%,28rem)] flex-col justify-center text-center text-base leading-relaxed text-white sm:text-lg md:w-[92%] md:max-w-[28rem]">
                    <AboutColumnBody index={i} descricao={col.descricao} />
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
