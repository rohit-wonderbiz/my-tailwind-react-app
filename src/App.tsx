import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";
import Navbar from "./components/Navbar";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <Router>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
          <Navbar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  sidebarToggle={sidebarToggle}
                  setSidebarToggle={setSidebarToggle}
                />
              }
            />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
