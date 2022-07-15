import React from "react";
import BottomBar from "./BottomBar";
import { Route, Link, useHistory, useLocation } from "react-router-dom";

const DashboardLayout = (props) => {
  const location = useLocation();
  // const pathname = "/user/asset" && "/user/reward-detail";
  return (
    <div className="sch-Vxwmb">
      <div className="sch-mobile">
        {props.children}
        {location.pathname == "/user/asset" ||
        location.pathname == "/user/reward-detail" ||
        location.pathname == "/user/affiliate" ||
        location.pathname == "/user/withdraw" ||
        location.pathname == "/user/transfer" ||
        location.pathname == "/user/deposit" ||
        location.pathname == "/user/help-support" ||
        location.pathname == "/user/setting" ||
        location.pathname == "/user/profile" ||
        location.pathname == "/user/security" ? null : (
          <Route render={(props) => <BottomBar {...props} />} />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
