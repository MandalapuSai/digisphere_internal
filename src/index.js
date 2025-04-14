import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Import global CSS files
import "./assets/css/vendors.min.css";
import "./assets/css/icon.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/partners.css";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (needed for dropdowns and other interactive components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
