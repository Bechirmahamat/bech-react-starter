import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const getCartItems = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: getCartItems,

    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find(
                (item) => item.cartId == product.cartId
            );
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.success("Item added to the cart successfully");
        },
        removeItem: (state, action) => {
            const { cartId } = action.payload;
            const item = state.cartItems.find((prod) => prod.cartId == cartId);
            state.cartItems = state.cartItems.filter(
                (prod) => prod.cartId != cartId
            );
            state.cartTotal -= item.amount * item.price;
            state.numItemsInCart -= item.amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.error("Item remove from the cart");
        },
        editItem: (state, action) => {
            const { cartId, amount } = action.payload;
            const item = state.cartItems.find((prod) => prod.cartId == cartId);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount += amount - item.amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.success("Item edited successfully");
        },
        clearCart: (state) => {
            localStorage.setItem("cart", JSON.stringify(defaultState));
            return defaultState;
        },
        calculateTotal: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
