import Navbar from "@/components/Navbar";
import Method from "@/components/Method";
import Footer from "@/components/Footer";
import HeroJornadas from "@/components/jornadas/HeroJornadas";
import NossasSolucoesJornadas from "@/components/jornadas/NossasSolucoesJornadas";
import CTAFinal from "@/components/CTAFinal";
import ContactFormDuBrasilServicos from "@/components/jornadas/ContactFormDuBrasilServicos";

const JornadasPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroJornadas />
      <NossasSolucoesJornadas />
      <Method />
      <CTAFinal />
      <ContactFormDuBrasilServicos />
      <Footer />
    </div>
  );
};

export default JornadasPage;

