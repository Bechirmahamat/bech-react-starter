import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";
import Fetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const resp = await Fetch.post("/auth/local/register", data);
        toast.success("Register successfully");
        return redirect("/login");
    } catch (error) {
        const errorM =
            error?.response?.data?.error?.message || "Invalid Credentials";
        toast.error(errorM);
        return null;
    }
};
const Register = () => {
    return (
        <div className="flex py-8 min-h-screen justify-center items-center gap-4">
            <Form
                method="post"
                className="card w-96  bg-base-200 gap-y-3 shadow-lg p-8"
            >
                <h2 className="text-center text-3xl font-medium text-primary mb-3">
                    Register
                </h2>
                <FormInput
                    text="username"
                    type="text"
                    name="username"
                    defaultValue="bechirmahamat"
                />
                <FormInput
                    text="email"
                    type="email"
                    name="email"
                    defaultValue="test@test.com"
                />
                <FormInput
                    text="password"
                    type="password"
                    name="password"
                    defaultValue="12345"
                />
                <div className="my-3">
                    <SubmitBtn text="register" />
                </div>

                <div className="mt-3 ">
                    <p className="text-center">
                        Already Have An Account?
                        <Link
                            to="/login"
                            className="link ml-1 link-hover text-primary"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </Form>
        </div>
    );
};
export default Register;
