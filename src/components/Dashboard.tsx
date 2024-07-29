import React from "react";
import Navbar from "./Navbar";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<NavbarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  return <h1>This is my Home</h1>;
};

export default Dashboard;
