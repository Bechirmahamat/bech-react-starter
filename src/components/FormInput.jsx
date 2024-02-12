const FormInput = ({ type, text, name, defaultValue, size }) => {
    return (
        <div className="form-control ">
            <label htmlFor="" className="label">
                <span className="label-text capitalize">{text}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size}`}
            />
        </div>
    );
};
export default FormInput;
