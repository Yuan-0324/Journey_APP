//引入套件
import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory , useParams} from "react-router-dom";
// import Axios from 'axios'

const Searching_Group_Member = ({followedMember,userId,invitperson}) =>{
    let societyID = useParams();

    // 切換到個人介面
    let history = useHistory();
    const gotoTheRoute = (e) =>{
        e.stopPropagation();
        let goto = e.target.dataset.person;
        history.push(`/Personal/${goto}`);
    }


    return (
        <div className='searching-list'>

            {followedMember.map((elm,idx)=>
            
            <div key={idx} className='d-flex align-items-center mt-2 ml-2 mr-2 cursor-pointer'  data-person={elm.id} onClick={gotoTheRoute}>
            {/* 要放上個人頁面路徑 */}
                <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center' data-person={elm.id}>
                    <img className='img-fluid' src={elm.api_selfie} alt="" data-person={elm.id}/>
                </div>

                <div className='d-flex flex-column'>

                    <div className='a-black' data-person={elm.id}>{elm.lastName+elm.firstName}</div>

                    <div className='d-flex' data-person={elm.id}>
                        {/* 寫到這裡 搜尋後的呈現 */}
                        {elm.be_invited==1  ? <div className='mr-2' data-person={elm.id}>邀請中</div>: (elm.confirmed_join ? <div className='mr-2'  data-person={elm.id}>{elm.appellation}</div> :<div className='mr-2 a-black' onClick={()=>invitperson({idx:idx,id:elm.id,number:elm.number})} >邀請加入</div>)}
                        {userId!=elm.id && <a className='text-decoration-none' >訊息</a>}
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