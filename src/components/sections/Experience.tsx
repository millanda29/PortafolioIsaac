"use client"

export default function Experience() {
  const experiences = [
    { 
      role: "Asistente de TI y Desarrollo Web - Junior",
      company: 'Hostal y Piscinas "Rey de Francia"', 
      period: "2019 - 2023", 
      description: "Durante cuatro años, brindé soporte técnico y desarrollé soluciones web para el hostal, mejorando la experiencia del cliente y optimizando procesos internos. Implementé un sistema de reservas en línea y gestioné la infraestructura tecnológica del establecimiento.", 
      icon: "🏨",
      highlights: [
        "Desarrollo de prototipos de sistemas de reservas y gestión hotelera",
        "Soporte técnico a usuarios y mantenimiento de equipos",
        "Optimización de procesos internos mediante soluciones digitales",
        "Colaboración con el equipo para mejorar la experiencia del cliente",
      ],
    },
    {
      role: "Proyecto Académico – Desarrollo de Aplicación Web E-commerce - Junior",
      company: "Universidad Central del Ecuador – Octavo Semestre",
      period: "2024",
      description:
        "En equipo de dos personas diseñamos y desarrollamos una aplicación web de comercio electrónico implementando arquitectura cliente-servidor y despliegue en AWS (EC2, S3, RDS). El sistema incluyó gestión de usuarios, catálogo de productos, carrito de compras y pasarela de pagos simulada, integrando frontend y backend con enfoque modular.",
      icon: "💻",
      highlights: [
        "Arquitectura cliente-servidor con integración frontend y backend",
        "Despliegue en AWS utilizando EC2, S3 y RDS",
        "Implementación de catálogo, carrito de compras y pagos simulados",
        "Uso de Git/GitHub y metodologías ágiles para gestión del proyecto",
      ],
    },
    {
      role: "Pasante en Tecnologías de la Información - Junior",
      company: "Instituto Académico de Idiomas – Universidad Central del Ecuador",
      period: "19/05/2025 - 04/07/2025",
      description:
        "Participé en proyectos de modelado y optimización de procesos utilizando BPMN, así como en el diseño y mejora de infraestructura de red (cableado estructurado y redes inalámbricas). También desarrollé e implementé el sistema web 'Permiso Docentes', aplicando metodologías ágiles, integración frontend-backend y pruebas unitarias.",
      icon: "🏢",
      highlights: [
        "Modelado y optimización de procesos con BPMN",
        "Diseño de infraestructura de red (cableado estructurado y WiFi)",
        "Desarrollo del sistema web 'Permiso Docentes'",
        "Aplicación de metodologías ágiles, pruebas unitarias y documentación técnica",
      ],
    },
    {
      role: "TravelMate – Asistente Inteligente para Viajes - SemiSenior",
      company: "Bootcamp La Fábrica – 1ra Edición",
      period: "05/08/2025 - 02/09/2025",
      description:
        "Durante el Bootcamp La Fábrica 2025 participé en el desarrollo de TravelMate, aplicación web ganadora del proyecto final. Fue desarrollada con el stack MERN e integrada con inteligencia artificial usando OpenAI GPT-4o-mini.",
      icon: "🚀",
      highlights: [
        "Desarrollo fullstack con stack MERN (MongoDB, Express, React, Node.js)",
        "Integración de IA con OpenAI para generación de itinerarios inteligentes",
        "Implementación de chat con asistente, presupuestos y exportación de reportes PDF",
        "Despliegue en Render y Vercel con autenticación JWT y configuración de CORS",
      ],
    },
    {
      role: "Pasante – Soporte Técnico y Help Desk (Área TICs) - SemiSenior",
      company: "Unidad Educativa a Distancia “ARUPOS”",
      period: "05/11/2025 - 23/01/2026",
      description:
        "Brindé soporte técnico de primer nivel a personal administrativo y docente, atendiendo incidencias de hardware, software y conectividad. Gestioné requerimientos bajo un esquema de mesa de ayuda realizando diagnóstico, resolución y seguimiento de cada caso.",
      icon: "🖥️",
      highlights: [
        "Soporte técnico a usuarios y resolución de incidencias",
        "Gestión de requerimientos bajo esquema de Help Desk",
        "Mantenimiento preventivo y correctivo de equipos",
        "Desarrollo de un prototipo de Sistema Integrado Académico (SIA)",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 py-28 bg-background overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Experiencia <span className="text-primary">Laboral y Proyectos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un recorrido de mis experiencias profesionales y académicas más
            relevantes, donde he aplicado y potenciado mis habilidades técnicas
            y de colaboración.
          </p>
        </div>

        {/* Timeline vertical */}
        <div className="relative pl-12">
          {/* Línea central */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex items-start gap-6 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {/* Nodo */}
                <div className="relative z-10 w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-xl text-white shadow-xl ring-4 ring-background">
                  {exp.icon}
                </div>

                {/* Tarjeta */}
                <div className="flex-1 bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="mt-2 md:mt-0 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Logros Destacados:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trayectoria horizontal */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Mi Trayectoria
          </h3>

          <div className="relative flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            {/* Línea central animada */}
            <div className="absolute md:top-1/2 md:left-0 md:right-0 h-1 bg-border md:block hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary animate-progress" />
            </div>

            {[
              {
                year: "2019",
                label: "Inicio en Hostal Rey de Francia",
                icon: "🏨",
                color: "from-primary to-accent",
              },
              {
                year: "2024",
                label: "Proyecto Web E-commerce (UCE)",
                icon: "💻",
                color: "from-accent to-primary",
              },
              {
                year: "2025",
                label: "Pasante TI – Instituto de Idiomas UCE",
                icon: "🏢",
                color: "from-primary to-accent",
              },
              {
                year: "2025",
                label: "TravelMate – Bootcamp La Fábrica",
                icon: "🚀",
                color: "from-accent to-primary",
              },
              {
                year: "2026",
                label: "Pasante Help Desk – ARUPOS",
                icon: "🖥️",
                color: "from-primary to-accent",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center w-full group"
              >
                {/* Nodo con glow */}
                <div
                  className={`w-16 h-16 bg-gradient-to-tr ${item.color} rounded-full flex items-center justify-center text-2xl text-white font-bold shadow-xl ring-4 ring-background group-hover:scale-110 transition-transform duration-500`}
                >
                  {item.icon}
                </div>
                {/* Año */}
                <span className="mt-3 text-lg font-bold text-foreground">
                  {item.year}
                </span>
                {/* Descripción */}
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease forwards;
        }
        @keyframes progress {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 2s ease forwards;
        }
      `}</style>
    </section>
  )
}
