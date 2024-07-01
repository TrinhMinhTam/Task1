import React, { useEffect, useState } from "react";
import Column from "./Column";
import { TaskType, UserType } from "../Data";
import TaskModal from "./TaskModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { addTask, delTask, getAllTasks, putTask } from "./API";
import Layout from "../../App";

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState<UserType[]>([]);
  const [check, setCheck] = useState(false);
  const [reloadApi, setReloadApi] = useState(false);
  const [statusList, setStatusList] = useState<{ _id: string; name: string }[]>(
    []
  );

  const handleTaskClick = (task?: TaskType | null) => {
    if (task) {
      setSelectedTask(task);
      setIsTaskModalOpen(true);
      setCheck(false);
    } else {
      setCheck(true);
      setIsTaskModalOpen(true);
      setSelectedTask(null);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [reloadApi]);
  useEffect(() => {
    fetchUser();
    fetchStatus();
  }, []);
  const fetchTasks = () => {
    setIsLoading(true);
    getAllTasks("task/getList", (response: any) => {
      console.log("res", response.data);
      setTasks(response.data);
    });
    setIsLoading(false);
  };

  const fetchUser = () => {
    getAllTasks("user/getList", (response: any) => {
      console.log("user", response.data);
      setUserList(response.data);
    });
  };

  const fetchStatus = () => {
    getAllTasks("status/getList", (response: any) => {
      console.log("status", response.data);
      setStatusList(response.data);
    });
  };

  const handleTaskSave = async (updatedTask: TaskType) => {
    try {
      if (check) {
        addTask(`task/add`, updatedTask, (res: any) => {
          console.log("add task", res.data);
          setReloadApi(!reloadApi);
        });
      } else {
        putTask(`task/update/${updatedTask._id}`, updatedTask, (res: any) => {
          console.log("update task", res);
          setReloadApi(!reloadApi);
        });
      }
      setIsTaskModalOpen(false);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleTaskDelete = async (taskId: string) => {
    try {
      delTask(`task/delete/${taskId}`, (response: any) => {
        console.log("delete task", response.data);
        setReloadApi(!reloadApi);
      });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) => {
    e.dataTransfer.setData("taskId", taskId);
    console.log("kéo", taskId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    console.log("thả", updatedTasks);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Layout
      children={
        <div className="board w-full p-6 max-w-7xl mx-auto flex flex-col items-center max-h-[650px] overflow-y-auto">
          <h1 className="board-title text-3xl font-bold mb-4">
            Bảng công việc
          </h1>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleTaskClick(null)}
              className="add-task-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Thêm Task
            </button>
            <button
              onClick={fetchTasks}
              className="refresh-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Refresh
            </button>
            {isLoading && (
              <button
                className="buttonload bg-blue-500 text-white py-2 px-4 rounded inline-flex items-center"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin />
                <span className="ml-2">Loading...</span>
              </button>
            )}
          </div>
          <div className="column-container flex space-x-4">
            {statusList.map((status) => (
              <Column
                key={status._id}
                title={status.name}
                tasks={tasks.filter((task) => task.status === status.name)}
                onTaskClick={handleTaskClick}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="bg-white p-4 rounded shadow"
              />
            ))}
          </div>
          {isTaskModalOpen && (
            <TaskModal
              task={
                selectedTask || {
                  title: "",
                  status: "To do",
                  userId: 1,
                  category: "Low",
                  content: "",
                  image: "",
                }
              }
              onClose={() => setIsTaskModalOpen(false)}
              onSave={handleTaskSave}
              onDelete={handleTaskDelete}
              userList={userList}
              filter={check ? "Thêm Task" : "Chỉnh sửa Task"}
            />
          )}
        </div>
      }
    ></Layout>
  );
};

export default Board;
