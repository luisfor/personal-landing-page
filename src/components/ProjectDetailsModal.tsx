"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Server, Shield, Cloud, Terminal, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Project {
    title: string;
    description: string;
    challenge: string;
    solution?: string;
    impact: string;
    tags: string[];
    category: string;
}

interface ProjectDetailsModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project || !mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col pointer-events-auto"
                        >
                            {/* Header Image / Pattern Placeholder */}
                            <div className="h-40 bg-gradient-to-r from-slate-900 via-[#00b4d9] to-slate-900 relative overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.png')]"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider mb-2 inline-block">
                                        {project.category}
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* ... Rest of content ... */}
                            {/* Body */}
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {project.title}
                                </h2>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold border border-slate-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                                                <Terminal size={20} className="text-[#00b4d9]" /> Descripción General
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span> El Reto
                                                </h4>
                                                <p className="text-slate-600">{project.challenge}</p>
                                            </div>

                                            {project.solution && (
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span> La Solución
                                                    </h4>
                                                    <p className="text-slate-600">{project.solution}</p>
                                                </div>
                                            )}

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> El Impacto
                                                </h4>
                                                <p className="text-slate-600">{project.impact}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Information */}
                                    <div className="space-y-6">
                                        <div className="bg-[#ebfcfd] p-6 rounded-2xl border border-[#bcecff]">
                                            <h4 className="font-bold text-[#006d83] mb-4 flex items-center gap-2">
                                                <Shield size={18} /> Arquitectura
                                            </h4>
                                            <p className="text-sm text-[#006d83]/80 mb-4">
                                                Este proyecto implementó una arquitectura de alta disponibilidad.
                                            </p>
                                            {/* Placeholder for future architecture diagram */}
                                            <div className="w-full h-32 bg-white/50 rounded-lg flex items-center justify-center border border-dashed border-[#006d83]/30">
                                                <span className="text-xs text-[#006d83]/50 font-medium">Diagrama de Arquitectura</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
