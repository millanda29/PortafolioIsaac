"use client"

export default function Experience() {
    const experiences = [
        {
            role: "Recepcionista y Servicio Técnico Básico",
            company: 'Hostal y Piscinas "Rey de Francia"',
            period: "2019 - 2023",
            description: "Atención al cliente en la recepción, proporcionando información y asistencia a los usuarios. Mantenimiento y soporte técnico básico de las máquinas y equipos de la instalación. Gestión de reservas y manejo de la caja registradora. Resolución de problemas técnicos menores y coordinación con el equipo técnico para reparaciones mayores.",
        },
        {
            role: "Proyecto Académico – Desarrollo de Aplicación Web E-commerce",
            company: "2024",
            period: "",
            description: "En equipo de dos personas diseñamos y desarrollamos una aplicación web de comercio electrónico, implementando arquitectura cliente-servidor y despliegue en AWS (EC2, S3, RDS). El sistema incluyó gestión de usuarios, catálogo de productos, carrito de compras y pasarela de pagos simulada, integrando frontend y backend con enfoque modular. Se aplicaron buenas prácticas de programación, control de versiones (Git/GitHub) y metodologías ágiles para la organización del trabajo, fortaleciendo tanto habilidades técnicas como de colaboración en proyectos reales de desarrollo web y cloud computing.",
        },
        {
            role: "Pasante en el Instituto Académico de Idiomas",
            company: "UCE",
            period: "19/05/2025 - 04/07/2025",
            description: "Participé en proyectos de modelado y optimización de procesos (BPMN), así como en el diseño y mejora de infraestructura de red (cableado estructurado y red inalámbrica). Además, desarrollé e implementé el sistema web \"Permiso Docentes\", aplicando metodologías de desarrollo ágil, integración frontend-backend, pruebas unitarias y optimización de componentes. Adquirí experiencia en análisis de requerimientos, documentación técnica y gestión de proyectos de TI, fortaleciendo mis competencias técnicas y de trabajo en equipo en entornos reales.",
        },
    ]

    return (
        <section id="experience" className="min-h-screen px-6 py-20 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Experiencia <span className="text-primary">Laboral y Proyectos</span>
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, i) => (
                        <div key={i} className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Imagen/Icono */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        {i === 0 ? "🏨" : i === 1 ? "💻" : "🏢"}
                                    </div>
                                </div>
                                
                                {/* Contenido */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.role}</h3>
                                            <p className="text-primary font-medium text-lg">{exp.company}</p>
                                        </div>
                                        {exp.period && (
                                            <div className="mt-2 md:mt-0">
                                                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-foreground leading-relaxed text-base">{exp.description}</p>
                                    
                                    {/* Logros destacados */}
                                    {i === 1 && (
                                        <div className="mt-4 p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Logros Destacados:</h4>
                                            <ul className="text-sm text-foreground space-y-1">
                                                <li>• Implementación exitosa de arquitectura cliente-servidor</li>
                                                <li>• Despliegue en AWS con EC2, S3 y RDS</li>
                                                <li>• Integración de pasarela de pagos simulada</li>
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {i === 2 && (
                                        <div className="mt-4 p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Competencias Desarrolladas:</h4>
                                            <ul className="text-sm text-foreground space-y-1">
                                                <li>• Modelado de procesos con BPMN 2.0</li>
                                                <li>• Diseño de infraestructura de red</li>
                                                <li>• Desarrollo ágil con metodologías Scrum</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Timeline visual */}
                <div className="mt-12 bg-card p-8 rounded-lg shadow-lg border border-border">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Mi Trayectoria</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">
                                2019
                            </div>
                            <p className="text-sm text-muted-foreground">Inicio en Hostal Rey de Francia</p>
                        </div>
                        <div className="hidden md:block w-16 h-0.5 bg-gradient-primary"></div>
                        <div className="text-center mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">
                                2024
                            </div>
                            <p className="text-sm text-muted-foreground">Proyecto E-commerce</p>
                        </div>
                        <div className="hidden md:block w-16 h-0.5 bg-gradient-primary"></div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">
                                2025
                            </div>
                            <p className="text-sm text-muted-foreground">Pasante UCE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
