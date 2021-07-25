import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const history = useHistory();
    function tvShowRedirect() {
        alert("This page is under construction.");
        history.push("/favourite-movies");
    }

    return(
        <div className="navbar">
            <Link to="/favourite-movies">
                Favourite Movies 
            </Link>
            <Link to="#" onClick={tvShowRedirect}>
                TV Shows
            </Link>
            <Link to="/top-rated-movies">
                Top Rated Movies
            </Link>
        </div>
    );
}

export default NavBar;