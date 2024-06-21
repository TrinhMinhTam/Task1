import React from "react";
import { Link, Outlet } from "react-router-dom";
type layoutProps = {
  children: React.ReactNode;
};
function Layout(Props: layoutProps) {
  const { children } = Props;
  return (
    <div className="w-full  h-screen bg-gray-100 ">
      <nav className="main-nav bg-white p-4 shadow-md mb-4 w-full">
        <div className="">
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
      </nav>
      <Outlet />
      {children}
    </div>
  );
}

export default Layout;
