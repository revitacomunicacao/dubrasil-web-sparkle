import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Method from "@/components/Method";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2";
import SolucoesAlt from "@/components/SolucoesAlt";
import { useHomePageContent } from "@/hooks/useHomePage";

const Index = () => {
  const home = useHomePageContent();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero2 />
      <Hero content={home.hero} />
      <About content={home.about} />
      <SolucoesAlt content={home.solucoes} />
      <Method content={home.metodo} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
