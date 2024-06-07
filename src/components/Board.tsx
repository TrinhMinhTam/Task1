import React, { useState } from 'react';
import Column from './Column';
import { initialData } from './Data'; // Import initialData from Data.tsx

const Board: React.FC = () => {
  const [columns, setColumns] = useState(initialData); // Use initialData from Data.tsx

  const handleTaskMove = (columnIndex: number, taskIndex: number, newColumnIndex: number) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const [movedTask] = newColumns[columnIndex].tasks.splice(taskIndex, 1);
      newColumns[newColumnIndex].tasks.push(movedTask);
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
          onTaskMove={(taskIndex, newColumnIndex) => handleTaskMove(columnIndex, taskIndex, newColumnIndex)}
          onTaskTick={() => {}} // Add onTaskTick placeholder
          onTaskClick={() => {}} // Add onTaskClick placeholder
          columnIndex={columnIndex} // Add columnIndex
          isLastColumn={columnIndex === columns.length - 1} // Add isLastColumn
        />
      ))}
    </div>
  );
};

export default Board;
