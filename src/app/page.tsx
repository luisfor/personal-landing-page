import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import LearningPath from "@/components/LearningPath";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <Hero />

      <About />

      <Services />

      <Experience />

      <Portfolio />

      <LearningPath />

      <Contact />

      <Footer />

    </main>
  );
}
