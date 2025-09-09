"use client"

import { useState } from "react"
import Logo from "@/components/ui/Logo"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: "Sobre mí", target: "about" },
        { label: "Educación", target: "education" },
        { label: "Experiencia", target: "experience" },
        { label: "Habilidades", target: "skills" },
        { label: "Proyectos", target: "projects" },
        { label: "Contacto", target: "contact" },
    ]

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-card/80 backdrop-blur-md shadow-lg z-50 transition-all border-b border-border">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <a
                    href="#"
                    onClick={() => scrollToSection("hero")}
                    className="hover:scale-105 transition-all"
                >
                    <Logo size="md" showText={true} />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium text-foreground">
                    {menuItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => scrollToSection(item.target)}
                            className="cursor-pointer hover:text-primary transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none text-foreground hover:text-primary transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Abrir menú</span>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-card border-t border-border shadow-lg flex flex-col px-6 py-4 space-y-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => {
                                scrollToSection(item.target)
                                setIsOpen(false)
                            }}
                            className="cursor-pointer text-foreground hover:text-primary transition text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}
