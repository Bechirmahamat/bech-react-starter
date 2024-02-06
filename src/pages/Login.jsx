import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";

const Login = () => {
    return (
        <div className="flex h-screen justify-center items-center gap-4">
            <Form className="card w-96  bg-base-200   shadow-lg p-8">
                <h2 className="text-center text-3xl font-medium text-primary mb-3">
                    Login
                </h2>
                <FormInput
                    text="email"
                    type="email"
                    name="identifier"
                    defaultValue="test@test.com"
                />
                <FormInput
                    text="password"
                    type="password"
                    name="identifier"
                    defaultValue="test@test.com"
                />
                <div className="my-3">
                    <SubmitBtn text="login" />
                </div>
                <button type="button" className="btn btn-secondary">
                    As Guest
                </button>
                <div className="mt-3 ">
                    <p className="text-center">
                        Not a member yet?{" "}
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
