import React from 'react';
import ReactDOM from 'react-dom/client';



import './index.scss';
import {NavMenu} from "./navMenu/NavMenu";
import App from "./App";
import ChangeDifficulty from "./ChangeDifficulty";
import Timer from "./Timer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <NavMenu/>

            <App/>
        {/*<Timer/>*/}
    </React.StrictMode>
);

