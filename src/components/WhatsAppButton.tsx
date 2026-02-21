"use client";

import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Configuración Fácil
    const whatsappNumber = "573160437913";
    const whatsappMessage = "Hola Luis, vi tu portafolio y me gustaría conversar sobre una oportunidad profesional.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Lógica del tooltip Inteligente (Conversión)
    useEffect(() => {
        if (hasInteracted) return;

        // Mostrar el tooltip después de 5 segundos de carga
        const showTimer = setTimeout(() => {
            if (!hasInteracted) {
                setShowTooltip(true);
            }
        }, 5000);

        // Ocultar el tooltip 6 segundos después de mostrarse (total 11s)
        const hideTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 11000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [hasInteracted]);

    const handleInteraction = () => {
        setHasInteracted(true);
        setShowTooltip(false);
    };

    return (
        <div
            className="fixed right-6 z-[999] flex flex-col items-end"
            style={{ bottom: "max(24px, env(safe-area-inset-bottom))" }}
            onMouseEnter={handleInteraction}
            onClick={handleInteraction}
        >
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-[calc(100%+16px)] right-0 bg-white px-4 py-3 rounded-2xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] border border-slate-100 flex items-start gap-3 w-max max-w-[calc(100vw-48px)] origin-bottom-right"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 leading-tight">Consultar disponibilidad profesional</span>
                            <span className="text-xs text-slate-500 font-medium mt-1">Hablemos de TI</span>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowTooltip(false);
                                setHasInteracted(true);
                            }}
                            className="p-1 rounded-full hover:bg-slate-100 text-slate-300 hover:text-slate-500 transition-colors ml-1 -mr-1 -mt-1"
                            aria-label="Cerrar sugerencia"
                        >
                            <X size={14} />
                        </button>

                        {/* Triangle pointer (Burbuja) */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45 rounded-sm"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ripple & Pulse Container */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label="Contactar por WhatsApp"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    duration: 0.25,
                    ease: "easeOut"
                }}
                className="relative flex items-center justify-center w-[52px] h-[52px] md:w-[60px] md:h-[60px] bg-[#25D366] rounded-full border-2 border-white shadow-[0_8px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.6)] text-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 transition-shadow duration-300 group"
            >
                {/* Glow Exterior Persistente */}
                <div className="absolute inset-[-2px] rounded-full bg-[#25D366] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                {/* Micro-pulso autónomo (CSS puro con keyframes locales definidos en globals.css) */}
                <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-wp-ping pointer-events-none"></div>

                {/* SVG Icon */}
                <div className="relative z-10 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                    <MessageCircle strokeWidth={1.5} fill="currentColor" className="w-full h-full text-white" />
                </div>
            </motion.a>
        </div>
    );
}
