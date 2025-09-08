import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
        >
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Contáctame <span className="text-indigo-600">📩</span>
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    ¿Quieres colaborar en un proyecto o simplemente saludar?
                    Completa el formulario o conéctate conmigo en redes.
                </p>

                {/* Formulario */}
                <form className="bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Tu email"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        rows={5}
                        placeholder="Tu mensaje"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        Enviar mensaje
                    </button>
                </form>

                {/* Redes sociales */}
                <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-600">
                    <a
                        href="https://github.com/millanda29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/isaac-llanda-970b91311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:maikdra@outlook.com"
                        className="hover:text-indigo-600 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    )
}
