"use client"

export default function About() {
    return (
        <section id="about" className="min-h-screen px-6 py-20 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                    Sobre <span className="text-primary">mí</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Imagen */}
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="w-full max-w-md mx-auto">
                                <div className="bg-gradient-primary p-1 rounded-2xl">
                                    <div className="bg-card rounded-2xl p-8 shadow-2xl">
                                        <img
                                            src="/test.jpg"
                                            alt="Isaac trabajando en desarrollo"
                                            className="w-full h-64 object-cover rounded-xl"
                                            onError={(e) => {
                                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%23475569' text-anchor='middle' dy='.3em'%3EDesarrollo Web%3C/text%3E%3C/svg%3E"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                                🚀
                            </div>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="order-1 md:order-2 space-y-8">
                        {/* Información personal */}
                        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                            <h3 className="text-xl font-semibold text-primary mb-4">Información Personal</h3>
                            <div className="text-foreground space-y-3">
                                <p><span className="font-semibold text-primary">Nombre:</span> Maikol Isaac Llanda</p>
                                <p><span className="font-semibold text-primary">Ubicación:</span> Huatatoca, Quito, Pichincha, Ecuador</p>
                                <p><span className="font-semibold text-primary">Celular:</span> (+593) 978624884</p>
                                <p><span className="font-semibold text-primary">Correo:</span> maikdra@outlook.com</p>
                                <p><span className="font-semibold text-primary">Estudios:</span> Ingeniería en Sistemas de Información (Décimo semestre - Actual)</p>
                            </div>
                        </div>

                        {/* Resumen profesional */}
                        <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-semibold text-primary mb-4">Mi Historia</h3>
                            <p className="text-foreground leading-relaxed">
                                Estudiante de Ingeniería en Sistemas de Información con sólidos conocimientos en desarrollo de software, infraestructura tecnológica y gestión de proyectos. Me especializo en aplicaciones web, móviles y distribuidas con tecnologías modernas. Comprometido con las buenas prácticas, la mejora continua y el aprendizaje permanente, busco aportar valor en entornos colaborativos, técnicos y organizacionales.
                            </p>
                        </div>

                        {/* Estadísticas */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card p-4 rounded-lg text-center border border-border">
                                <div className="text-2xl font-bold text-primary">10</div>
                                <div className="text-sm text-muted-foreground">Semestre</div>
                            </div>
                            <div className="bg-card p-4 rounded-lg text-center border border-border">
                                <div className="text-2xl font-bold text-primary">3+</div>
                                <div className="text-sm text-muted-foreground">Años Experiencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}