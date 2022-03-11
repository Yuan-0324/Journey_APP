import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer">
      <button className="ToTop" onClick={scrollToTop}>
        <BiUpArrowAlt />
      </button>
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
          <p className="title">認識Journey</p>
          <p>活動</p>
          <p>嚮導</p>
          <p>社群</p>
          <p>天氣</p>
        </div>
        <div className="PersonalSupport">
          <p className="title">用戶支援</p>
          <p>個人頁面</p>
          <p>個人設定</p>
          <p>用戶安全</p>
          <p>嚮導設定</p>
        </div>
        <div className="PersonalSupport">
          <p className="title">聯絡我們</p>
          <p>成為供應商</p>
          <p>意見回饋</p>
          <p>同業合作</p>
          <p>人才招募</p>
        </div>
      </div>
      <hr />
      <p className="copyright">@2022 Journey All rights reserved.</p>
    </footer>
  );
};

export default Footer;
