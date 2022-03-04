import React from "react";
import { useHistory } from "react-router-dom";

const Community_Desc = () => {
  const history = useHistory();
  return (
    <div className="communityDesc">
      <div className="communityHeader">
        <h2>他們都在揪你社群！</h2>
        <p>體驗您意想不到的旅遊可能 開啟一趟前所未有的旅程</p>
        <button
          onClick={() => {
            history.push("/Society");
          }}
        >
          瞭解更多
        </button>
      </div>
    </div>
  );
};

export default Community_Desc;
