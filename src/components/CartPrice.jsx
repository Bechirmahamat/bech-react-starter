import { useSelector } from "react-redux";
const CartPrice = () => {
    const { cartTotal, shipping, orderTotal, tax } = useSelector(
        (store) => store.cart
    );
    return (
        <div className="grid bg-base-200 card p-8">
            <Span price={cartTotal} text="Sub price" />
            <Span price={shipping} text="Shipping price" />
            <Span price={tax} text="Tax" />
            <p className="flex text-md mt-2 justify-between  ">
                <span className="text-capitalize">Order Total:</span>
                <span className="text-primary">
                    ${(orderTotal / 100).toFixed(2)}
                </span>
            </p>
        </div>
    );
};

const Span = ({ price, text }) => {
    return (
        <p className="flex text-sm justify-between border-b pb-2 my-1 border-base-300 ">
            <span className="text-capitalize">{text}:</span>
            <span>${(price / 100).toFixed(2)}</span>
        </p>
    );
};
export default CartPrice;
