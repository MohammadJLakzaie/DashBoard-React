import type {TaskCardProps} from "../Types/Types" ;
import { useDraggable } from '@dnd-kit/react';



export default function TaskCard({ Monotask ,  func  }: TaskCardProps) {

   const { ref } = useDraggable({ id: Monotask.id });
  return (
<div onClick={() => func(Monotask)} ref={ref} >
    
    <div className="bg-whit border border-slate-200  rounded-x p-4 shadow-sm cursor-pointer  select-none  transition-all  hover:shadow-md  hover:-translate-y-0.5 "> 
    <p className="text-sm font-medium text-slate-700 flex justify-center wrap-break-word">
        {Monotask.title}
      </p>
  
      </div>
  
</div>
  );
}