import React, { useEffect, useState } from "react";
import Column from "./Column";
import { TaskType, columns, initialData, userList } from "./Data";
import TaskModal from "./TaskModal";
import AddTaskModal from "./AddTaskModal";

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>(initialData);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false); // State để xác định trạng thái hiển thị của Task Modal
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [nextTaskId, setNextTaskId] = useState(tasks.length);

  const handleTaskClick = (task: TaskType) => {
    setSelectedTask(task); // Lưu task được chọn vào state selectedTask
    setIsTaskModalOpen(true); // Mở Task Modal
  };

  useEffect(() => {
    console.log("tasks uef: ", tasks);
  }, [tasks]);
  // Hàm để lưu task sau khi cập nhật
  const handleTaskSave = (
    updatedTask: TaskType,
    status: string,
    userId: number
  ) => {
    console.log("update", updatedTask);
    const clonetask = [...tasks];
    console.log("clonebf", tasks);
    clonetask.map((task: TaskType) => {
      if (task.id === updatedTask.id) {
        task.status = status;
        task.userId = userId;
      }
    });
    console.log("cloneaf", clonetask);
    setTasks(clonetask);
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const handleAddTask = () => {
    setIsAddTaskModalOpen(true);
  };
  const handleSaveNewTask = (title: string, status: string) => {
    const newTask: TaskType = {
      id: nextTaskId,
      title,
      status,
      userId: 1,
    };
    setTasks([...tasks, newTask]);
    setNextTaskId(nextTaskId + 1);
  };
  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  // Render các cột
  return (
    <div className="board">
      <h1 className="board-title">Bảng công việc</h1>
      <button onClick={handleAddTask} className="add-task-btn">
        Thêm task
      </button>
      <div className="column-container">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            tasks={tasks.filter((task) => task.status === column.status)}
            onTaskClick={handleTaskClick}
            // onTaskMove={(taskIndex, newColumnIndex) => handleTaskMove(taskIndex, getStatusById(newColumnIndex.toString()))}
            // onTaskSave={handleTaskSave}
            // onAddTask={() => handleAddTask()}
            // columnIndex={0}
            // isLastColumn={false}
            // onTaskTick={() => {}}
          />
        ))}
        {/* Task Modal */}
        {isTaskModalOpen && selectedTask && (
          <TaskModal
            task={selectedTask}
            onClose={() => setIsTaskModalOpen(false)}
            onSave={(task: TaskType, status: string, userId: number) =>
              handleTaskSave(task, status, userId)
            }
            onDelete={handleTaskDelete}
            userList={userList} // Truyền userList xuống TaskModal
          />
        )}
        {isAddTaskModalOpen && (
          <AddTaskModal
            onClose={() => setIsAddTaskModalOpen(false)}
            onSave={handleSaveNewTask}
            userList={userList}
          />
        )}
      </div>
    </div>
  );
};

export default Board;
