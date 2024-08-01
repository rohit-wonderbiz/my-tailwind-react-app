import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AboutComponent from "./components/AboutComponent";
import LoginComponent from "./components/LoginComponent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <div className="flex flex-col min-h-screen">
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="flex flex-1">
          <Sidebar sidebarToggle={sidebarToggle} />
          <div
            className={`flex-1 transition-all duration-300 ${
              sidebarToggle ? "ml-8" : "ml-8"
            }`}
          >
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
              <Route
                path="/about"
                element={
                  <AboutComponent
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <LoginComponent
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                  />
                }
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
