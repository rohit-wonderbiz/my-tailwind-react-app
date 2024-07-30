import React from "react";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent: React.FC<NavbarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  return (
    <h1
      className={`${
        sidebarToggle ? "ml-16" : "ml-64"
      } w-full transition-all duration-300 ease-in-out`}
    >
      This is my Login Page
    </h1>
  );
};

export default LoginComponent;
