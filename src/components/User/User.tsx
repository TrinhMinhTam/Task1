import React, { useEffect, useState } from "react";
import { UserType } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../App";
import { getAllTasks } from "../Task/API";

const UserComponent: React.FC = () => {
  const [userList, setUserList] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      getAllTasks("user/getList", (response: any) => {
        console.log("user", response.data);
        setUserList(response.data);
        setIsLoading(false);
      });
    }, 1000);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handleRefresh = () => {
    setIsLoading(true);
    fetchUser();
  };
  return (
    <Layout
      children={
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
      }
    ></Layout>
  );
};

export default UserComponent;
