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
import MetaproAiTrader from "../pages/Admin/MetaproAiTrader";

// Auth Routes Components
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import Otp from "../pages/Auth/Otp";
// import ForgotPassword from "../pages/Auth/ForgotPassword"

const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/control-averaging", component: ControlAveraging },
  { path: "/admin/history-trading", component: HistoryTrading },
  { path: "/admin/profit-trading", component: ProfitTrading },
  { path: "/admin/withdraw-profit-trader", component: WithdrawProfit },
  { path: "/admin/jadwal-shift", component: JadwalShift },
  { path: "/admin/sop-trader", component: SopTrader },
  { path: "/admin/metapro-ai-trader", component: MetaproAiTrader },
];

const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/otp-verification", component: Otp },
];

export { adminRoutes, authRoutes };
