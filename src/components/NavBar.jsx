import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
            <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourite" className="nav-link">Favourite</Link>
                <Link to="/movieDetails" className="nav-link">Movie Details</Link>
            </div>
    </nav>
    );
}

export default NavBar;