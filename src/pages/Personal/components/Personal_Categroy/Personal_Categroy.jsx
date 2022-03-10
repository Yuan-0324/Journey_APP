import { param } from 'jquery';
import { useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Context from '../../../../context';
import Axios from 'axios';


import Club_List from './Club_List';

// 左側功能列表

const Personal_Categroy = () => {

    let history = useHistory();

    const currentUser = useContext(Context).userInfo;
    const viewUserInfo = useContext(Context).viewUserInfo;

    const currentParams = useParams();


    let btnClick = (evt) => {
        let clicktarget = evt.target.dataset.categroy;
        history.push('/personal/' + currentParams.id + '/' + clicktarget);
    }

    // console.log(currentParams.id)
    // console.log(viewUserInfo);
    return (
        <div className="personal-categroy">

            <div className='personal-guide'>
                {/* <img src="https://picsum.photos/id/1062/300/300" alt=""></ img> */}
                <h3>嚮導簡介</h3>
            </div>

            <div className='personal-btn'>
                <div onClick={btnClick} data-id='0' data-categroy='article' >{+currentParams.id === currentUser.id? '我的文章':`${viewUserInfo.firstName}的文章`}</div>
                <div onClick={btnClick} data-id='1' data-categroy='activities' >{+currentParams.id === currentUser.id? '我辦的活動':`${viewUserInfo.firstName}辦的活動`}</div>
                { +currentParams.id === currentUser.id ? <div onClick={btnClick} data-id='2' data-categroy='collection' >我的收藏</div>:''}
                { +currentParams.id === currentUser.id ? <div onClick={btnClick} data-id='3' data-categroy='invitation' >邀約通知</div>:''}
                { +currentParams.id === currentUser.id ? <div onClick={btnClick} data-id='4' data-categroy='guide' >嚮導評價</div>:''}
                { +currentParams.id === currentUser.id ? <div>個人設定</div>:''}  
            </div>
            <Club_List />
        </div>
    )
}

export default Personal_Categroy;