// import '../styles/Guide/joinGuide.css';
// import guideLevelImg from '../../src/images/嚮導等級.png';


import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { TreeSelect } from 'antd';
import "antd/dist/antd.css";


// ---- 更新 ----

import './stylesheet/joinGuide.css';
import guideLevelImg from '../../images/嚮導等級.png';


const GuideJoin = () => {

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

    //日曆
    let evts = [];
    let [dateArray, setDateArray] = useState([]);
    let Toolbar = { left: "today", center: "title", right: "prev,next" };
    let [Toggled, setToggled] = useState(true);
    let divHideOrShow = Toggled ? { display: "none" } : { display: "block" };
    let widthChange = Toggled ? { width: '420px' } : { width: '360px' }
    let [date, setDate] = useState();
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        if (dateArrayNum !== -1) {
            setToggled(false);
            setDate(newDate);
        } else {
            alert("請點選「紅底」嚮導有空的日期預約！")
        }
    }
    let reservationBtnClick = () => {
        let newDateArray = dateArray.filter((item) => item !== date);
        setDateArray(newDateArray);
        setToggled(true);
        alert('已向嚮導發出' + date.toString() + '邀約 \n 請至「個人頁面」 => 「邀約通知」查看！')
    }
    dateArray.forEach(element => {
        evts.push({
            date: element,
            display: "background",
            color: "red",
        })
    });

    //城市選擇
    const { TreeNode } = TreeSelect;
    const [cityValue, setCity] = useState();
    const changeCity = () => {
        setCity(cityValue);
    };

    //推薦景點
    const [recommendPlace, setPlace] = useState('');
    const [placeArr, setPlaceArr] = useState([]);
    const recommendPlaceChange = (evts) => {
        setPlace(evts.target.value);
        
    }
    const setPlaceBtnClick = () => {
        if(recommendPlace && placeArr.length < 3){
            placeArr.push(recommendPlace)
            setPlaceArr(placeArr);
            setPlace('');
        }
    }
    const deleteBtnClick = (evt) => {
        const deleteItem = evt.target.name;
        const newPlaceArr = placeArr.filter(evts=> evts !== deleteItem);
        setPlaceArr(newPlaceArr);
    }

    return (

        <div style={{backgroundColor: '#f8f8f8'}}>
            <div>
                <hr className="pagehr" />
            </div>
            <section id="section0">
                <div className="section0Area">
                    <div className="leftTitle">
                        <div className="joinUs">加入嚮導</div>
                        <div className="pageTitle"> <span>●</span> 介紹</div>

                    </div>
                    <div className="section0Content">
                        <div className="guideNarrative">
                            <p>包上背包 帶領遠道而來的朋友遊覽你的城市</p>
                            <p>分享生活 創造新的感動與回憶</p>
                        </div>
                        <div className="guideLvChartArea">
                            <img src={guideLevelImg} className="guideLevelImg" />
                        </div>
                    </div>
                </div>
                <a href="#section01" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section01">
                <div className="section01Area">
                    <div className="leftTitle">
                        <div className="pageTitle"> <span>●</span> 基本資料</div>
                        <div>
                            <hr className="page1hr" />
                        </div>
                    </div>
                    <div className="section01Content">
                        <div className="setIntroduction">
                            <p>自我介紹</p>
                            <textarea name="introduction" id="introduction" maxLength="60"
                                placeholder="請簡短的用60字介紹自己"></textarea>
                        </div>
                        <div className="acceptNum">
                            <p>接待人數</p>
                            <span>
                                <input type="button" defaultValue="-" className="numBtn" onClick={del} />
                                <input id="quantity" type="text" value={countNum} name="acceptNum" />
                                <input type="button" defaultValue="+" className="numBtn" onClick={add} />
                            </span>
                        </div>
                        <div className="acceptGender">
                            <p>接待性別</p>
                            <span className="selectArea">
                                <label>
                                    <input type="radio" name="acceptGender" id="male" value="male" /> 男
                                </label>
                                <label>
                                    <input type="radio" name="acceptGender" id="female" value="female" /> 女
                                </label>
                                <label>
                                    <input type="radio" name="acceptGender" id="bothGender" value="both" /> 不限
                                </label>
                            </span>
                        </div>
                        <div className="transportation">
                            <p>交通工具</p>
                            <span>
                                <label>
                                    <input type="radio" name="transportation" id="car" value="car" /> 汽車
                                </label>
                                <label>
                                    <input type="radio" name="transportation" id="motorcycle" value="motorcycle" /> 機車
                                </label>
                                <label>
                                    <input type="radio" name="transportation" id="publicTransport" value="publicTransport" />
                                    大眾交通
                                </label>
                            </span>
                        </div>
                        <div className="uploadImg">
                            <p>嚮導照片</p>
                            <div>
                                <input type="button" id="select" value="選擇照片"></input>
                                <p>(請選擇最多四張相片)</p>
                                <input type="file" id="file_input" name="filePath" multiple="multiple" />
                                <br /><div id="append"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#section02" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section02">
                <div className="section02Area">
                    <div className="leftTitle">
                        <div className="pageTitle"> <span>●</span> 地點/推薦</div>
                    </div>
                    <div className="section02Content">
                        <div className="setCity">
                            <p>嚮導城市</p>
                            <TreeSelect className="guideCityInput"
                                showSearch
                                style={{ width: "220px" }}
                                value={cityValue}
                                dropdownStyle={{ overflow: "auto" }}
                                placeholder="擔任嚮導的城市"
                                onChange={changeCity}
                                size='large'
                                notFoundContent='無搜尋結果'
                            >
                                <TreeNode value="北部" title={<b style={{ fontSize: '20px' }}>北部</b>} selectable={false} >
                                    <TreeNode value="台北" title="台北" style={{ fontSize: '17px' }} />
                                    <TreeNode value="新北" title="新北" style={{ fontSize: '17px' }} />
                                    <TreeNode value="基隆" title="基隆" style={{ fontSize: '17px' }} />
                                    <TreeNode value="新竹" title="新竹" style={{ fontSize: '17px' }} />
                                    <TreeNode value="桃園" title="桃園" style={{ fontSize: '17px' }} />
                                    <TreeNode value="宜蘭" title="宜蘭" style={{ fontSize: '17px' }} />
                                </TreeNode>
                                <TreeNode value="中部" title={<b style={{ fontSize: '20px' }}>中部</b>} selectable={false} >
                                    <TreeNode value="台中" title="台中" style={{ fontSize: '17px' }} />
                                    <TreeNode value="苗栗" title="苗栗" style={{ fontSize: '17px' }} />
                                    <TreeNode value="彰化" title="彰化" style={{ fontSize: '17px' }} />
                                    <TreeNode value="南投" title="南投" style={{ fontSize: '17px' }} />
                                    <TreeNode value="雲林" title="雲林" style={{ fontSize: '17px' }} />
                                </TreeNode>
                                <TreeNode value="南部" title={<b style={{ fontSize: '20px' }}>南部</b>} selectable={false} >
                                    <TreeNode value="高雄" title="高雄" style={{ fontSize: '17px' }} />
                                    <TreeNode value="台南" title="台南" style={{ fontSize: '17px' }} />
                                    <TreeNode value="嘉義" title="嘉義" style={{ fontSize: '17px' }} />
                                    <TreeNode value="屏東" title="屏東" style={{ fontSize: '17px' }} />
                                </TreeNode>
                                <TreeNode value="東部" title={<b style={{ fontSize: '20px' }}>東部</b>} selectable={false} >
                                    <TreeNode value="花蓮" title="花蓮" style={{ fontSize: '17px' }} />
                                    <TreeNode value="台東" title="台東" style={{ fontSize: '17px' }} />
                                </TreeNode>
                                <TreeNode value="離島" title={<b style={{ fontSize: '20px' }}>離島</b>} selectable={false} isLeaf={false} >
                                    <TreeNode value="澎湖" title="澎湖" style={{ fontSize: '17px' }} />
                                    <TreeNode value="金門" title="金門" style={{ fontSize: '17px' }} />
                                    <TreeNode value="馬祖" title="馬祖" style={{ fontSize: '17px' }} />
                                    <TreeNode value="綠島" title="綠島" style={{ fontSize: '17px' }} />
                                    <TreeNode value="蘭嶼" title="蘭嶼" style={{ fontSize: '17px' }} />
                                    <TreeNode value="小琉球" title="小琉球" style={{ fontSize: '17px' }} />
                                </TreeNode>
                            </TreeSelect>
                        </div>
                        <div className="recommendPlace">
                            <p>推薦景點</p>
                            <input type="text" placeholder="請輸入推薦的景點" id="placeInput" value={recommendPlace} onChange={recommendPlaceChange} />
                            <input type="button" value="加入" onClick={setPlaceBtnClick} className="placeBtn" />
                            <span>(請推薦最多三個景點)</span>
                            <div id="placeInputContainer">
                                {placeArr.map((item, index) => (
                                    <span className="placeInputSpan" key={index} >
                                        <input type="text" className="placeContent" style={{ width:item.length*20+10+`px` }} disabled value={item} />
                                        <input type="button" className="placeDelete" name={item} onClick={deleteBtnClick} defaultValue="x" />
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="recommendRestaurant">
                            <p>推薦餐廳</p>
                            <input type="text" placeholder="請輸入推薦的餐廳" id="restaurantInput" />
                            <input type="button" defaultValue="加入" onClick="restaurantBtnClick()" className="restaurantBtn" />
                            <span>(請推薦最多三間餐廳)</span>
                            <div id="restaurantInputContainer">

                            </div>
                        </div>
                    </div>
                </div>
                <a href="#section03" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section03">
                <div className="section03Area">
                    <div className="leftTitle">
                        <div className="pageTitle"> <span className='guideSpot'>●</span> 可接待日期
                            <span className='choiceDate'>(請點選日期)</span>
                        </div>
                    </div>
                    <div className="section03Content">
                        <div id='calendarBig'>
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                locale='zh-tw'
                                buttonText={{ today: '今天' }}
                                fixedWeekCount={false}
                                firstDay={1}
                                height={350}
                                events={evts}
                                headerToolbar={Toolbar}
                                showNonCurrentDates={false}
                                dateClick={handleDateClick}
                            />
                        </div>
                    </div>
                </div>
                <input className="submitBtn" type="submit" value="送出"></input>
            </section>
        </div>

    );

}


export default GuideJoin;