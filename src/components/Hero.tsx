"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/40" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.h2 className="text-4xl md:text-6xl font-script text-primary transform -rotate-3 text-white/90">
                        Hi, This Is
                    </motion.h2>

                    <h1 className="text-6xl md:text-8xl font-black tracking-wider uppercase drop-shadow-2xl font-[family-name:var(--font-source)]">
                        Luis Canedo
                    </h1>

                    <div className="relative">
                        <p className="text-2xl md:text-4xl text-slate-200 tracking-wide font-[family-name:var(--font-shadows)] transform -rotate-1 mt-2">
                            Ingeniero de Sistemas TI | Soporte, Cloud & Seguridad
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-4 mb-8">
                        <a
                            href="https://www.linkedin.com/in/luis-eduardo-canedo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-[#00b4d9] text-white transition-all cursor-pointer hover:bg-[#008ba8] hover:scale-110 hover:border-white/50"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-10 py-5 bg-[var(--primary)] text-white font-bold rounded-full shadow-[0_0_20px_rgba(0,206,209,0.4)] hover:shadow-[0_0_30px_rgba(0,206,209,0.6)] hover:-translate-y-1 transition-all uppercase tracking-widest text-sm md:text-base"
                        >
                            Contrátame
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
