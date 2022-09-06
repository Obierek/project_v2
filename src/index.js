import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import NavMenu from "./navMenu/NavMenu";
import App from "./app/App";
import Footer from "./footer/Footer";

import {
    BrowserRouter,
    Routes,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import GitHub from "./gitHub/GitHub";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavMenu/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="app" element={<App/>}/>
                <Route path="github" element={<GitHub/>}/>
                <Route path="about" element={<About/>}/>
                {/*</Route>*/}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

