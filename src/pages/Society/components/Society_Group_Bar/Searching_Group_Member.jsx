//引入套件
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import Axios from 'axios'

const Searching_Group_Member = ({followedMember}) =>{

    let history = useHistory();
    const gotoTheRoute = (e) =>{
        let goto = e.target.dataset.person;
        history.push(`/Personal/${goto}`);
    }

    return (
        <div className='searching-list'>

            {followedMember.map((elm,idx)=>
            
            <div className='d-flex align-items-center mt-2 ml-2 mr-2 cursor-pointer' key={idx}  data-person={elm.id} onClick={gotoTheRoute}>
            {/* 要放上個人頁面路徑 */}
                <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center'>
                    <img className='img-fluid' src={elm.selfie} alt=""/>
                </div>

                <div className='d-flex flex-column'>

                    <div className='a-black' >{elm.lastName+elm.firstName} {elm.followed? '已追蹤': ""}</div>

                    <div data-person={elm.id}>
                        <a className='text-decoration-none' >訊息</a>
                        {/* a herf要開啟聊天功能 */}
                    </div>

                </div>
            </div>
            )}
            
            <hr/>
            <div className='d-flex justify-content-center'><p>沒有其他結果</p></div>
         </div>
    );

}

export default Searching_Group_Member ;