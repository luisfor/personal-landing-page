"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Terminal } from "lucide-react";

const learningItems = [
    {
        icon: <BookOpen size={20} />,
        title: "English Proficiency",
        status: "En Progreso (B2/C1 Goal)",
        description: "Enfoque en inglés conversacional y técnico para entornos globales.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Award size={20} />,
        title: "Azure Administrator",
        status: "Certificación 2024",
        description: "Actualización constante en servicios cloud y gestión de recursos Azure.",
        color: "bg-[#00b4d9]/10 text-[#00b4d9]"
    },
    {
        icon: <Terminal size={20} />,
        title: "DevOps Practices",
        status: "Aprendizaje Continuo",
        description: "CI/CD, Docker y Kubernetes para optimizar flujos de despliegue.",
        color: "bg-purple-100 text-purple-600"
    }
];

export default function LearningPath() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Aprendizaje Continuo
                    </h3>
                    <p className="text-slate-500 text-sm">
                        Manteniéndome a la vanguardia tecnológica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col items-center text-center hover:border-[#00b4d9]/30 transition-colors"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${item.color}`}>
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 block">
                                {item.status}
                            </span>
                            <p className="text-xs text-slate-600">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
