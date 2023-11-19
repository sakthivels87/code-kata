import axiosInstance from "./api-client";

export interface AuthUser {
  email: string;
  password: string;
}
const authService = () => {
  const apiClient = axiosInstance(
    "https://authentication-service-green.vercel.app/api"
  );
  return (data: AuthUser) =>
    apiClient
      .post("/auth", data)
      .then((res) => res)
      .catch((e) => e.response);
};

export default authService;
