"use client";

import { motion } from "framer-motion";
import { Cloud, Database, ShieldCheck, Lock, Server, Globe, ArrowRight, CheckCircle } from "lucide-react";

const projects = [
    {
        category: "Caso de Éxito Principal",
        icon: <Cloud size={32} />,
        title: "Migración y Unificación de Infraestructura Empresarial",
        description: "Lideré la migración estratégica de máquinas virtuales desde entornos locales (On-Premise) hacia la nube de AWS.",
        challenge: "Unificar los servicios de correo de múltiples empresas independientes bajo una plataforma única y centralizada de Google Workspace.",
        impact: "Centralización total de la identidad corporativa y optimización del acceso remoto mediante Single Sign-On (SSO) y MDM.",
        tags: ["AWS", "Microsoft 365", "Google Workspace", "VMware"],
        featured: true
    },
    {
        category: "Bases de Datos",
        icon: <Database size={32} />,
        title: "Administración y Seguridad de Bases de Datos Enterprise",
        description: "Diseño y gestión integral de ecosistemas de SQL Server, especializado en seguridad y recuperación de datos.",
        challenge: "Garantizar la integridad y el rendimiento de bases de datos críticas para la operación vial y comercial.",
        impact: "Reducción de tiempos de respuesta en reportes y cumplimiento de estándares de seguridad de datos.",
        tags: ["SQL Server (MCSA)", "Transact-SQL", "Windows Server"],
        featured: false
    },
    {
        category: "Continuidad del Negocio",
        icon: <Server size={32} />,
        title: "Continuidad del Negocio y Virtualización Avanzada",
        description: "Implementación de planes de Disaster Recovery y alta disponibilidad mediante virtualización.",
        challenge: "Eliminar puntos únicos de fallo en la infraestructura de servidores físicos y virtuales.",
        impact: "Garantía de recuperación inmediata de servicios ante fallos críticos de hardware o software.",
        tags: ["Veeam Backup", "VMware vCenter", "Hyper-V"],
        featured: false
    },
    {
        category: "Ciberseguridad",
        icon: <Lock size={32} />,
        title: "Seguridad Perimetral y Gestión de Identidades (IAM)",
        description: "Despliegue de soluciones de acceso seguro y control de identidades para entornos corporativos remotos.",
        challenge: "Asegurar la red interna contra amenazas externas manteniendo la facilidad de acceso para el personal.",
        impact: "Fortalecimiento de la seguridad de la red y cumplimiento de normativas de acceso seguro a la información.",
        tags: ["Okta", "AppGate", "Fortigate", "Mosyle"],
        featured: false
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#00b4d9] uppercase mb-3">Portafolio Estratégico</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Casos de Éxito Destacados
                    </h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Proyectos de alto impacto en infraestructura, seguridad y modernización tecnológica.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Featured Project spans full width on desktop */}
                    <div className="col-span-1">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#00b4d9]/30 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 bg-[#00b4d9] text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider z-10">
                                    Proyecto Estrella
                                </div>
                                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Cloud size={200} />
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-[#ebfcfd] text-[#00b4d9] rounded-2xl flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h4>
                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-red-400 rounded-full"></div> El Reto
                                            </h5>
                                            <p className="text-sm text-slate-600">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div> El Impacto
                                            </h5>
                                            <p className="text-sm text-slate-600">{project.impact}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-sm font-semibold bg-white text-slate-600 px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="inline-flex items-center gap-2 bg-[#00b4d9] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#009ac0] transition-colors shadow-md hover:shadow-lg">
                                        Ver Arquitectura <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-[#00b4d9] group-hover:text-white transition-colors">
                                        {project.icon}
                                    </div>
                                    <CheckCircle size={20} className="text-[#00b4d9] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h4 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h4>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-100 flex-grow">
                                    <p className="text-xs text-slate-500 mb-2"><strong className="text-slate-700">Reto:</strong> {project.challenge}</p>
                                    <p className="text-xs text-slate-500"><strong className="text-slate-700">Impacto:</strong> {project.impact}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <button className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-[#00b4d9] bg-[#ebfcfd] py-2 rounded-lg hover:bg-[#00b4d9] hover:text-white transition-all">
                                        Ver Detalles Técnicos
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
