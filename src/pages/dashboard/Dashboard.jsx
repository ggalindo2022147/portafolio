import { Contact } from "../../components/contact"
import { Footer } from "../../components/footer/Footer"
import { Navbar } from "../../components/navbar/Navbar"
import { Projects } from "../../components/projects/Projects"
import { Skills } from "../../components/skills"
import { SobreMi } from "../../components/sobreMi"

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <section id="sobre-mi">
                <SobreMi />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}
