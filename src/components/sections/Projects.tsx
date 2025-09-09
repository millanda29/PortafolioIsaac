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
    description:
      "Mi portafolio profesional creado con Next.js y TailwindCSS, diseñado para mostrar mis proyectos y habilidades de manera atractiva y moderna.",
    link: "https://github.com/millanda29/portafolioisaac",
    tech: ["Next.js", "Tailwind", "TypeScript", "React"],
  },
  {
    title: "Sistema E-commerce",
    description:
      "Aplicación web completa de comercio electrónico con arquitectura cliente-servidor, desplegada en AWS con EC2, S3 y RDS.",
    link: "https://github.com/millanda29/ecommerce-system",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    title: "Sistema Permiso Docentes",
    description:
      "Sistema web desarrollado durante mi pasantía en UCE para gestión de permisos docentes con integración frontend-backend.",
    link: "https://github.com/millanda29/permiso-docentes",
    tech: ["React", "Spring Boot", "MySQL", "BPMN"],
  },
  {
    title: "API RESTful",
    description:
      "API escalable construida con Express y JWT para autenticación segura, con documentación completa y pruebas unitarias.",
    link: "https://github.com/millanda29/api-rest",
    tech: ["Express", "MongoDB", "JWT", "Postman"],
  },
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación web para gestión de tareas con autenticación, persistencia en MongoDB y interfaz intuitiva.",
    link: "https://github.com/millanda29/task-manager",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo para análisis de datos con visualizaciones en tiempo real y reportes automatizados.",
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
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Proyectos que reflejan mis habilidades técnicas y capacidad de desarrollo
            de soluciones modernas y escalables.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden transform transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen con overlay */}
              <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={`/project-${index + 1}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23475569' text-anchor='middle' dy='.3em'%3E" +
                      project.title +
                      "%3C/text%3E%3C/svg%3E")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Ver Código
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Contenido */}
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
                        className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-20 bg-card p-10 rounded-2xl shadow-2xl border border-border">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Estadísticas de <span className="text-primary">Proyectos</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Proyectos", value: projects.length, icon: "📂", color: "bg-gradient-primary" },
              { label: "Tecnologías", value: "5+", icon: "💻", color: "bg-gradient-secondary" },
              { label: "Código Documentado", value: "100%", icon: "📑", color: "bg-gradient-accent" },
              { label: "Disponible", value: "24/7", icon: "🔗", color: "bg-gradient-primary" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div
                  className={`${stat.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-2xl`}
                >
                  {stat.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1">{stat.value}</h4>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
      `}</style>
    </section>
  )
}
