import tmsImg from '../assets/images/tms.png';
import matchImg from '../assets/images/match-my-needs.png';
import naturalisImg from '../assets/images/naturalis.png';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <div className="card-image" style={{ backgroundImage: `url(${tmsImg})` }}></div>
                        <div className="card-info">
                            <h3>TMS (Track My Sales)</h3>
                            <p>Web-based sales tracking application. Automated test scripts using Selenium with Java (POM structure).</p>
                            <div className="tags">
                                <span className="mini-pill">Selenium</span>
                                <span className="mini-pill">Java</span>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="card-image" style={{ backgroundImage: `url(${matchImg})` }}></div>
                        <div className="card-info">
                            <h3>Match My Needs (Plugin)</h3>
                            <p>Interactive quiz plugin for e-commerce. Performed manual functional, regression, and smoke testing.</p>
                            <div className="tags">
                                <span className="mini-pill">Manual Testing</span>
                                <span className="mini-pill">E-commerce</span>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card">
                        <div className="card-image" style={{ backgroundImage: `url(${naturalisImg})` }}></div>
                        <div className="card-info">
                            <h3>Naturalis / Nuranico</h3>
                            <p>E-commerce platforms tested for functionality and user experience.</p>
                            <div className="tags">
                                <span className="mini-pill">QA</span>
                                <span className="mini-pill">E-commerce</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
