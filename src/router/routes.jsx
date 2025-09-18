import { Route, Routes } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/Signin";
import ErrorPage from "../pages/ErrorPage";
import AuthLayOut from "../layout/AuthLayout";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
    </Route>


    <Route path="/auth/" element={<AuthLayOut/>}>
      <Route path="signin" element={<SignIn/>} />
      <Route path="signup" element={<SignUp/>} />
    </Route>


    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
);
export default AppRoutes;
