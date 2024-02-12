const FormSelect = ({ list, name, text, size, defaultValue }) => {
    return (
        <div className="form-control w-full">
            <label htmlFor="" className="label">
                <span className="label-text capitalize">{text}</span>
            </label>
            <select
                name={name}
                className={`select capitalize select-bordered ${size} `}
            >
                {list.map((item) => {
                    return (
                        <option key={item} className="capitalize">
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default FormSelect;
