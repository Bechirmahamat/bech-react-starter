import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../utils/customFetch";
import { ComplexPagination, OrderList } from "../components";

export const loader =
    (store) =>
    async ({ request }) => {
        const user = store.getState().userState.user;
        if (!user) {
            toast.warn("You must be logged in to see your orders");
            return redirect("/login");
        }
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams,
        ]);
        try {
            const response = await Fetch.get("/orders", {
                params,
                headers: {
                    Authorization: `Bearer ${user.jwt}`,
                },
            });
            // console.log(response);

            return { orders: response.data.data, meta: response.data.meta };
        } catch (error) {
            if (error.response.status === 401 || 403) return redirect("/login");
            const errorMsg =
                error.response?.data?.error?.message ||
                "Sorry something went Wrong please try again later [::]";
            toast.error(errorMsg);
            return null;
        }
    };

const Orders = () => {
    return (
        <div>
            <OrderList />
            <ComplexPagination />
        </div>
    );
};

export default Orders;
