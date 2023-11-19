import axiosInstance from "./api-client";

const decisionEngine = () => {
  const apiClient = axiosInstance(
    "https://accounting-service.vercel.app/api/v1/decision-engine"
  );

  return (request: any) =>
    apiClient
      .post("", request)
      .then((res) => res)
      .catch((err) => err);
};

export default decisionEngine;
