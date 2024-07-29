// App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";
import Navbar from "./components/Navbar";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarToggle(true); // Collapse sidebar on small screens
      } else {
        setSidebarToggle(false); // Expand sidebar on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div
          className={`${
            sidebarToggle ? "ml-16" : "ml-64"
          } w-full transition-all duration-300 ease-in-out`}
        >
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
