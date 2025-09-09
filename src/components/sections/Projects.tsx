"use client"

type Project = {
    title: string
    description: string
    link: string
    tech: string[]
}

const projects: Project[] = [
    {
        title: "Portafolio Personal",
        description: "Mi portafolio profesional creado con Next.js y TailwindCSS, diseñado para mostrar mis proyectos y habilidades de manera atractiva y moderna.",
        link: "https://github.com/millanda29/portafolioisaac",
        tech: ["Next.js", "Tailwind", "TypeScript", "React"],
    },
    {
        title: "Sistema E-commerce",
        description: "Aplicación web completa de comercio electrónico con arquitectura cliente-servidor, desplegada en AWS con EC2, S3 y RDS.",
        link: "https://github.com/millanda29/ecommerce-system",
        tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    },
    {
        title: "Sistema Permiso Docentes",
        description: "Sistema web desarrollado durante mi pasantía en UCE para gestión de permisos docentes con integración frontend-backend.",
        link: "https://github.com/millanda29/permiso-docentes",
        tech: ["React", "Spring Boot", "MySQL", "BPMN"],
    },
    {
        title: "API RESTful",
        description: "API escalable construida con Express y JWT para autenticación segura, con documentación completa y pruebas unitarias.",
        link: "https://github.com/millanda29/api-rest",
        tech: ["Express", "MongoDB", "JWT", "Postman"],
    },
    {
        title: "Gestor de Tareas",
        description: "Aplicación web para gestión de tareas con autenticación, persistencia en MongoDB y interfaz intuitiva.",
        link: "https://github.com/millanda29/task-manager",
        tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "Dashboard Analytics",
        description: "Dashboard interactivo para análisis de datos con visualizaciones en tiempo real y reportes automatizados.",
        link: "https://github.com/millanda29/dashboard-analytics",
        tech: ["React", "D3.js", "Python", "FastAPI"],
    },
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-background"
        >
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Mis <span className="text-primary">Proyectos</span>
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border transform hover:scale-105 overflow-hidden"
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                                <img
                                    src={`/project-${index + 1}.jpg`}
                                    alt={`${project.title} - Captura de pantalla`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23475569' text-anchor='middle' dy='.3em'%3E" + project.title + "%3C/text%3E%3C/svg%3E"
                                    }}
                                />
                                <div className="absolute top-4 right-4">
                                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6 flex flex-col justify-between h-64">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Botones de acción */}
                                <div className="flex gap-2">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-primary text-primary-foreground text-center py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                                    >
                                        Ver Código
                                    </a>
                                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Estadísticas de proyectos */}
                <div className="mt-16 bg-card p-8 rounded-lg shadow-lg border border-border">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Estadísticas de Proyectos</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                                {projects.length}
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">Proyectos</h4>
                            <p className="text-sm text-muted-foreground">Completados</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                                5+
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">Tecnologías</h4>
                            <p className="text-sm text-muted-foreground">Dominadas</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                                100%
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">Código</h4>
                            <p className="text-sm text-muted-foreground">Documentado</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                                24/7
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">Disponible</h4>
                            <p className="text-sm text-muted-foreground">En GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
