import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video1 from "@/assets/video1.mp4"
import video2 from "@/assets/video2.mp4"
import video3 from "@/assets/video3.mp4"


interface Slide {
  videoUrl: string;
  title: string;
}

const slides: Slide[] = [
  {
    videoUrl: video1,
    title: "Registramos o ponto do seu colaborador onde você nem imagina",
  },
  {
    videoUrl: video2,
    title: "Aqui humanos são atendidos por Humanos",
  },
  {
    videoUrl: video3,
    title: "Transformando o registro de ponto com simplicidade e máxima segurança",
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
    <section className="relative h-screen w-full overflow-hidden bg-hero">
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
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // Hide video if it fails to load
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-32">
        <div className="container mx-auto">
          <h1 className="text-[34px] md:text-[38px] lg:text-[50px] font-display font-bold text-white mb-4 max-w-2xl">
            {slides[current].title}
          </h1>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
