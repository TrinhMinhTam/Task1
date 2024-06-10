import React from 'react';
 import Task from './Task';
import TaskModal from './TaskModal';
import { TaskType } from './Data';

export interface TaskData {
  id: string;
  title: string;
  description: string;
  dropdownOptions: {id: string; value: string; }[];
  defaultDropdownValue: string;
}

interface ColumnProps {
  title: string;
  tasks: TaskData[];
  onTaskTick: (taskIndex: number) => void;
  onTaskMove: (taskIndex: number, newColumnIndex: number) => void;
  // onTaskClick: () => void;
  columnIndex: number;  
  isLastColumn: boolean;
}

const Column  = (props:ColumnProps) => {
  const {isLastColumn,onTaskMove,onTaskTick,tasks,title} = props;
  const [selectedTask, setSelectedTask] = React.useState<TaskData | null>(null); // State to store selected task
  const [open,setOpen] = React.useState(false)
  const handleClickTask = (task: TaskType) => {
    setSelectedTask(task); // Set selected task
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
          onClick={() => handleClickTask(task)} 
          isCompleted={isLastColumn} 
        />
      ))}
      {open ? <TaskModal task={selectedTask as any } onClose={onCloseModal} /> : <></>}
    </div>
  );
};

export default Column;
