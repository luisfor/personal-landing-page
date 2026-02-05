"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Image Column */}
                    <div className="order-1 flex justify-center lg:justify-end">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <Image
                                src="/images/profile.jpg"
                                alt="Luis Canedo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-2 text-center lg:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight">
                            Sobre Mí
                        </h2>
                        <h3 className="text-xl font-bold text-[var(--primary)] uppercase tracking-wide">
                            Ingeniero de Sistemas TI
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            Ingeniero de Sistemas con más de 5 años de experiencia en soporte técnico, administración de servidores y servicios en la nube (AWS, Azure, Google Workspace).
                            Me especializo en garantizar la operatividad, seguridad y eficiencia de las infraestructuras tecnológicas.
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-4 border-t border-slate-100 mt-6">
                            <div>
                                <span className="block text-4xl font-black text-slate-900">5+</span>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Años Exp.</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-slate-900">20+</span>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Proyectos</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="/cv/resume.pdf"
                                download
                                className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-[var(--primary)]/90 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-wide"
                            >
                                <Download size={20} />
                                Descargar Hoja de Vida
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-[var(--secondary)] text-white font-bold rounded-full hover:bg-[var(--secondary)]/90 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-wide"
                            >
                                <Mail size={20} />
                                Contactar
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
