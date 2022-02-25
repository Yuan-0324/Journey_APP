import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import context from '../../../context';

const Logged_In = () => {

  let history = useHistory();

  const { userInfo } = useContext(context);
  // console.log(userInfo);

  const LogOutBtn = () => {
    localStorage.setItem('token', '');
    history.go(0);
  }

  let toPersonal = () => {
    // history.push('/personal/' +  userInfo.id);
    window.location = '/personal/' + userInfo.id;
  }

  return (
    <nav id="loggedIn">
      <ul>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="navbar">
          <li>
            <a className="navLink" href="/Event">
              活動
            </a>
          </li>
          <li>
            <a className="navLink" href="/Guide">
              嚮導
            </a>
          </li>
          <li>
            <a className="navLink" href="/Society">
              社群
            </a>
          </li>
          <li>
            <div className="dropdown">
              <span className="navLink">
                <Avatar
                  style={{
                    backgroundColor: "#1697d5",
                  }}
                  icon={<UserOutlined />}
                />
                <div className="dropdownContent">
                  <a onClick={toPersonal}>個人頁面</a>
                  <a href="/setting">設定</a>
                  <a onClick={LogOutBtn} >登出</a>
                </div>
              </span>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Logged_In;
