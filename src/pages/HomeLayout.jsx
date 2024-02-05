import { Outlet } from "react-router-dom";
const HomeLayout = () => {
    return (
        <div>
            <h1 className="text-3xl text-secondary">HomeLayout</h1>
            <Outlet />
        </div>
    );
};
export default HomeLayout;
