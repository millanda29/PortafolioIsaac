export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
        >
            <div className="max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Sobre <span className="text-indigo-600">mí</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Soy un <span className="font-medium text-indigo-600">Desarrollador Fullstack</span>
                    apasionado por crear aplicaciones web modernas, escalables y fáciles de usar.
                    Me encanta aprender nuevas tecnologías y compartir conocimiento con la comunidad.
                </p>

                {/* Stack tecnológico */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">Next.js</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">React</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">Node.js</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">Express</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">TailwindCSS</span>
                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">MongoDB</span>
                </div>
            </div>
        </section>
    )
}
