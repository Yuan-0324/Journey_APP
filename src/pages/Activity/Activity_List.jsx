import React, { Component } from 'react';

// ---- 更改css樣式 ----
import './StyleSheet/activityList/activityList.css';
import 'antd/dist/antd.css'


//照片
import teaCanva from "../../images/activity/teaActivity/teaCanva.jpg"
import teaCanva73 from "../../images/activity/teaActivity/teaCanva73.jpg";
// components
// banner
import Banner from './components/banner'
// search
import Search from './components/search';
// activityListItem
import ActivityListItem from'./components/activityListItem';
// 新增設計樣式
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

class Activity_List extends Component {
    state = {}
    render() {
        return (
            <div className='ActivityListBody'>
                <div className="wrap">
                    {/* <!-- 活動大圖 --> */}

                    <div className="event-banner" >
                        <Banner className="event-banner" />
                        {/* <!--  img --> */}
                        {/* <img src='https://picsum.photos/id/395/1105/400' alt="" /> */}
                    </div>
                    <div className="container">
                        {/* <!-- 搜尋欄 --> */}
                        <Search />
                        <ActivityListItem/>

                        <ActivityListItem/>
                        <ActivityListItem/>

                    </div>


                </div>




            </div>
        );
    }
}

export default Activity_List;