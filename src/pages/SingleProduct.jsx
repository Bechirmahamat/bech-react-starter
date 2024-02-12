import { useState, useEffect } from "react";
import Fetch from "../utils/customFetch";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const queryClientFn = (id) => {
    return {
        queryKey: ["singleProduct", id],
        queryFn: () => Fetch.get("/products/" + id),
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const response = await queryClient.ensureQueryData(
            queryClientFn(params.id)
        );

        return { product: response.data.data };
    };
const SingleProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product } = useLoaderData();
    const { image, price, title, company, description, colors } =
        product.attributes;
    const [color, setColor] = useState(colors[0]);
    const [amountValue, setAmountValue] = useState(1);
    const handleClick = (e) => {
        setColor(e);
    };
    const handleChange = (e) => {
        const value = e.target.value > 10 ? 10 : e.target.value;
        setAmountValue(value);
    };
    const productArgument = {
        cartId: product.id + color,
        productId: product.id,
        amount: +amountValue,
        color,
        image,
        company,
        title,
        price,
    };
    const handleAddToCart = () => {
        dispatch(addItem({ product: productArgument }));
        navigate("/cart");
    };

    return (
        <section className="grid md:grid-cols-2 gap-8 mb-8 pb-8">
            <figure>
                <img
                    src={image}
                    alt=""
                    className="rounded-box w-full object-cover h-96 md:w-96 lg:w-full"
                />
            </figure>

            <div className="flex flex-col items-start  gap-3">
                <h1 className="text-3xl font-bold capitalize tracking-wide">
                    {title}
                </h1>
                <h2 className="text-2xl font-semibold text-neutral-content ">
                    {company}
                </h2>
                <p className="text-primary font-semibold text-xl mb-4">
                    ${price / 100}
                </p>
                <p className="tracking-wider leading-8">{description}</p>
                <h3 className="text-bold text-lg">Colors</h3>
                <div className=" flex gap-3">
                    {colors.map((item, index) => {
                        return (
                            <span key={index} onClick={() => handleClick(item)}>
                                <button
                                    style={{ background: item }}
                                    className={
                                        color == item
                                            ? "outline outline-offset-2 outline-rose-600 p-3 rounded-md"
                                            : "p-3 rounded-md"
                                    }
                                ></button>
                            </span>
                        );
                    })}
                </div>

                <div
                    className="tooltip "
                    data-tip="At most 10 product can be sold"
                >
                    <h3 className="text-bold text-left text-lg">Amount</h3>
                    <input
                        type="number"
                        min={1}
                        max={10}
                        value={amountValue}
                        onChange={(e) => handleChange(e)}
                        className="w-44 input input-bordered "
                    />
                </div>
                <button
                    className="uppercase btn-secondary w-32 btn"
                    onClick={() => {
                        handleAddToCart();
                    }}
                >
                    Add to bag
                </button>
            </div>
        </section>
    );
};

export default SingleProduct;
