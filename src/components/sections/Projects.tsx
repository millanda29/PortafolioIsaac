"use client"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

type Project = {
  title: string
  description: string
  repository?: string
  link?: string
  tech: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Landing Page para Manantial Rey de Francia",
    description: "Landing page desarrollada con Astro y enfoque en alto rendimiento, SEO y UX, para promocionar servicios de bienestar, hospedaje y restaurante del complejo Rey de Francia.",
    repository: "https://github.com/millanda29/rey-de-francia-landing",
    link: "https://manantial-reydefrancia.netlify.app",
    tech: ["Astro", "Tailwind", "JavaScript", "CSS", "SEO"],
  },
  {
    title: "TravelMate Proyecto Final Bootcamp - Frontend",
    description: "Proyecto final del bootcamp de programación frontend, desarrollado con Next.js y Tailwind CSS, demostrando habilidades en desarrollo web moderno, diseño responsivo y buenas prácticas de codificación.",
    repository: "https://github.com/millanda29/ProyectoFinalBootcamp2025/tree/main/client",
    link: "https://proyecto-final-bootcamp2025.vercel.app",
    tech: ["Next.js", "Tailwind", "TypeScript", "JavaScript"],
    featured: true,
  },
  {
    title: "TravelMate Proyecto Final Bootcamp - Backend",
    description: "Proyecto final del bootcamp de programación backend, construido con Node.js, Express y MongoDB, demostrando habilidades en desarrollo de API RESTful, autenticación segura y manejo de datos.",
    repository: "https://github.com/millanda29/ProyectoFinalBootcamp2025/tree/main/server",
    link: "https://proyectofinalbootcamp2025.onrender.com/api-docs",
    tech: ["Express", "MongoDB", "JWT", "Swagger"],
    featured: true,
  },
  {
    title: "Poseidon IA - Analizador de Mercado y Redes Sociales",
    description: "Inteligencia artificial desarrollada con Python y TensorFlow para analizar tendencias de mercado y redes sociales, proporcionando insights accionables para estrategias de marketing digital.",
    tech: ["Python", "TensorFlow", "Next.js", "FastAPI"],
  },
  {
    title: "Dragonball API RESTful",
    description: "App Fullstack con Node.js, Express y React que ofrece una API REST para gestionar personajes, características y otros elementos de Dragonball, consumiendo la API pública de Dragonball.",
    repository: "https://github.com/millanda29/DragonBallAPI-Back-Front",
    tech: ["Express", "React", "Node.js", "API REST"],
  },
  {
    title: "Peli+ - Plataforma para gestion de cartelera de Peliculas",
    description: "Aplicación web desarrollada con React y Express para gestionar la cartelera de películas y elenco, permitiendo a los usuarios explorar, buscar y filtrar películas por género, fecha de estreno y popularidad.",
    repository: "https://github.com/millanda29/GrupoY-IntegracionBackFontBD",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "To Do App con MERN Stack",
    description: "Aplicación de gestión de tareas desarrollada con MongoDB, Express, React y Node.js, permitiendo a los usuarios crear, editar y eliminar tareas con una interfaz intuitiva y responsive.",
    repository: "https://github.com/millanda29/Clase-DeployVercel",
    link: "https://todolist-jade-phi.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Gestor de Restaurante - Manantial Rey de Francia",
    description: "Sistema de gestión para el restaurante del complejo Rey de Francia, desarrollado con Next.js y Nest.js, incluyendo módulos de gestion de inventario, control de pagos y dashboard de ventas.",
    tech: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    title: "Landing Page Astro",
    description: "Landing page desarrollada con Astro, enfocada en alto rendimiento, SEO y experiencia de usuario, para promocionar un producto o servicio específico con diseño moderno y responsivo.",
    repository: "https://github.com/millanda29/astro-landing",
    link: "https://landingpage-astro.netlify.app",
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
              <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={`/project-${index + 1}.webp`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                      aria-label="Ver repositorio en GitHub"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all"
                      aria-label="Ver sitio web"
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
