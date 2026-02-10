import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <Hero />

      <About />

      <Services />

      <Experience />

      <Portfolio />

      <ProfessionalSummary />

      <Contact />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}
