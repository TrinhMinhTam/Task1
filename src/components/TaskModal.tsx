import React, { useState } from 'react';
import { TaskType } from './Data.tsx';


interface TaskModalProps {
  task: TaskType;
  onMove?: (newColumnIndex: number) => void;
  onClick?: () => void;
  onClose?: () => void;
}


const TaskModal: React.FC<TaskModalProps> = ({ task, onMove, onClick, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(task.defaultDropdownValue);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColumnIndex = e.target.selectedIndex;
    setSelectedOption(e.target.value);
    // onMove(newColumnIndex);
  };

  return (
    <div className="modal" onClick={onClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <select
          aria-label="Dropdown options"
          value={selectedOption}
          onChange={handleDropdownChange}
          title="Select task status"
        >
          {task.dropdownOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskModal;
