import "./App.css";

const projects = [
    {
        title: "Personal Portfolio",
        description: "My first ever solo coding journey. My portfolio designed to show off my creative and diverse skills. This is where I will continue to update and show my future projects.",
        tech: ["React", "JavaScript", "Vite", "CSS"],
        link: "https://github.com/ZiyadAbouzeeni",
        github: "https://github.com/ZiyadAbouzeeni"
    },
];

function App() {
    const name = "Ziyad Abouzeeni";
    const title = "Computer Science - Applied Computing Student";
    const tagline = "A software developer interested in web development!";

    return (
        <div className="app">
            {/* Navigation */}
            <nav className="nav" aria-label="Main navigation">
                <div className="logo" aria-label="Ziyad Abouzeeni portfolio">{name}</div>
                <div className="links">
                    <a href="#projects" aria-label="View projects">Projects</a>
                    <a href="#skills" aria-label="View skills">Skills</a>
                    <a href="#experience" aria-label="View experience">Experience</a>
                    <a href="#contact" aria-label="Contact me">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content">
                    <div className="hero-text-container">
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
                    </div>

                    <div className="hero-photo">
                        <img
                            src="/profilepic.png"
                            alt="Ziyad Abouzeeni"
                            className="profile-photo"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section" aria-labelledby="projects-heading">
                <h2 id="projects-heading" className="section-title">Projects</h2>
                <p className="section-subtitle">
                    This is my first project—more to come soon!
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article key={index} className="project-card" aria-labelledby={`project-${index}-title`}>
                            <h3 id={`project-${index}-title`}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label={`View ${project.title} project (opens in new tab)`}
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                <h4 className="tech-label">Technologies:</h4>
                                <ul className="tech-list" aria-label="Technologies used">
                                    {project.tech.map((item, i) => (
                                        <li key={i} className="tech-item">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button small"
                                    aria-label={`View ${project.title} live demo (opens in new tab)`}
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button small ghost"
                                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                                >
                                    GitHub
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="section-title">Skills</h2>

                <div className="skills-container">
                    <div className="skills-category">
                        <h3 className="skills-category-title">Languages</h3>
                        <ul className="skills-list" aria-label="Programming languages">
                            <li className="skill-item">C/C++</li>
                            <li className="skill-item">Python</li>
                            <li className="skill-item">Java</li>
                            <li className="skill-item">JavaScript</li>
                            <li className="skill-item">HTML/CSS</li>
                        </ul>
                    </div>

                    <div className="skills-category">
                        <h3 className="skills-category-title">Tools & Frameworks</h3>
                        <ul className="skills-list" aria-label="Tools and frameworks">
                            <li className="skill-item">React</li>
                            <li className="skill-item">Redux</li>
                            <li className="skill-item">Vite</li>
                            <li className="skill-item">Git & GitHub</li>
                            <li className="skill-item">Node.js</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section" aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="section-title">Experience & Education</h2>

                <div className="experience-grid">
                    <article className="experience-card">
                        <div className="experience-header">
                            <div className="experience-title-container">
                                <h3 className="experience-title">University of Windsor</h3>
                                <p className="experience-period">2023 - Present</p>
                            </div>
                            <img
                                src="/uwindsorpicc.png"
                                alt="University of Windsor Logo"
                                className="experience-logo"
                            />
                        </div>
                        <p className="experience-description">
                            Bachelor of Computing Science with Honours Applied Computing
                        </p>
                        <ul className="experience-details">
                            <li>Specializing in software development</li>
                            <li>Expected graduation: 2027</li>
                        </ul>
                    </article>

                    <article className="experience-card">
                        <div className="experience-header">
                            <div className="experience-title-container">
                                <h3 className="experience-title">Udemy</h3>
                                <p className="experience-period">2025 (Asynchronous)</p>
                            </div>
                            <img
                                src="/udemy1.webp"
                                alt="Udemy Logo"
                                className="experience-logo"
                            />
                        </div>
                        <p className="experience-description">
                            Full-Stack Web Developer Certification 2025
                        </p>
                        <ul className="experience-details">
                            <li>Completed comprehensive web development course</li>
                            <li>Mastered modern full-stack technologies</li>
                        </ul>
                    </article>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="section-title">Get In Touch With Me!</h2>
                <p className="contact-subtitle">
                    I&apos;m currently looking for internship opportunities and would love to connect!
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <p className="contact-text">
                            Feel free to reach out if you&apos;re looking for a developer, have a question,
                            or just want to connect.
                        </p>
                    </div>

                    <ul className="contact-links" aria-label="Contact links">
                        <li className="contact-item">
                            <a
                                href="mailto:ziyad_azeeni@hotmail.com"
                                className="contact-link email"
                                aria-label="Send email to Ziyad"
                            >
                                <span className="contact-icon">📧</span>
                                <span>Email</span>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://github.com/ZiyadAbouzeeni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link github"
                                aria-label="Visit GitHub profile (opens in new tab)"
                            >
                                <span className="contact-icon">💻</span>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://www.linkedin.com/in/ziyadabouzeeni/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link linkedin"
                                aria-label="Visit LinkedIn profile (opens in new tab)"
                            >
                                <span className="contact-icon">💼</span>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Ziyad Abouzeeni. Built with React.
                </p>
                <p className="footer-note">
                    This portfolio is continuously updated with new projects.
                </p>
            </footer>
        </div>
    );
}

export default App;