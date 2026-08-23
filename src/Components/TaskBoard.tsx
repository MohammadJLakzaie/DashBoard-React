import { useState } from "react";
import TaskColumn from "../Components/TaskColumn";
import type { taskType } from "../Types/Types";
import TaskDetailsModal from "./TaskDetailsModal";
import type {columnType} from "../Types/Types";
import { DragDropProvider } from '@dnd-kit/react';


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
      id : crypto.randomUUID()
    },
    {
      title: "task2",
      status: "inProgress",
      id : crypto.randomUUID()
    },
    {
      title: "task3",
      status: "Done",
      id : crypto.randomUUID()
    },
    {
      title: "task4",
      status: "pending",
      id : crypto.randomUUID()
    },
    {
      title: "task7",
      status: "Done",
      id : crypto.randomUUID()
    },
    {
      title: "task9",
      status: "Done",
      id : crypto.randomUUID()
    },
  ]);

  const [close, setclose] = useState(false);
  const [taskTilte, setTitle] = useState("");
  const [taskId, setTaskId] = useState("");

  //this function will colse/open and set the TaskDetailsModal-Component 
const handleClose = (t: taskType): void => {
  close ? setclose(false) : setclose(true);

  setTitle(t.title);
  setTaskId(t.id)
  console.log(t);
};
// save previos task and add another task
  const AddTask = (title: string, status: string ) => {
    setTask((prev) => [...prev, { title, status , id:crypto.randomUUID() }]);
  };
  //Delete task
  const deleteTask = (taskId : string) =>{
     // a new Array that does not have that id
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  setTask(updatedTasks); // update state
    setclose(false)
  }
//Drag & Drop 
   const handleDragEnd = ( event ) => {
    // ۱. اطلاعات مبدأ و مقصد رو از event استخراج کن
 const { source, target } = event.operation;
    // ۲. اگر کاربر کارت رو بیرون از ستون‌ها رها کرده، کاری نکن
    if (!target) {
      console.log('کارت بیرون از محدوده رها شد');
      console.log(target)
      console.log(source)
      console.log(event)

      return;
    }

    // ۳. تسک مورد نظر رو در آرایه پیدا کن
    const draggedTask = tasks.find(task => task.id === source.id);
    
    // ۴. اگر تسک پیدا نشد، کاری نکن
    if (!draggedTask) {
      console.log('تسک پیدا نشد!');
      return;
    }

    // ۵. اگر تسک در همان ستون خودش رها شده، کاری نکن
    if (draggedTask.status === target.id) {
      console.log('تسک در همان ستون رها شد');
      return;
    }

    // ۶. یک آرایه جدید بساز و status تسک رو عوض کن
    const updatedTasks = tasks.map(task =>
      task.id === source.id
        ? { ...task, status: target.id } // تغییر status
        : task
    );

    // ۷. State رو به‌روزرسانی کن
    setTask(updatedTasks);
    
    // ۸. (اختیاری) برای دیباگ، توی کنسول ببین چی شد
    console.log(`تسک ${source.id} به ستون ${target.id} منتقل شد`);
  };
  return (
 <DragDropProvider onDragEnd={handleDragEnd}>
          <div className="overflow-x-auto p-4 h-[calc(100vh-navbarHeight)] ">
      {close && (
        <div className="flex justify-center z-10">
          <TaskDetailsModal funcClose={handleClose} title={taskTilte} taskId={taskId} onDeleteTask={deleteTask}/>
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
