import "./App.css";

const NAME = "Ziyad Abouzeeni";
const TITLE = "Computer Science - Applied Computing Student";
const TAGLINE = "A software developer interested in web development!";

const NAV_LINKS = [
    { href: "#projects", label: "Projects", aria: "View projects" },
    { href: "#skills", label: "Skills", aria: "View skills" },
    { href: "#experience", label: "Experience", aria: "View experience" },
    { href: "#contact", label: "Contact", aria: "Contact me" },
];

const projects = [
    {
        title: "Personal Portfolio",
        description:
            "My first ever solo coding journey. My portfolio designed to show off my creative and diverse skills. This is where I will continue to update and show my future projects.",
        tech: ["React", "JavaScript", "Vite", "CSS"],
        link: "https://github.com/ZiyadAbouzeeni",
        github: "https://github.com/ZiyadAbouzeeni",
    },
];

const skills = {
    languages: [
        { name: "C/C++", logo: "/cplusplus-logo.png" },
        { name: "Python", logo: "/python-logo.png" },
        { name: "Java", logo: "/java-logo.webp" },
        { name: "JavaScript", logo: "/javascript-logo.png" },
        { name: "HTML/CSS", logo: "/hhtml-ccss-logo.webp" },
        { name: "SQL", logo: "/sql-logo.jpeg" },
    ],
    tools: [
        { name: "React", logo: "/react-logo.png" },
        { name: "Vite", logo: "/vite-logo.png" },
        { name: "Git & GitHub", logo: "/githublogo.png" },
        { name: "Node.js", logo: "/nodejs-logo.png" },
    ],
};

const contacts = [
    {
        href: "mailto:ziyad_azeeni@hotmail.com",
        className: "contact-link email",
        aria: "Send email to Ziyad",
        img: { src: "/emaillogo.jpg", alt: "Email Logo" },
    },
    {
        href: "https://github.com/ZiyadAbouzeeni",
        className: "contact-link github",
        aria: "Visit GitHub profile (opens in new tab)",
        targetBlank: true,
        img: { src: "/githublogo.png", alt: "GitHub Logo" },
    },
    {
        href: "https://www.linkedin.com/in/ziyadabouzeeni/",
        className: "contact-link linkedin",
        aria: "Visit LinkedIn profile (opens in new tab)",
        targetBlank: true,
        img: { src: "/logolinkedin.avif", alt: "LinkedIn Logo" },
    },
];

function SkillsCategory({ title, items }) {
    return (
        <div className="skills-category">
            <h3 className="skills-category-title">{title}</h3>
            <div className="skills-logos-grid">
                {items.map((skill) => (
                    <div key={skill.name} className="skill-logo-item">
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        <span className="skill-logo-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContactItem({ href, className, aria, img, targetBlank }) {
    const linkProps = targetBlank
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <li className="contact-item">
            <a href={href} className={className} aria-label={aria} {...linkProps}>
                <img src={img.src} alt={img.alt} className="contact-icon" />
            </a>
        </li>
    );
}

function App() {
    return (
        <div className="app">
            {/* Navigation */}
            <nav className="nav" aria-label="Main navigation">
                <div className="logo" aria-label="Ziyad Abouzeeni portfolio">
                    {NAME}
                </div>
                <div className="links">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} aria-label={l.aria}>
                            {l.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content">
                    <div className="hero-text-container">
                        <p className="hero-eyebrow">Hi, I&apos;m</p>
                        <h1 className="hero-title">{NAME}</h1>
                        <h2 className="hero-subtitle">{TITLE}</h2>
                        <p className="hero-text">{TAGLINE}</p>

                        <div className="hero-buttons">
                            <a
                                href="/Ziyad_Abouzeeni_Resume.pdf"
                                className="button primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Resume
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
                <h2 id="projects-heading" className="section-title">
                    Projects
                </h2>
                <p className="section-subtitle">This is my first project—more to come soon!</p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="project-card"
                            aria-labelledby={`project-${project.title}-title`}
                        >
                            <h3 id={`project-${project.title}-title`}>
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
                                    {project.tech.map((item) => (
                                        <li key={item} className="tech-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button primary"
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
                <h2 id="skills-heading" className="section-title">
                    Skills
                </h2>

                <div className="skills-container">
                    <SkillsCategory title="Languages" items={skills.languages} />
                    <SkillsCategory title="Tools & Frameworks" items={skills.tools} />
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section" aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="section-title">
                    Experience & Education
                </h2>

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
                            <img src="/udemy1.webp" alt="Udemy Logo" className="experience-logo" />
                        </div>
                        <p className="experience-description">Full-Stack Web Developer Certification 2025</p>
                        <ul className="experience-details">
                            <li>Completed comprehensive web development course</li>
                            <li>Mastered modern full-stack technologies</li>
                        </ul>
                    </article>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="section-title">
                    Get In Touch With Me!
                </h2>
                <p className="contact-subtitle">
                    I&apos;m currently looking for internship opportunities and would love to connect!
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <p className="contact-text">
                            Feel free to reach out if you&apos;re looking for a developer, have a question, or just
                            want to connect.
                        </p>
                    </div>

                    <ul className="contact-links" aria-label="Contact links">
                        {contacts.map((c) => (
                            <ContactItem key={c.className} {...c} />
                        ))}
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Ziyad Abouzeeni. Built with React.
                </p>
                <p className="footer-note">This portfolio is continuously updated with new projects.</p>
            </footer>
        </div>
    );
}

export default App;
