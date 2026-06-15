import Sidebar from "../Components/Sidebar"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"  
export default function Dashboard(){
    return(
        
   <div className="min-h-screen flex flex-col">
  {/* Navbar */}
 
    <Navbar/>
  

  {/* Body */}
  <div className="flex flex-1">
    {/* Content */}
    <main className="flex-1 bg-gray-100 p-4 ">
      <Outlet/>
    </main>


     {/* Sidebar */}
    <aside className="w-64  p-4">
      <Sidebar/>
    </aside>
  </div>
</div>
    )
}