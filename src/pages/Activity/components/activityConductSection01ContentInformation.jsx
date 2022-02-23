import React, { useState } from 'react';

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



const Section01ContentInformation = () => {


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
            <div className="section01Content">
                {/* <!-- 名稱 --> */}
                <div className="setName">
                    <p>名稱</p>
                    <Input placeholder="請輸入名稱" />

                </div>
                <div className="setIntroduction">
                    {/* <!-- 簡介 --> */}
                    <p>簡介</p>
                    {/* <Input name="introduction" id="introduction" maxlength="72"
                        ></Input> */}
                            <Input placeholder="請用60個字簡短介紹您的活動" name="" id="" cols="30" rows="10"></Input>
                            
                        
                </div>
                {/* <!-- 日期 --> */}
                <div className="date">

                    <p>日期</p>
                    <div className="dateInput">
                        <Input.Group compact>
                            {/* <Input style={{ width: '50%' }} defaultValue="input content" /> */}
                            <DatePicker style={{ width: '62%' }} />
                        </Input.Group>



                        
                        <p className="timeText">時間</p>
                        <div className="timeInput" >
                            <Input placeholder="請輸入時間" type='time' />
                        </div>

                    </div>

                    {/* <!-- 地點 --> */}
                    <div className="location">
                        <p>地點</p>
                        <div className="locationInput">
                            <Input  type="text" placeholder="地址" />
                        </div>
                    </div>
                    {/* <!-- 人數 --> */}
                    <div className="acceptNum">
                        <p>人數</p>
                        <span>
                            <input type="button" value="-" className="numBtn" onClick={del} />
                            <input className='people' id="people" type="text" value={apple} name="acceptNum" />
                            <input type="button" value="+" className="numBtn"
                                onClick={add} />
                        </span>
                    </div>
                    {/* <!-- 區域 --> */}
                    <div className="place">
                        <p>區域</p>
                        <span className="selectPlace">
                            <label>
                                <input type="radio" name="place" id="indoor" value="indoor" /> 室內
                            </label>
                            <label>
                                <input type="radio" name="place" id="outdoor" value="outdoor" /> 室外
                            </label>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Section01ContentInformation;