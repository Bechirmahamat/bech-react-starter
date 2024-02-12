import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    About,
    HomeLayout,
    Checkout,
    Login,
    Error,
    Register,
    Products,
    Cart,
    Landing,
    SingleProduct,
    Orders,
    SingleError,
} from "./pages/index";
import {
    landingLoader,
    singleProductLoader,
    ProductsLoader,
    ordersLoader,
    checkoutLoader,
} from "./pages/loader";
import { registerAction, loginAction, checkoutAction } from "./pages/action";
import { store } from "./store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
ReactQueryDevtools;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader(queryClient),
                errorElement: <SingleError />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
                errorElement: <SingleError />,
                loader: checkoutLoader(store),
                action: checkoutAction(store),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/products",
                element: <Products />,
                errorElement: <SingleError />,
                loader: ProductsLoader(queryClient),
            },
            {
                path: "/products/:id",
                element: <SingleProduct />,
                loader: singleProductLoader(queryClient),
                errorElement: <SingleError />,
            },
            {
                path: "/orders",
                element: <Orders />,
                errorElement: <SingleError />,
                loader: ordersLoader(store),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
]);
function App() {
    // get theme from local host

    // end of setting theme
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
                <ReactQueryDevtools initialIsOpen="false" />
            </QueryClientProvider>
        </>
    );
}

export default App;
