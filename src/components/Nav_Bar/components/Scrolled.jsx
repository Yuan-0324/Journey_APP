import React from "react";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Scrolled = ({ setlogIn, setscrolled }) => {
  return (
    <nav id="scrolled">
      <ul>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="navbar">
          <li>
            <NavLink className="navLink" to="#">
              <IoMdMenu
                onClick={() => {
                  setscrolled(false);
                  setlogIn(true);
                }}
              />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Scrolled;
