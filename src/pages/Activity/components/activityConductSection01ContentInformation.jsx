import React, { useState } from 'react';
import $ from 'jquery/dist/jquery';

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
    Tooltip
} from 'antd';




const Section01ContentInformation = ({ postNewEvent, setPostNewEvent }) => {
    // $('.ant-picker-input').childElement().value(fun{
    // })





    const [people, setNum] = useState(1)
    function add() {
        setNum(function (prev) {
            
                return prev + 1
            
        }
        )
        inputAcceptNum()
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
        inputAcceptNum()
    }
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
        //取得年份
        var outputYear = e._d.getFullYear();
        //取得月份
        var outputMonth = (e._d.getMonth() + 1);
        //取得日期
        var outputDate = e._d.getDate();
        //取得星期
        var outputDay = e._d.getDay();
        //組合
        var outputFull = `${outputYear}/${outputMonth}/${outputDate}/星期${outputDay}`
        // let full=JSON.stringify(outputValue)
        // console.log(full);
        // console.log(outputFull);
        // console.log(e._d);
        // console.log(typeof full);
        postNewEvent.date = outputFull
        setPostNewEvent(postNewEvent);
    }
    //時間
    const inputTime = (e) => {
        postNewEvent.time = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(e.target.value);
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
    const inputAcceptNum = (e) => {
        postNewEvent.Num = people
        setPostNewEvent(postNewEvent);
        // console.log(people);
    }
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

                            {/* <DatePicker
                                    selected={props.date}
                                    // onChange={handleDateChange}
                                    maxDate={new Date()}
                                    dateFormat="MMM dd, yyyy"
                                    className="picker"
                                /> */}

                            <Input onChange={inputTime} placeholder="請輸入時間" type='time' />

                        </div>
                    </div>
                    {/* <!-- 地點 --> */}
                    <div className="location">
                        <p>地點</p>
                        <div className="locationInput">
                            <Input onChange={inputAddress} type="text" placeholder="地址" />
                        </div>
                    </div>

                    <div className="location">
                        <p>類型</p>
                        <div className="locationInput">
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
                            <input   onClick={inputAcceptNum} className='people' id="people" type="text" value={people}  name="acceptNum" />
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