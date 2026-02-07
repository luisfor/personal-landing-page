"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    {/* Image Column */}
                    <div className="order-1 lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <Image
                                src="/luis1.png"
                                alt="Luis Canedo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-2 lg:col-span-7 text-center lg:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight">
                            Sobre Mí
                        </h2>
                        <h3 className="text-xl font-bold text-[var(--primary)] uppercase tracking-wide">
                            Ingeniero de Sistemas TI
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed text-justify">
                            Ingeniero de Sistemas con más de 5 años de experiencia liderando infraestructuras tecnológicas de alta disponibilidad. Especialista en la administración de entornos Cloud (AWS/Azure) y virtualización avanzada con VMware, con un enfoque preventivo basado en robustas estrategias de Backup & Recovery (Veeam). Experto en la implementación de soluciones de seguridad y gestión de identidades (Okta, SSO, AppGate), garantizando infraestructuras escalables, seguras y alineadas a los estándares de la industria.
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
                                href="/Luis_Canedo_CV.pdf"
                                download="Luis_Canedo_CV.pdf"
                                className="px-8 py-4 bg-[#00b4d9] text-white font-bold rounded-full hover:bg-[#009ac0] transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-wide hover:-translate-y-1"
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
