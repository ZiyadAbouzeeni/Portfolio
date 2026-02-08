import "./App.css";

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
                        className="button primary"
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
                <h2 className="projects-title">Projects</h2>

                <p style={{color:'white', fontSize:'2rem', marginBottom:'2rem'}}>
                This is my only project for now-more to come soon.
                </p>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white', textDecoration: 'none' }}
                                >
                                {project.title}
                            </a>
                        </h3>
                        <p>{project.description}</p>

                        <ul>
                            {project.tech.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills">
                    <div className="skills-section">
                        <ul>
                        <h3>Language</h3>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        </ul>
                    </div>

                    <div className="skills-section">
                        <h3>Tools</h3>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Vite</li>
                                <li>Git & GitHub</li>
                            </ul>
                    </div>
                </div>
            </section>

            <section id="experience">
                <h2 className="section-title">Experience & Education</h2>

                <div className="experiences">
                    <div className="experiences-section">
                        <h3>University of Windsor</h3>
                        <p className="experiences-description">
                            Bachelor of Computing Science with Honours Applied Computing
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <h2 className="section-title">Contact</h2>
                <p style={{ color: 'white', fontSize:'2rem', marginBottom:'2rem'}}>
                    Contact me!
                </p>

                <ul className="contacts">

                    <li>
                        <a href="malito:ziyad_azeeni@hotmail.com">
                            ziyad_azeeni@hotmail.com
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ZiyadAbouzeeni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        GitHub
                    </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/ziyadabouzeeni/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;