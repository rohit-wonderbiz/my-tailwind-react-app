// navbar.tsx
import React, { useState } from "react";
import { FaBars, FaUserCircle, FaSearch } from "react-icons/fa";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarToggle, setSidebarToggle }) => {
  const [searchVisible, setSearchVisible] = useState(false);

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
        <div className="relative md:w-65">
          {/* Show search icon when sidebar is collapsed or search input is hidden */}
          {sidebarToggle ? (
            <span className="relative">
              <button
                className="p-1 focus:outline-none text-white md:text-black"
                onClick={() => setSearchVisible(true)} // Show input when icon is clicked
              >
                <FaSearch />
              </button>
            </span>
          ) : (
            <>
              {/* Show search input when sidebar is open */}
              <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch className="text-white md:text-black" />
              </span>
              <input
                type="text"
                className="w-full px-4 py-1 pl-12 rounded shadow outline-none"
                placeholder="Search..."
              />
            </>
          )}

          {/* Show input field if it is visible */}
          {searchVisible && (
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none"
              placeholder="Search..."
              autoFocus
              onBlur={() => setSearchVisible(false)} // Hide input when it loses focus
            />
          )}
        </div>

        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
                <li>
                  <a href="">Log out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
