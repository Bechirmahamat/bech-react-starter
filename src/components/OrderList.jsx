import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
const OrderList = () => {
    const { orders, meta } = useLoaderData();

    if (meta.pagination.total < 1) {
        return (
            <div className="my-2 text-2xl capitalize">
                You have not order anything yet
            </div>
        );
    }
    return (
        <div className="mt-8 mb-[5rem]">
            <h4 className="capitalize text-2xl mb-4 overflow-x-auto">
                Your Orders:
            </h4>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Products</th>
                        <th>Cost</th>
                        <th className="hidden sm:bolck">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/*  */}
                    {orders.map((order, index) => {
                        const {
                            address,
                            createdAt,
                            name,
                            numItemsInCart,
                            orderTotal,
                        } = order.attributes;
                        const date = day(createdAt).format(
                            "hh:mm a - MMM Do, YYYY "
                        );
                        return (
                            <tr key={order.id}>
                                <th>{order.id}</th>
                                <td>Cy {name}</td>
                                <td>{address} Specialist</td>
                                <td>{numItemsInCart}</td>
                                <td>{orderTotal}</td>
                                <td>{date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default OrderList;
