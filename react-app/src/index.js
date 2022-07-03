import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "./style/reboot.min.css";
import "./style/grid.min.css";

import "./assets/plugins/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/plugins/fontawesome-6.1.1/css/all.min.css";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
