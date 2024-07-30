import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Copyright: Rohit Wahwal</p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="text-blue-400 hover:underline">
            Home
          </Link>
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
          <Link to="/about" className="text-blue-400 hover:underline">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
