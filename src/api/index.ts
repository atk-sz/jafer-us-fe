import axios from "axios";

// Set the base url of the backend api
const BASE_URL = process.env.REACT_APP_BACKEND_API;
// Create api with base url
const api = axios.create({ baseURL: BASE_URL });

export default api;
