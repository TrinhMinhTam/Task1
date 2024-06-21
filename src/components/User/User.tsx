import React, { useEffect, useState } from "react";
import { UserType } from "../Data";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const UserComponent: React.FC = () => {
  const [userList, setUserList] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State cho loading

  const fetchUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("http://nmt.logit.id.vn:5005/api/v1/user/getList")
        .then((Response) => {
          setUserList(Response.data);
          setIsLoading(false);
          console.log("Data User ", Response);
        })
        .catch((Error) => {
          setIsLoading(false);
          console.error("Lỗi User", Error);
        });
    }, 1000);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handleRefresh = () => {
    setIsLoading(true);
    fetchUser(); // Gọi lại hàm fetchTasks để refresh dữ liệu
  };
  return (
    <div className="App flex justify-center items-center h-screen">
      <div className="board w-full p-4 overflow-auto max-w-screen-xl flex flex-col items-center">
        <h1 className="board-title text-3xl font-bold mb-4 text-center">
          User Board
        </h1>
        <button
          onClick={handleRefresh}
          className="board-title-buttonload bg-green-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center"
        >
          <i className="board-title-fa fas fa-sync-alt mr-2"></i> Load Users
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
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {userList.length > 0 ? (
                userList.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="px-4 py-2 text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;