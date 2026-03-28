"use client"

import { useState } from "react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"soft" | "tech">("tech")

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
    { category: "Frontend", languages: ["HTML5", "CSS3 (Flexbox, Grid)", "JavaScript", "TypeScript"], frameworks: ["ReactJs (Hooks, Context API, Router)", "NextJS", "Vuejs", "Tailwind CSS", "Bootstrap", "Vite", "SPAs", "Diseño responsive"] },
    { category: "Backend", languages: ["Java", "PHP", "C#", "Python", "JavaScript"], frameworks: ["Spring Boot", "Spring Security", "JPA/Hibernate", "Express", "FastAPI", "APIs RESTful", "Arquitectura MVC", "Microservicios", "Principios SOLID"] },
    { category: "Bases de Datos", skills: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "Modelado", "Consultas optimizadas", "Procedimientos almacenados"] },
    { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, ALB, Auto Scaling)", "Git/GitHub", "GitHub Actions (CI/CD)", "Docker", "SonarQube"] },
    { category: "Infraestructura & Sistemas", skills: ["Windows", "Linux", "Scripting (Bash, PowerShell)", "Entornos de desarrollo y testing", "Mantenimiento de equipos"] },
    { category: "Calidad & Auditoría", skills: ["Pruebas unitarias (JUnit)", "Postman", "SonarQube", "COBIT", "ISO 27001/20000", "ITIL", "Metodologías ágiles (Scrum/Kanban)"] },
    { category: "Procesos de Negocio (BPM)", skills: ["BPMN 2.0", "Camunda", "Optimización de procesos", "Mejora continua"] },
    { category: "Redes & Seguridad", skills: ["LAN/Wi-Fi", "Direccionamiento IP", "Switches/routers", "Wireshark", "SSH", "VPN", "Nociones de firewalls"] },
    { category: "IA & NLP", skills: ["Modelos supervisados", "Visión por computadora (YOLO)", "Análisis de texto con Hugging Face"] },
    { category: "Desarrollo Móvil & Apps Interactivas", skills: ["React Native", "Flutter", "Streamlit para prototipos y aplicaciones de datos"] }
  ]

  const experienceLevels = [
    { level: "Avanzado", icon: "🚀", skills: "React, JavaScript, Node.js, MongoDB", color: "from-emerald-500 to-green-500" },
    { level: "Intermedio", icon: "⚡", skills: "Java, Python, AWS, Docker", color: "from-teal-500 to-cyan-500" },
    { level: "Aprendiendo", icon: "📚", skills: "Machine Learning, Blockchain", color: "from-cyan-500 to-blue-500" },
  ]

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

  return (
    <section id="skills" className="relative min-h-screen px-6 py-28 bg-secondary/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combinación de habilidades técnicas y blandas que potencian mi desempeño profesional.
          </p>
        </div>

        {/* Nivel de Experiencia */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Nivel de <span className="text-primary">Experiencia</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceLevels.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{item.level}</h4>
                <p className="text-sm text-muted-foreground">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-card rounded-2xl shadow-lg border border-border">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "tech" 
                  ? "bg-gradient-primary text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              💻 Técnicas
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "soft" 
                  ? "bg-gradient-primary text-white shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🤝 Blandas
            </button>
          </div>
        </div>

        {/* Technical Skills */}
        {activeTab === "tech" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h4 className="font-bold text-sm text-foreground">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.languages?.map((item, i) => (
                    <span
                      key={`lang-${i}`}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                  {category.frameworks?.map((item, i) => (
                    <span
                      key={`fw-${i}`}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                  {category.skills?.map((item, i) => (
                    <span
                      key={`skill-${i}`}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
            {softSkills.map((skill, index) => {
              const [title, description] = skill.split(": ")
              return (
                <div
                  key={index}
                  className="group bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}