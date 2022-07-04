import React from "react";
import BottomBar from "./BottomBar";
import { Route, Link, useHistory } from "react-router-dom";

const DashboardLayout = (props) => {
  return (
    <div className="sch-Vxwmb">
      <div className="sch-mobile">
        {props.children}
        <Route render={(props) => <BottomBar {...props} />} />
      </div>
    </div>
  );
};

export default DashboardLayout;
