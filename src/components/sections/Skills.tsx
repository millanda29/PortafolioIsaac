"use client"

export default function Skills() {
  const softSkills = [
    "Trabajo en equipo: Experiencia colaborando en proyectos con equipos multidisciplinarios.",
    "Resolución de problemas: Capacidad analítica para identificar causas raíz y proponer soluciones efectivas.",
    "Comunicación efectiva: Claridad al transmitir ideas técnicas a distintos públicos.",
    "Adaptabilidad: Flexibilidad para ajustarme a nuevos entornos, tecnologías y metodologías de trabajo.",
    "Aprendizaje continuo: Compromiso con el crecimiento profesional, explorando constantemente nuevas herramientas y tecnologías.",
    "Orientación a resultados: Enfoque en cumplir objetivos y entregar valor en cada proyecto.",
    "Gestión del tiempo: Organización eficiente de tareas y prioridades para cumplir plazos establecidos."
  ]

  const technicalSkills = [
    {
      category: "Frontend",
      languages: ["HTML5", "CSS3 (Flexbox, Grid)", "JavaScript", "TypeScript"],
      frameworks: ["ReactJs (Hooks, Context API, Router)", "NextJS", "Vuejs", "Tailwind CSS", "Bootstrap", "Vite", "SPAs", "Diseño responsive"]
    },
    {
      category: "Backend",
      languages: ["Java", "PHP", "C#", "Python", "JavaScript"],
      frameworks: ["Spring Boot", "Spring Security", "JPA/Hibernate", "Express", "FastAPI", "APIs RESTful", "Arquitectura MVC", "Microservicios", "Principios SOLID"]
    },
    {
      category: "Bases de Datos",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "Modelado", "Consultas optimizadas", "Procedimientos almacenados"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS, ALB, Auto Scaling)", "Git/GitHub", "GitHub Actions (CI/CD)", "Docker", "SonarQube"]
    },
    {
      category: "Infraestructura & Sistemas",
      skills: ["Windows", "Linux", "Scripting (Bash, PowerShell)", "Entornos de desarrollo y testing", "Mantenimiento de equipos"]
    },
    {
      category: "Calidad & Auditoría",
      skills: ["Pruebas unitarias (JUnit)", "Postman", "SonarQube", "COBIT", "ISO 27001/20000", "ITIL", "Metodologías ágiles (Scrum/Kanban)"]
    },
    {
      category: "Procesos de Negocio (BPM)",
      skills: ["BPMN 2.0", "Camunda", "Optimización de procesos", "Mejora continua"]
    },
    {
      category: "Redes & Seguridad",
      skills: ["LAN/Wi-Fi", "Direccionamiento IP", "Switches/routers", "Wireshark", "SSH", "VPN", "Nociones de firewalls"]
    },
    {
      category: "IA & NLP",
      skills: ["Modelos supervisados", "Visión por computadora (YOLO)", "Análisis de texto con Hugging Face"]
    },
    {
      category: "Desarrollo Móvil & Apps Interactivas",
      skills: ["React Native", "Flutter", "Streamlit para prototipos y aplicaciones de datos"]
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen px-6 py-28 bg-secondary overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Combinación de habilidades blandas y técnicas que potencian mi desempeño en proyectos complejos y entornos colaborativos.
          </p>
        </div>

        {/* Habilidades Blandas */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-3xl mr-4 shadow-lg animate-pulse">
              🤝
            </div>
            <h3 className="text-3xl font-semibold text-foreground">
              Habilidades <span className="text-primary">Blandas</span>
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-xl border border-border hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-3xl mr-4 shadow-lg animate-pulse">
              💻
            </div>
            <h3 className="text-3xl font-semibold text-foreground">
              Habilidades <span className="text-primary">Técnicas</span>
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-xl border border-border hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl shadow-md">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h4 className="text-lg font-semibold text-primary">{category.category}</h4>
                </div>

                {/* Mostrar Frameworks y Lenguajes si existen */}
                <div className="flex flex-wrap gap-2">
                  {category.languages?.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer hover:scale-105"
                      title={lang}
                    >
                      {lang}
                    </span>
                  ))}
                  {category.frameworks?.map((fw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-accent/80 text-accent-foreground rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer hover:scale-105"
                      title={fw}
                    >
                      {fw}
                    </span>
                  ))}
                  {category.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer hover:scale-105"
                      title={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nivel de experiencia */}
        <div className="mt-24 bg-card p-10 rounded-2xl shadow-2xl border border-border">
          <h3 className="text-3xl font-semibold text-foreground mb-12 text-center">
            Nivel de <span className="text-primary">Experiencia</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { level: "Avanzado", icon: "🚀", desc: "React, JavaScript, Node.js, MongoDB", color: "bg-gradient-primary" },
              { level: "Intermedio", icon: "⚡", desc: "Java, Python, AWS, Docker", color: "bg-gradient-secondary" },
              { level: "Aprendiendo", icon: "📚", desc: "Machine Learning, Blockchain", color: "bg-gradient-accent" },
            ].map((exp, i) => (
              <div key={i} className="text-center animate-fadeInUp" style={{ animationDelay: `${i * 0.15}s` }}>
                <div
                  className={`${exp.color} w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 shadow-2xl hover:scale-105 transition-transform`}
                >
                  {exp.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{exp.level}</h4>
                <p className="text-muted-foreground">{exp.desc}</p>
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

  function getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      Frontend: "🎨",
      Backend: "⚙️",
      "Bases de Datos": "🗄️",
      "Cloud & DevOps": "☁️",
      "Infraestructura & Sistemas": "🖥️",
      "Calidad & Auditoría": "🔍",
      "Procesos de Negocio (BPM)": "📋",
      "Redes & Seguridad": "🔒",
      "IA & NLP": "🤖",
      "Desarrollo Móvil & Apps Interactivas": "📱"
    }
    return icons[category] || "💡"
  }
}
