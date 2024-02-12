import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductsList = () => {
    const { data } = useLoaderData();
    return (
        <section className="my-8">
            <div className="grid gap-8 ">
                {data.map((product) => {
                    const id = product.id;
                    const { image, title, company, price } = product.attributes;

                    return (
                        <Link
                            key={id}
                            to={"/products/" + id}
                            className="rounded-box w-full bg-base-200 shadow-lg hover:shadow-2xl h-[25] group p-6 flex flex-col sm:flex-row gap-x-12 gap-y-4  flex-wrap transition duration-300 "
                        >
                            <figure className="rounded-lg  w-full sm:w-32 h-32 bg-base-100 ">
                                <img
                                    src={image}
                                    alt=""
                                    className=" object-cover w-full sm:w-32 h-32 rounded-md transition group-hover:scale-105 duration-300"
                                />
                            </figure>
                            <div className=" flex-1 flex justify-between flex-col sm:flex-row gap-y-3 ">
                                <div>
                                    <h3 className="capitalize  text-xl font-semibold ">
                                        {title}
                                    </h3>
                                    <h3 className="capitalize  text-lg font-semibold ">
                                        {company}
                                    </h3>
                                </div>
                                <p className="text-secondary text-lg">
                                    ${price}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
export default ProductsList;
