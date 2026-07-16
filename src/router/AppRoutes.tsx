import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../Pages/Dashbord-page/Home" ;
import Dashboard from "../Layout/Dashbord"
import Profile from "../Pages/Dashbord-page/Profile";
import Signin from "../Pages/Auth-page/Signin"
import Signup from "../Pages/Auth-page/Signup"
import NotFound from "../Components/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/",
        element: <Signin/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
    
    ],
  },
  {
    path: "/app",
    element: <Dashboard/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    
    ],
  },
  {
      path: "*",
        element: <NotFound/>,
  }
]);