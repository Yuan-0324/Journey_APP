import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import context from '../../../context';

const Logged_In = () => {

  let history = useHistory();
  const { userInfo } = useContext(context);

  const LogOutBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    localStorage.removeItem('lastName')
    localStorage.removeItem('firstName')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    localStorage.removeItem('lastName')
    localStorage.removeItem('firstName')
    localStorage.removeItem('name')
    localStorage.removeItem('selfie')
    localStorage.removeItem('place')
    localStorage.removeItem('interested')
    localStorage.removeItem('guide_id')
    localStorage.removeItem('member_is_guide')
    setTimeout(() => {
      history.go(0);
    }, 500);

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
