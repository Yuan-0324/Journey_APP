import React from "react";
import GuideChip from "./Guide_Chip";

const Trending_Guide = () => {
  return (
    <section id="trendingGuide">
      <div className="GuideCardGroup">
        <h3 className="CardHeader">熱門嚮導</h3>
        <div className="GuideCard">
          <GuideChip />
          <GuideChip />
          <GuideChip />
        </div>
      </div>
    </section>
  );
};

export default Trending_Guide;
