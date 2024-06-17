import React from "react";
import Task from "./Task";
import TaskModal from "./TaskModal";
import { TaskType } from "./Data";

interface ColumnProps {
  title: string;
  tasks: TaskType[];
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
  // const handleClickTask = (task: TaskType) => {
  //   setSelectedTask(task);
  //   setOpen(true);
  // };

  // const onCloseModal = () => {
  //   setSelectedTask(null);
  //   setOpen(false);
  // };

  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            // onTaskMove={(newStatus) => onTaskMove(index, newStatus)}
            // onTaskSave={(updatedTask) => onTaskSave(updatedTask, )}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
      {/* {
        <button onClick={onAddTask} className="add-task-btn">
          Thêm task
        </button>
      } */}
    </div>
  );
};

export default Column;
