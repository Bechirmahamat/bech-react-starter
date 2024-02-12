import { useState } from "react";

const FormRange = ({ name, text, defaultValue }) => {
    const step = 1000;
    const maxPrice = "1000000";
    const [selectedPrice, setSelectedPrice] = useState(
        defaultValue || maxPrice / 2
    );
    return (
        <div className="form-control">
            <label htmlFor="" className="label">
                <span className="label-text capitalize">{text}</span>
                <span>{selectedPrice / 100}</span>
            </label>
            <input
                type="range"
                value={selectedPrice}
                step={step}
                min={0}
                max={maxPrice}
                className="range-primary range"
                name={name}
                onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <div className="flex justify-between">
                <span>0</span>
                <span>Max: {maxPrice}</span>
            </div>
        </div>
    );
};
export default FormRange;
