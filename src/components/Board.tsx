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
      console.log('New columns after task move:', newColumns); // Log new columns after task move
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
          onTaskTick={() => { console.log('Task ticked!'); }} // Log task tick
          // onTaskClick={() => { console.log('Task clicked!'); }} // Log task click
          columnIndex={columnIndex} // Add columnIndex
          isLastColumn={columnIndex === columns.length - 1} // Add isLastColumn
        />
      ))}
    </div>
  );
};

export default Board;
