import React from "react";
import axios from "axios";
import { TaskType } from "../Data";

interface ColumnProps {
  title: string;
  tasks: TaskType[];
  className?: string;
  onTaskClick: (task?: TaskType | null) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, status: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Column: React.FC<ColumnProps> = ({
  title,
  tasks,
  onTaskClick,
  onDragStart,
  onDrop,
  onDragOver,
  className,
}) => {
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
      console.error("Missing task ID for task:", task);
    }
  };

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

  const getStatusColorClass = (category: string) => {
    switch (category) {
      case "Low":
        return "bg-orange-300 text-orange-700";
      case "Hight":
        return "bg-red-300 text-red-700";
      case "Complete":
        return "bg-green-300 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div
      className={`column ${className} flex-1 min-w-0 mr-4`}
      onDrop={(e) => onDrop(e, title)}
      onDragOver={onDragOver}
    >
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
          className="task bg-white border border-gray-300 rounded-lg my-2 p-2 w-full flex flex-col items-start cursor-pointer"
          onClick={() => handleClickTask(task)}
          draggable
          onDragStart={(e) => onDragStart(e, task._id || "")}
        >
          <p
            className={`flex text-sm text-gray-700 border-solid box-border rounded-md ${getStatusColorClass(
              task.category
            )}`}
          >
            {task.category}
          </p>
          <h3 className="text-md font-semibold my-1">{task.title}</h3>
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

export default Column;
