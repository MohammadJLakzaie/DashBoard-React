import { useCallback } from "react";
import { useState } from "react";
import TaskColumn from "../Components/TaskColumn"
import Buttons from "./Buttons";
import TaskCard from "./TaskCard"

export default function TaskBoard() {
  
  const handleAddCard = useCallback((column: string) => {
    console.log(`Add card to ${column}`);

  },[]);



  const [menustate , setmenu] = useState(false)

  return (
    <div className="overflow-x-auto p-4 h-[calc(100vh-navbarHeight)] ">
      <div className="flex gap-4 min-w-[1100px] justify-center h-full">
     <TaskColumn name={'بک لاگ'}/>
     <TaskColumn name={'در حال انجام'}/>
     <TaskColumn name={'در انتظار'}/>
     <TaskColumn name={'انجام شده'}/>

      </div>
    </div>
  );
}