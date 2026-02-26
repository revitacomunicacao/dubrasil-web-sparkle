import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="DuBrasil Soluções" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://www.instagram.com/dubrasilsolucoes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/dubrasilsolu%C3%A7%C3%B5es/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-foreground/80 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-border mt-2">
            <a href="https://www.instagram.com/dubrasilsolucoes/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/dubrasilsolu%C3%A7%C3%B5es/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
