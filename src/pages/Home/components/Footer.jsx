import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="followingUs">
          <p>Follow us 追蹤最新消息</p>
          <div className="followingIcon">
            <BsFacebook />
            <BsYoutube />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="AboutJourney">
          <p className="title">關於Journey</p>
          <p>活動</p>
          <p>嚮導</p>
          <p>社群</p>
          <p>天氣</p>
        </div>
        <div className="PersonalSupport">
          <p className="title">用戶支援</p>
          <p>個人頁面</p>
          <p>設定</p>
          <p>還有瞎咪</p>
          <p>我也不知道</p>
        </div>
        <div className="PersonalSupport">
          <p className="title">用戶支援</p>
          <p>個人頁面</p>
          <p>設定</p>
          <p>還有瞎咪</p>
          <p>我也不知道</p>
        </div>
      </div>
      <hr />
      <p className="copyright">@2022 Journey All rights reserved.</p>
    </footer>
  );
};

export default Footer;
