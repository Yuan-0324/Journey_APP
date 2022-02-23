import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineLike, AiFillStar } from 'react-icons/ai';
import { BiSearchAlt } from "react-icons/bi";
import { DatePicker, TreeSelect } from "antd";
import "antd/dist/antd.css";
import '../stylesheet/tour_guide.css';
import img1 from '../../../images/guideImgs/headShot1.png';
import img2 from '../../../images/guideImgs/headShot2.png';
import img3 from '../../../images/guideImgs/headShot3.png';
import img4 from '../../../images/guideImgs/headShot4.png';
import img5 from '../../../images/guideImgs/headShot5.png';
import img6 from '../../../images/guideImgs/headShot6.png';
import img7 from '../../../images/guideImgs/headShot7.png';
import img8 from '../../../images/guideImgs/headShot8.png';

import moment from 'moment';
import 'moment/locale/zh-tw';
import locale from 'antd/es/date-picker/locale/zh_TW';


const Search = () => {

    //城市選擇
    const { TreeNode } = TreeSelect;
    const [cityValue, setCity] = useState();
    const changeCity = () => {
        setCity(cityValue);
    };

    //日曆
    function disabledDate(current) {
        return current < moment();
    }

    //進階搜尋
    const [Toggled, setToggled] = useState(false);
    const visibilityHideOrShow = Toggled ? { visibility: "visible" } : { visibility: "hidden" };
    const advancedSearchBtnClick = () => {  //進階搜尋按鈕
        setToggled(true);
        setSearchContentToggled(true);
    }
    const advancedSearchSetBtnClick = () => setToggled(!Toggled); //設定按鈕
    const cancelBtnClick = () => {  //取消按鈕
        setAcceptNum(1);
        setAcceptGender('不限');
        setTransportation('不限');
        setSearchContentToggled(false);
        setToggled(false);
    };

    const [acceptNum, setAcceptNum] = useState(1);  //接待人數
    const add = () => {
        setAcceptNum(function (prev) {
            if (prev == 6) {
                return prev;
            } else {
                return prev + 1;
            }
        })
    }
    const del = () => {
        setAcceptNum(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return prev - 1;
            }
        })
    }
    const [acceptGender, setAcceptGender] = useState('不限');  //接待性別
    const [transportation, setTransportation] = useState('不限'); //交通工具

    //進階搜尋呈現
    const [searchContentToggled, setSearchContentToggled] = useState(false);
    const searchContent = searchContentToggled ? { display: "block" } : { display: "none" };

    //搜尋內容
    const guideArr = [
        { gId: 1, gImg: img1, gName: "徐千翔", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gRecommend: "貓空/九份/故宮", gLocation: "台北" },
        { gId: 2, gImg: img2, gName: "潘芷芹", gStarNum: 4.9, gTitle: "Lv.5頂尖嚮導", gRecommend: "九寨溝/黃山/張家界", gLocation: "新竹" },
        { gId: 3, gImg: img3, gName: "謝嘉原", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gRecommend: "貓空/九份/故宮", gLocation: "台北" },
        { gId: 4, gImg: img4, gName: "林與諶", gStarNum: 4.9, gTitle: "Lv.5頂尖嚮導", gRecommend: "九寨溝/黃山/張家界", gLocation: "新竹" },
        { gId: 5, gImg: img5, gName: "邱郁芳", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gRecommend: "貓空/九份/故宮", gLocation: "台北" },
        { gId: 6, gImg: img6, gName: "田中千惠", gStarNum: 4.9, gTitle: "Lv.5頂尖嚮導", gRecommend: "九寨溝/黃山/張家界", gLocation: "新竹" },
        { gId: 7, gImg: img7, gName: "何侑庭", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gRecommend: "貓空/九份/故宮", gLocation: "台北" },
        { gId: 8, gImg: img8, gName: "顏雅姿", gStarNum: 4.9, gTitle: "Lv.5頂尖嚮導", gRecommend: "九寨溝/黃山/張家界", gLocation: "新竹" }
    ]

    //到嚮導個人頁面
    const guidePersonalPage = (e) => {
        window.location = '/GuidePersonal:' + e.target.name;
        
    }

    return (
        <div>
            {/* 搜尋 */}
            <section className="searchArea">
                <div className='guideSearchBar'>
                    <div className="searchCity">
                        <TreeSelect className="guideCityInput"
                            showSearch
                            style={{ width: "185px" }}
                            value={cityValue}
                            dropdownStyle={{ overflow: "auto" }}
                            placeholder="探索目的地"
                            onChange={changeCity}
                            size='large'
                            notFoundContent='無搜尋結果'
                        >
                            <TreeNode value="北部" title={<b style={{ fontSize: '16px' }}>北部</b>} selectable={false} >
                                <TreeNode value="台北" title="台北" style={{ fontSize: '16px' }} />
                                <TreeNode value="新北" title="新北" style={{ fontSize: '16px' }} />
                                <TreeNode value="基隆" title="基隆" style={{ fontSize: '16px' }} />
                                <TreeNode value="新竹" title="新竹" style={{ fontSize: '16px' }} />
                                <TreeNode value="桃園" title="桃園" style={{ fontSize: '16px' }} />
                                <TreeNode value="宜蘭" title="宜蘭" style={{ fontSize: '16px' }} />
                            </TreeNode>
                            <TreeNode value="中部" title={<b style={{ fontSize: '16px' }}>中部</b>} selectable={false} >
                                <TreeNode value="台中" title="台中" style={{ fontSize: '16px' }} />
                                <TreeNode value="苗栗" title="苗栗" style={{ fontSize: '16px' }} />
                                <TreeNode value="彰化" title="彰化" style={{ fontSize: '16px' }} />
                                <TreeNode value="南投" title="南投" style={{ fontSize: '16px' }} />
                                <TreeNode value="雲林" title="雲林" style={{ fontSize: '16px' }} />
                            </TreeNode>
                            <TreeNode value="南部" title={<b style={{ fontSize: '16px' }}>南部</b>} selectable={false} >
                                <TreeNode value="高雄" title="高雄" style={{ fontSize: '16px' }} />
                                <TreeNode value="台南" title="台南" style={{ fontSize: '16px' }} />
                                <TreeNode value="嘉義" title="嘉義" style={{ fontSize: '16px' }} />
                                <TreeNode value="屏東" title="屏東" style={{ fontSize: '16px' }} />
                            </TreeNode>
                            <TreeNode value="東部" title={<b style={{ fontSize: '16px' }}>東部</b>} selectable={false} >
                                <TreeNode value="花蓮" title="花蓮" style={{ fontSize: '16px' }} />
                                <TreeNode value="台東" title="台東" style={{ fontSize: '16px' }} />
                            </TreeNode>
                            <TreeNode value="離島" title={<b style={{ fontSize: '16px' }}>離島</b>} selectable={false} isLeaf={false} >
                                <TreeNode value="澎湖" title="澎湖" style={{ fontSize: '16px' }} />
                                <TreeNode value="金門" title="金門" style={{ fontSize: '16px' }} />
                                <TreeNode value="馬祖" title="馬祖" style={{ fontSize: '16px' }} />
                                <TreeNode value="綠島" title="綠島" style={{ fontSize: '16px' }} />
                                <TreeNode value="蘭嶼" title="蘭嶼" style={{ fontSize: '16px' }} />
                                <TreeNode value="小琉球" title="小琉球" style={{ fontSize: '16px' }} />
                            </TreeNode>
                        </TreeSelect>
                    </div>
                    <div className="searchDate">
                        <DatePicker
                            style={{ width: "280px" }}
                            placeholder="探索日期"
                            disabledDate={disabledDate}
                            locale={locale}
                        />
                    </div>
                    {/* 進階搜尋 */}
                    <section className="advancedSearch">
                        <button className="advancedSearchBtn" onClick={advancedSearchBtnClick}>進階搜尋</button>
                        <div className="advancedSearchContent" style={visibilityHideOrShow}>
                            <div className="acceptNum">
                                <span>人數：&ensp;</span>
                                <span>
                                    <input type="button" defaultValue="-" className="numBtn" onClick={del} />
                                    <input id="quantity" type="text" value={acceptNum} name="acceptNum" disabled />
                                    <input type="button" defaultValue="+" className="numBtn" onClick={add} />
                                </span>
                            </div>
                            <div className="acceptGender">
                                <span>性別：&thinsp;&thinsp;</span>
                                <span>
                                    <input type="radio" name="acceptGender" id="male" value="男" onChange={(e) => { setAcceptGender(e.target.value) }} checked={acceptGender === "男"} />
                                    <label htmlFor="male">&thinsp;男<span style={{ visibility: 'hidden' }}>生&ensp;&ensp;</span> </label>
                                    <input type="radio" name="acceptGender" id="female" value="女" onChange={(e) => { setAcceptGender(e.target.value) }} checked={acceptGender === "女"} />
                                    <label htmlFor="female">&thinsp;女</label>
                                    <input type="radio" name="acceptGender" id="acceptGenderUnlimited" value="不限" style={{ display: 'none' }} onChange={(e) => { setAcceptGender(e.target.value) }} checked={acceptGender === "不限"} />
                                </span>
                            </div>
                            <div className="transportation">
                                <span>交通：&thinsp;&thinsp;</span>
                                <span className="transportationContent" >
                                    <input type="radio" name="transportation" id="car" value="汽車" onChange={(e) => { setTransportation(e.target.value) }} checked={transportation === "汽車"} />
                                    <label htmlFor="car">&thinsp;汽車&ensp;&ensp;</label>
                                    <input type="radio" name="transportation" id="motorcycle" value="機車" onChange={(e) => { setTransportation(e.target.value) }} checked={transportation === "機車"} />
                                    <label htmlFor="motorcycle">&thinsp;機車</label> <br />
                                    <input type="radio" name="transportation" id="publicTransport" value="大眾交通" onChange={(e) => { setTransportation(e.target.value) }} checked={transportation === "大眾交通"} />
                                    <label htmlFor="publicTransport" >&thinsp;大眾交通</label>
                                    <input type="radio" name="transportation" id="transportationUnlimited" value="不限" style={{ display: 'none' }} onChange={(e) => { setTransportation(e.target.value) }} checked={transportation === "不限"} />
                                </span>
                            </div>
                            <div className="btnArea">
                                <button className="cancelBtn" onClick={cancelBtnClick}>取消</button>
                                <button className="guideAdvancedSearchBtn" onClick={advancedSearchSetBtnClick} >設定</button>
                            </div>
                        </div>
                    </section>
                    <div className='guidesearchBg'>
                        <BiSearchAlt className='guidesearchBtn' />
                    </div>

                </div>
                <div className="joinGuide">
                    <a href="/GuideJoin">加入嚮導行列 → </a>
                </div>
            </section>

            <section className='advancedSearchContent' style={searchContent}>
                <span>● 進階搜尋：&ensp;</span>
                <span>人數-{acceptNum}</span>&ensp;/&ensp;
                <span>性別-{acceptGender}</span>&ensp;/&ensp;
                <span>交通-{transportation}</span>
            </section>

            {/* 搜尋結果 */}
            <section className="guideSearchResults">
                {guideArr.map(item =>
                    <div className="guideResult" key={item.gId} name={item.gId} onClick={guidePersonalPage}>
                        {/* <a href={'/GuidePersonal:' + item.gId}> */}
                        <div className="putMemberImg">
                            <img src={item.gImg} id="memberImg" />
                        </div>
                        <div className="guideContent">
                            <div className="guideInformationArea">
                                <span className="guideName">{item.gName}</span>
                                <span className="star"><AiFillStar /></span>
                                <span className="guideStarNum">{item.gStarNum}</span><br />
                                <span className="guideTitle"> {item.gTitle}</span>
                            </div>
                            <div className="guideRecommend">
                                <span className="guideRecommendIcon"><i><AiOutlineLike /></i></span>
                                <span> 景點:</span>
                                <span className="guideRecommendContent">{item.gRecommend}</span>
                            </div>
                            <div className="guideLocation">
                                <i className='locationIcon'><IoLocationSharp /></i>
                                <span className="locationContent">{item.gLocation}</span>
                            </div>
                        </div>

                    </div>
                )}
            </section>
        </div>
    );

}

export default Search;