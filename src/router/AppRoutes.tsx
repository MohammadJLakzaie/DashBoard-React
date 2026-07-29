import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Dashboard from "../Layout/Dashbord";
import Home from "../Pages/Dashbord-page/Home";
import Profile from "../Pages/Dashbord-page/Profile";
import Signin from "../Pages/Auth-page/Signin";
import Signup from "../Pages/Auth-page/Signup";
import NotFound from "../Pages/Dashbord-page/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/app",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="home" replace />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);