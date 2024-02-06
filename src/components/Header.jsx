import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-neutral text-neutral-content">
            <div className="static-width flex justify-center md:justify-end gap-4 py-2">
                <Link to="/login" className="link link-hover">
                    Login / Guest{" "}
                </Link>
                <Link to="/register" className="text-primary link link-hover">
                    Register
                </Link>
            </div>
        </header>
    );
};
export default Header;
