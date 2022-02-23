import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Club_List from './Club_List';

// 左側功能列表

const Personal_Categroy = () => {

    let history = useHistory();
    
    let btnClick = (evt) => {
        let clicktarget = evt.target.dataset.categroy;
        let currentCate = { backgroundColor: '#58a8bd', color: '#fff' }
        // 12345 要放 id 名稱
        history.push('/personal/'+ 12345 + '/' + clicktarget);
        // window.location = '/personal/'+ 12345 + '/' + clicktarget;
    }

    return (
        <div className="personal-categroy">

            <div className='personal-guide'>
                <img src="https://picsum.photos/id/1062/300/300" alt=""></ img>
                <h3>嚮導簡介</h3>
            </div>

            <div className='personal-btn'>
                <div onClick={btnClick} data-id='0' data-categroy='article' >我的文章</div>
                <div onClick={btnClick} data-id='1' data-categroy='activities' >我辦的活動</div>
                <div onClick={btnClick} data-id='2' data-categroy='collection' >我的收藏</div>
                <div onClick={btnClick} data-id='3' data-categroy='invitation' >邀約通知</div>
                <div onClick={btnClick} data-id='4' data-categroy='guide' >嚮導評價</div>
                <div>個人設定</div>
            </div>

            <Club_List />

        </div>
    )
}

export default Personal_Categroy;