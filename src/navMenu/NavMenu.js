import React from "react";
import './NavMenu.scss';

export const NavMenu = () => {
    return(
        <container className="container">
            <nav className="nav">
                <a className="nav__link" href="#">Home</a>
                <a className="nav__link" href="#">Blog</a>
                <a className="nav__link" href="#">Work</a>
                <a className="nav__link" href="#">About me</a>
                <div className="nav__dot"></div>
            </nav>
        </container>

    );

};

