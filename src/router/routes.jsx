import { Route, Routes } from "react-router";
import Main from "../layout/Main";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/Signin";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home></Home>} />
    </Route>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
);
export default AppRoutes;
