"use client";

import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Settings, Activity, Layers } from "lucide-react";

const services = [
    {
        icon: <Server size={32} />,
        title: "Administración de Infraestructura",
        description: "Diseño, implementación y optimización de infraestructuras on-premise y cloud, garantizando alta disponibilidad, rendimiento y estabilidad operativa.",
        highlight: false,
    },
    {
        icon: <Settings size={32} />,
        title: "Automatización & DevOps",
        description: "Automatizo despliegues, pipelines y procesos operativos para reducir errores manuales, acelerar entregas y mejorar la eficiencia del equipo.",
        highlight: true,
        badge: "Eficiencia"
    },
    {
        icon: <Cloud size={32} />,
        title: "Soluciones en la Nube (AWS)",
        description: "Implementación y administración de entornos en AWS con enfoque en escalabilidad, seguridad y optimización de costos.",
        highlight: false,
    },
    {
        icon: <Layers size={32} />,
        title: "Virtualización & Servidores",
        description: "Gestión de plataformas virtualizadas con VMware, optimizando recursos y asegurando continuidad del negocio.",
        highlight: false,
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Seguridad & Hardening",
        description: "Fortalecimiento de servidores y servicios para reducir vulnerabilidades y cumplir buenas prácticas de seguridad.",
        highlight: false,
    },
    {
        icon: <Activity size={32} />,
        title: "Monitoreo & Alta Disponibilidad",
        description: "Implementación de sistemas de monitoreo proactivo y arquitecturas resilientes para minimizar caídas y tiempos de respuesta.",
        highlight: false,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-sm font-bold tracking-widest text-[#00b4d9] uppercase mb-4">Soluciones Profesionales</h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 max-w-4xl mx-auto leading-snug md:leading-tight">
                        Ayudo a empresas a modernizar, asegurar y escalar su infraestructura tecnológica con soluciones DevOps y Cloud de nivel empresarial.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`relative bg-white p-8 rounded-2xl border group flex flex-col h-full hover-premium-card hover:border-[#00b4d9]/40 transition-[border-color,box-shadow,transform] duration-300 ${service.highlight
                                ? "border-[#00b4d9]/50 shadow-[0_8px_30px_rgba(0,180,217,0.12)] ring-1 ring-[#00b4d9]/20"
                                : "border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                                }`}
                        >
                            {service.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00b4d9] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                    {service.badge}
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.highlight
                                ? "bg-[#00b4d9] text-white shadow-lg shadow-[#00b4d9]/30"
                                : "bg-slate-100 text-slate-900 group-hover:bg-[#00b4d9] group-hover:text-white"
                                }`}>
                                {service.highlight ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                ) : (
                                    service.icon
                                )}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 text-center bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 max-w-4xl mx-auto relative overflow-hidden group hover-premium-card"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d9]/5 via-transparent to-[#005c8a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 relative z-10 leading-tight">
                        ¿Tu infraestructura está lista para escalar sin riesgos? <br className="hidden md:block" />
                        <span className="text-[#00b4d9]">Te ayudo a llevarla a nivel empresarial.</span>
                    </h4>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#00b4d9] text-white font-bold rounded-xl hover:bg-[#009ac0] cta-glow-premium transition-all relative z-10 text-sm md:text-base tracking-wide"
                    >
                        👉 Hablemos de tu proyecto
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
