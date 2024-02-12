import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const theme = JSON.parse(localStorage.getItem("theme")) || "dracula";
document.documentElement.setAttribute("data-theme", theme);
const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
};
const defaultState = {
    user: getUser(),
    theme: theme,
};

const userSlice = createSlice({
    name: "user",
    initialState: defaultState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            toast.success("Logged out successfully");
        },
        loginUser: (state, action) => {
            state.user = { jwt: action.payload.jwt, ...action.payload.user };
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        registerUser: (state, action) => {},
        setTheme: (state, action) => {
            state.theme = action.payload;

            document.documentElement.setAttribute("data-theme", action.payload);
            localStorage.setItem("theme", JSON.stringify(action.payload));
        },
    },
});

export const { loginUser, logoutUser, registerUser, setTheme } =
    userSlice.actions;

export default userSlice.reducer;
