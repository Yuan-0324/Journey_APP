import React from "react";
import "./stylesheet/mainPage.css";
import Main_Section from "./components/Main_Section";
import Search_Bar from "./components/Search_Bar";
import Trending_City from "./components/Trending_City";
import Recommandation from "./components/Recommandation/Recommandation";
import Trending_Event from "./components/Trending_Event/Trending_Event";
import Trending_Guide from "./components/Trending_Guide/Trending_Guide";
import Weather_Section from "./components/Weather/Weather_Section";
import CTA from "./components/CTA";
import Community from "./components/Community/Community";
import Footer from "./components/Footer";

const home = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Main_Section />
      <Weather_Section />
      <Search_Bar />
      <Trending_City />
      <Recommandation />
      <Trending_Event />
      <Trending_Guide />
      <CTA />
      <Community />
      <Footer />
    </div>
  );
};

export default home;
