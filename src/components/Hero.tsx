"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image Placeholder - User needs to place hero-bg.jpg */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
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

                    <h1 className="text-6xl md:text-8xl font-black tracking-wider uppercase drop-shadow-2xl">
                        Luis Canedo
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 tracking-wide uppercase font-light">
                        Ingeniero de Sistemas TI | Soporte, Cloud & Seguridad
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-4 mb-8">
                        {['twitter', 'facebook', 'linkedin', 'github'].map((icon) => (
                            <div key={icon} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer bg-white/5">
                                <span className="sr-only">{icon}</span>
                                <div className="w-4 h-4 bg-white" />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-10 py-5 bg-[var(--primary)] text-white font-bold rounded-full shadow-[0_0_20px_rgba(0,206,209,0.4)] hover:shadow-[0_0_30px_rgba(0,206,209,0.6)] hover:-translate-y-1 transition-all uppercase tracking-widest text-sm md:text-base"
                        >
                            Get Free Quote
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
