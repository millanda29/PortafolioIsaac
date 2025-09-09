"use client"

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-secondary"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
                    Contáctame <span className="text-primary">📩</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                    ¿Quieres colaborar en un proyecto o simplemente saludar?
                    Completa el formulario o conéctate conmigo en redes sociales.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Imagen de contacto */}
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="w-full max-w-md mx-auto">
                                <div className="bg-gradient-primary p-1 rounded-2xl">
                                    <div className="bg-card rounded-2xl p-8 shadow-2xl">
                                        <img
                                            src="/contact-image.jpg"
                                            alt="Isaac trabajando en su escritorio"
                                            className="w-full h-64 object-cover rounded-xl"
                                            onError={(e) => {
                                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%23475569' text-anchor='middle' dy='.3em'%3E¡Hablemos!%3C/text%3E%3C/svg%3E"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
                                💬
                            </div>
                        </div>
                    </div>

                    {/* Formulario y redes */}
                    <div className="order-1 md:order-2 space-y-8">
                        {/* Formulario */}
                        <form className="bg-card shadow-lg rounded-lg p-8 space-y-6 border border-border">
                            <h3 className="text-2xl font-semibold text-foreground mb-4">Envíame un mensaje</h3>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground placeholder-muted-foreground"
                            />
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground placeholder-muted-foreground"
                            />
                            <textarea
                                rows={5}
                                placeholder="Tu mensaje"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground placeholder-muted-foreground"
                            />
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Enviar mensaje
                            </button>
                        </form>

                        {/* Información de contacto */}
                        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Información de Contacto</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm">
                                        📧
                                    </div>
                                    <span className="text-foreground">maikdra@outlook.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-sm">
                                        📱
                                    </div>
                                    <span className="text-foreground">(+593) 978624884</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white text-sm">
                                        📍
                                    </div>
                                    <span className="text-foreground">Quito, Ecuador</span>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociales */}
                        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Sígueme en redes</h3>
                            <div className="flex justify-center gap-6 text-3xl text-muted-foreground">
                                <a
                                    href="https://github.com/millanda29"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-all duration-300 transform hover:scale-125"
                                    title="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/isaac-llanda-970b91311"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-all duration-300 transform hover:scale-125"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="mailto:maikdra@outlook.com"
                                    className="hover:text-primary transition-all duration-300 transform hover:scale-125"
                                    title="Email"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
