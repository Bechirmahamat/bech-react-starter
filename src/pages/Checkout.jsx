import { useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import CartPrice from "../components/CartPrice";
import { FormInput, SubmitBtn } from "../components";
import Fetch from "../utils/customFetch";
import { clearCart } from "../features/cart/cartSlice";
export const loader = (store) => async () => {
    const user = store.getState().userState.user;
    if (!user) {
        toast.warn("You must be logged in to checkout");
        return redirect("/login");
    }
    return null;
};
export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const { name, address } = Object.fromEntries(formData);
        const user = store.getState().userState.user;
        const token = user.jwt;
        const { numItemsInCart, orderTotal, cartItems } = store.getState().cart;
        const info = {
            name,
            address,
            chargeTotal: orderTotal,
            orderTotal: `$${(orderTotal / 100).toFixed(2)}`,
            cartItems,
            numItemsInCart,
        };
        // console.log(info);
        // console.log(token);
        try {
            const response = await Fetch.post(
                "/orders",
                { data: info },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success(
                "Ordered Successfully :) \n Thank you for Choosing us"
            );
            store.dispatch(clearCart());
            return redirect("/orders");
        } catch (error) {
            if (error.response.status === 401 || 403) return redirect("/login");
            const errorMsg =
                error.response?.data?.error?.message ||
                "Sorry something went Wrong please try again later [::]";
            toast.error(errorMsg);
            return null;
        }
    };

const Checkout = () => {
    const cartTotal = useSelector((store) => store.cart.numItemsInCart);
    if (cartTotal < 1) {
        return (
            <div className="pb-4 font-semibold text-3xl mb-[10rem] border-b">
                Your cart is empty
            </div>
        );
    }
    return (
        <>
            <div className="pb-4 text-3xl mb-16 border-b font-semibold">
                Checkout
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-[8rem]">
                <div>
                    <Form method="POST" className="form">
                        <h2 className="text-2xl text-secondary capitalize font-semibold mb-6">
                            Shipping Information
                        </h2>
                        <FormInput type="text" name="name" text="first name" />
                        <FormInput type="text" name="address" text="address" />
                        <div className="my-6">
                            <SubmitBtn text="place your order" />
                        </div>
                    </Form>
                </div>
                <CartPrice />
            </div>
        </>
    );
};
export default Checkout;
