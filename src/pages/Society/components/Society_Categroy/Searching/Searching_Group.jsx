//引入套件
import React,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";
import s_pic from '../../../../../images/Home/main/weather.jpg';
// import Axios from 'axios';

const Searching_Group = ({seachGroupResult}) =>{

  let history = useHistory();
    const gotoTheRoute = (e) =>{
        let goto = e.target.dataset.group;
        window.location =`/Society/group/${goto}`;
    }

     // 預設社團圖
     const orignPic ={
      width : 290,
      height : 60,
      marginTop : 0,
      marginLeft : 0
  }

  return (
    <div className='searching-list' id='searchingListSociety'>
      {seachGroupResult.map((elm, idx)=>
      <a className='search-inside d-flex align-items-center a-black' key={idx} data-group={elm.societyID} onClick={gotoTheRoute}>
        <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center' data-group={elm.societyID} onClick={gotoTheRoute}>
          {elm.bg_pic!=null || undefined || "" ? <img src={`data:image/png;base64,${elm.bg_pic}`} alt="" data-group={elm.societyID} onClick={gotoTheRoute}/> : <img style={orignPic} src={s_pic} data-club={elm.societyID}/>} 
        </div>

        <div data-group={elm.societyID} onClick={gotoTheRoute}>
          <div data-group={elm.societyID} onClick={gotoTheRoute}>{elm.society_name}</div>
          <span className='group-name-size' data-group={elm.societyID} onClick={gotoTheRoute}>{elm.attended? '已加入':''}</span>
          <a className='group-name-size text-decoration-none' data-group={elm.societyID} onClick={gotoTheRoute}>{elm.attended? '': '申請加入社團'}</a>
        </div>
      </a>
      )}
      <hr />
      <div className='search-result d-flex justify-content-center'><p>沒有其他結果</p></div>
    </div>
  );

}

export default Searching_Group ;