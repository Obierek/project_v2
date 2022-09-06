import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import NavMenu from "./navMenu/NavMenu";
import App from "./app/App";
import Footer from "./footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavMenu/>
        <App/>
        <Footer/>
    </React.StrictMode>
);

