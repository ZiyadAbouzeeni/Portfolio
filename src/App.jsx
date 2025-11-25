import "./App.css";

function App() {
    const name = "Your Name";
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
                    <button className="button primary">Download Resume</button>
                    <a href="#contact" className="button ghost">
                        Contact Me
                    </a>
                </div>
            </section>

            {/* We’ll fill these in next */}
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

export default App;