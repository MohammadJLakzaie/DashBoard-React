import authBackground from "../assets/Auth/Frame-(3).svg";

import { Outlet } from "react-router-dom" ;
export default function AuthLayout() {
  return (
    <div
      className="min-h-screen   bg-no-repeat"
      style={{
        backgroundImage: `url("${authBackground}")`, 
       
      }}
    >

      {/* Container for centering the card on small screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center  justify-center lg:justify-end ">
            <Outlet/>
      </div>
    </div>
  )
}