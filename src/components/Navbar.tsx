"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "py-4 shadow-md" : "py-6 shadow-none"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo/Name */}
                <Link href="#hero" className="text-2xl font-bold tracking-tight text-[#00b4d9] flex items-center gap-1">
                    Luis Canedo
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const sectionId = link.href.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold uppercase transition-colors ${isActive
                                    ? "text-[#00b4d9]"
                                    : "text-[#333] hover:text-[#00b4d9]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-[#333]"
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
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => {
                                const sectionId = link.href.substring(1);
                                const isActive = activeSection === sectionId;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-lg font-medium ${isActive ? "text-[#00b4d9]" : "text-[#333] hover:text-[#00b4d9]"
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
    );
}
