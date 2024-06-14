// TaskModal.tsx
import React, { useState } from "react";
import { TaskType } from "./Data";

interface TaskModalProps {
  task: TaskType;
  onMove?: (newColumnIndex: number) => void;
  onClose: () => void;
  onSave: (updatedTask: TaskType, status: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onMove,
  onClose,
  onSave,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(task.status);
  // const [newColumnIndex, setNewColumnIndex] = useState<number | null>(null);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const selectedIndex = e.target.selectedIndex;
    setSelectedStatus(e.target.value);
    // setNewColumnIndex(selectedIndex);]
  };

  const handleSave = () => {
    onSave(task, selectedStatus);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{task.title}</h2>
        <label className="block text-left mb-2 font-medium">
          Trạng thái:
          <select
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            value={selectedStatus}
            onChange={handleDropdownChange}
          >
            <option value="Bắt đầu">Bắt đầu</option>
            <option value="Đang tiến hành">Đang tiến hành</option>
            <option value="Hoàn thành">Hoàn thành</option>
            <option value="Kết thúc">Kết thúc</option>
          </select>
        </label>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={handleSave}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
