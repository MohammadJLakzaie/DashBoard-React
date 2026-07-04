

type TaskCardProps = {
  title: string;
  
};

export default function TaskCard({ title }: TaskCardProps) {
  
 

  return (
<div>
    
    <div className="bg-whit border border-slate-200  rounded-x p-4 shadow-sm cursor-pointer  select-none  transition-all  hover:shadow-md  hover:-translate-y-0.5 "> 
    <p className="text-sm font-medium text-slate-700 flex justify-center wrap-break-word">
        {title}
      </p>
  
      </div>
  
</div>
  );
}