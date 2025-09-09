"use client"

import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-28 bg-background overflow-hidden"
    >
      {/* Fondo decorativo dinámico */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Conoce <span className="text-primary">mi historia</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Un recorrido por mi perfil profesional, mis aprendizajes y mi visión
            en el desarrollo de software.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Columna izquierda → Foto */}
          <div className="relative group">
            <div className="p-[4px] bg-gradient-to-tr from-primary to-accent rounded-3xl shadow-xl">
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/about.png"
                  alt="Isaac trabajando en desarrollo"
                  width={500}
                  height={600}
                  className="w-full h-[28rem] object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl shadow-lg animate-spin-slow">
              🚀
            </div>
          </div>

          {/* Columna central → Información personal */}
          <div className="col-span-2 flex flex-col gap-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card de info */}
              <div className="bg-card p-8 rounded-2xl shadow-md border border-border relative overflow-hidden hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Información Personal
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li>
                    <span className="font-medium text-muted-foreground">
                      <b>Nombre:</b>
                    </span>{" "}
                    Maikol Isaac Llanda Huatatoca
                  </li>
                  <li>
                    <span className="font-medium text-muted-foreground">
                      <b>Ubicación:</b>
                    </span>{" "}
                    Quito, Pichincha, Ecuador
                  </li>
                  <li>
                    <span className="font-medium text-muted-foreground">
                      <b>Celular:</b>
                    </span>{" "}
                    (+593) 978624884
                  </li>
                  <li>
                    <span className="font-medium text-muted-foreground">
                      <b>Correo:</b>
                    </span>{" "}
                    maikdra@outlook.com
                  </li>
                  <li>
                    <span className="font-medium text-muted-foreground">
                      <b>Estudios:</b>
                    </span>{" "}
                    Ing. en Sistemas de Información (10mo semestre)
                  </li>
                </ul>
              </div>

              {/* Card de historia */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all duration-500 backdrop-blur">
                <h3 className="text-xl font-bold text-primary mb-4">
                  <b>Mi Historia</b>
                </h3>
                <p className="text-foreground leading-relaxed">
                  Soy estudiante de Ingeniería en Sistemas de Información con
                  pasión por construir soluciones digitales modernas.  
                  Me especializo en aplicaciones web, móviles y distribuidas con
                  tecnologías de última generación.  
                  <br />
                  <br />
                  Mi enfoque está en el aprendizaje constante, las buenas
                  prácticas y el impacto positivo en equipos y organizaciones.
                </p>
              </div>
            </div>

            {/* Stats destacadas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10", label: "Semestre" },
                //{ value: "3+", label: "Años Experiencia" },
                { value: "15+", label: "Proyectos" },
                { value: "∞", label: "Aprendizaje" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card p-8 rounded-2xl text-center shadow-md border border-border relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-40" />
                  <div className="relative">
                    <div className="text-5xl font-extrabold text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
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
