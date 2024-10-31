function Header({ currentSection, setCurrentSection }) {
    return (
        <header>
            <h1>Jaakob Alakulppi</h1>
            <nav>
                <a href="#aboutMe" className={currentSection === "About Me" ? "active" : ""} onClick={() => setCurrentSection("About Me")}>
                    About Me
                </a>
                <a href="#portfolio" className={currentSection === "Portfolio" ? "active" : ""} onClick={() => setCurrentSection("Portfolio")}>
                    Portfolio
                </a>
                <a href="#contact" className={currentSection === "Contact" ? "active" : ""} onClick={() => setCurrentSection("Contact")}>
                    Contact
                </a>
                <a href="#resume" className={currentSection === "Resume" ? "active" : ""} onClick={() => setCurrentSection("Resume")}>
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Header;