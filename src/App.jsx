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
} from "./pages/index";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/products",
                element: <Products />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
