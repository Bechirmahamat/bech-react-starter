import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
    const isSubmitting = useNavigation().state === "submitting";
    return (
        <button
            type="submit"
            className="btn btn-primary capitalize w-full"
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <>
                    <span className="loading loading-spinner"></span> Submitting
                </>
            ) : (
                text
            )}
        </button>
    );
};
export default SubmitBtn;
