import React from "react";

const NavItem = ({ route }) => {
  return (
    <div className="mx-auto">
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default NavItem;
