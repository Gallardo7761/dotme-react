import { useTheme } from "../contexts/ThemeContext"
import PropTypes from 'prop-types';
import '../css/Navbar.css';

const NavBar = ({ children }) => {
    const { theme } = useTheme();

    return (
        <nav className={`navbar navbar-expand-sm sticky-top ${theme}`}>
            <div className="container-fluid">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="collapse" className="navbar-collapse collapse">
                    <ul className="navbar-nav"> 
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default NavBar;
