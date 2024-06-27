import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Task/Board.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import UserComponent from "./components/User/User.tsx";
import Login from "./components/Account/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="Board" element={<Board />} />
        <Route path="User" element={<UserComponent />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
