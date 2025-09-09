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
            skills: ["ReactJs (Hooks, Context API, Router)", "NextJS", "Vuejs", "SPAs", "UX/UI", "HTML5", "CSS3 (Flexbox, Grid)", "Tailwind CSS", "Bootstrap", "Vite", "Diseño responsive"]
        },
        {
            category: "Backend",
            skills: ["Java (Spring Boot, Spring Security, JPA/Hibernate)", "PHP", "C#", "Python", "Express", "FastAPI", "APIs RESTful", "Arquitectura MVC", "Microservicios", "Principios SOLID"]
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
        <section id="skills" className="min-h-screen px-6 py-20 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Mis <span className="text-primary">Habilidades</span>
                </h2>

                {/* Habilidades Blandas */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl mr-4">
                            🤝
                        </div>
                        <h3 className="text-3xl font-semibold text-foreground">
                            Habilidades <span className="text-primary">Blandas</span>
                        </h3>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
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
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mr-4">
                            💻
                        </div>
                        <h3 className="text-3xl font-semibold text-foreground">
                            Habilidades <span className="text-primary">Técnicas</span>
                        </h3>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {technicalSkills.map((category, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg font-bold">
                                        {getCategoryIcon(category.category)}
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary">
                                        {category.category}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
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
                <div className="mt-16 bg-card p-8 rounded-lg shadow-lg border border-border">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Nivel de Experiencia</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                🚀
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Avanzado</h4>
                            <p className="text-muted-foreground">React, JavaScript, Node.js, MongoDB</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                ⚡
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Intermedio</h4>
                            <p className="text-muted-foreground">Java, Python, AWS, Docker</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                📚
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Aprendiendo</h4>
                            <p className="text-muted-foreground">Machine Learning, Blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    function getCategoryIcon(category: string): string {
        const icons: { [key: string]: string } = {
            "Frontend": "🎨",
            "Backend": "⚙️",
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
