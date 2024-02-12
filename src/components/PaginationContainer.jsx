import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
    const { meta } = useLoaderData();
    const { page, pageCount } = meta.pagination;
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });
    const handlePagination = (requestedPage) => {
        const url = new URLSearchParams(search);
        url.set("page", requestedPage);
        // console.log(url.toString());
        navigate(`${pathname}?${url.toString()}`);
    };
    if (pageCount < 2) return null;
    return (
        <div className="mt-14  flex justify-end join">
            <button
                className="btn btn-sm sm:btn-md join-item"
                onClick={() => {
                    const newPage = page - 1;
                    if (newPage > 0) handlePagination(newPage);
                }}
            >
                prev
            </button>
            {pages.map((item) => {
                return (
                    <button
                        key={item}
                        className={`btn  btn-sm sm:btn-md  join-item ${
                            page == item ? "btn-neutral" : ""
                        } `}
                        onClick={() => handlePagination(item)}
                    >
                        {item}
                    </button>
                );
            })}
            <button
                className="btn  btn-sm sm:btn-md  join-item"
                onClick={() => {
                    const newPage = page + 1;
                    if (pageCount >= newPage) handlePagination(newPage);
                }}
            >
                next
            </button>
        </div>
    );
};
export default PaginationContainer;
