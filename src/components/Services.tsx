"use client";

import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Lock, Laptop, Database, ShoppingBag, Users, Fingerprint } from "lucide-react";

const services = [
    {
        icon: <Database size={32} />,
        title: "Administración de Bases de Datos",
        description: "Especialista en administración, optimización y alta disponibilidad de bases de datos SQL Server.",
        extra: "Certificado MCSA SQL Server y Titulado SENA. Experiencia en tuning, migración y seguridad de datos críticos.",
        highlight: true,
        badge: "Core Expertise"
    },
    {
        icon: <Cloud size={32} />,
        title: "Infraestructura Cloud",
        description: "Diseño, implementación y gestión de entornos en la nube, optimizando recursos en AWS, Azure y Google Workspace.",
        extra: "Garantizo una infraestructura escalable y siempre disponible para la continuidad del negocio."
    },
    {
        icon: <Server size={32} />,
        title: "Virtualización y Servidores",
        description: "Administración experta de servidores físicos y virtuales utilizando VMware, vCenter e Hyper-V.",
        extra: "Gestión avanzada de sistemas operativos Linux (Red Hat, CentOS, Oracle Linux) y Windows Server."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Respaldo y Resiliencia",
        description: "Configuración de estrategias de respaldo y recuperación ante desastres mediante Veeam Backup & Replication.",
        extra: "Protección total de datos críticos y minimización del tiempo de inactividad ante fallos."
    },
    {
        icon: <Lock size={32} />,
        title: "Seguridad y Gestión IAM",
        description: "Implementación de soluciones de seguridad perimetral y gestión de identidades con Okta, AppGate y Fortigate.",
        extra: "Configuración de switches, AP y proyectos de conectividad como DirectConnect."
    },
    {
        icon: <Laptop size={32} />,
        title: "Desarrollo Web & IA",
        description: "Diseño de páginas web, aplicaciones con IA y gestión experta de CMS como WordPress.",
        extra: "Administración integral de Hosting, dominios y despliegue de soluciones digitales."
    },
    {
        icon: <ShoppingBag size={32} />,
        title: "Gestión de Activos y Compras TI",
        description: "Gestión del ciclo de vida de activos tecnológicos, desde la adquisición de hardware hasta el control de inventario.",
        extra: "Experiencia en compras de equipos (MacBook, servidores), asegurando la mejor relación costo-beneficio."
    },
    {
        icon: <Users size={32} />,
        title: "Gestión de Proveedores",
        description: "Gestión estratégica y negociación con proveedores de servicios tecnológicos y suministros.",
        extra: "Administración de contratos y SLAs con terceros para garantizar la calidad de los servicios IT."
    },
    {
        icon: <Fingerprint size={32} />,
        title: "Seguridad Física e Infraestructura",
        description: "Implementación y administración de sistemas de seguridad física y tecnología para oficinas.",
        extra: "Gestión de circuitos cerrados (CCTV), controles de acceso biométricos y conectividad segura."
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Mis Servicios</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Soluciones Profesionales
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
                            className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border group flex flex-col h-full ${service.highlight
                                ? "border-[#00b4d9] shadow-md ring-1 ring-[#00b4d9]/20"
                                : "border-slate-100"
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
                            <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                {service.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100">
                                <p className="text-xs font-semibold text-[#00b4d9] italic">
                                    {service.extra}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
