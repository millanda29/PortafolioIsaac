"use client"

export default function Education() {
    const education = [
        {
            title: "Bachiller en Ciencias (B.G.U)",
            school: 'U.E.F "María Inmaculada"',
            year: "2019",
        },
        {
            title: "Ingeniería en Sistemas de Información",
            school: "Universidad Central del Ecuador",
            year: "Décimo semestre - Actual",
        },
    ]

    return (
        <section id="education" className="min-h-screen px-6 py-20 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Formación <span className="text-primary">Académica</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, i) => (
                        <div key={i} className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-start gap-6">
                                {/* Imagen de la institución */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        {i === 0 ? "🎓" : "🏛️"}
                                    </div>
                                </div>
                                
                                {/* Contenido */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-foreground mb-2">{edu.title}</h3>
                                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                                    <p className="text-muted-foreground mb-4">{edu.year}</p>
                                    
                                    {/* Descripción adicional */}
                                    {i === 0 && (
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Bachillerato en Ciencias con enfoque en matemáticas y ciencias naturales, 
                                            base sólida para mi formación en ingeniería.
                                        </p>
                                    )}
                                    {i === 1 && (
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Carrera en progreso con especialización en desarrollo de software, 
                                            bases de datos y arquitectura de sistemas.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Logros académicos */}
                <div className="mt-12 bg-card p-8 rounded-lg shadow-lg border border-border">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Logros Académicos</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                📚
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Promedio Alto</h4>
                            <p className="text-sm text-muted-foreground">Mantenimiento de excelencia académica</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                🏆
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Proyectos Destacados</h4>
                            <p className="text-sm text-muted-foreground">Desarrollo de aplicaciones web completas</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">
                                🤝
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Trabajo en Equipo</h4>
                            <p className="text-sm text-muted-foreground">Colaboración en proyectos grupales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
