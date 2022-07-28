import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import App from "./App";
import "./styles/reboot.min.css";
import "./styles/grid.min.css";
import "./styles/app.css";

import "./assets/plugins/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/plugins/fontawesome-6.1.1/css/all.min.css";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware];
const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(...middlewares))
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App history={history} />
        </Provider>
    </React.StrictMode>
);
