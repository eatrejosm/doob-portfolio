import axios from "axios";

// Create a custom instance of Axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINTS || "http://localhost:5000", // Set your backend base URL here
  timeout: 5000, // Set a timeout for requests (optional)
});

export default axiosInstance;
