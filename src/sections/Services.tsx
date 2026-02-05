import { Section } from "@/components/ui/section"
import { H2, H3, P } from "@/components/ui/typography"
import { Server, Cloud, ShieldCheck, Laptop, Database, Globe } from "lucide-react"

export function Services() {
    const services = [
        {
            icon: Cloud,
            title: "Cloud Services",
            description: "Administración y migración experta en AWS, Azure y Google Workspace. Gestión eficiente de identidades y recursos en la nube.",
        },
        {
            icon: Laptop,
            title: "Soporte TI Nivel 3",
            description: "Resolución avanzada de incidencias para entornos macOS y Windows. Administración de dispositivos móviles (MDM) con Mosyle.",
        },
        {
            icon: ShieldCheck,
            title: "Seguridad & Acceso",
            description: "Implementación de SSO (Okta), políticas de seguridad Zero Trust y gestión de firewalls (Fortinet) para proteger activos corporativos.",
        },
        {
            icon: Server,
            title: "Infraestructura & Virtualización",
            description: "Diseño y mantenimiento de servidores físicos y virtuales usando VMware, vCenter y Hyper-V para alta disponibilidad.",
        },
        {
            icon: Database,
            title: "Backup & Recuperación",
            description: "Estrategias de respaldo robustas con Veeam Backup & Replication para garantizar la continuidad del negocio.",
        },
        {
            icon: Globe,
            title: "Redes & Conectividad",
            description: "Configuración y monitoreo de redes empresariales, switches y puntos de acceso para un rendimiento óptimo.",
        },
    ]

    return (
        <Section id="services" className="bg-accent">
            <div className="flex flex-col items-center text-center space-y-12">
                <div className="space-y-4 max-w-2xl">
                    <H2 className="text-4xl font-bold uppercase">Mis Servicios</H2>
                    <P className="text-muted-foreground">
                        Soluciones integrales en tecnología de la información diseñadas para optimizar y asegurar su infraestructura empresarial.
                    </P>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border group hover:-translate-y-1"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                </div>
                            </div>
                            <H3 className="text-xl font-bold mb-3">{service.title}</H3>
                            <P className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </P>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
