import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";
import { toast } from "react-toastify";
import Fetch from "../utils/customFetch";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
            const response = await Fetch.post("/auth/local", data);
            store.dispatch(loginUser(response.data));
            toast.success("Logged in successfully");
            return redirect("/");
        } catch (error) {
            const errorMsg =
                error?.response?.data?.error?.message || "Invalid Credentials";
            toast.error(errorMsg);
        }
        return null;
    };
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGuest = async () => {
        const data = {
            identifier: "test@test.com",
            password: "secret",
        };
        try {
            const response = await Fetch.post("/auth/local", data);
            dispatch(loginUser(response.data));
            toast.success("Welcome guest user");
            return navigate("/");
        } catch (error) {
            const errorMsg =
                error?.response?.data?.error?.message || "Invalid Credentials";
            toast.error(errorMsg);
        }
    };

    return (
        <div className="flex h-screen justify-center items-center gap-4">
            <Form
                method="post"
                className="card w-96  bg-base-200 gap-y-3   shadow-lg p-8"
            >
                <h2 className="text-center text-3xl font-medium text-primary mb-3">
                    Login
                </h2>
                <FormInput text="email" type="email" name="identifier" />
                <FormInput text="password" type="password" name="password" />
                <div className="my-3">
                    <SubmitBtn text="login" />
                </div>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleGuest()}
                >
                    As Guest
                </button>
                <div className="mt-3 ">
                    <p className="text-center">
                        Not a member yet?
                        <Link
                            to="/register"
                            className="link link-hover text-primary"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </Form>
        </div>
    );
};
export default Login;
