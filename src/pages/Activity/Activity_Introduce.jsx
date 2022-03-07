// import React, { useState } from 'react';
import React, { useEffect, useState ,useContext } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import context from '../../context'
import { useHistory } from "react-router-dom"

// ---- 更新樣式----

import './StyleSheet/activityIntroduce/activityIntroduce.css';

// 載入components

//活動照片
import ActiveListImage from './components/activeListImage';
//活動內容
import ActivityListIntroduce from './components/ActivityListIntroduce'
//活動留言
import ActivityListMessage from './components/ActivityListMessage';
//活動資訊側邊欄
import IntroduceNavbarItem from './components/introduceNavbarItem';
//

// 照片
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';




const Activity_Introduce = () => {
    let { id } = useParams();
    console.log(id);

    const currentUser = useContext(context);
    let userID = currentUser.userInfo.id;
    console.log(userID);
    const [activityIntroduceItem, setEve] = React.useState(
        [{
            eventID: '',
            post_email: '',
            title: '教召'
        }, {
            eventID: '',
            post_email: '',
            title: '掃地'
        }, {
            eventID: '',
            post_email: '',
            title: '唱軍歌'
        }]
    );

    const history = useHistory()
    const  moveActivityConduce=(e)=>{
        
        setEve(activityIntroduceItem);
        history.push(`${userID}`)  
        console.log(userID);
    } 
    useEffect(() => {
        axios.get('http://localhost:8000/event/activityIntroduceContent/' + id)
            .then(res => { console.log(res.data); setEve(res.data) })
            console.log(activityIntroduceItem[0].eventID);
            
    }, []);

    return (
        <div className='activityIntroduceBody'>
            
            {activityIntroduceItem.map((elm, idx) =>
                <>
                    <div className="wrap">
                        <div className='wrapTitle'>
                            <div className="wrapTitleItem">
                                <h1>{elm.title}</h1>
                                <pre style={{ color: '#1697d5', fontWeight: '550' }}>{elm.date} &emsp; {elm.time}   <IoLocationSharp style={{ color: '#1697d5' }} /> <span >{elm.location}</span></pre>
                            </div>
                            <div className="creatActivity">
                                {/* href='http://localhost:3000/ActivityConduc/' */}
                                {/* onClick={moveActivityConduce} */}
                                <a href={`http://localhost:3000/ActivityConduct/${userID}`}>來辦個活動吧→</a>
                            </div>
                        </div>
                        <div className='wrapBody'>
                            <div className='wrapLeft'>
                                {/* <!--活動照片  --> */}
                                <ActiveListImage data={elm} key={idx} />
                                {/* <!-- MAIN --> */}
                                <div className="main">
                                    {/* <!-- 活動內容 --> */}
                                    <div className="container">
                                        {/* <!-- 活動介紹 --> */}
                                        <ActivityListIntroduce data={elm} key={idx} />
                                        <br />
                                        <hr />
                                        {/* <!-- 留言板 --> */}
                                        {/* <ActivityListMessage /> */}
                                    </div>
                                    {/* <!-- 活動內容 --> */}
                                </div>
                            </div>
                            {/* 活動資訊側邊欄 */}
                            <IntroduceNavbarItem data={elm} key={idx} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}


export default Activity_Introduce;