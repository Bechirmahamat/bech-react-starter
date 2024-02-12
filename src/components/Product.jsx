import React from "react";
import { Link } from "react-router-dom";
const Product = ({ id, title, company, description, image, price }) => {
    return (
        <Link
            to={"/products/" + id}
            className="card rounded-box w-full bg-base-200 shadow-lg hover:shadow-2xl h-[20rem] p-4"
        >
            <figure className="rounded-lg h-full bg-base-100 w-full">
                <img src={image} alt="" className="object-cover rounded-sm" />
            </figure>
            <div className="card-body text-center flex flex-col space-x-3">
                <h3 className="capitalize  text-xl font-semibold">{title}</h3>
                <p className="text-secondary text-lg">${price}</p>
            </div>
        </Link>
    );
};

export default Product;
