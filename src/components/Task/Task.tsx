import React, { useState } from "react";
import { TaskType } from "../Data";

interface TaskProps {
  task: TaskType;
  // onTaskMove: (newStatus: string) => void;
  // onTaskSave: (updatedTask: TaskType) => void;
  onTaskTick?: () => void;
  onClick: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onTaskTick, onClick }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [selectedOption, setSelectedOption] = useState(task.status); // Sử dụng status thay vì defaultDropdownValue

  const handleSave = () => {
    const updatedTask: TaskType = {
      ...task,
      title: updatedTitle,

      status: selectedOption, // Cập nhật status thay vì defaultDropdownValue
    };
    // onTaskSave(updatedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setUpdatedTitle(task.title);
    setSelectedOption(task.status); // Đặt lại status khi huỷ chỉnh sửa
    setEditing(false);
  };
  const handleClick = () => {
    if (onClick) {
      onClick(); // Gọi hàm onClick nếu nó được truyền vào
    }
  };

  return (
    <div
      className="task p-4 bg-gray-100 rounded shadow mb-4 cursor-pointer"
      onClick={handleClick}
    >
      {!editing ? (
        <div
          className={`task-content ${
            task.status === "Done" ? "completed" : ""
          }`}
        >
          <h3 className="text-md font-semibold mb-2">{task.title}</h3>
          <p className="text-sm text-gray-700">Trạng thái: {task.status}</p>
          <p className="text-sm text-gray-700">{task.content}</p>
          {task.image && (
            <img src={task.image} alt={task.title} className="mt-2 rounded" />
          )}
        </div>
      ) : (
        <div>
          {/* Form editing task */}
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 mb-2"
            value={updatedTitle}
            placeholder="Enter task title"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-2"
          >
            <option value="To do">To do</option>
            <option value="On Progress">On Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="flex justify-end">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-3 py-1 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;