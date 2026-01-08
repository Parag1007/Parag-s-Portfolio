import { useState } from 'react';
import profileImg from '../assets/profile-dark.png';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#about" className="logo-link">
                    <img src={profileImg} alt="Profile" className="nav-profile-img" />
                    PARAG KAKAD
                </a>
            </div>
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
