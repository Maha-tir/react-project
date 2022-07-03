import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, adminRoutes } from "./routes/allRoutes";

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Dashboard from "./pages/Admin/Dashboard";

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
        {adminRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={DashboardLayout}
          />
        ))}
        <Redirect strict from="/" to="/auth/signin" />
        <Redirect strict from="/admin" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
