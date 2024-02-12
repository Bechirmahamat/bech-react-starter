import axios from "axios";

const Fetch = axios.create({
    baseURL: "https://strapi-store-server.onrender.com/api",
});
export default Fetch;
