import { Route, Routes } from "react-router"
import Main from "../layout/Main";
import Home from "../pages/Home/Home";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />    
        </Route>
    </Routes>
);
export default AppRoutes;