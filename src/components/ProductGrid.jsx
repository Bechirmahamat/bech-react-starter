import { useLoaderData } from "react-router-dom";
import Product from "./Product";
const ProductGrid = () => {
    const { data } = useLoaderData();
    return (
        <section className="my-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {data.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            {...product.attributes}
                        />
                    );
                })}
            </div>
        </section>
    );
};
export default ProductGrid;
