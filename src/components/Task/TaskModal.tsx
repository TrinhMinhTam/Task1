// TaskModal.tsx
import React, { useState } from "react";
import { TaskType, UserType } from "../Data";
import axios from "axios";

interface TaskModalProps {
  task: TaskType;
  onMove?: (newColumnIndex: number) => void;
  onClose: () => void;
  onSave: (updatedTask: TaskType) => void;
  onDelete: (taskId: string) => void; // Thêm prop onDelete
  userList: UserType[];
  filter?: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onSave,
  onDelete,
  userList,
  filter,
}) => {
  const [updatedTask, setUpdatedTask] = useState<TaskType>(task);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // const handleChangeOption = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setUpdatedTask((prevState) => ({
  //     ...prevState,
  //     [name]: parseInt(value),
  //   }));
  // };
  const handleDelete = () => {
    axios
      .delete(
        `http://nmt.logit.id.vn:5005/api/v1/task/delete/${updatedTask._id}`
      )
      .then((response) => {
        console.log("data", response);
        if (response.data.status === true) {
          console.log("Delete Task:", response);
          if (updatedTask._id) {
            onDelete(updatedTask._id);
          }
        } else {
          console.error("Task not found or some error occurred");
        }
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
    onClose();
  };
  // useEffect(() => {
  //   setNewTask({ ...task });
  // }, [task]);
  const handleSave = () => {
    if (filter === "Thêm Task") {
      console.log("add task", filter);
      onSave(updatedTask);
    } else {
      const requestBody = updatedTask;
      console.log("test update", requestBody);
      // axios
      //   .put(
      //     `http://nmt.logit.id.vn:5005/api/v1/task/update/${updatedTask._id}`,
      //     requestBody
      //   )
      //   .then((response) => {
      //     console.log("Update Task Response:", response);
      //     // Kiểm tra xem response có thành công hay không và thực hiện các xử lý phù hợp
      //     if (response.data.status === true) {
      //       onSave(updatedTask);
      //     } else {
      //       console.error("Update Task failed:", response.data.message);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error updating task:", error);
      //   });
      axios({
        url: `http://nmt.logit.id.vn:5005/api/v1/task/update/${updatedTask._id}`,
        method: "PUT",
        data: requestBody,
      })
        .then((res) => {
          console.log("res: ", res.data);

          if (res.data.status === true) {
            onSave(updatedTask);
          } else {
            console.error("err update", res.data.message);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {filter === "Thêm Task" ? "Thêm Task" : "Chỉnh sửa Task"}
          </h2>
          <span className="cursor-pointer text-gray-500" onClick={onClose}>
            &times;
          </span>
        </div>

        <label className="block text-left mb-2 font-medium">
          Category:
          <select
            name="category"
            value={updatedTask.category}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Complete">Complete</option>
          </select>
        </label>

        <label className="block text-left mb-2 font-medium">
          Title:
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <label className="block text-left mb-2 font-medium">
          Content:
          <textarea
            name="content"
            value={updatedTask.content}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <label className="block text-left mb-2 font-medium">
          Image URL:
          <input
            type="text"
            name="image"
            value={updatedTask.image}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <label className="block text-left mb-2 font-medium">
          Người dùng:
          <select
            name="userId"
            value={updatedTask.userId}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username} ({user.email})
              </option>
            ))}
          </select>
        </label>

        <label className="block text-left mb-2 font-medium">
          Trạng thái:
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="To do">To do</option>
            <option value="On Progress">On Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>

        {filter !== "Thêm Task" && (
          <button
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            onClick={handleDelete}
          >
            Xóa
          </button>
        )}
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={handleSave}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
