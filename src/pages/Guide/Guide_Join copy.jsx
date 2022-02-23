import {useState} from 'react';
import $ from 'jquery';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { TreeSelect } from 'antd';
import { TiDeleteOutline } from "react-icons/ti";
import "antd/dist/antd.css";
import './stylesheet/joinGuide.css';
import guideLevelImg from '../../images/guideImgs/guideJoinPage/guideLevelImg.png';
import bgImg from '../../images/main/background.png';

import Guide_Level from './components/Guide_join/Page1_guidelevel';
import Set_Information from './components/Guide_join/Page2_set_information';
import Set_Recommend from './components/Guide_join/Page3_set_recommend';
import Set_Calendar from './components/Guide_join/Page4_set_calendar';

const GuideJoin = () => {

    //下一頁移動
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

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
        if (recommendPlace && placeArr.length < 3) {
            placeArr.push(recommendPlace);
            setPlaceArr(placeArr);
            setPlace('');
        }
    }
    const placeDeleteBtnClick = (evt) => {
        const deleteItem = evt.target.parentNode.dataset.place;
        const newPlaceArr = placeArr.filter(evts => evts !== deleteItem);
        setPlaceArr(newPlaceArr);
    }

    //推薦餐廳
    const [recommendRestaurant, setRestaurant] = useState('');
    const [restaurantArr, setRestaurantArr] = useState([]);
    const recommendRestaurantChange = (evts) => {
        setRestaurant(evts.target.value);
    }
    const setRestaurantBtnClick = () => {
        if (recommendRestaurant && restaurantArr.length < 3) {
            restaurantArr.push(recommendRestaurant)
            setRestaurantArr(restaurantArr);
            setRestaurant('');
        }
    }
    const restaurantDeleteBtnClick = (evt) => {
        const deleteItem = evt.target.parentNode.dataset.restaurant;
        const newRestaurantArr = restaurantArr.filter(evts => evts !== deleteItem);
        setRestaurantArr(newRestaurantArr);
    }

    //日曆
    let Toolbar = { left: "today", center: "title", right: "prev,next" };
    let [evts, setEvts] = useState([]);
    let [dateArray, setDateArray] = useState([]);
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        if (dateArrayNum == -1) {
            dateArray.push(newDate);
            setEvts([...evts, {
                date: newDate,
                display: 'background',
                color: '#1697d5'
            }]);
        } else {
            dateArray.splice(dateArrayNum, 1);
            let newEvts = evts.filter(item => item.date !== newDate);
            setEvts(newEvts);
        };
        setDateArray(dateArray);
    }

    return (

        <div className="guideJoin">
            <img className="bgImg" src={bgImg} />
            <div>
                <hr className="guidePagehr" />
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
                                <input id="quantity" type="text" value={countNum} name="acceptNum" disabled />
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
                                <p>(請選擇四張相片)</p>
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
                            <input type="text" placeholder="請輸入推薦的景點" value={recommendPlace} onChange={recommendPlaceChange} id='placeInput' />
                            <input type="button" defaultValue="加入" onClick={setPlaceBtnClick} className="placeBtn" />
                            <span>(請推薦三個景點)</span>
                            <div id="placeInputContainer">
                                {placeArr.map((item, index) => (
                                    <span className="placeInputSpan" key={index} >
                                        <input type="text" className="placeContent" style={{ width: item.length * 20 + 10 + `px` }} disabled value={item} />
                                        <button onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} ><TiDeleteOutline /></button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="recommendRestaurant">
                            <p>推薦餐廳</p>
                            <input type="text" placeholder="請輸入推薦的餐廳" value={recommendRestaurant} onChange={recommendRestaurantChange} id='restaurantInput' />
                            <input type="button" defaultValue="加入" onClick={setRestaurantBtnClick} className="restaurantBtn" />
                            <span>(請推薦三間餐廳)</span>
                            <div id="restaurantInputContainer">
                                {restaurantArr.map((item, index) => (
                                    <span className="restaurantInputSpan" key={index} >
                                        <input type="text" className="restaurantContent" style={{ width: item.length * 20 + 10 + `px` }} disabled value={item} />
                                        <button onClick={restaurantDeleteBtnClick} className="restaurantDelete" data-restaurant={item} ><TiDeleteOutline /></button>
                                    </span>
                                ))}
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
                                height={400}
                                events={evts}
                                headerToolbar={Toolbar}
                                dateClick={handleDateClick}
                                selectMinDistance={10000}
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