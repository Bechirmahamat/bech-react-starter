import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./Navlinks";
import { useEffect, useState } from "react";
import theme from "@material-tailwind/react/theme";
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
const localTheme = localStorage.getItem("theme") || "dracula";

const Navbar = () => {
    const [theme, setTheme] = useState(localTheme);
    const handleTheme = (theme) => {
        setTheme(theme);
    };
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <nav className="bg-base-200 ">
            <div className="static-width navbar">
                <div className="navbar-start">
                    {/* LOGO */}
                    <h3 className="hidden md:flex bg-primary btn  text-3xl text-white">
                        B
                    </h3>
                    <div className="dropdown  md:hidden">
                        <label tabIndex={0} className="btn btn-md btn-ghost">
                            <FaBarsStaggered className="text-2xl" />
                        </label>
                        <div
                            tabIndex={0}
                            className="menu bg-base-200 w-52 dropdown-content mt-3 rounded-md shadow "
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
                <div className=" navbar-end flex gap-2 ">
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
                                className="dropdown-content rounded-md menu bg-base-200 mt-3"
                            >
                                {themes.map((theme, index) => {
                                    return (
                                        <li key={index}>
                                            <button
                                                className="capitalize"
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
                            3
                        </span>

                        <button className="text-3xl btn btn-ghost btn-circle">
                            <BsCart3 />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
