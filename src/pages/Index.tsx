import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Method from "@/components/Method";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2"
import SolucoesAlt from "@/components/SolucoesAlt";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero2 />
    <Hero />
    <About />
    <SolucoesAlt />
    <Services />
    <Method />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
