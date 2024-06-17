// TaskModal.tsx
import React, { useState } from "react";
import { TaskType, UserType } from "./Data";

interface TaskModalProps {
  task: TaskType;
  onMove?: (newColumnIndex: number) => void;
  onClose: () => void;
  onSave: (updatedTask: TaskType, status: string, userId: number) => void;
  onDelete: (taskId: number) => void; // Thêm prop onDelete
  userList: UserType[];
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onSave,
  onDelete,
  userList,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(task.status);
  const [selectedUserId, setSelectedUserId] = useState(task.userId);
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };
  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(parseInt(e.target.value));
  };
  const handleSave = () => {
    onSave(task, selectedStatus, selectedUserId);
  };
  const handleDelete = () => {
    onDelete(task.id);
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{task.title}</h2>
        <label className="block text-left mb-2 font-medium">
          Người dùng:
          <select
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            value={selectedUserId}
            onChange={handleUserChange}
          >
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.userName} ({user.role})
              </option>
            ))}
          </select>
        </label>
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
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          onClick={handleDelete}
        >
          Xóa
        </button>
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
