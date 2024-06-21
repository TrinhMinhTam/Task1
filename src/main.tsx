import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Board from "./components/Task/Board.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import UserComponent from "./components/User/User.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Board" element={<Board />} />
            <Route path="User" element={<UserComponent />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
