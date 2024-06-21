import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Task/Board.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import UserComponent from "./components/User/User.tsx";
import Layout from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout
        children={
          <Routes>
            {/* <Route path="/" element={<App />}> */}
            <Route path="Board" element={<Board />} />
            <Route path="User" element={<UserComponent />} />
            {/* </Route> */}
          </Routes>
        }
      />
    </BrowserRouter>
  </React.StrictMode>
);
