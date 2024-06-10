import React, { useState } from 'react';
import { TaskType } from './Data.tsx';


interface TaskModalProps {
  task: TaskType;
  onMove?: (newColumnIndex: number) => void;
  onClick?: () => void;
  onClose: () => void;
  onSave: (updatedTask:TaskType,newColumnIndex:number) => void;
}


const TaskModal: React.FC<TaskModalProps> = ({ task, onMove, onClick, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = useState(task.defaultDropdownValue);

  const [newColumnIndex, setNewColumnIndex] = useState<number | null>(null);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedIndex = e.target.selectedIndex;
    setSelectedOption(e.target.value);
    setNewColumnIndex(selectedIndex);
  };

  const handleSave = () => {
    if (onSave && newColumnIndex !== null) {
      onSave({ ...task, defaultDropdownValue: selectedOption }, newColumnIndex);
    }
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
        <br></br>
        <button onClick={handleSave}>Lưu</button>
      </div>
    </div>
  );
};

export default TaskModal;
