"use client";

import { Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-script text-[#00b4d9]">Luis Canedo</h2>
                        <p className="text-slate-400 text-sm mt-2">Ingeniero de Sistemas TI | Cloud & Seguridad</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-slate-300">
                        <a href="#hero" className="hover:text-[#00b4d9] transition-colors">Inicio</a>
                        <a href="#about" className="hover:text-[#00b4d9] transition-colors">Sobre Mí</a>
                        <a href="#services" className="hover:text-[#00b4d9] transition-colors">Servicios</a>
                        <a href="#portfolio" className="hover:text-[#00b4d9] transition-colors">Portafolio</a>
                        <a href="#contact" className="hover:text-[#00b4d9] transition-colors">Contacto</a>
                    </nav>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/luis-eduardo-canedo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#00b4d9] hover:bg-[#00b4d9] hover:text-white transition-all cursor-pointer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/luisfor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#00b4d9] hover:bg-[#00b4d9] hover:text-white transition-all cursor-pointer"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 my-8"></div>

                {/* Copyright & Scroll Top */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Luis Canedo. Todos los derechos reservados.</p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-slate-400 hover:text-[#00b4d9] transition-colors"
                    >
                        Volver arriba <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
