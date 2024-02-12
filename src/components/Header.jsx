import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.userState.user);
    const handleLogout = () => {
        dispatch(clearCart());
        dispatch(logoutUser());
        navigate("/");
    };
    return (
        <header className="bg-neutral text-neutral-content">
            {user ? (
                <div className="static-width flex justify-center items-center md:justify-end gap-4 py-2">
                    <p className="text-sm capitalize">hi,{user.username}</p>
                    <button
                        className="btn btn-outline btn-xs btn-primary"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="static-width flex justify-center md:justify-end gap-4 py-2">
                    <Link to="/login" className="link link-hover">
                        Login / Guest{" "}
                    </Link>
                    <Link
                        to="/register"
                        className="text-primary link link-hover"
                    >
                        Register
                    </Link>
                </div>
            )}
        </header>
    );
};
export default Header;
