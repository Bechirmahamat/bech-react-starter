import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../components";
const HomeLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <section className="static-width py-2">
                <Outlet />
            </section>
        </>
    );
};
export default HomeLayout;
