import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.scss';
import NavMenu from "./navMenu/NavMenu";
import App from "./app/App";
import Footer from "./footer/Footer";
import About from "./about/About";
import Home from "./home";
import GitHub from "./gitHub/GitHub";

function AppMain() {
    return (
        <BrowserRouter>
            <NavMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="app" element={<App />} />
                <Route path="github" element={<GitHub />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppMain;