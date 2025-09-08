import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About";

export default function HomePage() {
    return (
        <main className="relative">
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}
