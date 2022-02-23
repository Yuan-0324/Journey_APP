import React from "react";

const Community_Group = () => {
  return (
    <div className="communityGroup">
      <h3 className="CardHeader">熱門社團</h3>
      <div className="biggroup">
        <div className="group1">
          <div className="box1">
            <img
              src="https://source.unsplash.com/600x400/?taiwan,hike"
              alt=""
            />
            <p className="texthide">歡喜登山社</p>
          </div>
          <div className="box1">
            <img
              src="https://source.unsplash.com/600x400/?taiwan,foods"
              alt=""
            />
            <p className="texthide">台中美食底兜位</p>
          </div>
        </div>
        <div className="box2">
          <img
            src="https://source.unsplash.com/600x400/?taiwan,senior"
            alt=""
          />
          <p className="texthide">北屯在地生活</p>
        </div>
        <div className="group2">
          <div className="group3">
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,fishing"
                alt=""
              />
              <p className="texthide">釣魚交流</p>
            </div>
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,boardgame"
                alt=""
              />
              <p className="texthide">棋藝博士</p>
            </div>
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,karaoke"
                alt=""
              />
              <p className="texthide">投幣卡拉社團</p>
            </div>
          </div>
          <div className="group4">
            <div className="box4">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,views"
                alt=""
              />
              <p className="texthide">台灣美景攝影</p>
            </div>
            <div className="box4">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,building"
                alt=""
              />
              <p className="texthide">建築設計</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_Group;
