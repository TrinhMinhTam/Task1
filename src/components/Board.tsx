import React, { useEffect, useState } from "react";
import Column from "./Column";
import { TaskType, columns, initialData } from "./Data";
import TaskModal from "./TaskModal";

// Hàm để lấy trạng thái theo id

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>(initialData);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false); // State để xác định trạng thái hiển thị của Task Modal
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null); // Task được chọn để hiển thị trong Task Modal

  const handleTaskClick = (task: TaskType) => {
    setSelectedTask(task); // Lưu task được chọn vào state selectedTask
    setIsTaskModalOpen(true); // Mở Task Modal
  };

  // Hàm để xử lý việc di chuyển task từ cột này sang cột khác

  useEffect(() => {
    console.log("tasks uef: ", tasks);
  }, [tasks]);
  // Hàm để lưu task sau khi cập nhật
  const handleTaskSave = (updatedTask: TaskType, status: string) => {
    console.log("update", updatedTask);
    const clonetask = [...tasks];
    console.log("clonebf", tasks);
    clonetask.map((task: TaskType) => {
      if (task.id === updatedTask.id) {
        task.status = status;
        // console.log('map',task)
      }
    });
    console.log("cloneaf", clonetask);
    setTasks(clonetask);
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  // Hàm để thêm task mới vào cột
  const handleAddTask = () => {
    const newTask: TaskType = {
      id: tasks.length++,
      title: `Task ${tasks.length++}`,
      status: "Bắt đầu", // Hoặc giá trị mặc định tùy ý
      userId: 1,
    };
    if (newTask) {
      let clonetask: TaskType[] = [...tasks, newTask];
      let updatedTask: TaskType[] = [];
      clonetask.forEach((task) => {
        if (task) {
          updatedTask.push(task);
        }
      });
      console.log("clonebf", updatedTask);
      setTasks(updatedTask);
    }
  };

  // Render các cột
  return (
    <div className="board">
      {/* Cột "Bắt đầu" */}

      {columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          tasks={tasks.filter((task) => task.status === column.status)}
          onTaskClick={handleTaskClick}
          // onTaskMove={(taskIndex, newColumnIndex) => handleTaskMove(taskIndex, getStatusById(newColumnIndex.toString()))}
          // onTaskSave={handleTaskSave}
          onAddTask={() => handleAddTask()}
          // columnIndex={0}
          // isLastColumn={false}
          // onTaskTick={() => {}}
        />
      ))}
      {/* <button onClick={(columns.onAddTask) = {}} className="add-task-btn">
        Thêm task
      </button> */}
      {/* Task Modal */}
      {isTaskModalOpen && selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setIsTaskModalOpen(false)}
          onSave={(task: TaskType, status: string) =>
            handleTaskSave(task, status)
          }
          // console.log('Updated task:', updatedTasks);
        />
      )}
    </div>
  );
};

export default Board;
