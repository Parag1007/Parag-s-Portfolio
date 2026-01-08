import profileImg from '../assets/profile-dark.png';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container split-layout">
                <div className="about-text">
                    <h2 className="section-title">About Me</h2>
                    <p>I am a QA Automation Engineer with hands-on experience in Manual Testing, Automation Testing, and API Testing. I have a strong proficiency in Java, Selenium WebDriver, TestNG, Maven, and Postman.</p>
                    <p>My focus is on developing robust automation test scripts, implementing Page Object Model (POM) frameworks, and ensuring product quality through comprehensive functional, regression, and smoke testing.</p>

                    <div className="education-preview">
                        <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                        <div className="edu-item">
                            <strong>M.Sc (Computer Science)</strong> - K. K. Wagh College Nashik (Appearing)
                        </div>
                        <div className="edu-item">
                            <strong>B.Sc (Computer Science)</strong> - K. K. Wagh College Nashik (CGPA: 7.09)
                        </div>
                    </div>
                </div>
                <div className="about-visual">
                    <div className="profile-wrapper">
                        <img src={profileImg} alt="Parag Kakad" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
