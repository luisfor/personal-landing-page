"use client";

import { motion } from "framer-motion";
import { Cloud, Database, ShieldCheck, Lock, Server, Globe, ArrowRight, CheckCircle, Terminal } from "lucide-react";

const projects = [
    {
        category: "Cloud Infrastructure Migration",
        icon: <Cloud size={32} />,
        title: "Migración Estratégica de Infraestructura Física a la Nube (AWS)",
        description: "Este proyecto resalta mi capacidad técnica para mover cargas de trabajo críticas entre entornos radicalmente distintos.",
        challenge: "Migrar una arquitectura de servidores físicos y máquinas virtuales desde centros de datos locales hacia una infraestructura escalable y resiliente en la nube.",
        impact: "Eliminación de la dependencia de hardware físico (On-Premise), mejora en la alta disponibilidad y reducción de costos operativos.",
        solution: "Configuración de instancias en AWS, gestión de VMware vCenter para la exportación de servidores y aseguramiento de la integridad de los datos durante la transición.",
        tags: ["AWS", "VMware", "Cloud Migration", "Infrastructure"],
        featured: true,
        detailedPhases: [
            {
                title: "1. Fase de Evaluación y Discovery",
                content: "Realicé un inventario exhaustivo de activos On-Premise y un análisis de dependencias de las máquinas virtuales existentes. Esto permitió mapear la interconexión de las aplicaciones y determinar el 'Move Group' óptimo para minimizar riesgos."
            },
            {
                title: "2. Estrategia de Migración (Rehosting)",
                content: "Opté por un enfoque de 'Lift and Shift' robusto debido a la criticidad del tiempo. Utilicé VMware vCenter Connector para sincronizar las cargas de trabajo hacia AWS Application Migration Service (MGN), asegurando compatibilidad total."
            },
            {
                title: "3. Ejecución y Sincronización",
                content: "Configuré la replicación continua de bloques a nivel de volumen. Durante la ventana de mantenimiento (Cut-Over), realicé pruebas de integridad y cambié los registros DNS, logrando una transición con casi cero tiempo de inactividad perceptible."
            },
            {
                title: "4. Optimización Post-Migración",
                content: "Una vez en la nube, redimensioné las instancias EC2 (Right-Sizing) basándome en métricas reales de CloudWatch y configuré Auto Scaling Groups para manejar picos de tráfico, desmantelando finalmente el hardware físico obsoleto."
            }
        ],
        processWorkflow: [
            { step: "Data Center Local" },
            { step: "VMware vCenter" },
            { step: "AWS Migration Svc" },
            { step: "Instancias AWS (VPC)" }
        ],
        architectureDiagram: <AwsArchitectureDiagram />
    },
    {
        category: "Consolidación de Identidades",
        icon: <Globe size={32} />,
        title: "Unificación Corporativa: Migración de Correos y Archivos de Microsoft 365 a Google Workspace",
        description: "Este proyecto demuestra mi habilidad de gestión y arquitectura de plataformas de colaboración a gran escala.",
        challenge: "Consolidar la operación de 3 empresas independientes que operaban en dominios aislados bajo una única plataforma unificada.",
        impact: "Estandarización de la comunicación interna, simplificación de la administración de usuarios y mejora del 100% en la colaboración inter-empresarial.",
        solution: "Migración masiva de correos, calendarios y archivos desde Microsoft Office 365 hacia un único tenant de Google Workspace, integrando políticas de seguridad centralizadas.",
        tags: ["Google Workspace", "Migration", "Identity Management", "Collaboration"],
        featured: true,
        detailedPhases: [
            {
                title: "1. Auditoría de Tenants y Preparación",
                content: "Analicé exhaustivamente los tres entornos aislados de Microsoft 365. Mapeé identidades de usuarios, grupos y resuelvo duplicidades de alias antes de la consolidación. Establecí el 'Source of Truth' para la nueva estructura de identidades."
            },
            {
                title: "2. Estrategia de Migración Masiva",
                content: "Utilicé herramientas de migración servidor-a-servidor para transferir correos, calendarios y contactos. Migré terabytes de datos no estructurados desde SharePoint/OneDrive hacia Google Shared Drives, preservando metadatos y permisos."
            },
            {
                title: "3. Arquitectura de Identidad Unificada",
                content: "Diseñé la arquitectura del nuevo 'Super Tenant' en Google Workspace. Implementé Unidades Organizativas (OU) lógicas para separar las empresas bajo una misma administración, aplicando políticas de seguridad (DLP, 2FA) centralizadas pero granulares."
            },
            {
                title: "4. Gestión del Cambio y Cut-over",
                content: "Ejecuté un plan de comunicación para los usuarios finales. El Cut-over (cambio de registros MX) se sincronizó un fin de semana, asegurando que el lunes por la mañana los 3 equipos operaran como una sola entidad colaborativa sin pérdida de correos."
            }
        ],
        processWorkflow: [
            { step: "3x Sources (M365 Tenants)" },
            { step: "Migration Engine" },
            { step: "Identity Mapping" },
            { step: "Unified Google Workspace" }
        ],
        architectureDiagram: <GoogleWorkspaceArchitectureDiagram />
    },
    {
        category: "Bases de Datos",
        icon: <Database size={32} />,
        title: "Administración y Seguridad de Bases de Datos Enterprise",
        description: "Diseño y gestión integral de ecosistemas de SQL Server, especializado en seguridad y recuperación de datos.",
        challenge: "Garantizar la integridad y el rendimiento de bases de datos críticas para la operación vial y comercial.",
        impact: "Reducción de tiempos de respuesta en reportes y cumplimiento de estándares de seguridad de datos.",
        solution: "Implementación de planes de mantenimiento preventivo, optimización de índices y auditoría de accesos.",
        tags: ["SQL Server (MCSA)", "Transact-SQL", "Windows Server"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Proceso de Tuning y Optimización",
                content: "Realicé un análisis profundo de los planes de ejecución para identificar cuellos de botella. Implementé reindexación estratégica y optimicé consultas T-SQL complejas, logrando una reducción drástica en los tiempos de respuesta de reportes críticos."
            },
            {
                title: "2. Seguridad de la Capa de Datos",
                content: "Implementé políticas de auditoría granular para rastrear accesos sensibles. Endurecí la configuración del servidor (Hardening) bajo el principio de menor privilegio, garantizando la integridad de la operación comercial frente a accesos no autorizados."
            }
        ],
        processWorkflow: [
            { step: "Motores SQL Server" },
            { step: "Query Tuning" },
            { step: "High Perf DB" }
        ],
        architectureDiagram: <DatabaseArchitectureDiagram />
    },
    {
        category: "Continuidad del Negocio",
        icon: <Server size={32} />,
        title: "Continuidad del Negocio y Virtualización Avanzada",
        description: "Implementación de planes de Disaster Recovery y alta disponibilidad mediante virtualización.",
        challenge: "Eliminar puntos únicos de fallo en la infraestructura de servidores físicos y virtuales.",
        impact: "Garantía de recuperación inmediata de servicios ante fallos críticos de hardware o software.",
        solution: "Despliegue de clusters de virtualización y sistemas de respaldo inmutable.",
        tags: ["Veeam Backup", "VMware vCenter", "Hyper-V"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Arquitectura de Virtualización",
                content: "Gestioné clústeres de alta disponibilidad en VMware vCenter e Hyper-V. Esta arquitectura redundante eliminó puntos únicos de fallo, permitiendo que los servidores críticos (ERP, CRM) siguieran operando incluso ante la caída de un host físico."
            },
            {
                title: "2. Estrategia de Disaster Recovery",
                content: "Diseñé e implementé políticas de respaldo inmutable con Veeam Backup & Replication. Establecí RTOs y RPOs agresivos para asegurar la recuperación inmediata de servicios vitales ante incidentes de hardware o ataques de ransomware."
            }
        ],
        processWorkflow: [
            { step: "Infraestructura Virtual" },
            { step: "Veeam Replication" },
            { step: "Sitos Contingencia" }
        ],
        architectureDiagram: <VirtualizationArchitectureDiagram />
    },
    {
        category: "Ciberseguridad",
        icon: <Lock size={32} />,
        title: "Seguridad Perimetral y Gestión de Identidades (IAM)",
        description: "Despliegue de soluciones de acceso seguro y control de identidades para entornos corporativos remotos.",
        challenge: "Asegurar la red interna contra amenazas externas manteniendo la facilidad de acceso para el personal.",
        impact: "Fortalecimiento de la seguridad de la red y cumplimiento de normativas de acceso seguro a la información.",
        solution: "Implementación de políticas Zero Trust y autenticación multifactor (MFA).",
        tags: ["Okta", "AppGate", "Fortigate", "Mosyle"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Implementación de Zero Trust",
                content: "Desplegué una arquitectura de acceso seguro moderna utilizando Okta para gestión de identidades y AppGate para perímetros definidos por software (SDP), asegurando que solo usuarios verificados accedan a recursos corporativos."
            },
            {
                title: "2. Gestión y Hardening de Red",
                content: "Configuré reglas estrictas de firewall en equipos Fortigate y controlé la flota de dispositivos móviles mediante Mosyle (MDM), cerrando brechas de seguridad en el acceso remoto y protegiendo los activos intelectuales de la empresa."
            }
        ],
        processWorkflow: [
            { step: "Usuario/Dispositivo" },
            { step: "Túnel AppGate/Okta" },
            { step: "Recursos Protegidos" }
        ],
        architectureDiagram: <SecurityArchitectureDiagram />
    },
    {
        category: "Desarrollo Web Full Stack",
        icon: <Terminal size={32} />,
        title: "Desarrollo de Sistema de Inventario de Activos Tecnológicos",
        description: "Centralización de información de hardware mediante una plataforma web robusta.",
        challenge: "Digitalizar el control manual de equipos electrónicos y de sistemas de la Operadora Vial.",
        impact: "Optimización de tiempos de auditoría y trazabilidad completa del ciclo de vida de los activos.",
        solution: "Sistema híbrido PHP/Node.js con ORM para gestión eficiente de bases de datos.",
        tags: ["PHP", "Node.js", "Sequelize", "SQL Server"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Diseño del Modelo Entidad-Relación",
                content: "Estructuré una base de datos relacional compleja para mapear servidores, estaciones de trabajo y periféricos. Implementé Sequelize ORM para abstraer las consultas SQL y garantizar la integridad referencial de los activos."
            },
            {
                title: "2. Lógica de Negocio en Tiempo Real",
                content: "Desarrollé módulos de backend para la generación de reportes dinámicos y alertas de mantenimiento. La interfaz frontend (HTML5/JS) permite a los técnicos actualizar estados de inventario desde el campo en tiempo real."
            }
        ],
        processWorkflow: [
            { step: "Interfaz Web" },
            { step: "Backend Node/PHP" },
            { step: "Sequelize ORM" },
            { step: "SQL Server" }
        ],
        architectureDiagram: <InventoryArchitectureDiagram />
    },
    {
        category: "Infraestructura & Comunicaciones",
        icon: <Globe size={32} />,
        title: "Implementación de Infraestructura de Correo Corporativo (Zimbra)",
        description: "Establecimiento de un sistema de comunicación interna seguro y escalable.",
        challenge: "Eliminar la dependencia de servicios externos básicos y unificar la identidad digital.",
        impact: "Soberanía de datos, reducción de costos de licenciamiento y mejora en la imagen corporativa.",
        solution: "Despliegue de Zimbra Collaboration Suite con seguridad perimetral integrada.",
        tags: ["Zimbra", "Linux", "DNS/MX", "Security"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Configuración de Transporte y DNS",
                content: "Gestioné la configuración integral de registros DNS (MX, SPF, DKIM) para asegurar la entregabilidad. Configuré el MTA (Mail Transfer Agent) de Zimbra para optimizar el enrutamiento de correos entrantes y salientes."
            },
            {
                title: "2. Seguridad y Antispam",
                content: "Implementé políticas estrictas de filtrado de contenido utilizando Amavis y SpamAssassin integrados en Zimbra. Configuré cuotas de almacenamiento y políticas de retención para garantizar el rendimiento del servidor."
            }
        ],
        processWorkflow: [
            { step: "Dominio Corporativo" },
            { step: "DNS / MX Records" },
            { step: "Servidor Zimbra" },
            { step: "Clientes de Correo" }
        ],
        architectureDiagram: <ZimbraArchitectureDiagram />
    },
    {
        category: "Sistemas Inteligentes de Transporte (ITS)",
        icon: <Server size={32} />,
        title: "Modernización Tecnológica y Sistemas de Detección en Vía",
        description: "Actualización de infraestructura crítica y despliegue de sensores industriales.",
        challenge: "Liderar la transición tecnológica de la infraestructura de monitoreo vial.",
        impact: "Mejora en la capacidad de respuesta ante incidentes viales y estabilidad del centro de control.",
        solution: "Integración de sensores ITS con nueva red de cómputo Windows 10.",
        tags: ["ITS Sensors", "Windows 10", "Hardware", "Networking"],
        featured: false,
        detailedPhases: [
            {
                title: "1. Logística de Despliegue de Hardware",
                content: "Coordiné la renovación masiva de equipos de cómputo, migrando a workstations Windows 10 optimizadas para aplicaciones de monitoreo. Supervisé la instalación física de sensores en puntos críticos de la vía."
            },
            {
                title: "2. Integración de Sistemas ITS",
                content: "Aseguré la comunicación fluida entre los sensores de campo y el software de gestión central. Calibré los sistemas de detección vehicular para garantizar la precisión de los datos de tráfico en tiempo real."
            }
        ],
        processWorkflow: [
            { step: "Sensores de Vía" },
            { step: "Sistemas Detección" },
            { step: "Red Comunicaciones" },
            { step: "Centro de Control" }
        ],
        architectureDiagram: <ItsArchitectureDiagram />
    }
];

import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import AwsArchitectureDiagram from "./AwsArchitectureDiagram";
import GoogleWorkspaceArchitectureDiagram from "./GoogleWorkspaceArchitectureDiagram";
import DatabaseArchitectureDiagram from "./DatabaseArchitectureDiagram";
import VirtualizationArchitectureDiagram from "./VirtualizationArchitectureDiagram";
import SecurityArchitectureDiagram from "./SecurityArchitectureDiagram";
import InventoryArchitectureDiagram from "./InventoryArchitectureDiagram";
import ZimbraArchitectureDiagram from "./ZimbraArchitectureDiagram";
import ItsArchitectureDiagram from "./ItsArchitectureDiagram";

// ... (projects array remains unchanged)

export default function Portfolio() {
    // Define the Project type based on the projects array structure
    type Project = typeof projects[0];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="portfolio" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#00b4d9] uppercase mb-3">Portafolio Estratégico</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Casos de Éxito Destacados
                    </h3>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Proyectos de alto impacto en infraestructura, seguridad y modernización tecnológica.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Featured Project spans full width on desktop */}
                    <div className="col-span-1 flex flex-col gap-6">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#00b4d9]/30 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 bg-[#00b4d9] text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider z-10">
                                    Proyecto Estrella
                                </div>
                                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Cloud size={200} />
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-[#ebfcfd] text-[#00b4d9] rounded-2xl flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h4>
                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-red-400 rounded-full"></div> El Reto
                                            </h5>
                                            <p className="text-sm text-slate-600">{project.challenge}</p>
                                        </div>
                                        {project.solution && (
                                            <div>
                                                <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div> La Solución
                                                </h5>
                                                <p className="text-sm text-slate-600">{project.solution}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div> El Impacto
                                            </h5>
                                            <p className="text-sm text-slate-600">{project.impact}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-sm font-semibold bg-white text-slate-600 px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="inline-flex items-center gap-2 bg-[#00b4d9] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#009ac0] transition-colors shadow-md hover:shadow-lg cursor-pointer relative z-10"
                                    >
                                        Ver Arquitectura <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-[#00b4d9] group-hover:text-white transition-colors">
                                        {project.icon}
                                    </div>
                                    <CheckCircle size={20} className="text-[#00b4d9] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h4 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h4>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-100 flex-grow">
                                    <p className="text-xs text-slate-500 mb-2"><strong className="text-slate-700">Reto:</strong> {project.challenge}</p>
                                    <p className="text-xs text-slate-500"><strong className="text-slate-700">Impacto:</strong> {project.impact}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-[#00b4d9] bg-[#ebfcfd] py-2 rounded-lg hover:bg-[#00b4d9] hover:text-white transition-all cursor-pointer relative z-10"
                                    >
                                        Ver Detalles Técnicos
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <ProjectDetailsModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section >
    );
}
