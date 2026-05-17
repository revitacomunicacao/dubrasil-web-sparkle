import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video1 from "@/assets/video1.mp4"
import video2 from "@/assets/video2.mp4"
import video3 from "@/assets/video3.mp4"


interface Slide {
  videoUrl: string;
  title: string;
  highlight?: string;
}

const slides: Slide[] = [
  {
    videoUrl: video1,
    title: "Registramos o ponto do seu colaborador",
    highlight: "onde você nem imagina",
  },
  {
    videoUrl: video2,
    title: "Aqui humanos são atendidos",
    highlight: "por Humanos",
  },
  {
    videoUrl: video3,
    title: "Transformando o registro de ponto",
    highlight: "com simplicidade e máxima segurança",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[520px] w-full overflow-hidden bg-hero max-md:h-[min(100dvh,720px)] max-lg:h-[min(100dvh,800px)]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={slide.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] md:object-center"
            onError={(e) => {
              // Hide video if it fails to load
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 max-md:from-black/92 max-md:via-black/60 max-md:to-black/45 max-lg:from-black/88 max-lg:via-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-32 max-md:px-4 max-md:pb-28 max-lg:pb-30">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-4 max-w-2xl text-[28px] font-display leading-[1.08] tracking-tight text-white max-md:max-w-full max-lg:text-[32px] md:text-[38px] lg:text-[50px]">
            <span className="font-light">{slides[current].title} </span>
            {slides[current].highlight && (
              <span className="font-extrabold text-primary">
                {slides[current].highlight}
              </span>
            )}
          </h1>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 max-lg:left-3 md:left-4 md:p-3"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} className="md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 max-lg:right-3 md:right-4 md:p-3"
        aria-label="Próximo"
      >
        <ChevronRight size={20} className="md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 max-md:bottom-5 md:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
