import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-full  flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="main-nav bg-white p-4 shadow-md mb-4 w-full">
        <Link
          to={"/Board"}
          className="text-gray-800 hover:text-gray-600 mr-4 cursor-pointer"
        >
          Board
        </Link>{" "}
        |
        <Link
          to={"/User"}
          className="text-gray-800 hover:text-gray-600 ml-4 cursor-pointer"
        >
          User
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
