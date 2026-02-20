"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-slate-900">
            {/* Background Image - Adjusted opacity for cleaner look */}
            <div className="absolute inset-0 z-0">
                {/* 1. Mantenemos el fondo original pero bajamos opacidad para mejor contraste */}
                <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-60" />

                {/* 2. Overlay oscurecido animado sutilmente para un look más "enterprise" */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30 animate-ultimate-gradient" />

                {/* 3. Grid Animado Tecnológico (Nivel Dios) */}
                <div className="absolute inset-0 animate-grid-flow opacity-30 mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full text-center lg:text-left">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center lg:items-start gap-4 pt-20 lg:pt-0 z-20 max-w-2xl mx-auto lg:mx-0"
                >
                    {/* Badge */}
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        Ingeniero de Infraestructura & Arquitecto Cloud
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-[family-name:var(--font-source-sans)] mb-4">
                        Luis Canedo
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-300 font-light tracking-wide max-w-[600px] leading-relaxed">
                        Modernizo infraestructuras tecnológicas, optimizo entornos en la nube y fortalezco la seguridad de sistemas para que tu empresa opere sin interrupciones y con máximo rendimiento.
                    </h2>

                    <p className="text-base md:text-lg text-slate-400 max-w-[600px] leading-relaxed mt-4">
                        Especialista en AWS, virtualización, administración de sistemas y automatización DevOps. Ayudo a empresas a escalar su infraestructura de forma segura, eficiente y preparada para el crecimiento.
                    </p>

                    {/* Buttons & Socials */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6 w-full lg:w-auto">
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-[var(--primary)] text-white font-bold rounded-md cta-glow-premium hover:bg-[#009ac0] text-sm md:text-base w-full sm:w-auto text-center tracking-wide"
                            >
                                Solicitar consultoría
                            </a>
                            <a
                                href="#experience"
                                className="px-8 py-3 bg-white/10 text-white border border-white/20 font-bold rounded-md hover:bg-white/20 transition-all text-sm md:text-base w-full sm:w-auto text-center tracking-wide backdrop-blur-sm"
                            >
                                Ver experiencia
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/luis-eduardo-canedo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center bg-slate-800/50 text-slate-300 transition-all cursor-pointer hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/luisfor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center bg-slate-800/50 text-slate-300 transition-all cursor-pointer hover:bg-[#333] hover:border-[#333] hover:text-white"
                                aria-label="GitHub Profile"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-full items-end justify-center lg:justify-end pointer-events-none lg:-mr-32 hidden lg:flex"
                >
                    <div className="relative w-full h-[70vh] lg:h-[100vh] max-w-3xl lg:max-w-4xl">
                        {/* Ligero glow azul detrás de la foto */}
                        <div className="absolute inset-0 bg-[#00b4d9] opacity-20 blur-[100px] rounded-full scale-75 transform translate-y-10" />
                        <Image
                            src="/luis2.png"
                            alt="Luis Canedo - Arquitecto Cloud"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl transition-all duration-700 scale-125 origin-bottom relative z-10"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
