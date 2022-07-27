import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reboot.min.css";
import "./styles/grid.min.css";
import "./styles/app.css";

import "./assets/plugins/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/plugins/fontawesome-6.1.1/css/all.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.baseURL = "http://159.223.94.86:3000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
