import React from "react";
import './NavMenu.scss';
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
        <div className="container">
            <div className="nav">
                <Link to="/project_quiz" className="nav__link" >Home</Link>
                <Link to="app" className="nav__link" href="#">App</Link>
                <Link to="github" className="nav__link" href="#">GitHub</Link>
                <Link to="about" className="nav__link" href="#">About me</Link>
            </div>
        </div>
    );
};

