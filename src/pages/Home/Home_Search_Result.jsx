import React from "react";
import "./stylesheet/HomeSearchResult.css";

const Home_Search_Result = () => {
  return (
    <div id="SearchResult">
      <div className="Result">
        <h5>快速搜尋結果</h5>
        <div className="switch">
          <h3>活動</h3>
          <h3>嚮導</h3>
        </div>
        <div className="ResultInput">搜尋: 台中 , 2022-03-18</div>
      </div>
    </div>
  );
};

export default Home_Search_Result;
