  import axios from "axios";

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_RAPID_API, 
  });

  axiosInstance.interceptors.request.use((config) => {

      config.headers["x-rapidapi-key"] = process.env.REACT_APP_RAPID_API_KEY;
    return config;
  });

  export default axiosInstance;
