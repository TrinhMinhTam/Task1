import React from 'react';
import Task from './Task';
import TaskModal from './TaskModal';

export interface TaskData {
  title: string;
  description: string;
  dropdownOptions: string[];
  defaultDropdownValue: string;
}

interface ColumnProps {
  title: string;
  tasks: TaskData[];
  onTaskTick: (taskIndex: number) => void;
  onTaskMove: (taskIndex: number, newColumnIndex: number) => void;
  onTaskClick: () => void;
  columnIndex: number;  
  isLastColumn: boolean;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, onTaskTick, onTaskMove, onTaskClick, columnIndex, isLastColumn }) => {
  const [selectedTask, setSelectedTask] = React.useState<TaskData | null>(null); // State to store selected task
  const [open,setOpen] = React.useState(false)
  const handleClickTask = (taskIndex: number) => {
    setSelectedTask(tasks[taskIndex]); // Set selected task
    onTaskClick(); // Call onTaskClick to open TaskModal
    setOpen(!open)
  };

  const onCloseModal = ()=>{
    setSelectedTask(null)
    setOpen(!open)
  }
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          onTick={() => onTaskTick(index)} 
          onMove={(newColumnIndex) => onTaskMove(index, newColumnIndex)} 
          onClick={() => handleClickTask(index)} 
          isCompleted={isLastColumn} 
        />
      ))}
      {open ? <TaskModal task={selectedTask as any } onClose={onCloseModal} /> : <></>}
    </div>
  );
};

export default Column;
