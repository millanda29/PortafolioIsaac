"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                    Isaac.dev
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 font-medium">
                    <Link href="#about" className="hover:text-indigo-600 transition">Sobre mí</Link>
                    <Link href="#projects" className="hover:text-indigo-600 transition">Proyectos</Link>
                    <Link href="#contact" className="hover:text-indigo-600 transition">Contacto</Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Abrir menú</span>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md flex flex-col px-6 py-4 space-y-4">
                    <Link href="#about" onClick={() => setIsOpen(false)}>Sobre mí</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Contacto</Link>
                </div>
            )}
        </nav>
    )
}
