import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
    const { meta, params } = useLoaderData();
    const { company, shipping, search, category, order, price } = params;
    return (
        <div className="mb-4">
            <Form className="grid menu py-4 bg-base-200 rounded-box px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 ">
                <FormInput
                    type="search"
                    name="search"
                    text="search"
                    size="input-sm"
                    defaultValue={search}
                />
                {/* COMPANIES */}
                <FormSelect
                    name="company"
                    text="select by companies"
                    size="select-sm"
                    list={meta.companies}
                    defaultValue={company}
                />
                {/* CATEGORY */}
                <FormSelect
                    name="category"
                    text="select by categories"
                    size="select-sm"
                    list={meta.categories}
                    defaultValue={category}
                />
                {/* ORDER */}
                <FormSelect
                    name="order"
                    text="Order by"
                    size="select-sm"
                    list={["A-Z", "Z-A", "High", "Low", ""]}
                    defaultValue={order}
                />
                {/* RANGE */}
                <FormRange
                    name="price"
                    text="Choose Price"
                    size={"range-sm"}
                    defaultValue={price}
                />
                {/* FREE CHiPPING */}
                <FormCheckBox
                    text="free chipping"
                    size="checkbox-sm"
                    name="shipping"
                    defaultCheck={shipping}
                />
                {/* SEARCH BTN  */}
                <div className="form-control lg:mt-4">
                    <button type="submit" className="btn btn-primary btn-sm">
                        Search
                    </button>
                </div>
                {/* CLEAR BTN */}
                <div className="form-control lg:mt-4">
                    <Link to="/products" className="btn btn-sm btn-accent">
                        Clear Inputs
                    </Link>
                </div>
            </Form>
        </div>
    );
};
export default Filters;
