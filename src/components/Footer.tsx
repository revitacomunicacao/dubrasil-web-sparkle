import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-dark-foreground py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="DuBrasil Soluções" className="h-8 brightness-0 invert" />
        </div>

        <p className="text-sm text-dark-foreground/50 text-center">
          Uberaba — MG &bull; Grupo DuBrasil Soluções
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/dubrasilsolucoes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-dark-foreground/50 hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/dubrasilsolu%C3%A7%C3%B5es/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-dark-foreground/50 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-dark-foreground/10 pt-6 text-center">
        <p className="text-xs text-dark-foreground/40">
          © {new Date().getFullYear()} Grupo DuBrasil Soluções. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
