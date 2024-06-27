import React from "react";
import { Link, Outlet } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(Props: LayoutProps) {
  const { children } = Props;

  return (
    <div className="w-full h-screen bg-gray-100">
      <nav className="main-nav bg-white p-4 shadow-md mb-4 w-full flex justify-between">
        <div>
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
        </div>
        <div>
          <Link
            to={"/"}
            className="text-gray-800 hover:text-gray-600 ml-4 cursor-pointer"
          >
            Log Out
          </Link>
        </div>
      </nav>
      <Outlet />
      {children}
    </div>
  );
}

export default Layout;
