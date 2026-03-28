"use client"

export default function Education() {
  const education = [
    {
      title: "Bachiller en Ciencias (B.G.U)",
      school: 'U.E.F "María Inmaculada"',
      year: "2019",
      description:
        "Bachillerato en Ciencias con énfasis en matemáticas y ciencias naturales, base fundamental para mi formación en ingeniería y tecnología.",
      icon: "🎓",
    },
    {
      title: "Ingeniería en Sistemas de Información",
      school: "Universidad Central del Ecuador",
      year: "Egresado",
      description:
        "Formación en desarrollo de software, arquitectura de sistemas, gestión de proyectos y análisis de requerimientos, aplicando metodologías ágiles y buenas prácticas de ingeniería.",
      icon: "🏛️",
    },
    {
      title: "Bootcamp La Fábrica – Desarrollo Fullstack",
      school: "Bootcamp La Fábrica",
      year: "2025",
      description:
        "Programa intensivo enfocado en desarrollo web fullstack con tecnologías modernas, integración de inteligencia artificial y despliegue de aplicaciones en la nube.",
      icon: "🚀",
    },
    {
      title: "AWS Cloud Practitioner Essentials (Español LATAM)",
      school: "Amazon Web Services (AWS)",
      year: "dic. 2025",
      description:
        "Certificación introductoria a los fundamentos de Cloud Computing en AWS, cubriendo conceptos clave de infraestructura en la nube, servicios principales y buenas prácticas de arquitectura cloud.",
      icon: "☁️",
    },
    {
      title: "Getting Started with DevOps on AWS (Español LATAM)",
      school: "Amazon Web Services (AWS)",
      year: "mar. 2026",
      description:
        "Curso enfocado en prácticas DevOps en AWS, incluyendo integración continua (CI), entrega continua (CD), automatización de despliegues y uso de herramientas cloud para desarrollo moderno.",
      icon: "⚙️",
    },
    {
      title: "Microcredencial en Servicios AWS (Vista Previa)",
      school: "Amazon Web Services (AWS)",
      year: "mar. 2026 - mar. 2027",
      description:
        "Microcredencial enfocada en el uso práctico de servicios AWS para despliegue, administración y escalabilidad de aplicaciones cloud. ID de credencial: AWS05608692.",
      icon: "🟧",
    },
    {
      title: "Claude Code in Action",
      school: "Anthropic",
      year: "mar. 2026",
      description:
        "Certificación enfocada en el uso de herramientas de inteligencia artificial para desarrollo de software asistido por IA y automatización de flujos de trabajo de programación. ID de credencial: fwi2gxgzi4rp.",
      icon: "🤖",
    },
  ]

  const achievements = [
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      text: "Experiencia en despliegue de aplicaciones en AWS utilizando servicios como EC2, S3 y RDS, aplicando prácticas de CI/CD y automatización.",
    },
    {
      icon: "💻",
      title: "Desarrollo Fullstack",
      text: "Construcción de aplicaciones web completas integrando frontend y backend con arquitecturas modernas y buenas prácticas de desarrollo.",
    },
    {
      icon: "🤖",
      title: "Integración de IA",
      text: "Implementación de funcionalidades basadas en inteligencia artificial en aplicaciones web, incluyendo asistentes inteligentes y generación de contenido.",
    },
  ]

  return (
    <section
      id="education"
      className="relative min-h-screen px-6 py-28 bg-secondary overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Educación y <span className="text-primary">Certificados</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Formación académica y programas de especialización que han fortalecido
            mis conocimientos en tecnología, desarrollo de software y trabajo en equipo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central del timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

          <div className="space-y-16">
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative flex items-start gap-8 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Nodo */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-3xl text-white shadow-xl ring-4 ring-background">
                  {edu.icon}
                </div>

                {/* Tarjeta */}
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.year}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Logros Académicos
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="group text-center bg-card p-8 rounded-2xl shadow-md border border-border relative overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                {/* Efecto decorativo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-40" />

                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-3xl text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform">
                    {ach.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{ach.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animaciones custom */}
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
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}
