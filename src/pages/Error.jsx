import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    if (error.status === 404)
        return (
            <main className="grid place-items-center min-h-[100vh] px-8">
                <div className="text-center ">
                    <h1 className="text-9xl font-semibold text-primary mb-8">
                        404
                    </h1>
                    <h2 className="capitalize text-4xl font-semibold my-4 ">
                        Page not found
                    </h2>
                    <h2 className="text-error">
                        Sorry we couldn't find the page you are looking for
                    </h2>
                    <Link to="/" className="btn my-5 btn-secondary">
                        Go Back Home{" "}
                    </Link>
                </div>
            </main>
        );
    return (
        <main className="grid place-items-center min-h-[100vh] px-8">
            <div className="text-center font-semibold">
                <h2 className="capitalize text-4xl font-semibold my-4 ">
                    There was an error
                </h2>
            </div>
        </main>
    );
};
export default Error;
