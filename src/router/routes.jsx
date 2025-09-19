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
import MyComplaints from '../pages/User/MyComplaints'
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

    {/* Protected Routes */}
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashbordLayout />
        </PrivateRoute>
      }
    >
      <Route index  path="home" element={<Dashboard></Dashboard>}></Route>
      {/* user routes */}
      <Route   path="myComplaints" element={<MyComplaints></MyComplaints>}></Route>
      <Route   path="submitedComplaints" element={<Dashboard></Dashboard>}></Route>
      {/* Admin route 
      <Route   path="home" element={<Dashboard></Dashboard>}></Route>
      <Route   path="home" element={<Dashboard></Dashboard>}></Route>
      <Route   path="home" element={<Dashboard></Dashboard>}></Route>
      <Route   path="home" element={<Dashboard></Dashboard>}></Route> */}
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
