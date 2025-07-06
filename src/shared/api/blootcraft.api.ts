import axios from "axios";

const blootcraftApi = axios.create({
    baseURL: '/api',
});

export { blootcraftApi }