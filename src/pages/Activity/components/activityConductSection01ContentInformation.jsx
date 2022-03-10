import React, { useState } from 'react';
import $ from 'jquery/dist/jquery';
import moment from 'moment';

//css
import 'antd/dist/antd.css';

//ant


import {
    Input,
    Button,
    Col,
    Row,
    Select,
    InputNumber,
    DatePicker,
    AutoComplete,
    Cascader,
    Tooltip,
    TreeSelect
} from 'antd';




const Section01ContentInformation = ({ postNewEvent, setPostNewEvent }) => {
    // $('.ant-picker-input').childElement().value(fun{
    // })
    const { TreeNode } = TreeSelect;

    



    const [people, setNum] = useState(0)
    function add() {
        setPostNewEvent(function (prev) {
            return { ...postNewEvent, ['Num']: prev.Num + 1 };
               
            
        }
        // console.log();
        )
        // console.log(postNewEvent.Num.value);
        // inputAcceptNum()
    }
   
    function del() {
        setPostNewEvent(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return { ...postNewEvent, ['Num']: prev.Num - 1 }
            }
        }
        )
      
        // inputAcceptNum()
    }
    console.log(postNewEvent.Num);
    //接收資料
    //活動名稱
    const inputName = (e) => {
        postNewEvent.title = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
    }
    //活動介紹
    const inputIntroduction = (e) => {
        postNewEvent.introduce = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
        
    }
    //日期
    const inputDate = (e) => {
        let activityTime = moment(e).format('YYYY-MM-DD');
        postNewEvent.date = activityTime;
        setPostNewEvent(postNewEvent);
        console.log(postNewEvent.date);
        console.log(activityTime);
    }
    //時間
    const inputTime = (e) => {
        postNewEvent.time = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
    }
     //活動縣市
     const inputLocation = (e) => {
        postNewEvent.location = e
        setPostNewEvent(postNewEvent);
        console.log(postNewEvent.location);
    }
    //活動地點
    const inputAddress = (e) => {
        postNewEvent.address = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
    }
    //活動類型
    const [AdvancedSearchType, AdvancedSearchTypeIn] = useState('不限')
    const inputKind = (e) => {
        //變更類型值
        AdvancedSearchTypeIn(e.target.value)
        postNewEvent.kind = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
    }
    
    //活動人數
    // const inputAcceptNum = (e) => {
    //     postNewEvent.Num = people
    //     setPostNewEvent(postNewEvent);
    //     console.log(postNewEvent.Num);
    //     console.log(typeof postNewEvent.Num);
    // }
    //活動場所
    const inputPlace = (e) => {
        var result = "";
        $("input[type=radio]:checked").each(function () {
            result = $(this).val();
        });
        // console.log(typeof  result);
        postNewEvent.indoor = result;
        setPostNewEvent(postNewEvent);
    }
    return (
        <>
            <div className="section01Content">
                {/* <!-- 名稱 --> */}
                <div className="setName">
                    <p>名稱</p>
                    <Input placeholder="請輸入名稱" onChange={inputName} />
                </div>
                <div className="setIntroduction">
                    {/* <!-- 簡介 --> */}
                    <p>簡介</p>
                    {/* <Input name="introduction" id="introduction" maxlength="72"
                        ></Input> */}
                    <Input onChange={inputIntroduction} placeholder="請用60個字簡短介紹您的活動" name="" id="" cols="30" rows="10"></Input>
                </div>
                {/* <!-- 日期 --> */}
                <div className="date">
                    <p>日期</p>
                    <div className="dateInput">
                        <Input.Group compact >
                            {/* <Input style={{ width: '50%' }} defaultValue="input content" /> */}
                            <DatePicker onChange={inputDate} style={{ width: '62%' }} />
                        </Input.Group>
                        {/* DatePicker初始狀態 */}
                        {/* <Input.Group compact > */}
                        {/* <Input style={{ width: '50%' }} defaultValue="input content" /> */}
                        {/* <DatePicker onChange={inputDate} style={{ width: '62%' }} />
                        </Input.Group> */}
                        <p className="timeText">時間</p>
                        <div className="timeInput" >
                            <Input onChange={inputTime} placeholder="請輸入時間" type='time' />
                        </div>
                    </div>

                     {/* 活動縣市 */}   
                     <div className="location">
                        <p>縣市</p>
                        <div className="locationInput">

                            <div className="searchCity">
                                <TreeSelect className="guideCityInput"
                                    showSearch
                                    allowClear
                                    style={{ width: "185px" }}
                                    // value=
                                    dropdownStyle={{ overflow: "auto" }}
                                    placeholder="請選取縣市"
                                    onChange={inputLocation}
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
                        </div>
                    </div>

                    {/* 活動縣市底 */}
                    {/* <!-- 地點 --> */}
                    <div className="address">
                        <p>地點</p>
                        <div className="addressInput">
                            <Input onChange={inputAddress} type="text" placeholder="地址" />
                        </div>
                    </div>

                    <div className="activityType">
                        <p>類型</p>
                        <div className="activityTypeInput">
                            <select value={AdvancedSearchType} onChange={inputKind}>
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
                        </div>
                    </div>

                    {/* <!-- 人數 --> */}
                    <div className="acceptNum">
                        <p>人數</p>
                        <span>

                            

                            <input  type="button" value="-" className="numBtn" onClick={del} />
                            <input    className='people' id="people" type="text" value={postNewEvent.Num}  name="acceptNum" />
                            <input  type="button" value="+" className="numBtn"
                                onClick={add} />
                        </span>
                    </div>
                    {/* <!-- 場所 --> */}
                    <div className="place">
                        <p>場所</p>
                        <span className="selectPlace">
                            <label>
                                <input onChange={inputPlace} type="radio" name="place" id="indoor" value="室內" /> 室內
                            </label>
                            <label>
                                <input onChange={inputPlace} type="radio" name="place" id="outdoor" value="室外" /> 室外
                            </label>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Section01ContentInformation;