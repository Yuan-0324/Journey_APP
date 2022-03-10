import React, { useState } from 'react';
import $ from 'jquery/dist/jquery';
import moment from 'moment';

import check from '../../../../images/Success-unscreen.gif';

//css
import 'antd/dist/antd.css';

//ant


import {
    Input
} from 'antd';




const EditSection01 = ({ existingData, setExistingData }) => {
    // //計算人數
    function add() {
        setExistingData(function (prev) {
            return { ...existingData, ['people_limit']: prev.people_limit + 1 };
        })
    }
    function del() {
        setExistingData(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return { ...existingData, ['people_limit']: prev.people_limit - 1 }

            }
        }
        )
    }
    //接收資料
    //活動名稱
    // const inputName = (e) => {
    //     existingData.title = e.target.value
    //     setExistingData(existingData);
    //     // console.log(e.target.value);
    // }
    //活動介紹
    const inputIntroduction = (e) => {
        existingData.introduction = e.target.value
        setExistingData(existingData);
        console.log(existingData.introduction);

    }
    //日期
    // const inputDate = (e) => {
    //     let activityTime = moment(e).format('YYYY-MM-DD');
    //     existingData.date = activityTime;
    //     setExistingData(existingData);
    //     console.log(existingData.date);
    //     console.log(activityTime);
    // }
    //時間
    // const inputTime = (e) => {
    //     existingData.time = e.target.value
    //     setExistingData(existingData);
    //     // console.log(e.target.value);
    // }
    //活動縣市
    //  const inputLocation = (e) => {
    //     existingData.location = e
    //     setExistingData(existingData);
    //     console.log(existingData.location);
    // }
    //活動地點
    // const inputAddress = (e) => {
    //     existingData.address = e.target.value
    //     setExistingData(existingData);
    //     // console.log(e.target.value);
    // }
    //活動類型
    const [AdvancedSearchType, AdvancedSearchTypeIn] = useState(existingData.kind)
    const inputKind = (e) => {
        //變更類型值
        AdvancedSearchTypeIn(e.target.value)
        existingData.kind = e.target.value
        setExistingData(existingData);
        // console.log(e.target.value);
    }

    //活動人數
    // const inputAcceptNum = (e) => {
    //     existingData.Num = people
    //     setExistingData(existingData);
    //     console.log(existingData.Num);
    //     console.log(typeof existingData.Num);
    // }
    //活動場所
    const inputPlace = (e) => {
        var result = "";
        $("input[type=radio]:checked").each(function () {
            result = $(this).val();
        });
        // console.log(typeof  result);
        existingData.indoor = result;
        setExistingData(existingData);
    }
    return (
        <>
            <div className="section01Content">
                {/* <!-- 名稱 --> */}
                <div className="setName">
                    <p>名稱</p>
                    <h3 className='activityTitle'>{existingData.title}</h3>
                    {/* <Input placeholder="請輸入名稱" value= /> */}
                </div>
                <div className="setIntroduction">
                    {/* <!-- 簡介 --> */}
                    <p>簡介</p>
                    {/* <Input name="introduction" id="introduction" maxlength="72"
                        ></Input> */}
                    <Input onChange={inputIntroduction} placeholder={existingData.introduction} name="" id="" cols="30" rows="10"></Input>
                </div>
                {/* <!-- 日期 --> */}


                {/* 活動縣市底 */}
                {/* <!-- 地點 --> */}


                <div className="activityType">
                    <p>類型</p>
                    <div className="activityTypeInput">
                        <select value={existingData.kind} onChange={inputKind}>
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
                        <input type="button" value="-" className="numBtn" onClick={del} />
                        <input className='people' id="people" type="text" value={existingData.people_limit} name="acceptNum" />
                        <input type="button" value="+" className="numBtn"
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

                <div className="activityEditContent">
                    {/* 內容 */}
                    <p>內文</p>
                    <textarea className="activitySetContentTextarea" name="" id="" cols="30" placeholder={existingData.content} rows="8"></textarea>
                </div>
                

            </div>

        </>
    )
}
export default EditSection01;