import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { adminMenus } from "../../../menuList";

const Sidebar: React.FC = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

  const handleSelectedItems = (route: string) => {
    setSelectedItem(route);
    navigate(route);
  };

  const handleLogout = () => {};

  return (
    <div className="fixed top-0 left-0 w-64 bg-gray-100 h-screen p-6 pt-10">
      <ul className="space-y-4">
        {adminMenus.map((item) => (
          <li
            key={item.label}
            className={`flex items-center p-2 rounded-md cursor-pointer ${
              selectedItem === item.route ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
            onClick={() => handleSelectedItems(item.route)}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            {item.label}
          </li>
        ))}
        <li
          key={"Logout"}
          className={`flex items-center p-2 rounded-md cursor-pointer ${
            selectedItem === "Logout" ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faSignOut} className="mr-3" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
