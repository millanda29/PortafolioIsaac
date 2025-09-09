"use client"

import BrandLogo from "@/components/ui/BrandLogo"
import { FaArrowDown } from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-gradient-to-br from-background via-secondary to-accent overflow-hidden"
    >
      {/* Fondos decorativos animados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center gap-8 max-w-6xl mx-auto z-10">
        {/* Logo */}
        <div className="animate-fadeInUp delay-100">
          <BrandLogo size="lg" showTagline={true} useImage={true} />
        </div>

        {/* Saludo */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp delay-200">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Isaac
          </span>{" "}
          👋
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-fadeInUp delay-300">
          Estudiante de Ingeniería en Sistemas de Información y desarrollador Fullstack. 
          Creo aplicaciones web modernas y experiencias digitales atractivas, aplicando 
          buenas prácticas y tecnologías actuales.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 animate-fadeInUp delay-400">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Contacto
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-16 animate-bounce text-primary">
          <FaArrowDown size={28} />
        </div>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .animate-fadeInUp.delay-100 { animation-delay: 0.1s; }
        .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
        .animate-fadeInUp.delay-300 { animation-delay: 0.3s; }
        .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  )
}
