import ProductGrid from "./ProductGrid";
import ProductsList from "./ProductList";

import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";

const ProductsContainer = () => {
    const { meta } = useLoaderData();
    const TotalProducts = meta.pagination.total;
    const [layout, setLayout] = useState("grid");
    return (
        <>
            {/* HEADER */}
            <header className="flex justify-between pb-5 my-4 border-b border-base-300 ">
                <h4 className="text-xl">
                    {" "}
                    <span className="text-secondary">{TotalProducts}</span>
                    {` Product${TotalProducts > 1 ? "s" : ""}`}
                </h4>
                <div className="flex gap-2">
                    <button
                        className={`btn btn-sm text-lg ${
                            layout === "grid" ? "btn-primary" : ""
                        }`}
                        onClick={() => setLayout("grid")}
                    >
                        <BsFillGridFill />
                    </button>
                    <button
                        className={`btn btn-sm text-lg ${
                            layout === "list" ? "btn-primary" : ""
                        }`}
                        onClick={() => setLayout("list")}
                    >
                        <BsList />
                    </button>
                </div>
            </header>
            {/* products */}
            {TotalProducts == 0 ? (
                <h2 className="text-3xl my-4">
                    Sorry ,product you have been searching for is not found
                </h2>
            ) : layout == "grid" ? (
                <ProductGrid />
            ) : (
                <ProductsList />
            )}
        </>
    );
};
export default ProductsContainer;
