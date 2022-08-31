import React from "react";
import './NavMenu.scss';

export default function NavMenu() {
    return (
        <div className="container">
            <div className="nav">
                <a className="nav__link" href="#">Home</a>
                <a className="nav__link" href="#">App</a>
                <a className="nav__link" href="#">GitHub</a>
                <a className="nav__link" href="#">About me</a>
            </div>
        </div>
    );
};

