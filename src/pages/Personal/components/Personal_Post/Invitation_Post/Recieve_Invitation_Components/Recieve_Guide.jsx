import moment from 'moment';
import {useState, useEffect, useRef, useContext} from 'react';

const Recieve_Guide = ({guide, timePassed}) => {

    // 綁定 接受/取消
    
    return (<div className="notice-recieve-guide-content">
        <img src={guide.api_selfie} alt=""></img>
        <div className="guide-content">
            <h3 className="content-name"><span>{guide.firstName}</span> 已向您發出嚮導邀約申請！</h3>
            <h5 className="content-detail">
                <span>嚮導日期：{moment(guide.reservation_date).format('YYYY-MM-DD')}</span>
                <span className="notice-separate"> | </span>
                <span className="notice-location">地點：{guide.location}</span>
            </h5>
        </div>
        <h5 className="content-date">{timePassed(guide.order_date)}</h5>
        <div className="apply-reply-btn">
            <button className="accept-apply">接受</button>
            <button className="cancel-apply">婉拒</button>
        </div>
    </div>)
}

export default Recieve_Guide;