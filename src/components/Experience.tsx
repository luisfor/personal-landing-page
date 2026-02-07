"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// Placeholder data - to be replaced by user content
const experienceData = [
    {
        title: "Consultor Senior en Infraestructura y Datos",
        company: "Independiente / Proyectos Estratégicos",
        date: "06/2024 – Presente",
        description: [
            "Optimización Cloud: Aplicando conocimientos avanzados en Administración de Azure (Certificación 2024) para el despliegue de recursos escalables y redes virtuales seguras.",
            "Resiliencia de Datos: Diseño de planes de Disaster Recovery utilizando Veeam Backup & Replication para garantizar la protección de entornos virtuales.",
            "Auditoría de Bases de Datos: Consultoría técnica basada en la especialización de Gestión y Seguridad de Bases de Datos para la optimización de servidores SQL."
        ]
    },
    {
        title: "Ingeniero de Sistemas TI",
        company: "Condor Labs / Propelus (Remoto para USA)",
        date: "02/2021 – 06/2024",
        description: [
            "Arquitectura Cloud e Híbrida: Lideré la migración de infraestructura crítica y servicios de correo hacia AWS, gestionando máquinas virtuales y servicios en la nube para operaciones internacionales.",
            "Gestión de Infraestructura Crítica: Administré servidores en entornos de virtualización avanzada con VMware (vCenter) y sistemas operativos Linux (Red Hat, CentOS, Oracle Linux) y Windows.",
            "Ciberseguridad y Acceso: Implementé soluciones de Zero Trust y gestión de identidades mediante Okta, SSO, AppGate y seguridad perimetral con Fortigate.",
            "Operaciones IT y Soporte: Gestioné el ciclo de vida de activos (MacBooks/Servidores) y sistemas de seguridad física (CCTV, AP, controles biométricos)."
        ]
    },
    {
        title: "Coordinador de Sistemas",
        company: "Operadora Vial de Colombia",
        date: "05/2008 – 02/2021",
        description: [
            "Liderazgo Técnico: Dirigí el departamento de IT, supervisando la administración de tecnologías y el soporte de tercer nivel para asegurar la continuidad operativa.",
            "Especialista en Datos: Administré y aseguré ecosistemas de SQL Server, optimizando el rendimiento y la integridad de las bases de datos corporativas.",
            "Modernización Tecnológica: Ejecuté proyectos de migración masiva de sistemas operativos y la implementación de nuevos entornos de virtualización con Hyper-V."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#00b4d9] uppercase mb-3">Mi Trayectoria</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Experiencia Profesional
                    </h3>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-slate-100"></div>

                    <div className="space-y-12">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Spacer for desktop alignment */}
                                <div className="hidden md:block w-1/2" />

                                {/* Icon on Line */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#00b4d9] text-white shadow-lg z-10 border-4 border-white mt-8">
                                    <Briefcase size={18} />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-0">
                                    <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow relative ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                                        }`}>
                                        {/* Connector Line for Mobile */}
                                        <div className="absolute top-10 -left-12 w-10 h-1 bg-slate-100 md:hidden"></div>
                                        {/* Connector Line for Desktop */}
                                        <div className={`hidden md:block absolute top-10 w-10 h-1 bg-slate-100 ${index % 2 === 0 ? "-right-10" : "-left-10"
                                            }`}></div>

                                        <div className="flex items-center gap-2 text-sm text-[#00b4d9] font-bold mb-2">
                                            <Calendar size={16} />
                                            <span>{item.date}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-500 font-medium mb-4">{item.company}</p>

                                        <ul className="space-y-2">
                                            {item.description.map((point, i) => {
                                                const [title, content] = point.split(":");
                                                return (
                                                    <li key={i} className="text-slate-600 leading-relaxed text-sm flex gap-2">
                                                        <span className="text-[#00b4d9] mt-1.5">•</span>
                                                        <span>
                                                            {content ? (
                                                                <>
                                                                    <strong className="text-slate-700">{title.replace(/\*\*/g, "")}:</strong>
                                                                    {content}
                                                                </>
                                                            ) : (
                                                                title
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
