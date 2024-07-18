import axios from "axios";
import { basePath } from "../constant";

const apiService = axios.create();
apiService.defaults.baseURL = basePath;
apiService.defaults.timeout = 40000;

apiService.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Access-Control-Allow-Credentials": true,
      Accept: "application/json, text/plain, */*",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "*",
      "access-control-allow-origin": "*",
    };

    // Check if the request data is FormData
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    // Get the token from sessionStorage and set it in the Authorization header
    let token = JSON.parse(sessionStorage.getItem("app-access-token"));
    if (token) {
      token = token?.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
