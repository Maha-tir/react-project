import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {authRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={AuthLayout}
          />
        ))}
        {userRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={DashboardLayout}
          />
        ))}
        <Redirect strict from="/" to="/signin" />
        <Redirect strict from="/user/" to="/user/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
