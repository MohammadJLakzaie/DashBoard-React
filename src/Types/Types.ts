export  type taskType = {
  title : string ;
  status : string ; 
  id : string ; 
  description : string ; 
} 
export type columnType = {
  name: string;
  status: string;
};
export type taskColumnProps = {
  name: string;
  column: string;
  filteredTasks: taskType[];
  onAddTask: Function;
  funcOpen: Function;
};

export type TaskCardProps = {
  Monotask: taskType;
  func : Function ; 
  
};
export type TaskDetailsModalProps = {
  funcClose: Function ; 
  title : string ; 
  onDeleteTask : Function ;
  taskId : string ; 
  description : string ; 
  setDescription : Function ; 
  editCard : Function
}
export type NavItemTypes = {
  emoji : string ;
  label : string ;
  active?: boolean ;
  muted?: boolean 
}


export type sectionLabel ={
  children : string ; 
}