import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Method from "@/components/Method";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Method />
    <CTAFinal />
    <Footer />
  </div>
);

export default Index;
