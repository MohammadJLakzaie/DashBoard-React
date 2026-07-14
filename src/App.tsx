import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRoutes";
import './App.css'
export default function App() {
  return (
   <>
      {/* Navigation – will be visible on all pages */}
     
     <RouterProvider router={router} />
      {/* Routes section – only one Route renders at a time */}
   </>
  );
}