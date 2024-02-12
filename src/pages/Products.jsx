import Fetch from "../utils/customFetch";

import {
    Filters,
    PaginationContainer,
    ProductsContainer,
} from "../components/";
const queryClientFn = (queryParams) => {
    const { search, company, category, order, price, page } = queryParams;
    return {
        queryKey: [
            search ?? "",
            company ?? "all",
            category ?? "all",
            price ?? "500000",
            order ?? "A-Z",
            page ?? "1",
        ],
        queryFn: () =>
            Fetch.get("/products", {
                params: queryParams,
            }),
    };
};
export const loader =
    (queryClient) =>
    async ({ request }) => {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        // console.log(params);
        const response = await queryClient.ensureQueryData(
            queryClientFn(params)
        );
        // console.log(response);
        const data = response.data.data;
        const meta = response.data.meta;
        return { data, meta, params };
    };
const Products = () => {
    return (
        <>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </>
    );
};
export default Products;
