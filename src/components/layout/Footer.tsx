"use client"

import Logo from "@/components/ui/Logo"

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border text-muted-foreground py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo y copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Logo size="sm" showText={false} />
                        <p className="text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Isaac.dev. Todos los derechos reservados.
                        </p>
                    </div>
                    
                    {/* Enlace de GitHub */}
                    <a
                        href="https://github.com/millanda29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition-colors"
                    >
                        Construido con pasión usando Next.js & TailwindCSS
                    </a>
                </div>
            </div>
        </footer>
    )
}
