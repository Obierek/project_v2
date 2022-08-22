import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {NavMenu} from "./navMenu/NavMenu";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<NavMenu/>
  </React.StrictMode>
);
