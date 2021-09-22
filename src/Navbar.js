import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mon CV en React<img src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" alt="React Native" class="navbar__logo"></img></h1>
            <div className="links">
                <Link to="/">CV</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact" style={{
                    color: "white",
                    // backgroundColor: "#00d8ff",
                    backgroundColor: "#2f71a1",
                    borderRadius: "8px"
                }}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;