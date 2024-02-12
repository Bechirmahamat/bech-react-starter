import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPagination = () => {
    const { meta } = useLoaderData();
    const { page, pageCount } = meta.pagination;
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const handlePagination = (requestedPage) => {
        const url = new URLSearchParams(search);
        url.set("page", requestedPage);

        navigate(`${pathname}?${url.toString()}`);
    };
    if (pageCount < 2) return null;

    const btnObject = ({ pageNum, active }) => {
        return (
            <button
                key={pageNum}
                className={`btn  btn-sm sm:btn-md  join-item ${
                    active ? "btn-neutral" : ""
                } `}
                onClick={() => {
                    handlePagination(pageNum);
                }}
            >
                {pageNum}
            </button>
        );
    };
    const renderBtn = () => {
        const buttonsArray = [];
        buttonsArray.push(btnObject({ pageNum: 1, active: page === 1 }));
        if (page > 3) {
            buttonsArray.push(
                <button
                    key="dot-1"
                    className="btn  btn-sm sm:btn-md  join-item"
                >
                    ...
                </button>
            );
        }
        //those all hard codded
        // ++++++++++++++++++++++++++
        if (page > 2) {
            buttonsArray.push(btnObject({ pageNum: page - 1, active: false }));
        }
        if (page != 1 && page != pageCount) {
            buttonsArray.push(
                btnObject({ pageNum: page, active: page === page })
            );
        }
        if (page >= 1 && page < pageCount - 1) {
            buttonsArray.push(btnObject({ pageNum: page + 1, active: false }));
        }
        // ++++++++++++++++++++++++++++
        if (page < pageCount - 2) {
            buttonsArray.push(
                <button
                    key="dot-2"
                    className="btn  btn-sm sm:btn-md  join-item"
                >
                    ...
                </button>
            );
        }
        buttonsArray.push(
            btnObject({ pageNum: pageCount, active: page === pageCount })
        );
        return buttonsArray;
    };
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
            {/* //buttons go here */}
            {renderBtn()}
            <button
                className="btn  btn-sm sm:btn-md  join-item"
                onClick={() => {
                    const newPage = page + 1;
                    if (page <= pageCount) handlePagination(newPage);
                }}
            >
                next
            </button>
        </div>
    );
};
export default ComplexPagination;
// console
