import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./Navlinks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../features/user/userSlice";
const themes = [
    {
        name: "Light",
        theme: "winter",
    },
    {
        name: "dark",
        theme: "dracula",
    },
    {
        name: "aqa",
        theme: "aqua",
    },
    {
        name: "autumn",
        theme: "autumn",
    },
    {
        name: "cyberpunk",
        theme: "cyberpunk",
    },
    {
        name: "cmyk",
        theme: "cmyk",
    },
];

const Navbar = () => {
    const dispatch = useDispatch();
    const { numItemsInCart } = useSelector((store) => store.cart);
    const { user, theme: themeSelected } = useSelector(
        (store) => store.userState
    );
    const handleTheme = (theme) => {
        dispatch(setTheme(theme));
    };

    return (
        <nav className="bg-base-200 ">
            <div className="static-width navbar">
                <div className="navbar-start">
                    {/* LOGO */}
                    <Link to="/">
                        <h3 className="hidden md:block bg-primary py-2 font-bold px-4 text-3xl rounded-md">
                            B
                        </h3>
                    </Link>
                    <div className="dropdown  md:hidden">
                        <label tabIndex={0} className="btn btn-md btn-ghost">
                            <FaBarsStaggered className="text-2xl" />
                        </label>
                        <div
                            tabIndex={0}
                            className="menu bg-base-200 w-52 dropdown-content z-[1] mt-3 rounded-md shadow "
                        >
                            <NavLinks />
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal">
                        <NavLinks />
                    </ul>
                </div>
                <div className=" navbar-end flex  gap-2 ">
                    <div className="dropdown">
                        <label tabIndex={0} className="" htmlFor="">
                            <button className="btn btn-ghost flex-nowrap">
                                <span> Theme</span>
                                <svg
                                    width="12px"
                                    height="12px"
                                    className="h-2 w-2 fill-current opacity-60 inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2048 2048"
                                >
                                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                </svg>
                            </button>
                            <div
                                tabIndex={0}
                                className="dropdown-content z-[1] rounded-md menu bg-base-200 mt-3"
                            >
                                {themes.map((theme, index) => {
                                    return (
                                        <li key={index}>
                                            <button
                                                className={` ${
                                                    theme.theme == themeSelected
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleTheme(theme.theme)
                                                }
                                            >
                                                {theme.name}
                                            </button>
                                        </li>
                                    );
                                })}
                            </div>
                        </label>
                    </div>
                    <div className="indicator  ">
                        <span className="indicator-item  top-3 right-3 badge badge-primary">
                            {numItemsInCart}
                        </span>

                        <button className="text-2xl btn btn-ghost btn-circle">
                            <BsCart3 />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
