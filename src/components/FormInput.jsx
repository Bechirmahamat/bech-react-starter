const FormInput = ({ type, text, name, defaultValue }) => {
    return (
        <div className="flex flex-col gap-2 mb-3">
            <label htmlFor="">
                <span className="capitalize">{text}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className="input input-bordered"
            />
        </div>
    );
};
export default FormInput;
