import React, { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarToggle, setSidebarToggle }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="bg-gray-900 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold">Employee Portal 🧑‍💻</span>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="relative">
          <button className="text-white" onClick={toggleMenu}>
            <FaUserCircle className="w-6 h-6 mt-1" />
          </button>
          {menuVisible && (
            <div className="bg-gray-100 z-10 absolute rounded-lg shadow w-32 top-full right-0">
              <ul className="px-2 py-2 text-sm text-gray-950">
                <li>
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Log out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
