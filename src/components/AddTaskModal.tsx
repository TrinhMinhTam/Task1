import React, { useState } from "react";
import { UserType } from "./Data";

interface AddTaskModalProps {
  onClose: () => void;
  onSave: (title: string, status: string, userId: number) => void;
  userList: UserType[];
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  onClose,
  onSave,
  userList,
}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Bắt đầu");
  const [selectedUserId, setSelectedUserId] = useState(
    userList.length > 0 ? userList[0].id : 1
  ); // Khởi tạo với userId đầu tiên trong danh sách

  const handleSave = () => {
    console.log("Saving task with title:", title);
    console.log("Saving task with status:", status);
    onSave(title, status, selectedUserId);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Thêm Task Mới</h2>
        <label className="block text-left mb-2 font-medium">
          Tiến trình
          <input
            type="text"
            placeholder="Tên tiến trình"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="block text-left mb-2 font-medium">
          Người dùng:
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(parseInt(e.target.value))}
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
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Bắt đầu">Bắt đầu</option>
            <option value="Đang tiến hành">Đang tiến hành</option>
            <option value="Hoàn thành">Hoàn thành</option>
            <option value="Kết thúc">Kết thúc</option>
          </select>
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
