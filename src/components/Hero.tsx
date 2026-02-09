"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opactiy-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/50" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start gap-6 pt-20 lg:pt-0"
                >
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-primary text-white/90">
                        Hola, soy
                    </motion.h2>

                    <h1 className="text-6xl md:text-7xl lg:text-9xl font-black tracking-tight uppercase drop-shadow-2xl font-[family-name:var(--font-source)] text-white leading-none">
                        Luis<br />Canedo
                    </h1>

                    <div className="relative">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-slate-200 tracking-wide font-[family-name:var(--font-shadows)] mt-2">
                            Ingeniero de Sistemas TI
                        </p>
                        <p className="text-lg md:text-xl text-primary font-bold uppercase tracking-widest mt-2">
                            Soporte • Cloud • Seguridad
                        </p>
                    </div>

                    {/* Buttons & Socials */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-[0_0_20px_rgba(0,206,209,0.4)] hover:shadow-[0_0_30px_rgba(0,206,209,0.6)] hover:-translate-y-1 transition-all uppercase tracking-widest text-sm md:text-base w-full md:w-auto text-center"
                        >
                            Contrátame
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/luis-eduardo-canedo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-transparent text-white transition-all cursor-pointer hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="https://github.com/lcanedo12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-transparent text-white transition-all cursor-pointer hover:bg-[#333] hover:border-[#333] hover:scale-110"
                                aria-label="GitHub Profile"
                            >
                                <Github size={22} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-full flex items-end justify-center lg:justify-end pointer-events-none"
                >
                    <div className="relative w-full h-[60vh] lg:h-[85vh] max-w-lg lg:max-w-xl">
                        {/* Image glow effect */}
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                        <Image
                            src="/luis2.png"
                            alt="Luis Canedo - Ingeniero TI"
                            fill
                            className="object-contain object-bottom drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
