import { ArrowRight } from "lucide-react";

type SolutionCardProps = {
  backgroundImage: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  whatsappMessage: string;
};

const WHATSAPP_NUMBER = "5534996367430";

const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const SolutionCard = ({
  backgroundImage,
  tag,
  title,
  description,
  bullets,
  ctaLabel,
  whatsappMessage,
}: SolutionCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-background">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-[#002147]/40 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold text-foreground/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {tag}
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              {description}
            </p>
          </div>
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-xs text-white/85 backdrop-blur"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default SolutionCard;

