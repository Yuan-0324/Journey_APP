// import '../../styles/Guide/tour_guide.css';
// import img1 from '../../images/bob大頭貼.png';
// import img2 from '../../images/蒙娜麗莎.jpg';

import React, { useState } from 'react';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { AiOutlineLike, AiFillStar } from 'react-icons/ai';

import '../stylesheet/tour_guide.css';
import img1 from '../../../images/bob大頭貼.png';
import img2 from '../../../images/蒙娜麗莎.jpg';
const Search = () => {
    
    //進階搜尋按鈕
    const [Toggled , setToggled] = useState(false);
    const advancedSearchBtnClick = () => setToggled(!Toggled);
    const visibilityHideOrShow = Toggled ? {visibility: "visible"} : {visibility: "hidden"};

    //可接待人數
    const [countNum, setNum] = useState(1);
    function add() {
        setNum(function (prev) {
            if (prev == 6) {
                return prev;
            } else {
                return prev + 1;
            }
        })
    }
    function del() {
        setNum(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return prev - 1;
            }
        })
    }
    
    //搜尋內容
    const guideArr = [
        {gId: 1, gImg: img1, gName: "Bob", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gRecommend: "貓空/九份/故宮", gIntroduction: "自我介紹必定會成為未來世界的新標準。自我介紹似乎是一種", gLocation: "台北" },
        {gId: 2, gImg: img2, gName: "蒙娜麗莎", gStarNum: 4.9, gTitle: "Lv.5頂尖嚮導", gRecommend: "九寨溝、黃山、張家界", gIntroduction: "自我介紹必定會成為未來世界的新標準。自我介紹似乎是一種", gLocation: "新竹" }
    ]    

    return (
        <div>
            {/* 搜尋 */}
            <section className="searchArea">
                <input type="text" className="searchCity" id="searchCity" defaultValue="城市" className="searchInput" />
                <input type="date" className="searchDate" id="searchDate" defaultValue="日曆" className="searchInput" />
                {/* 進階搜尋 */}
                <section className="advancedSearch">
                    <button className="advancedSearchBtn" onClick={advancedSearchBtnClick}>進階搜尋</button>
                    <div className="advancedSearchContent" style={visibilityHideOrShow}>
                        <div className="acceptNum">
                            <span>接待人數：</span>
                            <span>
                                <input type="button" defaultValue="-" className="numBtn" onClick={del} />
                                <input id="quantity" type="text" value={countNum} name="acceptNum" />
                                <input type="button" defaultValue="+" className="numBtn" onClick={add} />
                            </span>
                        </div>
                        <div className="acceptGender">
                            <span>接待性別：</span>
                            <span>
                                <input type="radio" name="acceptGender" id="male" defaultValue="male" />
                                <label htmlFor="male">男<span style={{ visibility: 'hidden' }}>生&ensp;</span> </label>
                                <input type="radio" name="acceptGender" id="female" defaultValue="female" />
                                <label htmlFor="female">女<span style={{ visibility: 'hidden' }}>生&ensp;</span> </label>
                                <input type="radio" name="acceptGender" id="both" defaultValue="both" />
                                <label htmlFor="both">不限</label>
                            </span>
                        </div>
                        <div className="transportation">
                            <span>交通工具：</span>
                            <span>
                                <input type="radio" name="transportation" id="car" defaultValue="car" />
                                <label htmlFor="car">汽車&ensp;</label>
                                <input type="radio" name="transportation" id="motorcycle" defaultValue="motorcycle" />
                                <label htmlFor="motorcycle">機車&ensp;</label>
                                <input type="radio" name="transportation" id="publicTransport" defaultValue="publicTransport" />
                                <label htmlFor="publicTransport">大眾交通</label>
                            </span>
                        </div>
                        <div className="btnArea">
                            <button type="button" className="cancelBtn" data-dismiss="modal">取消</button>
                            <button type="submist" id="guideAdvancedSearchBtn" className="guideAdvancedSearchBtn" data-dismiss="modal">設定</button>
                        </div>
                    </div>
                </section>
                <button id="guideSearchBtn" className="mainbtn" type="submist">搜尋</button>
                <div className="joinGuide">
                    <a href="/GuideJoin">加入嚮導行列</a>
                </div>
            </section>
            <input type="hidden" />
            <input type="hidden" />
            <input type="hidden" />
            {/* 搜尋結果 */}
            <section className="guideSearchResults">
                {guideArr.map(item => 
                    <div className="guideResults" key={item.gId}>
                        <a href={'/GuidePersonal:'+ item.gId}>
                            <div className="putMemberImg">
                                <img src={item.gImg} id="memberImg" />
                            </div>
                            <div className="guideContent">
                                <div className="guideInformationArea">
                                    <span className="guideName">{item.gName}</span>
                                    <span className="star"><AiFillStar /></span>
                                    <span className="guideStarNum">{item.gStarNum}</span>
                                    <span className="guideTitle"> {item.gTitle}</span>
                                </div>
                                <div className="guideRecommend">
                                    <span className="guideRecommendIcon"><i><AiOutlineLike /></i></span>
                                    <span>景點:</span>
                                    <span className="guideRecommendContent">{item.gRecommend}</span>
                                </div>
                                <div className="guideIntroduction">
                                    <span className="guideIntroduction30">{item.gIntroduction}</span>
                                    <span className="spot">...</span>
                                </div>
                            </div>
                        </a>
                        <a href className="chatIcon"><IoChatbubblesOutline /></a>
                        <div className="guideLocation">
                            <i className='locationIcon'><IoLocationSharp /></i>
                            <span className="locationContent">{item.gLocation}</span>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );

}

export default Search;