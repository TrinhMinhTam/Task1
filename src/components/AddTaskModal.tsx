import React, { useState } from "react";

interface AddTaskModalProps {
  onClose: () => void;
  onSave: (title: string, status: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Bắt đầu");

  const handleSave = () => {
    console.log("Saving task with title:", title);
    console.log("Saving task with status:", status);
    onSave(title, status);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Thêm Task Mới</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Bắt đầu">Bắt đầu</option>
          <option value="Đang tiến hành">Đang tiến hành</option>
          <option value="Hoàn thành">Hoàn thành</option>
          <option value="Kết thúc">Kết thúc</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
