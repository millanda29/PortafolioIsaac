"use client"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

type Project = {
  title: string
  description: string
  link: string
  demo?: string
  tech: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Portafolio Personal",
    description: "Mi portafolio profesional creado con Next.js y TailwindCSS, diseñado para mostrar mis proyectos y habilidades de manera atractiva y moderna.",
    link: "https://github.com/millanda29/portafolioisaac",
    tech: ["Next.js", "Tailwind", "TypeScript", "React"],
    featured: true,
  },
  {
    title: "Sistema E-commerce",
    description: "Aplicación web completa de comercio electrónico con arquitectura cliente-servidor, desplegada en AWS con EC2, S3 y RDS.",
    link: "https://github.com/millanda29/ecommerce-system",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    featured: true,
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
    description: "Aplicación web para gestión de tareas con autenticación, persistencia en MongoDB e interfaz intuitiva.",
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
      className="relative min-h-screen px-6 py-28 bg-background overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proyectos que reflejan mis habilidades técnicas y capacidad de desarrollo de soluciones modernas y escalables.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2"
            >
              {/* Imagen con overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={`/project-${index + 1}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:0.2'/%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%236366f1' text-anchor='middle' dy='.3em'%3E" +
                      project.title +
                      "%3C/text%3E%3C/svg%3E")
                  }
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Badge destacado */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full shadow-lg">
                      ⭐ Destacado
                    </span>
                  </div>
                )}

                {/* Botones hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                    aria-label="Ver código"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                      aria-label="Ver demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-card p-10 rounded-2xl border border-border shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            Estadísticas de <span className="text-primary">Proyectos</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Proyectos", value: projects.length, icon: "📂", color: "from-emerald-500 to-teal-500" },
              { label: "Tecnologías", value: "10+", icon: "💻", color: "from-teal-500 to-cyan-500" },
              { label: "Código Documentado", value: "100%", icon: "📑", color: "from-cyan-500 to-sky-500" },
              { label: "Disponible", value: "24/7", icon: "🔗", color: "from-sky-500 to-blue-500" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground">{stat.value}</h4>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
