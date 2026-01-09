import React from "react";
import "./App.css";
import Register from "./Frontend/Register";
import UserTable from "./Frontend/UserTable";

export default function App() {
  return (
    <div className="app-container">
      <Register />
      <UserTable />
    </div>
  );
}
