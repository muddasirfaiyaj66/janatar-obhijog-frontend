import { Outlet } from "react-router";

const AuthLayOut = () => {
  <>
    <div className="max-w-screen-xl mx-auto p-5 ">
      <Outlet />
      <p>why the fuck it is not working...</p>
    </div>
  </>;
};

export default AuthLayOut;
