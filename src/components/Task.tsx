import React, { useState } from 'react';
import { TaskData } from './Column';

interface TaskProps {
  task: TaskData;
  onTick: () => void;
  onMove: (newColumnIndex: number) => void;
  onClick: () => void;
  isCompleted: boolean;
}
const Task = (props:TaskProps) => {
  const { task, onTick, onMove, onClick, isCompleted } = props;
  const [selectedOption, setSelectedOption] = useState(task.defaultDropdownValue);
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColumnIndex = e.target.selectedIndex;
    setSelectedOption(e.target.value);
    onMove(newColumnIndex);
  };


  return (
    <div className="task" onClick={onClick}>
      {/* <input 
        type="radio" 
        checked={isCompleted} 
        onChange={onTick} 
        disabled={isCompleted} 
        title='Hoàn thành công việc'
      /> */}
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {/* {!isCompleted && (
        <DropdownButton id="dropdown-basic-button" title={task.defaultDropdownValue}>
          {task.dropdownOptions.map((option, index) => (
            <Dropdown.Item key={index} onClick={onTick}>{option}</Dropdown.Item>
          ))}
        </DropdownButton>
      )} */}
    </div>
  );
};

export default Task;
