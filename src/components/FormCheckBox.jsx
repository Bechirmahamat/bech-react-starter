const FormCheckBox = ({ text, size, defaultCheck, name }) => {
    return (
        <div className="form-control items-center">
            <label htmlFor="" className="label">
                <span className="label-text capitalize">{text}</span>
            </label>
            <input
                type="checkbox"
                name={name}
                className={`checkbox checkbox-primary ${size}`}
                defaultChecked={defaultCheck}
            />
        </div>
    );
};
export default FormCheckBox;
