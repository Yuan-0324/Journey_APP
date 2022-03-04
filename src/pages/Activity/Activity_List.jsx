// import React, { Component } from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// ---- 更改css樣式 ----
import './StyleSheet/activityList/activityList.css';
import 'antd/dist/antd.css'


//照片

// components
// banner
import Banner from './components/banner'
// search
import Search from './components/search';
// activityListItem
import ActivityListItem from './components/activityListItem';
// 新增設計樣式
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { BiSearchAlt } from "react-icons/bi"
import ActivitySearch from './components/search';

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const Activity_List = () => {
    const [activityTitle, setEve] = React.useState(
        [{
            eventID: 1,
            post_email: '',
            title: '教召'
        }, {
            eventID: 2,
            post_email: '',
            title: '掃地'
        }, {
            eventID: 3,
            post_email: '',
            title: '唱軍歌'
        }]
    )
    // console.log(activityTitle.title);
    useEffect(async () => {
        await axios.get('http://localhost:8000/event/show')
            .then(res => { setEve(res.data) })
        // console.log(res.data);
    }, []);

   const [ ActivitySearchContent ,setActivitySearchContent]=React.useState(
       {
        ActivitySearchInputValue:''
       }
   )

const ActivitySearchInput =(e)=>{
    ActivitySearchContent.ActivitySearchInputValue='%'+e.target.value+'%';
    setActivitySearchContent(ActivitySearchContent);
    console.log(ActivitySearchContent.ActivitySearchInputValue);
}

    const activitySearchAction =()=>{
        axios.post('http://localhost:8000/event/activityList/Search',{ActivitySearchContent})
        .then(res=> { setEve(res.data) })
    }
    return (
        <div className='ActivityListBody'>
            <div className="wrap">
                {/* <!-- 活動大圖 --> */}
                <div className="event-banner" >
                    <Banner className="event-banner" />
                </div>
                <div className="container">
                    {/* <!-- 搜尋欄 --> */}
                    {/* <Search /> */}
                    <div className="activitySearchBar" >
                        <div className="search">
                            <div className="searchInput">
                                {/* <Space direction="vertical"> */}
                                {/* 關鍵字 */}
                                <div className="searchInputItem searchInputItemRight">

                                    <input type='text' onChange={ActivitySearchInput} className="searchInputItem" name="keyWord" placeholder="請輸入關鍵字/地區" />
                                    
                                </div>
                            </div>
                            <div onClick={activitySearchAction} className='activitySearchAction'>
                                <BiSearchAlt />

                            </div>
                        </div>

                        <div className="creatActivity">
                            <a href='http://localhost:3000/ActivityConduct'>來辦個活動吧→</a>
                        </div>
                    </div>
                    {/* <!-- 活動內容 --!> */}
                    {activityTitle.map((elm, idx) =>
                        <>
                            
                            <ActivityListItem data={elm} key={idx} />
                        </>
                    )
                    }
                </div>
            </div>
        </div >
    );

}

export default Activity_List;