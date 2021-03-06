import React, { useEffect } from "react";
import BottomBar from "./BottomBar";
import { Route, Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
const DashboardLayout = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const location = useLocation();
    const getRank = () => {
        var config = {
            method: "get",
            url: "http://159.223.94.86:3000/strict/affiliate/user-rank",
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        };

        axios(config)
            .then(function (response) {
                const data = response.data;
                dispatch({
                    type: "rank/SET_STATE",
                    payload: {
                        id: data.id,
                        name: data.name,
                        rule_frontline: data.rule_frontline,
                        rule_downline: data.rule_downline,
                        rule_one_level_below: data.rule_one_level_below,
                        rule_one_level_below_node:
                            data.rule_one_level_below_node,
                        bonus_direct: data.bonus_direct,
                        bonus_pass_up: data.bonus_pass_up,
                        bonus_peer: data.bonus_peer,
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getProfile = () => {
        var config = {
            method: "get",
            url: "http://159.223.94.86:3000/strict/user/profile",
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        };

        axios(config)
            .then(function (response) {
                const data = response.data;
                dispatch({
                    type: "account/SET_STATE",
                    payload: {
                        country: data.country,
                        country_name: data.country_name,
                        created_at: data.created_at,
                        email: data.email,
                        full_name: data.full_name,
                        id: data.id,
                        jwt_expired_at: data.jwt_expired_at,
                        phone: data.phone,
                        status: data.status,
                        timezone: data.timezone,
                        timezone_offset: data.timezone_offset,
                        username: data.username,
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getProfile();
        getRank();
    }, []);
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

export default connect()(DashboardLayout);
