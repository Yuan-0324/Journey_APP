import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import context from '../../context';
import context from '../../context';
// import check from '../../images/Success-unscreen'
import 'antd/dist/antd.css';
import './StyleSheet/activityEdit/activityEdit.css'
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
    TreeSelect,
    Modal
} from 'antd';
// import check from '../../../images/check.gif'

//載入Components

import EditSection01 from "./components/activityEdit/activityEditSection01"
import $ from 'jquery';
// import {
//     Navbar,
//     Nav,
//     NavDropdown,
//     Form,
//     FormControl,
//     Button,
//     Modal
// } from "react-bootstrap"

// ---- 更改 ----
// import check from '../../images/Success-unscreen.gif';
import './StyleSheet/activityConduct/activityConduct.css';

const Activity_Edit = () => {

    //取得事件ID
    const eventID = useParams().id
    //取得既有資料
    useEffect(async () => {
        axios.post('http://localhost:8000/event/activityEdit/existingData', { eventID })
            .then(res => { console.log(res.data); setExistingData(res.data) })
    }, []);
    //將既有資料寫入前端
    const [existingData, setExistingData] = React.useState([{
        title: '123'
    }])
    // 修改前端資料
    // //介紹
    // const newIntroduction = (e) => {
    //     existingData.introduction = e.target.value;
    //     setExistingData(existingData);
    //     console.log(existingData.title);
    // }
   
    //將前端資料寫入後端
    const Edit = () => {
        axios.post('http://localhost:8000/event/activityEdit/NewData', { eventID, existingData })
            .then(res => { console.log(res.data); });
            // console.log(existingData.introduction);
            window.location.href=`http://localhost:3000/activityIntroduce/${existingData.eventID}`
    }
    //環境設置
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
    // console.log(existingData.people_limit);
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
        // console.log(existingData.introduction);

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
        // console.log(existingData.kind);
    }


    //活動場所
    const inputPlace = (e) => {
        var result = "";
        $("input[type=radio]:checked").each(function () {
            result = $(this).val();
        });
        // console.log(typeof  result);
        // console.log(result);
        existingData.indoor = result;
        setExistingData(existingData);
        // console.log(existingData.indoor);
    }

     //內容
     const inputContent = (e) => {
        existingData.content = e.target.value;
        setExistingData(existingData);
        // console.log(existingData.content);
    }
    $(function () {
        // 下一頁移動
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
    });
    return (
        <>
            <div className='activityEdit'>
                <section id="section01">
                    <div className="section01Area">
                        <div className="leftTitle">
                            {/* <div className="pageTitle">
                                 編輯資料
                            </div> */}
                        </div>
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
                    <Input onChange={inputIntroduction} value={existingData.introduction} name="" id="" cols="30" rows="10"></Input>
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
                            <input onChange={inputPlace} type="radio" name="place" id="indoor" checked={existingData.indoor=='室內'}  /> 室內
                        </label>
                        <label>
                            <input onChange={inputPlace} type="radio" name="place" id="outdoor" checked={existingData.indoor=='室外'}  /> 室外
                        </label>
                    </span>
                </div>

                <div className="activityEditContent">
                    {/* 內容 */}
                    <p>內文</p>
                    <textarea onChange={inputContent} className="activitySetContentTextarea" name="" id="" cols="30" value={existingData.content} rows="8"></textarea>
                </div>
                

            </div>
                    </div>
                    {/* <a href="#section02" className="nextPage"><span></span>下一頁</a> */}
                    <button  onClick={Edit} variant="primary" className="submitBtn" >
                        編輯活動
                    </button>
                </section>
            </div>
        </>
    )
}
export default Activity_Edit;