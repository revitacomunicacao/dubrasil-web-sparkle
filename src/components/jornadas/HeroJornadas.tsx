import { MessageCircle } from "lucide-react";
import bg from "@/assets/bgdubrasil.jpeg";
import imgPonto from "@/assets/dubrasil-jornadas-exemplo-1.jpeg";
import imgAgro from "@/assets/dubrasil-jornadas-exemplo-2.jpeg";

const WHATSAPP_NUMBER = "5534996367430";

const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const HeroJornadas = () => {
  const baseMessage =
    "Oi! Quero um diagnóstico da DuBrasil Serviços.\n\n" +
    "Minha necessidade é: ( ) Ponto/Jornadas ( ) Agro ( ) Acesso ( ) Identificação ( ) Serviços (Auditoria/BPO).\n\n" +
    "Tenho ___ pessoas e meu maior desafio hoje é: ___.";

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a34]/90 via-[#001a34]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

      <div className="container mx-auto relative z-10 px-6 pb-16 pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              DuBrasil Serviços
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-none tracking-tight text-white md:text-6xl">
              Jornadas, Acessos e Identificação com Segurança Jurídica
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Implantamos, configuramos e acompanhamos sua operação para reduzir
              retrabalho, aumentar rastreabilidade e manter conformidade trabalhista
              — do controle de ponto ao controle de acesso.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl(baseMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:scale-[1.02]"
              >
                Quero um diagnóstico agora
                <MessageCircle size={18} />
              </a>

              <a
                href={buildWhatsAppUrl(baseMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/20 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur transition-all hover:bg-background/30 hover:scale-[1.02]"
              >
                Quero ser direcionado para a solução certa
              </a>
            </div>

            <p className="mt-5 text-sm text-white/60">
              Resposta rápida • Atendimento humano • Sem compromisso
            </p>

            <p className="mt-6 text-sm text-white/70">
              Mensagem pronta com perguntas objetivas para acelerar seu direcionamento.
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background/20 shadow-xl">
                <img
                  src={imgPonto}
                  alt="Ilustração de controle de ponto"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-transparent to-transparent" />
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-border bg-background/20 shadow-xl">
                <img
                  src={imgAgro}
                  alt="Ilustração do agronegócio com gestão"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-transparent to-transparent" />
              </div>

              <div className="col-span-2 relative overflow-hidden rounded-3xl border border-border bg-background/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/60 via-transparent to-transparent" />
                <div className="relative p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                    Acompanhamento na prática
                  </p>
                  <p className="mt-4 text-2xl font-bold text-white">
                    Menos risco. Menos ajuste. Mais rotina e controle.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Gestão por frente, regras claras e evidências para operar com
                    previsibilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJornadas;

