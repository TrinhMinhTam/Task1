import React, { useEffect } from "react";
import Task from "./Task";
import TaskModal from "./TaskModal";
import { TaskType } from "./Data";
import axios from "axios";

interface ColumnProps {
  title: string;
  tasks: TaskType[];
  className?: string;
  id: number;
  // onTaskMove: (taskIndex: number, newStatus: string) => void;
  // onTaskSave: (updatedTask: TaskType, status:string) => void;
  // onAddTask: () => void;
  // columnIndex: number;
  // isLastColumn: boolean;
  // onTaskTick: () => void;
  onTaskClick: (task: TaskType) => void;
}

const Column: React.FC<ColumnProps> = ({
  title,
  tasks,
  onTaskClick,
  className,
  id,
  // onTaskTick,
  // // onTaskMove,
  // onTaskSave,
  // onAddTask,
  // columnIndex,
  // isLastColumn,
}) => {
  const [selectedTask, setSelectedTask] = React.useState<TaskType | null>(null);
  const [open, setOpen] = React.useState(false);
  const filteredTasks = tasks.filter((task) => task.title === title);
  console.log("title", filteredTasks);
  // console.log("id", tasks.id);
  // const handleClickTask = (task: TaskType) => {
  //   console.log("get one", getOne);
  //   onTaskClick(task);
  //   // Pass the clicked task to the parent component
  // };

  // const onCloseModal = () => {
  //   setSelectedTask(null);
  //   setOpen(false);
  // };

  const getColumnBorderColor = (status: string) => {
    switch (status) {
      case "To do":
        return "border-purple-500";
      case "On Progress":
        return "border-yellow-500";
      case "Done":
        return "border-green-500";
      default:
        return "border-gray-500";
    }
  };
  const getOne = (taskId: string) => {
    axios
      .get(`http://nmt.logit.id.vn:5005/api/v1/task/getOne/${taskId}`)
      .then((response) => {
        if (response.data.status === true) {
          console.log("Task details:", response.data);
        } else {
          console.error("Task not found or some error occurred");
        }
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  };
  const handleClickTask = (task: TaskType) => {
    if (task._id) {
      getOne(task._id);
      onTaskClick(task);
    } else {
      console.error("lỗi ID");
    }
  };

  return (
    <div className={`column ${className} flex-1 min-w-0 mr-4`}>
      <h2
        className={`text-lg font-bold mb-4 border-b-4 pb-2 mr-4 ${getColumnBorderColor(
          title
        )}`}
      >
        {title}
      </h2>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="task bg-gray-100 p-4 mb-4 rounded shadow cursor-pointer"
          onClick={() => handleClickTask(task)}
        >
          <p
            className={`text-sm text-gray-700 border-solid border-2 rounded-md ${getStatusColorClass(
              task.category
            )}`}
          >
            {task.category}
          </p>
          <h3 className="text-md font-semibold mb-2">{task.title}</h3>
          <p className="text-sm text-gray-700">{task.status}</p>
          <p className="text-sm text-gray-700">{task.content}</p>
          {task.image && (
            <img src={task.image} alt={task.title} className="mt-2" />
          )}
        </div>
      ))}
    </div>
  );
};

const getStatusColorClass = (category: string) => {
  switch (category) {
    case "Low":
      return " bg-orange-300 text-orange-700";
    case "Hight":
      return "bg-red-300 text-red-700";
    case "Complete":
      return " bg-green-300 text-green-700";
    default:
      return console.log("color", category);
  }
};

export default Column;
