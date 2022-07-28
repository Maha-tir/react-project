import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, userRoutes, errorRoutes } from "./routes/allRoutes";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ErrorLayout from "./layout/ErrorLayout";
import { useSelector, useDispatch } from "react-redux";

const AppRoute = ({ component: Component, layout: Layout, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (auth === true) {
                props.history.push("/user/dashboard");
            } else {
                return (
                    <Layout>
                        <Component {...props}></Component>
                    </Layout>
                );
            }
        }}
        exact
    ></Route>
);
const PrivateRoute = ({
    component: Component,
    layout: Layout,
    auth,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) => {
            if (auth) {
                return <Layout>
                    <Component {...props}></Component>
                </Layout>;
            } else {
                props.history.push("/auth/signin");
            }
        }}
        exact
    ></Route>
);
function App(history, props) {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
        const auth_info = JSON.parse(localStorage.getItem("bidbox_auth_info"));
        let auth_refresh_token = null;
        let auth_token = null;
        if (auth_info !== null){
          if (auth_info["token"] !== undefined) auth_token = auth_info["token"];
          if (auth_info["refresh_token"] !== undefined) auth_refresh_token = auth_info["refresh_token"];
          dispatch({
              type: "auth/SET_STATE",
              payload: {
                  token: auth_token,
                  refresh_token: auth_refresh_token,
              },
          });
        }
    }, []);

    return (
        <BrowserRouter history={history.history}>
            <Switch>
                {authRoutes.map((route, index) => (
                    <AppRoute
                        auth={auth.token !== null}
                        key={index}
                        path={route.path}
                        component={route.component}
                        layout={AuthLayout}
                    />
                ))}
                {userRoutes.map((route, index) => (
                    <PrivateRoute
                        auth={auth.token !== null}
                        key={index}
                        path={route.path}
                        component={route.component}
                        layout={DashboardLayout}
                    />
                ))}
                {errorRoutes.map((route, index) => (
                    <AppRoute
                        key={index}
                        path={route.path}
                        component={route.component}
                        layout={ErrorLayout}
                    />
                ))}

                <Redirect strict from="/" to="/auth/signin" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
