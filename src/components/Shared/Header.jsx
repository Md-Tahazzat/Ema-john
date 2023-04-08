import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = ({ productsAmount }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList = savedTheme;
    setTheme(savedTheme == "dark" ? true : false);
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    if (document.body.classList.contains("light")) {
      document.body.classList = "dark";
    } else {
      document.body.classList = "light";
    }
    localStorage.setItem("theme", theme ? "dark" : "light");
  };
  return (
    <div
      id="header"
      className="w-full mx-0 duration-300 backdrop:blur sticky -top-1 md:top-0 z-50 bg-slate-500/95 border-b dark:border-slate-500 antialiased dark:bg-slate-800/95"
    >
      <div className="navbar w-full px-2 md:px-5 max-w-[90rem] mx-auto text-white">
        <div className="md:navbar-start w-full flex justify-between">
          <div className="dropdown bg-inherit">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  mt-3 bg-slate-500/90 dark:bg-slate-800/90 rounded-lg p-2 shadow w-60 "
            >
              <li>
                <NavLink className="link" to="/">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="orderReview">
                  Order Review
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="manageInventory">
                  Manage Inventory
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="login">
                  Login
                </NavLink>
              </li>
              <li>
                <div
                  className="link inline-flex items-center"
                  onClick={handleThemeChange}
                >
                  {!theme ? "Light" : "Dark"}{" "}
                  <FontAwesomeIcon icon={!theme ? faSun : faMoon} />
                </div>
              </li>
            </ul>
          </div>

          <img className="ml-auto md:ml-0" src={logo} alt="" />
          <Link to="shoppingCart" className="md:hidden ml-auto mr-4 indicator">
            <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
            {productsAmount > 0 && (
              <span className="indicator-item badge text-xs px-1 border border-slate-500/80 bg-slate-500/90 dark:bg-slate-800/95">
                {productsAmount}
              </span>
            )}
          </Link>
        </div>
        <div className="navbar-end hidden w-full md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="orderReview">
                Order Review
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="manageInventory">
                Manage Inventory
              </NavLink>
            </li>

            <li>
              <button
                className="text-xl mx-4 md:mx-0"
                onClick={handleThemeChange}
              >
                <FontAwesomeIcon icon={!theme ? faSun : faMoon} />
              </button>
            </li>
            <li>
              <NavLink className="link" to="login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
