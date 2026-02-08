import "./App.css";

function App() {
    const name = "Ziyad Abouzeeni";
    const title = "Computer Science - Applied Computing Student";
    const tagline = "Aspiring software developer interested in web development, systems, and problem solving.";

    return (
        <div className="app">
            <nav className="nav">
                <div className="logo">{name}</div>
                <div className="links">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section id="hero" className="hero">
                <p className="hero-eyebrow">Hi, I&apos;m</p>
                <h1 className="hero-title">{name}</h1>
                <h2 className="hero-subtitle">{title}</h2>
                <p className="hero-text">{tagline}</p>

                <div className="hero-buttons">
                    <a
                        href="/Ziyad_Abouzeeni_Resume.pdf"
                        className="button is-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                       >
                        Download Resume
                    </a>
                    <a href="#contact" className="button ghost">
                        Contact Me
                    </a>
                </div>
            </section>

            <section id="projects">
                <h2 className="section-title">Projects</h2>
                <p>Coming soon...</p>
            </section>

            <section id="skills">
                <h2 className="section-title">Skills</h2>
                <p>Coming soon...</p>
            </section>

            <section id="experience">
                <h2 className="section-title">Experience & Education</h2>
                <p>Coming soon...</p>
            </section>

            <section id="contact">
                <h2 className="section-title">Contact</h2>
                <p>Coming soon...</p>
            </section>
        </div>
    );
}

const projects = [
    {
        title: "Personal Portfolio",
        description:
            "My first ever solo coding journey. My portfolio assigned" +
            "to show off my creative and diverse skills. This is where" +
            "I will continue to update and show my future projects.",
        tech: ["React", "Javascript", "Vite", "CSS"],
        link: "https://github.com/ZiyadAbouzeeni",
    },
]


export default App;