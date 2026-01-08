const Contact = () => {
    return (
        <section id="contact" className="section dark-bg">
            <div className="container center-text">
                <h2 className="section-title">Get In Touch</h2>
                <p>Ready to improve your software quality? Reach out to me.</p>

                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:paragkakad.it@gmail.com">paragkakad.it@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+919422982240">+91 9422982240</a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Pune, India</span>
                    </div>
                </div>

                <div className="social-links">
                    <a href="https://linkedin.com/in/parag-kakad" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Parag1007" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
