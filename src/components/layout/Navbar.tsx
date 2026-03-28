"use client"

import { useState, useEffect } from "react"
import Logo from "@/components/ui/Logo"
import { HiMenuAlt3, HiX } from "react-icons/hi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled 
                ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" 
                : "bg-transparent"
        }`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <a
                    href="#"
                    onClick={() => scrollToSection("hero")}
                    className="hover:scale-105 transition-transform duration-300"
                >
                    <Logo size="md" showText={true} />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => scrollToSection(item.target)}
                            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5 group"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
                        </button>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded-xl text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
                <div className="bg-card/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-1">
                    {menuItems.map((item, index) => (
                        <button
                            key={item.target}
                            onClick={() => {
                                scrollToSection(item.target)
                                setIsOpen(false)
                            }}
                            className="block w-full text-left px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
