"use client"

import BrandLogo from "@/components/ui/BrandLogo"

export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-background via-secondary to-accent"
        >
            <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto text-center">
                {/* Logo de marca */}
                <BrandLogo size="lg" showTagline={true} useImage={true} />
                
                {/* Saludo */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
                    Hola, soy <span className="text-primary">Isaac</span> 👋
                </h1>
                
                {/* Descripción */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                    Estudiante de Ingeniería en Sistemas de Información y desarrollador Fullstack. Creo aplicaciones web modernas y experiencias digitales atractivas, aplicando buenas prácticas y tecnologías actuales.
                </p>
                
                {/* Botones de acción */}
                <div className="flex flex-col md:flex-row gap-4">
                    <button
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Ver proyectos
                    </button>
                    <button
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        Contacto
                    </button>
                </div>

            </div>
        </section>
    )
}
