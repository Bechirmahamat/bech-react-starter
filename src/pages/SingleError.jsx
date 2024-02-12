import { useRouteError } from "react-router-dom";

const SingleError = () => {
    const error = useRouteError();
    console.log(error);
    return <div className="text-center">There was an error</div>;
};
export default SingleError;
