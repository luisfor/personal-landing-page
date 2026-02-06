import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <Hero />

      <About />

      <Services />

      <Experience />

      {/* Portfolio Section Placeholder */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center bg-slate-50 border-b border-slate-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Portafolio</h2>
          <p className="text-slate-600">Project grid will go here.</p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contacto</h2>
          <p className="text-slate-600">Contact form will go here.</p>
        </div>
      </section>

    </main>
  );
}
