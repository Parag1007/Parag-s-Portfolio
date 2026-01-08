const Skills = () => {
    const skillsData = [
        {
            category: "Testing Tools",
            skills: [
                { name: "Selenium WebDriver", icon: "fas fa-robot" },
                { name: "Postman", icon: "fas fa-paper-plane" },
                { name: "Manual Testing", icon: "fas fa-hand-pointer" }
            ]
        },
        {
            category: "Programming",
            skills: [
                { name: "Java", icon: "fab fa-java" },
                { name: "SQL", icon: "fas fa-database" }
            ]
        },
        {
            category: "Frameworks",
            skills: [
                { name: "TestNG", icon: "fas fa-vial" },
                { name: "Maven", icon: "fas fa-feather-alt" },
                { name: "POM", icon: "fas fa-sitemap" }
            ]
        },
        {
            category: "Project Management",
            skills: [
                { name: "JIRA", icon: "fab fa-jira" },
                { name: "Trello", icon: "fab fa-trello" },
                { name: "Git", icon: "fab fa-git-alt" }
            ]
        }
    ];

    return (
        <section id="skills" className="section dark-bg">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <h3>{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <span className="pill" key={idx}>
                                        <i className={`${skill.icon} skill-icon`}></i>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
