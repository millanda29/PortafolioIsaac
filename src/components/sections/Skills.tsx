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

  const technicalSkills = [ { category: "Frontend", languages: ["HTML5", "CSS3 (Flexbox, Grid)", "JavaScript", "TypeScript"], frameworks: ["ReactJs (Hooks, Context API, Router)", "NextJS", "Vuejs", "Tailwind CSS", "Bootstrap", "Vite", "SPAs", "Diseño responsive"] }, { category: "Backend", languages: ["Java", "PHP", "C#", "Python", "JavaScript"], frameworks: ["Spring Boot", "Spring Security", "JPA/Hibernate", "Express", "FastAPI", "APIs RESTful", "Arquitectura MVC", "Microservicios", "Principios SOLID"] }, { category: "Bases de Datos", skills: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "Modelado", "Consultas optimizadas", "Procedimientos almacenados"] }, { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, ALB, Auto Scaling)", "Git/GitHub", "GitHub Actions (CI/CD)", "Docker", "SonarQube"] }, { category: "Infraestructura & Sistemas", skills: ["Windows", "Linux", "Scripting (Bash, PowerShell)", "Entornos de desarrollo y testing", "Mantenimiento de equipos"] }, { category: "Calidad & Auditoría", skills: ["Pruebas unitarias (JUnit)", "Postman", "SonarQube", "COBIT", "ISO 27001/20000", "ITIL", "Metodologías ágiles (Scrum/Kanban)"] }, { category: "Procesos de Negocio (BPM)", skills: ["BPMN 2.0", "Camunda", "Optimización de procesos", "Mejora continua"] }, { category: "Redes & Seguridad", skills: ["LAN/Wi-Fi", "Direccionamiento IP", "Switches/routers", "Wireshark", "SSH", "VPN", "Nociones de firewalls"] }, { category: "IA & NLP", skills: ["Modelos supervisados", "Visión por computadora (YOLO)", "Análisis de texto con Hugging Face"] }, { category: "Desarrollo Móvil & Apps Interactivas", skills: ["React Native", "Flutter", "Streamlit para prototipos y aplicaciones de datos"] } ]

  return (
    <section id="skills" className="relative min-h-screen px-6 py-28 bg-secondary overflow-hidden">

      {/* Header */}
      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Combinación de habilidades blandas y técnicas que potencian mi desempeño en proyectos complejos.
          </p>
        </div>

        {/* GRID PRINCIPAL 2 COLUMNAS */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ======================= */}
          {/* HABILIDADES BLANDAS */}
          {/* ======================= */}

          <div>
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl mr-4 shadow-lg">
                🤝
              </div>
              <h3 className="text-2xl font-semibold">
                Habilidades <span className="text-primary">Blandas</span>
              </h3>
            </div>

            <div className="space-y-5">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-5 rounded-xl shadow-lg border border-border hover:shadow-xl transition"
                >
                  <div className="flex gap-4">
                    <div className="w-9 h-9 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>

                    <p className="text-sm text-foreground leading-relaxed">
                      {skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================= */}
          {/* HABILIDADES TECNICAS */}
          {/* ======================= */}

          <div>
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mr-4 shadow-lg">
                💻
              </div>
              <h3 className="text-2xl font-semibold">
                Habilidades <span className="text-primary">Técnicas</span>
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {technicalSkills.map((category, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition"
                >

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      {getCategoryIcon(category.category)}
                    </div>

                    <h4 className="font-semibold text-primary">
                      {category.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.languages?.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-accent rounded-full">
                        {item}
                      </span>
                    ))}

                    {category.frameworks?.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-accent rounded-full">
                        {item}
                      </span>
                    ))}

                    {category.skills?.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-accent rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )

  function getCategoryIcon(category: string) {
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