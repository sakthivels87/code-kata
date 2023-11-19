import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoanApplication from "./pages/LoanApplication";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/loanApplication",
        element: <LoanApplication />,
      },
    ],
  },
]);

export default router;
