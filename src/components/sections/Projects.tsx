type Project = {
    title: string
    description: string
    link: string
    tech: string[]
}

const projects: Project[] = [
    {
        title: "Portafolio Personal",
        description: "Mi portafolio creado con Next.js y TailwindCSS para mostrar mis proyectos.",
        link: "https://github.com/tu-usuario/portafolioisaac",
        tech: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
        title: "Gestor de Tareas",
        description: "Aplicación web para gestionar tareas con autenticación y persistencia en MongoDB.",
        link: "https://github.com/tu-usuario/task-manager",
        tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "API RESTful",
        description: "API escalable construida con Express y JWT para autenticación segura.",
        link: "https://github.com/tu-usuario/api-rest",
        tech: ["Express", "MongoDB", "JWT"],
    },
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-50"
        >
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                    Mis <span className="text-indigo-600">Proyectos</span>
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-lg"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block text-indigo-600 font-medium hover:underline"
                            >
                                Ver en GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
