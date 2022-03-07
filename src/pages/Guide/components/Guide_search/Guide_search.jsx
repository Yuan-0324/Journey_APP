import { useContext, useState, useEffect } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { DatePicker, TreeSelect } from "antd";
import axios from 'axios';
import "antd/dist/antd.css";
import '../../stylesheet/tour_guide.css';
import moment from 'moment';
import 'moment/locale/zh-tw';
import locale from 'antd/es/date-picker/locale/zh_TW';
import context from '../../../../context';
import Search_results from './Guide_search_results';
import home from '../../../Home/Home';

const Search = () => {

    // ---- 連接 HOME 的搜尋 -----

    const homeSearch = useContext(context).searchResult;
    console.log(homeSearch)
    
    // -------------------------
    
    // ------ 0306 ------
    const guide_id = localStorage.getItem('guide_id');
    const [guideArr, setGuideArr] = useState([]);

    const currentUser = useContext(context).userInfo;
    // const guide_id = useContext(context).guide_id;
    // const [guideArr, setGuideArr] = useState([]);
    console.log(useContext(context));
    console.log(guide_id);

    //判斷登入者是否已為嚮導(加入嚮導行列消失)
    const [isGuide, setIsGuide] = useState(false);
    const joinShowOrHide = isGuide ? { visibility: "hidden" } : { visibility: "visible" };
    
    useEffect(async () => {
        if (guide_id) {
            setIsGuide(true);
        } else {
            setIsGuide(false);
        }
    }, []);

    //熱門嚮導
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guideSearch/guidePopular`);
        setGuideArr(result.data);
    }, []);

    //城市選擇
    const { TreeNode } = TreeSelect;

    //日曆
    function disabledDate(current) {
        return current < moment();
    };

    //進階搜尋
    const [Toggled, setToggled] = useState(false);
    const visibilityHideOrShow = Toggled ? { visibility: "visible" } : { visibility: "hidden" };
    const advancedSearchBtnClick = () => {  //進階搜尋按鈕
        setToggled(true);
        setSearchContentToggled(true);
    };
    const advancedSearchSetBtnClick = () => { //設定按鈕
        setToggled(!Toggled);
        setSearch({ ...search, ['acceptNum']: acceptNum, ['acceptGender']: acceptGender, ['transportation']: transportation });
    };
    const cancelBtnClick = () => {  //取消按鈕
        setAcceptNum(1);
        setAcceptGender('不限');
        setTransportation('不限');
        setSearchContentToggled(false);
        setToggled(false);
        setSearch({ ...search, ['acceptNum']: 1, ['acceptGender']: '不限', ['transportation']: '不限' });
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

    //搜尋按鈕
    const [search, setSearch] = useState({
        cityValue: null,
        dateValue: null,
        acceptNum: 1,
        acceptGender: '不限',
        transportation: '不限'
    });
    const searchBtnClick = async () => {
        if (Toggled) {
            alert('「進階搜尋」請設定或取消~')
        } else {
            if (search.cityValue == null || undefined) {
                alert('請選擇目的地~');
            } else {
                console.log("ok");
                let searchResults = await axios.post(`http://localhost:8000/guideSearch/searchResults`, search);
                setGuideArr(searchResults.data);
                console.log(searchResults);
            }
        }
    }

    return (
        <div>
            {/* 搜尋 */}
            <section className="searchArea">
                <div className='guideSearchBar'>
                    <div className="searchCity">
                        <TreeSelect className="guideCityInput"
                            showSearch
                            allowClear
                            style={{ width: "185px" }}
                            value={search.cityValue}
                            dropdownStyle={{ overflow: "auto" }}
                            placeholder="*探索目的地"
                            onChange={e => setSearch({ ...search, ['cityValue']: e })}
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
                            onChange={e => setSearch({ ...search, ['dateValue']: moment(e).format('YYYY-MM-DD') })}
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
                    <div className='guidesearchBg' onClick={searchBtnClick}>
                        <BiSearchAlt className='guidesearchBtn' />
                    </div>

                </div>

                {

                }
                <div className="joinGuide" style={joinShowOrHide}>
                    <a href="/GuideJoin" >加入嚮導行列 → </a>
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
                {guideArr.map(item => <Search_results key={item.guide_id} item={item} />)}
            </section>
        </div>
    );

}

export default Search;