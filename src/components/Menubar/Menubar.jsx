import React, { useState } from "react";
import { Link } from "react-router-dom";
import Activelink from "../ActiveLink/Activelink";

const Menubar = () => {
  const routes = [
    {
      id: 2,
      name: "About",
      path: "about",
    },
    {
      id: 3,
      name: "Contact",
      path: "contact",
    },
    {
      id: 4,
      name: "Price",
      path: "price",
    },
    {
      id: 5,
      name: "Products",
      path: "products",
    },
    {
      id: 6,
      name: "Posts",
      path: "posts",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-semibold">Logo</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes.map((route) => (
                <Activelink
                  key={route.id}
                  to={route.path}
                  className="text-gray-300 no-underline hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {route.name}
                </Activelink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${isOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {routes.map((route) => (
            <Activelink
              key={route.id}
              to={route.path}
            >
              {route.name}
            </Activelink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
