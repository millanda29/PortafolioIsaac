"use client"

export default function Experience() {
  const experiences = [
    {
      role: "Recepcionista y Servicio Técnico Básico",
      company: 'Hostal y Piscinas "Rey de Francia"',
      period: "2019 - 2023",
      description:
        "Atención al cliente en recepción, soporte técnico básico, gestión de reservas y caja registradora. Resolución de problemas menores y coordinación con el equipo técnico. ",
      icon: "🏨",
    },
    {
      role: "Proyecto Académico – Desarrollo de Aplicación Web E-commerce",
      company: "Universidad Central del Ecuador - 8vo semestre",
      period: "2024",
      description:
        "Diseñamos y desarrollamos una aplicación web de comercio electrónico con arquitectura cliente-servidor y despliegue en AWS (EC2) con Github Actions y Docker. Incluyó gestión de usuarios, catálogo, carrito y pasarela de pagos simulada.",
      icon: "💻",
      highlights: [
        "Implementación de arquitectura cliente-servidor",
        "Despliegue en AWS con EC2, Github Actions y Docker",
        "Integración de pasarela de pagos simulada",
      ],
    },
    {
      role: "Pasante en el Instituto Académico de Idiomas",
      company: "Universidad Central del Ecuador - Pasantía",
      period: "May - Jul 2025",
      description:
        'Participé en proyectos de modelado de procesos (BPMN), diseño de red (cableado estructurado y WiFi) y desarrollo del sistema web "Permiso Docentes". Apliqué metodologías ágiles, pruebas unitarias y documentación técnica.',
      icon: "🏢",
      highlights: [
        "Modelado de procesos con BPMN 2.0",
        "Diseño de infraestructura de red",
        "Desarrollo ágil con Scrum",
      ],
    },
  ]

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
                label: "Inicio en Hostal",
                icon: "🏨",
                color: "from-primary to-accent",
              },
              {
                year: "2024",
                label: "Proyecto E-commerce",
                icon: "💻",
                color: "from-accent to-primary",
              },
              {
                year: "2025",
                label: "Pasante UCE",
                icon: "🏢",
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
