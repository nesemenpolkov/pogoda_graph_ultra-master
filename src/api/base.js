import axios from "axios";

const API = () => {
    if (process.env.NODE_ENV === "development") {
        return `http://localhost:5000/`;
    } else {
        return `/`
    }
}

function make_http() {
    const http = axios.create({
        baseURL: API()
    });
    return http;
}

export default make_http();