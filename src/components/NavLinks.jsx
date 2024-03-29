import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const links = [
    { id: 1, url: "/", text: "home" },
    { id: 2, url: "about", text: "about" },
    { id: 3, url: "products", text: "products" },
    { id: 4, url: "cart", text: "cart" },
    { id: 5, url: "checkout", text: "checkout" },
    { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
    const { user } = useSelector((store) => store.userState);
    return (
        <>
            {links.map((item) => {
                if (!user && (item.url === "checkout" || item.url === "orders"))
                    return null;
                return (
                    <li key={item.id} className="capitalize">
                        <NavLink to={item.url}>{item.text}</NavLink>
                    </li>
                );
            })}
        </>
    );
};
export default NavLinks;
