import React from "react";
import Community_Desc from "./Community/Community_Desc";
import Community_Group from "./Community/Community_Group";
import Community_Post from "./Community/Community_Post";

const Community = () => {
  return (
    <section id="community">
      <Community_Desc />
      <Community_Group />
      <Community_Post />
    </section>
  );
};

export default Community;
