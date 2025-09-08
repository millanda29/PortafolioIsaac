export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-indigo-50 to-white"
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                Hola, soy <span className="text-indigo-600">Isaac</span> 👋
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Desarrollador Fullstack enfocado en crear aplicaciones web modernas y experiencias digitales atractivas.
            </p>
            <div className="mt-8 flex space-x-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Ver proyectos
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                    Contacto
                </a>
            </div>
        </section>
    )
}
