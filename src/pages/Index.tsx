import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Method from "@/components/Method";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2";
import SolucoesAlt from "@/components/SolucoesAlt";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero2 />
    <Hero />
    <About />
    <SolucoesAlt />
    <Method />
    <Testimonials />
    <FAQ />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
