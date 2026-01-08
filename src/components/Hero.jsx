const Hero = () => {
    return (
        <header id="home" className="hero">
            <div className="hero-content">
                <h1 className="animate-text">QA Automation <br /> <span className="gradient-text">Engineer</span></h1>
                <p className="animate-text delay-1">Ensuring quality through automation. Expert in Java, Selenium, and API Testing.</p>
                <div className="hero-btns animate-text delay-2">
                    <a href="#projects" className="btn primary">View Work</a>
                    <a href="/resume.pdf" download="parag 9422982240.pdf" className="btn secondary">Download Resume</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </header>
    );
};

export default Hero;
