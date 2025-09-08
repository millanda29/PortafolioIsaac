import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}
