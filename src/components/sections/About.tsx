"use client"

import Image from "next/image"

export default function About() {
  const stats = [
    { value: "🎓", label: "Ing. Sistemas de Información" },
    { value: "15+", label: "Proyectos Desarrollados" },
    { value: "5+", label: "Tecnologías Principales" },
    { value: "∞", label: "Aprendizaje Continuo" },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-28 bg-background overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Sobre <span className="text-primary">mí</span>
          </h2>

          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Desarrollador en formación apasionado por crear soluciones digitales
            modernas combinando desarrollo web, cloud computing e inteligencia
            artificial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Foto */}
          <div className="relative group">
            <div className="p-[4px] bg-gradient-to-tr from-primary to-accent rounded-3xl shadow-xl">
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/about.webp"
                  alt="Isaac desarrollando software"
                  width={500}
                  height={600}
                  className="w-full h-[28rem] object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl shadow-lg animate-spin-slow">
              🚀
            </div>
          </div>

          {/* Info */}
          <div className="col-span-2 flex flex-col gap-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Información */}
              <div className="bg-card p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Información
                </h3>

                <ul className="space-y-3 text-foreground">
                  <li>
                    <b className="text-muted-foreground">Nombre:</b>{" "}
                    Maikol Isaac Llanda Huatatoca
                  </li>

                  <li>
                    <b className="text-muted-foreground">Ubicación:</b>{" "}
                    Quito, Ecuador
                  </li>

                  <li>
                    <b className="text-muted-foreground">Correo:</b>{" "}
                    maikdra@outlook.com
                  </li>

                  <li>
                    <b className="text-muted-foreground">Formación:</b>{" "}
                    Egresado de Ingeniería en Sistemas de Información
                  </li>

                  <li>
                    <b className="text-muted-foreground">Especialización:</b>{" "}
                    Desarrollo Web Fullstack & Cloud
                  </li>
                </ul>
              </div>

              {/* Historia */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all duration-500 backdrop-blur">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Mi Perfil Profesional
                </h3>

                <p className="text-foreground leading-relaxed">
                  Soy egresado de Ingeniería en Sistemas de Información con enfoque en
                  desarrollo de software, cloud computing y aplicaciones web modernas.
                  <br /><br />
                  Me especializo en el desarrollo de soluciones fullstack utilizando
                  tecnologías actuales y buenas prácticas de ingeniería. Me motiva
                  aprender constantemente y crear soluciones tecnológicas que generen
                  impacto real en organizaciones y usuarios.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-card p-6 md:p-8 rounded-2xl text-center shadow-md border border-border hover:scale-105 hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-2xl md:text-4xl font-extrabold text-primary break-words">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}