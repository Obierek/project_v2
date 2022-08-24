import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

import './index.scss';
import {NavMenu} from "./navMenu/NavMenu";

// import Start from "./mainView/Start";
// import Questions from "./mainView/Questions";
// import End from "./mainView/End";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavMenu/>
            <App/>
            {/*<div className="container">*/}
            {/*    <div className="main">*/}
            {/*        <Routes>*/}
            {/*            <Route path="/start" element={<Start/>}/>*/}
            {/*            <Route path='/questions' element={<Questions/>}/>*/}
            {/*            <Route path='/end' element={<End/>}/>*/}
            {/*        </Routes>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </BrowserRouter>
    </React.StrictMode>
);

