import React, { useState } from 'react';
import { TaskType } from './Data';

interface TaskProps {
  task: TaskType;
  // onTaskMove: (newStatus: string) => void;
  // onTaskSave: (updatedTask: TaskType) => void;
  onTaskTick?: () => void;
  onClick:()=> void;
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
    <div className="task" onClick={onClick}>
      {!editing ? (
        <>
          <div className="task-header">
            <h3>{task.title}</h3>
          </div>
          <p>Trạng thái: {task.status}</p> {/* Hiển thị trạng thái thay vì defaultDropdownValue */}
        </>
      ) : (
        <>
          
        </>
      )}
      {/* <button onClick={() => onTaskMove(selectedOption)}>Di chuyển task</button> */}
    </div>
  );
};

export default Task;
