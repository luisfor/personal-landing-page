"use client";

import { motion } from "framer-motion";

export default function GoogleMap() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-200 relative bg-slate-100"
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3662580556205!2d-75.5118782!3d10.3944594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625eb92de5107%3A0x193b39404033c0bb!2sD-SoftWare!5e0!3m2!1sen!2sco!4v1707160000000!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación - D-SoftWare"
            ></iframe>

            {/* Overlay Title */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-200 z-10">
                <span className="text-xs font-bold text-[#00b4d9] uppercase tracking-wider block">Ubicación</span>
                <span className="text-sm font-bold text-slate-900">D-SoftWare</span>
            </div>
        </motion.div>
    );
}
