//引入套件
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import Axios from 'axios'

const Searching_Member = ({seachResult,userId}) =>{

    let history = useHistory();
    const gotoTheRoute = (e) =>{
        let goto = e.target.dataset.person;
        history.push(`/Personal/${goto}`);
    }

    return (
        <div className='searching-list'>
            {seachResult.filter((elm,idx)=>{
                return elm.id != userId;
            }).map((elm,idx)=>
            <div className='search-inside d-flex align-items-center cursor-pointer' key={idx}  data-person={elm.id} onClick={gotoTheRoute}>
            {/* 要放上個人頁面路徑 */}
                <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center' data-person={elm.id} onClick={gotoTheRoute}>
                    <img className='img-fluid' src={elm.api_selfie} alt="" data-person={elm.id} onClick={gotoTheRoute}/>
                </div>

                <div className='d-flex flex-column' data-person={elm.id} onClick={gotoTheRoute}>

                    <div className='a-black'data-person={elm.id} onClick={gotoTheRoute}>{elm.lastName} {elm.firstName}</div>

                    <div className='group-name-size d-flex' data-person={elm.id}>
                         {elm.followed ? <div className='mr-2' data-person={elm.id} onClick={gotoTheRoute}>已追蹤</div> : ''}
                        <a className='text-decoration-none' data-person={elm.id}>訊息</a>
                        {/* a herf要開啟聊天功能 */}
                    </div>

                </div>
            </div>
            )}
            <hr />
            <div className='search-result d-flex justify-content-center'><p>沒有其他結果</p></div>
         </div>
    );

}

export default Searching_Member ;