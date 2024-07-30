import React from "react";

interface NavbarProps {
  sidebarToggle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutComponent: React.FC<NavbarProps> = ({
  sidebarToggle,
  setSidebarToggle,
}) => {
  return (
    <div
      className={`${
        sidebarToggle ? "ml-16" : "ml-64"
      } flex-1 flex items-center justify-center transition-all duration-300 ease-in-out min-h-screen`}
    >
      <h1>This is my About Page</h1>
    </div>
  );
};

export default AboutComponent;
