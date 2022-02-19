import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';


const About_Me = () => {

    const guideId1 = { gId: 1, acceptNum: 2, acceptGender: "不限", transportation: "汽車", interest: "爬山/唱歌/露營", recommendPlace: "淡水老街/象山", recommendRestaurant: "貳樓/老碼頭火鍋" };

    return (
        <div class="aboutMe">
            <span class="Title">關於我</span>
            <div class="aboutMeContent">
                <span>接待人數</span>
                <span>{guideId1.acceptNum +"人"}</span>
            </div>
            <div class="aboutMeContent">
                <span>接待性別</span>
                <span>{guideId1.acceptGender}</span>
            </div>
            <div class="aboutMeContent">
                <span>交通工具</span>
                <span>{guideId1.transportation}</span>
            </div>
            <div class="aboutMeContent">
                <span>興趣</span>
                <span>{guideId1.interest}</span>
            </div>
            <div class="aboutMeContent">
                <span>推薦景點  <AiOutlineLike /></span>
                <span>{guideId1.recommendPlace}</span>
            </div>
            <div class="aboutMeContent">
                <span>推薦餐廳  <AiOutlineLike /></span>
                <span>{guideId1.recommendRestaurant}</span>
            </div>
        </div>
    );
}

export default About_Me;