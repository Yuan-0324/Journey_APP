import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/Journeylogo.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Logged_In = () => {
  return (
    <nav id="loggedIn">
      <ul>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div class="navbar">
          <li>
            <NavLink className="navLink" to="/Event">
              活動
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/Guide">
              嚮導
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/Society">
              社群
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/Login">
              <Avatar
                style={{
                  backgroundColor: "#1697d5",
                }}
                icon={<UserOutlined />}
              />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Logged_In;
