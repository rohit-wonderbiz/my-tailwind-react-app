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
      className={`${
        sidebarToggle ? " hidden " : " block "
      }w-64 bg-gray-800 fixed h-full px-2 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Employee Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/login" className="px-3">
            <FiLogIn className="inline-block w-6 h-6 mr-2 -mt-2" />
            Log In
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/about" className="px-3">
            <FaInfoCircle className="inline-block w-6 h-6 mr-2 -mt-2" />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
