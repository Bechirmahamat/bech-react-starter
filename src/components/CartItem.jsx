import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editItem, removeItem } from "../features/cart/cartSlice";
const generateAmountValue = (value) =>
    Array.from({ length: value }, (_, index) => index + 1);
const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { cartId, price, amount, image, title, company, color } = cartItem;
    const handleAmountChange = (e) => {
        dispatch(editItem({ cartId, amount: e.target.value }));
    };
    const handleRemoveItem = () => {
        dispatch(removeItem({ cartId }));
    };
    return (
        <article className="bg-base-200 gap-y-4 gap-x-2 flex flex-col sm:flex-row  rounded-box p-4  justify-between">
            <figure className="bg-base-100 rounded-box w-24 h-24 sm:w-32  sm:h-32">
                <img
                    src={image}
                    className="object-cover  rounded-box w-24 h-24 sm:w-32  sm:h-32"
                    alt=""
                />
            </figure>
            <div className=" ">
                <p className="capitalize text-md truncate w-full sm:24 md:w-36  ">
                    {title}
                </p>
                <p className="text-sm text-neutral-content">{company}</p>
                <p className="mt-2 flex items-center space-x-2">
                    <span> Color:</span>
                    <span
                        className="badge badge-sm"
                        style={{ background: color }}
                    ></span>
                </p>
            </div>
            <div className="max-w-xs  text-sm flex flex-col gap-3 items-start">
                <p>Amount</p>
                <select
                    name="amount"
                    id="amount"
                    className="select select-sm"
                    value={amount}
                    onChange={(e) => handleAmountChange(e)}
                >
                    {generateAmountValue(amount + 2).map((item) => {
                        return <option key={item}>{item}</option>;
                    })}
                </select>
                <button
                    className=" link link-hover link-primary"
                    onClick={() => handleRemoveItem()}
                >
                    Remove
                </button>
            </div>
            <div className=" text-md">${price / 100}</div>
        </article>
    );
};

export default CartItem;
