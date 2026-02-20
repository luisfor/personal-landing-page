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
            "Diseño y despliegue de infraestructuras cloud en Azure, implementando redes virtuales seguras y recursos escalables para entornos empresariales.",
            "Definición de estrategias de Disaster Recovery con Veeam Backup & Replication, garantizando un RTO/RPO óptimo ante incidentes.",
            "Auditoría y optimización de servidores SQL, mejorando el rendimiento en un 40% y asegurando bases de datos críticas."
        ],
        technologies: "Azure · Veeam · SQL Server · Networking"
    },
    {
        title: "Ingeniero de Sistemas TI",
        company: "Condor Labs / Propelus (Remoto para USA)",
        date: "02/2021 – 06/2024",
        description: [
            "Lideré la migración de infraestructura crítica y servicios de correo hacia AWS, soportando operaciones ininterrumpidas.",
            "Administré plataformas virtualizadas con VMware y servidores Linux/Windows, manteniendo una disponibilidad del 99.9%.",
            "Implementé modelo de seguridad Zero Trust y gestión de identidades con Okta y AppGate, fortaleciendo el control de accesos.",
            "Gestioné operaciones IT y activos tecnológicos, brindando soporte avanzado a más de 400 usuarios internacionales."
        ],
        technologies: "AWS · VMware · Linux · Windows Server · Okta · Fortigate"
    },
    {
        title: "Coordinador de Sistemas",
        company: "Operadora Vial de Colombia",
        date: "05/2008 – 02/2021",
        description: [
            "Dirigí el área de IT y el soporte de tercer nivel, garantizando continuidad operativa y reduciendo incidentes recurrentes en un 30%.",
            "Administré ecosistemas de SQL Server, optimizando el tiempo de respuesta y la integridad de bases de datos corporativas.",
            "Ejecuté proyectos de modernización, incluyendo migraciones masivas y consolidación de servidores con Hyper-V."
        ],
        technologies: "SQL Server · Hyper-V · Windows Server · Networking"
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
                                    <div className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover-premium-card relative ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"
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

                                        <ul className="space-y-3 mb-5">
                                            {item.description.map((point, i) => (
                                                <li key={i} className="text-slate-600 leading-relaxed text-[15px] flex gap-2">
                                                    <span className="text-[#00b4d9] font-bold mt-0.5">✔</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-4 border-t border-slate-100">
                                            <p className="text-sm font-semibold text-[#00b4d9]">
                                                {item.technologies}
                                            </p>
                                        </div>
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
