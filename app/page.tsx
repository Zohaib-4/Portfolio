import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="home" className="py-20">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="certifications" className="py-20">
          <Certifications />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  )
}
