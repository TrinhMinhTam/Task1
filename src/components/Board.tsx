import React, { useState } from 'react';
import Column from './Column';
import { TaskType, initialData } from './Data'; // Import initialData from Data.tsx

const Board: React.FC = () => {
  const [columns, setColumns] = useState(initialData); // Use initialData from Data.tsx

  const handleTaskMove = (columnIndex: number, taskIndex: number, newColumnIndex: number) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const [movedTask] = newColumns[columnIndex].tasks.splice(taskIndex, 1);
      newColumns[newColumnIndex].tasks.push(movedTask);
      console.log('New columns after task move:', newColumns); // Log new columns after task move
      return newColumns;
    });
  };
  const handleTaskSave = (updatedTask: TaskType, newColumnIndex: number) => {
    setColumns(prevColumns => {
      const newColumns = prevColumns.map(column => ({
        ...column,
        tasks: column.tasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      }));

      const currentColumnIndex = newColumns.findIndex(column =>
        column.tasks.some(task => task.id === updatedTask.id)
      );

      if (currentColumnIndex !== -1 && currentColumnIndex !== newColumnIndex) {
        const taskIndex = newColumns[currentColumnIndex].tasks.findIndex(task => task.id === updatedTask.id);
        const [movedTask] = newColumns[currentColumnIndex].tasks.splice(taskIndex, 1);
        newColumns[newColumnIndex].tasks.push(movedTask);
      }

      console.log('New columns after task save:', newColumns); // Log new columns after task save
      return newColumns;
    });
  };
  return (
    <div className="board">
      {columns.map((column, columnIndex) => (
        <Column
          key={columnIndex}
          title={column.title}
          tasks={column.tasks}
          onTaskMove={(taskIndex, newColumnIndex) => {
            console.log('Task move initiated:', columnIndex, taskIndex, newColumnIndex); // Log task move initiation
            handleTaskMove(columnIndex, taskIndex, newColumnIndex);
          }}
          onTaskSave={handleTaskSave} // Pass the handleTaskSave function to Column
          onTaskTick={() => { console.log('Task ticked!'); }} // Log task tick
          columnIndex={columnIndex} // Add columnIndex
          isLastColumn={columnIndex === columns.length - 1} // Add isLastColumn
        />
      ))}
    </div>
  );
};

export default Board;
