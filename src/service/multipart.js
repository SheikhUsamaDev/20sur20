import axios from "axios";
import { basePath } from "../constant";


const apiService = axios.create();
apiService.defaults.baseURL = basePath;
apiService.defaults.timeout = 35000;
apiService.interceptors.request.use(
  async (config) => {
    var access = sessionStorage.getItem("app-access-token")
    if (access) access = JSON.parse(access)
    config.headers = {
      Authorization: access?.token ? `Bearer  ${access?.token}` : '',
      Accept: "application/json, text/plain, */*",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "*",
      "access-control-allow-origin": "*",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
