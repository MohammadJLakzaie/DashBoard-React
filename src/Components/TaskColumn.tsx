import { useState } from "react";
import TaskCard from "./TaskCard";
import Buttons  from "./Buttons";

export default function TaskColumn({name}: string) {

const [open , setOpen] = useState(false) ; 
const handleAddCard = (open) =>{
    if(open){
      setOpen(false)
    }else{
      setOpen(true)
    }
 }

    return(
         <>
          
          <section
            // key={column.id}
            className="flex flex-col w-[260px] bg-slate-100 rounded-xl border border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-center p-4 border-b border-slate-200">
              <span className="font-semibold  text-slate-800">
                {name}
              </span>

             
            </div>

            {/* Cards Container */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">

              {/* کارت‌ها بعداً اینجا رندر می‌شوند */}
              <div id="Container" className="flex-1 overflow-y-auto p-3 space-y-3">
                <TaskCard title="طراحی صفحه لاگین" />
              </div>

            </div>

            {/* Footer */}
            {!open && (<div className="p-3 border-t border-slate-200">
             <Buttons name={"+ افزودن کارت"} onClick={() => handleAddCard(open)} className={
             "w-full rounded-lg border border-dashed border-slate-300 py-2 text-s text-slate-600 hover:bg-slate-200 transition "} />
            </div>)}
         {open && (
             <div className="bg-white
            
border
border-slate-200
rounded-xl
p-3
shadow-sm
space-y-3">
  <input type="text" placeholder="Enter a title or paste a link" className="w-full 
rounded-lg
border
border-slate-300
px-3
py-2
text-sm
outline-none
focus:border-indigo-500
focus:ring-2
focus:ring-indigo-100" />

<div className="flex flex-row gap-2">

<Buttons name={'تایید'} className={"w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"}/>
<Buttons name={'لغو'} className={"w-full rounded-lg bg-orange-600 py-2 text-sm font-medium text-white transition hover:bg-orange-700"} onClick={()=> handleAddCard(open)}/>
</div>
</div>
         )}
          </section>
      </>
    )
}