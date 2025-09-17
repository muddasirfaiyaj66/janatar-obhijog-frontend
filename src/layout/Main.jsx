import { Outlet } from "react-router";


const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto p-5 '>
            <Outlet />
        </div>
    );
};

export default Main;