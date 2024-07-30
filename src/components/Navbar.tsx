import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import logo from "../logo.svg";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarToggle, setSidebarToggle }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 px-4 py-3 flex justify-between items-center">
      <FaBars
        className="text-white cursor-pointer"
        onClick={() => setSidebarToggle(!sidebarToggle)}
      />

      <div className="flex-1 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-white font-semibold hidden md:block">
            Employee Portal
          </span>
        </div>
      </div>

      <div className="relative" ref={menuRef}>
        <button className="text-white" onClick={toggleMenu}>
          <FaUserCircle className="w-6 h-6 mt-1" />
        </button>
        {menuVisible && (
          <div className="bg-white z-10 absolute rounded-lg shadow-lg w-48 top-full right-0 mt-2">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                >
                  Profile
                </a>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
