import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">PARAG KAKAD.</div>
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setIsActive(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsActive(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setIsActive(false)}>Skills</a></li>
                <li><a href="#experience" onClick={() => setIsActive(false)}>Experience</a></li>
                <li><a href="#projects" onClick={() => setIsActive(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setIsActive(false)}>Contact</a></li>
            </ul>
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
