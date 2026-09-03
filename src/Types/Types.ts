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
  funcClose: () => void ; 
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
 export type User = {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  age: number;
  
}
export type UserTypes = {
  firstName?: string ; 
  lastName ?: string ; 
  age ?: string ;
  birthDate ?: string ;
  email ?: string ; 
  image?: string;
}
export type EditProfileModalProps ={
  formData : UserTypes | null ; 
  funcClose : () => void ; 
  setFormData : (e : UserTypes) => void ; 
}

export type sectionLabel ={
  children : string ; 
}