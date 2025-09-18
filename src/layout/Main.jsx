import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Main = () => {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 ">
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
