import React from "react";
import { MdLocationPin } from "react-icons/md";

const Guide_Chip = () => {
  return (
    <figure className="snip1336">
      <img
        className="imgBG"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
        alt="sample87"
      />
      <figcaption>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
          alt="profile-sample4"
          className="profile"
        />
        <h2>
          吉娃娃
          <span>
            <MdLocationPin />
            &nbsp;台中市
          </span>
        </h2>
        <p>推薦台中大坑步道以及黑寶星巴克</p>
        <a href="#" className="follow">
          現在預約
        </a>
      </figcaption>
    </figure>
  );
};

export default Guide_Chip;
