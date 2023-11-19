import axios from "axios";

const axiosInstance = (url: string) =>
  axios.create({
    baseURL: url,
  });
export default axiosInstance;
