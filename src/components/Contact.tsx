"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import GoogleMap from "./GoogleMap";

export default function Contact() {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate sending
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#00b4d9] uppercase mb-3">Hablemos</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        ¿Listo para modernizar tu infraestructura?
                    </h3>

                    {/* Urgencia Suave */}
                    <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                        Respuesta en menos de 24 horas
                    </div>

                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ayudo a empresas a migrar, asegurar y escalar su infraestructura cloud con enfoque en alta disponibilidad y seguridad.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover-premium-card transition-colors">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Correo Electrónico</h4>
                                <p className="text-slate-600 mb-2">Para propuestas técnicas y consultas empresariales.</p>
                                <a href="mailto:lcanedo12@gmail.com" className="text-[#00b4d9] font-semibold hover:underline text-lg">
                                    lcanedo12@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover-premium-card transition-colors">
                            <div className="w-12 h-12 bg-[#0077b5]/10 text-[#0077b5] rounded-xl flex items-center justify-center flex-shrink-0">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">LinkedIn</h4>
                                <p className="text-slate-600 mb-2">Conoce mi trayectoria profesional y validaciones técnicas.</p>
                                <a href="https://www.linkedin.com/in/luis-eduardo-canedo/" target="_blank" rel="noopener noreferrer" className="text-[#00b4d9] font-semibold hover:underline text-lg">
                                    Conectar en LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover-premium-card transition-colors">
                            <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Ubicación</h4>
                                <p className="text-slate-600 mb-2">Atención remota para LATAM y USA.</p>
                                <span className="text-slate-800 font-medium text-lg">
                                    Base en Cartagena, Colombia
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                    >
                        <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <MessageSquare className="text-[#00b4d9]" /> Envíame un mensaje
                        </h4>

                        {/* Trust Bullets (Nivel Dios) */}
                        <ul className="mb-6 space-y-1.5 text-sm text-slate-600 font-medium border-b border-slate-100 pb-6">
                            <li className="flex items-center gap-2">
                                <span className="text-[#00b4d9]">✔</span> +15 años en infraestructura crítica
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#00b4d9]">✔</span> Experiencia con empresas B2B e Internacionales
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#00b4d9]">✔</span> Enfoque en alta disponibilidad y resiliencia
                            </li>
                        </ul>

                        {formState === "success" ? (
                            <div className="h-64 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} />
                                </div>
                                <h5 className="text-xl font-bold text-slate-900">¡Mensaje Enviado!</h5>
                                <p className="text-slate-600">Gracias por contactarme. Te responderé pronto.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-6 text-[#00b4d9] font-semibold hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setFormState("submitting");

                                    const formData = new FormData(e.currentTarget);

                                    try {
                                        const response = await fetch("/", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                            body: new URLSearchParams(formData as any).toString()
                                        });

                                        if (response.ok) {
                                            setFormState("success");
                                        } else {
                                            setFormState("error");
                                            alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
                                        }
                                    } catch (error) {
                                        setFormState("error");
                                        alert("Error de conexión. Verifica tu internet.");
                                    }
                                }}
                                className="space-y-6"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p className="hidden">
                                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                                </p>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00b4d9] focus:ring-2 focus:ring-[#00b4d9]/20 outline-none transition-all"
                                        placeholder="Ej. Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Corporativo</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00b4d9] focus:ring-2 focus:ring-[#00b4d9]/20 outline-none transition-all"
                                        placeholder="juan@empresa.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00b4d9] focus:ring-2 focus:ring-[#00b4d9]/20 outline-none transition-all resize-none"
                                        placeholder="Cuéntame brevemente tu necesidad (migración cloud, mejora de infraestructura, seguridad, etc.)"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full bg-[#00b4d9] text-white font-bold py-4 rounded-xl hover:bg-[#009ac0] cta-glow-premium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {formState === "submitting" ? (
                                        "Enviando..."
                                    ) : (
                                        <>Enviar Mensaje <Send size={18} /></>
                                    )}
                                </button>

                                {/* Confianza bajo el botón */}
                                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
                                    <span>🔒</span> Tu información será tratada de forma confidencial.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Google Map Section (Nivel Dios Positioning) */}
                <div className="mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            🌎 Atención remota para LATAM y Estados Unidos
                        </h4>
                        <p className="text-slate-600 text-lg">
                            Opero desde Cartagena, Colombia, brindando soporte y consultoría remota a empresas internacionales.
                        </p>
                    </div>
                    <GoogleMap />
                </div>
            </div>


        </section>
    );
}
