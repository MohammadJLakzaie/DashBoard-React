import { useState } from "react";
import TaskColumn from "../Components/TaskColumn";
import type { taskType } from "../Types/Types";
import CardInside from "./CardInside";

type columnType = {
  name: string;
  status: string;
};

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
    },
    {
      title: "task2",
      status: "inProgress",
    },
    {
      title: "task3",
      status: "Done",
    },
    {
      title: "task4",
      status: "pending",
    },
    {
      title: "task7",
      status: "Done",
    },
  ]);

  const [close, setclose] = useState(false);
  const [selectTask, setSelect] = useState("");
  const handleClose = (t) => {
    close ? setclose(false) : setclose(true);
    setSelect(t.title);
    console.log(t);
  };

  const AddTask = (title: string, status: string) => {
    setTask((prev) => [...prev, { title, status }]);
  };

  return (
    <div className="overflow-x-auto p-4 h-[calc(100vh-navbarHeight)] ">
      {close && (
        <div className="flex justify-center z-10">
          <CardInside funcClose={handleClose} title={selectTask} />
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
  );
}
