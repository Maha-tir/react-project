import React from "react";
import { Redirect } from "react-router-dom";

// Admin Routes Components
import Dashboard from "../pages/Admin/Dashboard";
import ControlAveraging from "../pages/Admin/ControlAveraging";
import HistoryTrading from "../pages/Admin/HistoryTrading";
import ProfitTrading from "../pages/Admin/ProfitTrading";
import WithdrawProfit from "../pages/Admin/WithdrawProfit";
import JadwalShift from "../pages/Admin/JadwalShift";
import SopTrader from "../pages/Admin/SopTrader";
import Profile from "../pages/Admin/Profile";
import MetaproAiTrader from "../pages/Admin/MetaproAiTrader";
import News from "../pages/Admin/News";

import NotFound from "../pages/Error/NotFound";

// Auth Routes Components
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Otp from "../pages/Auth/Otp";
import ForgotPassword from "../pages/Auth/ForgotPassword";

const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/control-averaging", component: ControlAveraging },
  { path: "/admin/history-trading", component: HistoryTrading },
  { path: "/admin/profit-trading", component: ProfitTrading },
  { path: "/admin/withdraw-profit-trader", component: WithdrawProfit },
  { path: "/admin/jadwal-shift", component: JadwalShift },
  { path: "/admin/sop-trader", component: SopTrader },
  { path: "/admin/profile", component: Profile },
  { path: "/admin/news", component: News },
];

const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/otp-verification", component: Otp },
  { path: "/auth/forgot-password", component: ForgotPassword },
];

const errorRoutes = [{ path: "*", component: NotFound }];

export { adminRoutes, authRoutes, errorRoutes };
