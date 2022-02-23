import React, { useState } from 'react';

//修改樣式
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { CopyOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    Row,
    Select,
    InputNumber,
    DatePicker,
    AutoComplete,
    Cascader,
    Tooltip,
} from 'antd';
// 載入icon
import { BiSearchAlt } from "react-icons/bi"

const { Search } = Input;
const onSearch = (value) => console.log(value);

const { Option } = Select;
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];


const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: "#1890ff"
        }}
    />
);

const ActivitySearch = () => {
    // 開啟進階搜尋

    const [displaySearchForm, displayAdvancedSearchForm] = useState(false)
    // 進階搜尋結果
    const [displayAdvancedSearchOut, displaySearchOut] = useState('none')
    // 進階搜尋輸入框
    const displaySearchFormState = displaySearchForm ? { visibility: 'visible' } : { visibility: 'hidden' }

    //進階搜尋按鈕 
    const DisplaySearchFormStateBtn = () => {
        displayAdvancedSearchForm(true);
        displaySearchOut('block')

    }
    // 取消進階搜尋
    const close = () => {
        displayAdvancedSearchForm(false);
        displaySearchOut('none');
    }
    //  進階搜尋預設值
    const [AdvancedSearchType, AdvancedSearchTypeIn] = useState('不限')
    const [AdvancedSearchPlace, AdvancedSearchPlaceIn] = useState('不限')
    const [AdvancedSearchSort, AdvancedSearchSortIn] = useState('依上傳時間')
    //人數增減
    const [apple, setNum] = useState(1)
    function add() {
        setNum(function (prev) {
            if (prev == 6) {
                return prev;
            } else {
                return prev + 1
            }
        }
        )
    }
    function del() {
        setNum(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return prev - 1
            }
        }
        )
    }
    return (
        <>

            <div className="activitySearchBar" >
                <div className="search">
                    <div className="searchInput">
                        {/* <Space direction="vertical"> */}
                        {/* 關鍵字 */}
                        <div className="searchInputItem searchInputItemRight">

                            <Input className="searchInputItem" name="keyWord" placeholder="請輸入關鍵字" />
                        </div>
                        <div className='searchLine'> </div>
                        {/* 搜尋地區 */}
                        <div className="searchInputItem">

                            <Input.Group className="searchInputItem" compact >
                                <Select className="searchInputItem searchInputItemPlace"  placeholder="請選擇地區" >
                                    <Option value="北部">北部</Option>
                                    <Option value="中部">中部</Option>
                                    <Option value="南部">南部</Option>
                                    <Option value="東部">東部</Option>
                                    <Option value="離島">離島</Option>
                                </Select>
                            </Input.Group>
                        </div>
                        <div className='searchLine'> </div>

                        {/* 日期 */}
                        <div className="searchInputItemDate">

                            <Input.Group compact>
                                <Input style={{ width: '80px' }} defaultValue="活動日期" />
                                <DatePicker.RangePicker style={{ width: '240px' }} />
                            </Input.Group>

                        </div>
                        {/* </Space> */}
                    </div>
                   
                    {/* <!-- 搜尋 --> */}

                    {/* <!--進階搜尋 --> */}
                    <div className='searchLine'> </div>

                    <div className='advancedSearch'>
                        {/*  開啟進階搜尋 */}
                        <button onClick={DisplaySearchFormStateBtn} className="advancedSearch mainButton" >
                            <p>進階搜尋</p>
                        </button>

                        <div id="hide1" className="advancedSearchForm" style={displaySearchFormState} >
                            <form >
                                <div className="advancedSearchFormItem">
                                    <label htmlFor="searchType"><span>類型&emsp;</span></label>
                                    <select value={AdvancedSearchType} onChange={(e) => { AdvancedSearchTypeIn(e.target.value) }}>
                                        <option value='不限'>不限</option>
                                        <option value='戶外踏青'>戶外踏青</option>
                                        <option value='棋藝交流'>棋藝交流</option>
                                        <option value='水域活動'>水域活動</option>
                                        <option value='藝文賞析'>藝文賞析</option>
                                        <option value='有氧運動'>有氧運動</option>
                                        <option value='園藝植栽'>園藝植栽</option>
                                        <option value='品茗嘗膳'>品茗嘗膳</option>
                                        <option value='攝影活動'>攝影活動</option>
                                    </select>
                                    {/*<input type="text" name="searchType" id="searchType" value='' /> */}
                                </div>

                                <div className="advancedSearchFormItem">
                                    <span>室內外</span>
                                    <input type="radio" id="indoor" name="vehicle1" value="室內" checked={AdvancedSearchPlace === '室內'} onChange={(e) => { AdvancedSearchPlaceIn(e.target.value) }} />
                                    <label htmlFor="indoor">室內</label>
                                    <input type="radio" id="outdoor" name="vehicle2" value="室外" checked={AdvancedSearchPlace === '室外'} onChange={(e) => { AdvancedSearchPlaceIn(e.target.value) }} />
                                    <label htmlFor="outdoor"> 室外</label><br />
                                </div>

                                {/* <div className="advancedSearchFormItem">
                                    <div className="acceptNum">
                                        <p>人數</p>
                                        <span>
                                            <input type="button" value="-" className="numBtn" onClick={del} />
                                            <input id="people" type="text" value={apple} name="acceptNum" />
                                            <input type="button" value="+" className="numBtn"
                                                onClick={add} />
                                        </span>
                                    </div>
                                </div> */}

                                <div className="advancedSearchFormItemButton">

                                    <div className="displaySearchOut" onClick={() => { displaySearchOut('block') }}>送出</div>

                                    {/*  關閉進階搜尋 */}

                                    <div className="close" onClick={close}>取消</div>

                                </div>
                            </form>
                        </div>
                    </div>
                    {/* 進階搜尋內容 */}
                    <div className='advancedSearchOut' style={{ display: displayAdvancedSearchOut }}  >
                        <span>類型 : {AdvancedSearchType}&emsp;</span> &emsp;<span>室內外 : {AdvancedSearchPlace}</span> &emsp;<span>&emsp;人數 : {apple}</span>
                    </div>
                    {/* <!-- 進階搜尋底 --> */}
                    {/* 開始搜尋 */}
                    <div className='activitySearchAction'>
                        <BiSearchAlt />
                    </div>



                </div>
                <div className="creatActivity">
                    <a href='http://localhost:3000/ActivityConduct'>來辦個活動吧→</a>
                </div>
            </div>
        </>
    )
}
export default ActivitySearch