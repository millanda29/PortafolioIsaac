"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-28 bg-secondary relative overflow-hidden"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-6xl w-full z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Contáctame <span className="text-primary">📩</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            ¿Quieres colaborar en un proyecto o simplemente saludar? Conéctate conmigo en redes sociales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-primary p-1 rounded-2xl">
                <div className="bg-card rounded-2xl p-4 shadow-2xl">
                  <img
                    src="/contact-image.jpg"
                    alt="Isaac trabajando en su escritorio"
                    className="w-full h-64 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%23475569' text-anchor='middle' dy='.3em'%3E¡Hablemos!%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
                💬
              </div>
            </div>
          </div>

          {/* Tarjeta redes sociales */}
          <div className="order-1 md:order-2">
            <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border flex flex-col items-center space-y-6 animate-fadeInUp">
              <h3 className="text-2xl font-semibold text-foreground">Sígueme en redes</h3>
              <p className="text-muted-foreground text-center">
                Conecta conmigo y mantente al tanto de mis proyectos.
              </p>
              <div className="flex justify-center gap-8 text-4xl text-muted-foreground">
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
                <a
                    href="https://wa.me/593978624884?text=Hola%20Isaac,%20me%20gustar%C3%ADa%20contactarte%20para%20discutir%20una%20oportunidad%20laboral%20en%20tu%20perfil%20de%20desarrollo%20Fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-all duration-300 transform hover:scale-125"
                    title="WhatsApp"
                >
                    <FaWhatsapp />
                </a>

              </div>
            </div>
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
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}
