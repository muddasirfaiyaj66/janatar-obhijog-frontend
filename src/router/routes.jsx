import { Route, Routes } from "react-router";
import Main from "../layout/Main";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/Signin";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import ResetPassword from "../pages/Authentication/ResetPassword";
import ErrorPage from "../pages/ErrorPage";
import Unauthorized from "../pages/Unauthorized";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute";
import DashbordLayout from "../layout/DashbordLayout";

import MyComplaints from "../pages/User/MyComplaints";
import SubmitedComplaints from "../pages/User/SubmitComplaint";
import Gems from "../pages/User/Gems";

import AllComplaints from  "../pages/Admin/Complaints";
import Analytics from "../pages/Admin/Analytics";

import AllComplaintsSuperAdmin from "../pages/SuperAdmin/AllComplaints";
import UserManagement from "../pages/SuperAdmin/UserManagement";
import AuthManagement from "../pages/SuperAdmin/AuthorityManagement";




const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home></Home>} />
    </Route>

    {/* Public Authentication Routes */}
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/all-complain" element={<AllComplain />} />

    {/* Protected Routes */}
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashbordLayout />
        </PrivateRoute>
      }
    >
      <Route index element={<Dashboard></Dashboard>}></Route>
      {/* -------- USER ROUTES -------- */}
      <Route path="myComplaints" element={<MyComplaints />} />
      <Route path="submitedcomplaints" element={<SubmitedComplaints />} />
      <Route path="gems" element={<Gems />} />

      {/* -------- ADMIN ROUTES -------- */}
      <Route path="allComplaints" element={<AllComplaints />} />
      <Route path="analytics" element={<Analytics />} />

      {/* -------- SUPER ADMIN ROUTES -------- */}
      <Route
        path="allComplaintsSuperAdmin"
        element={<AllComplaintsSuperAdmin />}
      />
      <Route path="users" element={<UserManagement />} />
      <Route path="authManagement" element={<AuthManagement />} />

    </Route>

    {/* Admin Only Routes */}

    {/* User Profile (All authenticated users) */}
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <div>User Profile</div>
        </PrivateRoute>
      }
    />

    {/* Error Pages */}
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
);
export default AppRoutes;
