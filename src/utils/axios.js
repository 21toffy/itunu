import axios from "axios";
import { getToken } from "./helpers";

const defaultOptions = {
  baseURL: "http://78.110.169.70:83/api",
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
const AxiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
AxiosInstance.interceptors.request.use(function(config) {
  const token = getToken();
  
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default AxiosInstance;
