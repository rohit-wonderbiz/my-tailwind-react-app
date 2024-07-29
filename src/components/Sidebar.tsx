// sidebar.tsx
import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SidebarProps {
  sidebarToggle: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarToggle }) => {
  return (
    <div
      className={`fixed h-full transition-all duration-300 ease-in-out ${
        sidebarToggle ? "w-16" : "w-64"
      } bg-gray-800 px-2 py-2`}
    >
      <div className="my-2 mb-4">
        <h1
          className={`text-2xl text-white font-bold ${
            sidebarToggle ? "hidden" : "block"
          }`}
        >
          Employee Dashboard
          <hr />
        </h1>
      </div>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <Link to="/" className="flex items-center px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!sidebarToggle && <span>Home</span>}
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <Link to="/login" className="flex items-center px-3">
            <FiLogIn className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!sidebarToggle && <span>Log In</span>}
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <Link to="/about" className="flex items-center px-3">
            <FaInfoCircle className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!sidebarToggle && <span>About</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
