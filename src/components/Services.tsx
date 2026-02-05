"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Rocket } from "lucide-react";

const services = [
    {
        icon: <Layout size={32} />,
        title: "Frontend Development",
        description: "Creación de interfaces modernas, responsivas y accesibles utilizando React, Next.js y Tailwind CSS.",
    },
    {
        icon: <Server size={32} />,
        title: "Backend Development",
        description: "Desarrollo de APIs robustas y escalables con Node.js, bases de datos SQL/NoSQL y servicios cloud.",
    },
    {
        icon: <Code size={32} />,
        title: "UI/UX Design",
        description: "Diseño de experiencias de usuario intuitivas y sistemas de diseño coherentes enfocados en la conversión.",
    },
    {
        icon: <Rocket size={32} />,
        title: "Performance & SEO",
        description: "Optimización de rendimiento web (Core Web Vitals) y estrategias SEO para máxima visibilidad.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Qué hago</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Soluciones tecnológicas a medida
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
