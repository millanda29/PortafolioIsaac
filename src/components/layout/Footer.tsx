export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Isaac.dev. Todos los derechos reservados.
                </p>
                <a
                    href="https://github.com/millanda29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 text-sm hover:text-white transition"
                >
                    Construido con pasión usando Next.js & TailwindCSS
                </a>
            </div>
        </footer>
    )
}
