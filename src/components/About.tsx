"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Mail, Download } from "lucide-react";

// Hook/Componente para contar números animadamente (1.2s ease-out, solo una vez)
function Counter({ from = 0, to, duration = 1.2 }: { from?: number, to: number, duration?: number }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration, ease: "easeOut" });
        }
    }, [count, inView, to, duration]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Variante Premium Scroll Reveal (fade + translateY 20px -> 0, 0.7s, ease-out)
const fadeUpVariant = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: "easeOut" as const
        }
    }
});

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    {/* Image Column - Stagger 4 */}
                    <motion.div
                        variants={fadeUpVariant(0.3)}
                        className="order-1 lg:col-span-5 flex justify-center lg:justify-start pt-4 lg:pt-0"
                    >
                        {/* Hover premium: Using global .hover-premium class for enterprise consistency + subtle zoom */}
                        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_25px_60px_-10px_rgba(0,180,217,0.15),0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100/30 hover-premium group transition-transform duration-[400ms] hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)]" />
                            <Image
                                src="/luis_profile_corporate.png"
                                alt="Luis Canedo - Ingeniero de Infraestructura y DevOps"
                                fill
                                className="object-cover object-top filter contrast-[1.05]"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="order-2 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        {/* Headers */}
                        <div className="space-y-4">
                            {/* Title - Stagger 1 */}
                            <motion.h2
                                variants={fadeUpVariant(0)}
                                className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight"
                            >
                                Sobre Mí
                            </motion.h2>
                            {/* Subtitle - Stagger 2 */}
                            <motion.div
                                variants={fadeUpVariant(0.1)}
                                className="flex items-center gap-4 justify-center lg:justify-start"
                            >
                                <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-[var(--primary)] to-cyan-200 rounded-full hidden md:block opacity-80" />
                                <h3 className="text-xl md:text-[22px] font-bold text-[var(--primary)] tracking-wide">
                                    Ingeniero de Infraestructura & DevOps
                                </h3>
                            </motion.div>
                        </div>

                        {/* Biography - Stagger 3 */}
                        <motion.div
                            variants={fadeUpVariant(0.2)}
                            className="max-w-[70ch] space-y-5 text-slate-700 text-lg leading-[1.75] text-justify font-light mx-auto lg:mx-0"
                        >
                            <p>
                                Soy ingeniero especializado en infraestructura tecnológica, virtualización y entornos cloud, enfocado en ayudar a empresas a construir plataformas robustas, seguras y altamente disponibles. A lo largo de mi trayectoria he trabajado optimizando sistemas críticos, automatizando procesos y modernizando arquitecturas para soportar el crecimiento empresarial sin fricciones.
                            </p>
                            <p className="font-medium text-slate-800">
                                Mi enfoque combina visión estratégica y ejecución técnica. No solo implemento soluciones: analizo el negocio, detecto cuellos de botella y diseño infraestructuras que realmente aportan rendimiento, estabilidad y escalabilidad. Trabajo principalmente con AWS, VMware y prácticas DevOps para garantizar entornos modernos y preparados para el futuro.
                            </p>

                            {/* Bullets de Impacto */}
                            <ul className="pt-2 pb-2 space-y-2 text-base md:text-lg">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                    <span>Optimización y modernización de infraestructuras empresariales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                    <span>Automatización de despliegues y procesos DevOps</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                    <span>Implementación y gestión de entornos en AWS</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                    <span>Virtualización y administración de plataformas críticas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                    <span>Mejora de disponibilidad, seguridad y rendimiento</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Premium Metrics Card - Stagger 5 */}
                        <motion.div
                            variants={fadeUpVariant(0.4)}
                            className="w-full max-w-[650px] bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mt-4 hover-premium-card"
                        >
                            <div className="grid grid-cols-2 divide-x divide-slate-100/60">
                                <div className="flex flex-col items-center justify-center px-4">
                                    <span className="block text-5xl md:text-[56px] leading-tight font-black text-slate-800 tracking-tighter mb-1">
                                        +<Counter to={5} />
                                    </span>
                                    <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-center">Años Exp.</span>
                                </div>
                                <div className="flex flex-col items-center justify-center px-4">
                                    <span className="block text-5xl md:text-[56px] leading-tight font-black text-slate-800 tracking-tighter mb-1">
                                        +<Counter to={20} />
                                    </span>
                                    <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-center">Proyectos</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons - Stagger 6 */}
                        <motion.div
                            variants={fadeUpVariant(0.5)}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 w-full"
                        >
                            <a
                                href="/Luis_Canedo_CV.pdf"
                                download="Luis_Canedo_CV.pdf"
                                className="px-8 py-4 bg-[#00b4d9] text-white font-bold rounded-xl hover:bg-[#009ac0] hover-premium flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(0,180,217,0.39)] uppercase tracking-wide w-full sm:w-auto text-sm md:text-base"
                            >
                                <Download size={20} />
                                Descargar hoja de vida
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:border-cyan-300 hover:text-slate-900 hover:bg-slate-50 hover-premium flex items-center justify-center gap-3 shadow-sm uppercase tracking-wide w-full sm:w-auto text-sm md:text-base"
                            >
                                Ver proyectos
                            </a>
                        </motion.div>
                    </div>

                </motion.div>
            </div>

            {/* Section Divider Glow */}
            <div className="section-divider-glow mt-24" />
        </section>
    );
}
