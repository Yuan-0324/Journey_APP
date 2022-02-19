import React from "react";
import Community_Card_Chip from "./Community_Card_Chip";

const Community_Post = () => {
  return (
    <div className="communityPost">
      <h3 className="CardHeader">熱門貼文</h3>
      <div className="container">
        <div class="container">
          <Community_Card_Chip />
          <Community_Card_Chip />
          <Community_Card_Chip />
        </div>
      </div>
    </div>
  );
};

export default Community_Post;
