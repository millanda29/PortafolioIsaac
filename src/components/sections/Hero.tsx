"use client"

import BrandLogo from "@/components/ui/BrandLogo"
import { FaArrowDown } from "react-icons/fa"

export default function Hero() {
  const roles = [
    "Fullstack Developer",
    "Systems Engineer", 
    "Cloud Enthusiast"
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden"
    >
      {/* Fondos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-secondary/20 rounded-full blur-[80px] animate-float" />
        
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative flex flex-col items-center gap-6 max-w-5xl mx-auto z-10 pb-28">
        {/* Logo con efecto glow */}
        <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
          <BrandLogo size="xl" useImage={true} />
        </div>

        {/* Saludo principal */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
          Hola, soy{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Isaac Llanda
            </span>
          </span>
        </h1>

        {/* Roles con separadores */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-muted-foreground animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
          {roles.map((role, i) => (
            <span key={i} className="flex items-center gap-2 md:gap-4">
              <span className="text-sm md:text-base font-medium">{role}</span>
              {i < roles.length - 1 && (
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
              )}
            </span>
          ))}
        </div>

        {/* Descripción */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
          Egresado de Ingeniería en Sistemas de Información. Transformo ideas en 
          <span className="text-foreground font-medium"> aplicaciones web modernas</span>, 
          combinando código limpio, diseño intuitivo y tecnologías cloud.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Ver proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Indicador de scroll - fuera del contenedor principal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fadeInUp opacity-0 z-10" style={{ animationDelay: '0.6s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-scrollDown" />
          </div>
          <FaArrowDown className="animate-bounce mt-1" size={14} />
        </a>
      </div>

      {/* Animaciones CSS */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(0.95); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scrollDown {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(6px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        .animate-scrollDown {
          animation: scrollDown 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
