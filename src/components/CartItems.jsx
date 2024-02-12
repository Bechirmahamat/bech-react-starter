import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);

    return (
        <div className="flex flex-col gap-8">
            {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.cartId} cartItem={cartItem} />;
            })}
        </div>
    );
};
export default CartItems;
