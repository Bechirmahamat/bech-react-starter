import { Link } from "react-router-dom";
import { Hero, ProductGrid, Title } from "../components";
import Fetch from "../utils/customFetch";
const queryClientFunc = {
    queryKey: ["features"],
    queryFn: () => Fetch.get("/products?featured=true"),
};
export const loader = (queryClient) => async () => {
    try {
        const { data } = await queryClient.ensureQueryData(queryClientFunc);

        return { data: data.data };
    } catch (error) {
        return console.log(error);
    }
};
const Landing = () => {
    return (
        <main className="">
            <section className="grid lg:grid-cols-2">
                <div className="max-w-96 lg:max-w-[100%]">
                    <h1 className="capitalize text-4xl lg:text-6xl  font-bold my-5">
                        We are changing the way people shop
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt expedita modi omnis tempore ipsum aliquam
                        numquam error, animi corrupti ipsam necessitatibus harum
                        inventore, maxime obcaecati!
                    </p>
                    <Link
                        to="/products"
                        className="btn btn-primary my-8 text-lg"
                    >
                        Our Porducts
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <Hero />
                </div>
            </section>
            {/* feature section*/}
            <Title text="feature products" />
            <ProductGrid />
        </main>
    );
};
export default Landing;
