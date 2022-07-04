import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reboot.min.css";
import "./styles/grid.min.css";
import "./styles/app.css";

import "./assets/plugins/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/plugins/fontawesome-6.1.1/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
