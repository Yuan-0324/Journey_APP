import React, { Component } from 'react';
// import '../../styles/activityList/activityList.css';
import outside from '../../images/background/outside.png';
// import logov3  from "../images/logo.png";


// ---- 更改 ----
import './StyleSheet/activityList/activityList.css';
import table from "../../images/bob.jpg";


class Activity_List extends Component {
    state = {}
    render() {
        return (

            <div className="wrap">
                {/* <!-- 活動大圖 --> */}
                <div className="event-banner">
                    {/* <!--  img --> */}
                    <img src='https://picsum.photos/id/395/1105/400' alt="" />
                </div>
                <div className="container">
                    {/* <!-- 搜尋欄 --> */}
                    <div className="search">
                        <div className="searchInput">
                            <input type="text" value="" placeholder="地區" name="location" id="search-location
                    " className="searchInputItem" />
                            <input type="text" value="" placeholder="日期" name="location" id="search-location" className="searchInputItem" />
                            <input type="text" value="" placeholder="關鍵字" name="location" id="search-location" className="searchInputItem" />
                        </div>
                        {/* <!-- 搜尋 --> */}
                        <ul >
                            {/* <!--進階搜尋LI --> */}
                            <li >
                                <ul>
                                    <li>

                                        <div>
                                            {/* <button  className="advancedSearch mainButton">
                                                <p>進階搜尋</p>
                                            </button> */}

                                            {/* <div id="hide1"  className="advancedSearchForm">
                                                <form action="/action_page.php">
                                                    <div className="advancedSearchFormItem">
                                                        <label htmlFor="searchType"><span>類型&emsp;</span></label>
                                                        <input type="text" name="searchType" id="searchType" />
                                                    </div>
                                                    <div className="advancedSearchFormItem">
                                                        <span>室內外</span>
                                                        <input type="checkbox" id="indoor" name="vehicle1" value="" />
                                                        <label htmlFor="indoor">室內</label>
                                                        <input type="checkbox" id="outdoor" name="vehicle2" value=""/>
                                                        <label htmlFor="outdoor"> 室外</label><br/>
                                                    </div>

                                                        <div className="advancedSearchFormItem">
                                                            <label htmlFor="sort"><span>排序&emsp;</span></label>
                                                            <input type="text" name="sort" id="sort" />
                                                        </div>

                                                        <div className="advancedSearchFormItemButton">
                                                            <button>取消</button>
                                                            <button>送出</button>
                                                        </div>
                                                </form>
                                            </div> */}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- 進階搜尋LI底 --> */}
                            {/* <!-- 開始搜尋 --> */}
                            <li>
                                <button className="actionSearch mainButton">
                                    <p>開始搜尋</p>
                                </button>
                                <button className="activityConduce mainButton">
                                    <a href="http://localhost:3000/activityConduct">創立活動</a>
                                </button>
                                <button className="activityConduce mainButton">
                                    <a href="http://localhost:3000/activityTest">測試</a>
                                </button>
                            </li>
                            {/* <!-- 開始搜尋底 --> */}
                        </ul>




                    </div>


                    <div className="list" id="FirstList">
                        <div className="img">
                            <img src={table} alt="" />
                        </div>
                        <div className="listIntroduction">
                            <div className="information">
                                <h1>桌遊大戰</h1>
                                <ul className="time">

                                    <li>2022/02/02</li>
                                    <li>禮拜二晚上18:00</li>
                                    <li>台中市</li>
                                </ul>

                                <p>&emsp;&emsp;希望大家能發現話中之話。我以為我了解桌遊大戰，但我真的了解桌遊大戰嗎？仔細想想，我對桌遊大戰的理解只是皮毛而已。我們不得不相信，需要考慮周詳桌遊大戰的影響及因應對策。列寧曾經提過，科學的宗旨就是提供宇宙的真正寫真。</p>
                            </div>
                            <div className="listButton">
                                <button><a href="http://localhost:3000/activityIntroduce">詳細內容</a></button>
                                <button><p>參加活動</p></button>
                            </div>
                            <div className="summary">

                            </div>
                        </div>

                    </div>

                </div>


            </div>





        );
    }
}

export default Activity_List;