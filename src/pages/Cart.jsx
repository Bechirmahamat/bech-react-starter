import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CartItems, CartPrice, Title } from "../components";
import { Link } from "react-router-dom";
const Cart = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Scroll behavior set to smooth for smooth scrolling
        });
    }, []);
    const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);
    const { user } = useSelector((store) => store.userState);
    if (numItemsInCart == 0)
        return (
            <div className="mb-24">
                <div className="mt-4 mb-8 pb-4 text-3xl text-base-content  border-b ">
                    Cart
                </div>
                <p className="text-info text-xl">
                    You have No item in the cart
                </p>
            </div>
        );
    return (
        <>
            <div className="mt-4 mb-8 pb-4 text-3xl  border-b  ">Cart</div>
            <section className="grid my-4 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItems />
                </div>
                <div className="lg:col-span-4 lg:ml-4">
                    <CartPrice />
                    {user ? (
                        <Link
                            to="/checkout"
                            className="btn mt-4 btn-primary btn-block"
                        >
                            Proceed to checkout
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="btn mt-4 btn-primary btn-block"
                        >
                            Please Login
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
};
export default Cart;
