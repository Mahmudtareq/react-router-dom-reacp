import React from "react";
import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  const active =
    "text-red-500 no-underline hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  const inactive =
    "text-gray-300 no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? active : inactive)}
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
