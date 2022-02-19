import React from "react";
import { MdLocationPin } from "react-icons/md";

const Event_Card_Chip = () => {
  return (
    <div className="eventCard">
      <div className="eventCard__header">
        <img
          className="eventCard__icon"
          src="https://source.unsplash.com/258x160/?taiwan"
          alt="chess"
        />
      </div>
      <section className="eventCard__body">
        <p className="eventTime">明天 下午3:00 02/30 星期五</p>
        <h2 className="eventCard__title">發現台灣之美</h2>
        <p>台灣尋奇之身體黏磁鐵</p>
        <span className="eventCard__duration">
          <MdLocationPin />
          &nbsp;台中市
        </span>
      </section>
    </div>
  );
};

export default Event_Card_Chip;
