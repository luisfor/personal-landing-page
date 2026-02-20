"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Experiencia", href: "#experience" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            // Scroll Animation Logic
            setIsScrolled(window.scrollY > 20);

            // Active Section Logic
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar (Top) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00b4d9] to-[#005c8a] z-[60] origin-left"
                style={{ scaleX: scrollYProgress, transition: "scaleX 0.1s linear" }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
                    ? "py-4 bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20"
                    : "py-6 bg-transparent shadow-none"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo/Name */}
                    <Link href="#hero" className={`text-2xl font-bold tracking-tight transition-colors duration-300 flex items-center gap-1 ${isScrolled ? "text-[#00b4d9]" : "text-white"}`}>
                        Luis Canedo
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;

                            // Dynamic colors based on scroll state
                            const textColor = isScrolled
                                ? (isActive ? "text-[#00b4d9]" : "text-[#333] hover:text-[#00b4d9]")
                                : (isActive ? "text-[#00b4d9]" : "text-slate-200 hover:text-white");

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-bold uppercase transition-colors duration-300 ${textColor}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-[#333]" : "text-white"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100/50 overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => {
                                    const sectionId = link.href.substring(1);
                                    const isActive = activeSection === sectionId;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-lg font-medium transition-colors duration-200 ${isActive ? "text-[#00b4d9]" : "text-[#333] hover:text-[#00b4d9]"
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
