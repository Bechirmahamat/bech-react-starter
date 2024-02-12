import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header, Loading } from "../components";
import BreadCrumps from "../components/Breadcrumps";
import Footer from "./Footer";
const HomeLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <>
            <Header />
            <Navbar />
            {isLoading ? (
                <Loading />
            ) : (
                <section className="static-width pt-16">
                    <BreadCrumps />
                    <Outlet />
                </section>
            )}

            <Footer />
        </>
    );
};
export default HomeLayout;
