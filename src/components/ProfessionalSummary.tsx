import { GraduationCap, Award, BookOpen, Server, Database, Shield, Globe, Terminal, Cloud, Layers, BarChart } from "lucide-react";

export default function ProfessionalSummary() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                    Perfil <span className="text-[#00b4d9]">Profesional</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Block 1: Estudios y Certificaciones */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Estudios y Certificaciones</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                                <h4 className="font-bold text-slate-900">Ingeniería de Sistemas</h4>
                                <p className="text-sm text-slate-600">Fundación Universitaria Tecnológico de Comfenalco</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                                <h4 className="font-bold text-slate-900">Especialización en Gestión de Bases de Datos</h4>
                                <p className="text-sm text-slate-600">SENA</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                                <h4 className="font-bold text-slate-900">MCSA: SQL Server</h4>
                                <p className="text-sm text-slate-600">BSG Institute</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white"></div>
                                <h4 className="font-bold text-slate-900">Google Workspace Admin & IT Support</h4>
                                <p className="text-sm text-slate-600">Certificación Profesional de Google (Coursera)</p>
                            </div>
                        </div>
                    </div>

                    {/* Block 2: Core Skills */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Core Skills</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <SkillBadge icon={<Cloud size={20} />} name="AWS Cloud" color="bg-orange-100 text-orange-700" />
                            <SkillBadge icon={<Database size={20} />} name="SQL Server" color="bg-red-100 text-red-700" />
                            <SkillBadge icon={<Server size={20} />} name="VMware" color="bg-gray-200 text-gray-700" />
                            <SkillBadge icon={<Shield size={20} />} name="Okta IAM" color="bg-blue-100 text-blue-700" />
                            <SkillBadge icon={<Shield size={20} />} name="Fortigate" color="bg-red-100 text-red-800" />
                            <SkillBadge icon={<Globe size={20} />} name="Google Workspace" color="bg-green-100 text-green-700" />
                        </div>
                    </div>

                    {/* Block 3: Aprendizaje Continuo (Roadmap 2026) */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                                <BarChart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Roadmap 2026</h3>
                        </div>

                        <div className="space-y-4">
                            <RoadmapItem
                                title="English Proficiency"
                                status="Curso Activo B1 → C1"
                                description="Mejorando fluidez técnica y conversacional."
                                progress={65}
                                color="bg-purple-500"
                            />
                            <RoadmapItem
                                title="Python & AI Development"
                                status="En Progreso"
                                description="Automatización e integración de modelos LLM."
                                progress={40}
                                color="bg-yellow-500"
                            />
                            <RoadmapItem
                                title="DevOps Practices"
                                status="Learning"
                                description="CI/CD, Docker y Kubernetes."
                                progress={30}
                                color="bg-amber-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SkillBadge({ icon, name, color }: { icon: React.ReactNode, name: string, color: string }) {
    return (
        <div className={`${color} p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-transform hover:scale-105`}>
            {icon}
            <span className="text-xs font-bold">{name}</span>
        </div>
    );
}

function RoadmapItem({ title, status, description, progress, color }: { title: string, status: string, description: string, progress: number, color: string }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
                <span className="text-xs font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">{status}</span>
            </div>
            <p className="text-xs text-slate-500 mb-2">{description}</p>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}
