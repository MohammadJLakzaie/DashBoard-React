

type TaskCardProps = {
  Monotask: object;
  func : Function ; 
  
};

export default function TaskCard({ Monotask ,  func  }: TaskCardProps) {
  
 

  return (
<div onClick={() => func(Monotask)}>
    
    <div className="bg-whit border border-slate-200  rounded-x p-4 shadow-sm cursor-pointer  select-none  transition-all  hover:shadow-md  hover:-translate-y-0.5 "> 
    <p className="text-sm font-medium text-slate-700 flex justify-center wrap-break-word">
        {Monotask.title}
      </p>
  
      </div>
  
</div>
  );
}