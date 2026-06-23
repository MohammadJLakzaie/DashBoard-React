import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../Pages/Dashbord-page/Home" ;
import Dashboard from "../Layout/Dashbord"
import Profile from "../Pages/Dashbord-page//Profile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
  
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
]);