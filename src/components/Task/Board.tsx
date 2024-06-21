import React, { useEffect, useState } from "react";
import Column from "./Column";
import { TaskType, UserType, columns } from "../Data";
import TaskModal from "./TaskModal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false); // State để xác định trạng thái hiển thị của Task Modal
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State cho loading
  const [userList, setUserList] = useState<UserType[]>([]);
  const [check, setCheck] = useState(false);
  const [reloadApi, setReloadApi] = useState(false);
  const handleTaskClick = (task?: TaskType | null) => {
    if (task) {
      setSelectedTask(task);
      setIsTaskModalOpen(true);
      console.log("task");
      setCheck(false); // Reset check when clicking on a task
    } else {
      console.log("Button Thêm Task được click");
      setCheck(true);
      setIsTaskModalOpen(true);
      setSelectedTask(null);
    }
  };

  useEffect(() => {
    fetchTasks(); // Khởi động fetchTasks khi component được render lần đầu tiên
  }, [reloadApi]);

  const fetchTasks = () => {
    setIsLoading(true); // Bắt đầu tải dữ liệu
    setTimeout(() => {
      axios
        .get("http://nmt.logit.id.vn:5005/api/v1/task/getList")
        .then((response) => {
          setTasks(response.data);
          setIsLoading(false); // Dừng loading khi dữ liệu đã được tải
          console.log("API", response);
        })
        .catch((error) => {
          console.error("Error : ", error);
          setIsLoading(false); // Dừng loading nếu có lỗi xảy ra
        });
    }, 1000);
  };
  const fetchUser = () => {
    axios
      .get("http://nmt.logit.id.vn:5005/api/v1/user/getList")
      .then((Response) => {
        setUserList(Response.data);
        console.log("Data User ", Response);
      })
      .catch((Error) => {
        console.error("Lỗi User", Error);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    console.log("tasks uef: ", tasks);
  }, [tasks]);
  // Hàm để lưu task sau khi cập nhật
  const handleTaskSave = async (updatedTask: TaskType) => {
    if (check) {
      const newTask: TaskType = updatedTask;

      console.log("test", newTask);

      axios({
        url: "http://nmt.logit.id.vn:5005/api/v1/task/add",
        method: "POST",
        data: newTask,
      })
        .then((res: any) => {
          console.log("res: ", res.data);
        })
        .catch((err: any) => {
          console.log("err: ", err);
        });

      // } else {
      // console.log("quá trình update", updatedTask);

      setIsTaskModalOpen(!isTaskModalOpen);
    }
    setReloadApi(!reloadApi);
  };

  const handleTaskDelete = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };
  const handleRefresh = () => {
    setIsLoading(true);
    fetchTasks(); // Gọi lại hàm fetchTasks để refresh dữ liệu
  };
  // Render các cột
  return (
    <div className="board w-full p-6 max-w-7xl mx-auto flex flex-col items-center">
      <h1 className="board-title text-3xl font-bold mb-4">Bảng công việc</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleTaskClick(null)}
          className="add-task-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Thêm Task
        </button>
        <button
          onClick={handleRefresh}
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
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            tasks={tasks.filter((task) => task.status === column.status)}
            onTaskClick={handleTaskClick}
            className="bg-white p-4 rounded shadow"
            id={column.id} // Truyền id vào Column
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
          filter={check ? "Thêm Task" : ""} // Truyền filter để xác định đang thêm task hay không
        />
      )}
    </div>
  );
};

export default Board;
