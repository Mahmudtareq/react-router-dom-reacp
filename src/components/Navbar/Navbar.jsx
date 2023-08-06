import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Price",
      path: "/price",
    },
    {
      id: 5,
      name: "Products",
      path: "/products",
    },
  ];

  return (
    <nav>
      <div>
        <ul>
          {routes.map((route) => (
            <NavItem key={route.id} route={route} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
