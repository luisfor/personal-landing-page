"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const whatsappUrl = "https://wa.me/573160437913?text=Hola%20Luis%20Canedo%2C%20vi%20tu%20portafolio%20en%20LinkedIn%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad%20profesional";

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                boxShadow: ["0 0 0 0 rgba(37, 211, 102, 0.7)", "0 0 0 20px rgba(37, 211, 102, 0)"]
            }}
            transition={{
                scale: { duration: 0.5, delay: 1 },
                opacity: { duration: 0.5, delay: 1 },
                boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl border-2 border-white flex items-center justify-center cursor-pointer group"
            aria-label="Consultar disponibilidad profesional en WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Consultar disponibilidad profesional / Hablemos de TI
            </span>
        </motion.a>
    );
}
