import { useState } from "react";
import TaskColumn from "../Components/TaskColumn";
import type { taskType } from "../Types/Types";
import TaskDetailsModal from "./TaskDetailsModal";
import type {columnType} from "../Types/Types";
import { DragDropProvider } from '@dnd-kit/react';
import type { DragEndEvent } from '@dnd-kit/dom';
import { PointerSensor, PointerActivationConstraints } from '@dnd-kit/dom';

export default function TaskBoard() {
  const columns: columnType[] = [
    {
      name: "بک لاگ",
      status: "backlog",
    },
    {
      name: "در حال انجام",
      status: "inProgress",
    },
    {
      name: "درانتظار",
      status: "pending",
    },
    {
      name: "انجام شده",
      status: "Done",
    },
  ];

  const [tasks, setTask] = useState<taskType[]>([
    {
      title: "task1",
      status: "backlog",
      id : crypto.randomUUID(),
      description : 'this is task 1'
    },
    {
      title: "task2",
      status: "inProgress",
      id : crypto.randomUUID() ,
      description : 'this is task 2'
    },
    {
      title: "task3",
      status: "Done",
      id : crypto.randomUUID() ,
      description : 'this is task 3'
    },
    {
      title: "task4",
      status: "pending",
      id : crypto.randomUUID() ,
      description : 'this is task 4'
    },
    {
      title: "task7",
      status: "Done",
      id : crypto.randomUUID() ,
      description : 'this is task 7'
    },
    {
      title: "task9",
      status: "Done",
      id : crypto.randomUUID() ,
      description : 'this is task 9'
    },
  ]);

  const [close, setclose] = useState(false);
  const [taskTilte, setTitle] = useState("");
  const [taskId, setTaskId] = useState("");
  const [descriptionTask, setDescription] = useState("");

  //this function will colse/open and set the TaskDetailsModal-Component 
const handleClose = (t: taskType): void => {
  close ? setclose(false) : setclose(true);

  setTitle(t.title);
  setTaskId(t.id) ;
  setDescription(t.description)
  console.log(t);
};
const modalCloser = () => {
  close ? setclose(false) : setclose(true);
}
// save previos task and add another task
  const AddTask = (title: string, status: string ) => {
    setTask((prev) => [...prev, { title, status , id:crypto.randomUUID() , description : '' }]);
  };
  //Delete task
  const deleteTask = (taskId : string) =>{
     // a new Array that does not have that id
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  setTask(updatedTasks); // update state
    setclose(false) ;
  }
  // Edit Task
const handleUpdateTask = (taskId: string, newDescription: string) => {
  setTask(prevTasks =>
    prevTasks.map(task =>
      task.id === taskId ? { ...task, description: newDescription } : task
    )
  );
  setclose(false) 
};

//Drag & Drop 
   const handleDragEnd = ( event :DragEndEvent ) => {
    // ۱. اطلاعات مبدأ و مقصد رو از event استخراج کن
 const { source, target } = event.operation;
    // ۲. اگر کاربر کارت رو بیرون از ستون‌ها رها کرده، کاری نکن
    if (!target) {
 return;
    }

    // ۳. تسک مورد نظر رو در آرایه پیدا کن
    const draggedTask = tasks.find(task => task.id === source?.id);
    
    // ۴. اگر تسک پیدا نشد، کاری نکن
    if (!draggedTask) {
      return;
    }

    // ۵. اگر تسک در همان ستون خودش رها شده، کاری نکن
    if (draggedTask.status === target.id) {
      return;
    }

    // ۶. یک آرایه جدید بساز و status تسک رو عوض کن
    const updatedTasks: taskType[]  = tasks.map(task =>
      task.id === source?.id
        ? { ...task, status: String(target.id) } // تغییر status
        : task
    );

    // ۷. State رو به‌روزرسانی کن
    setTask(updatedTasks);
  };
  return (
 <DragDropProvider onDragEnd={handleDragEnd}     
  sensors={(defaultSensors) => [
        // سنسورهای پیش‌فرض رو نگه میداریم
        ...defaultSensors.filter(sensor => sensor !== PointerSensor),
        // PointerSensor رو با تنظیمات جدید جایگزین می‌کنیم
        PointerSensor.configure({
          activationConstraints: [
            // فعال‌سازی بعد از ۳۰۰ میلی‌ثانیه نگه‌داری با ۵ پیکسل تحمل
            new PointerActivationConstraints.Delay({
              value: 200,
              tolerance: 5,
            }),
          ],
        }),
      ]}>
          <div className="overflow-x-auto p-4 h-[calc(100vh-navbarHeight)] ">
      {close && (
        <div className="flex justify-center z-10">
          <TaskDetailsModal funcClose={modalCloser} title={taskTilte} taskId={taskId} onDeleteTask={deleteTask} description={descriptionTask} setDescription={setDescription} editCard={handleUpdateTask}/>
        </div>
      )}

      <div className="flex gap-4 min-w-275 justify-center h-full">
        {columns.map((a) => (
          <TaskColumn
            key={a.status}
            name={a.name}
            column={a.status}
            filteredTasks={tasks.filter((task) => task.status === a.status)}
            onAddTask={AddTask}
            funcOpen={handleClose}
          />
        ))}
      </div>
    </div>
    </DragDropProvider>
  );
}
