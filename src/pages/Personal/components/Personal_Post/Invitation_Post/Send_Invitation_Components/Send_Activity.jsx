import { useState, useEffect, useContext } from "react";
import Axios from 'axios';
import Context from '../../../../../../context';


const Send_Activity = ({ evt, evtList, setEvtList, evtPostStatus, timePassed, dateTransfer }) => {

    const currentUser = useContext(Context).userInfo;
    
    const [cancelToggle, setCancelToggle] = useState(false)

    let dataDelete = () => {
       let newEvtList = evtList.filter(delEvt => delEvt.eventID !== evt.eventID);
       setEvtList(newEvtList);
       evtPostStatus.current = true;
    }
    
    useEffect(()=>{
        return()=>{
            if (!evtPostStatus.current){
                return;
            } else {
                // console.log('Deleted');
                let deleteEvt = async () => {
                    let result = await Axios.delete('http://localhost:8000/personal/invitation/reply/activity/cancel', { data: { eventID: evt.eventID, email: currentUser.email } });
                }
                deleteEvt();
                evtPostStatus.current = false;
            }
        }
    },[evtList])

    return (
        <div className="notice-send-activities-content">
            <img src={evt.api_selfie} alt=""></img>
            <div className="activity-content">
                <h2 className="content-name">您已申請參加 <span>{evt.firstName}</span> 舉辦的 <span>{evt.evt_name}</span> 活動。</h2>
                <h5 className="content-detail">
                    <span>活動日期：{dateTransfer(evt.evt_date)}</span>
                    <span className="notice-separate"> | </span>
                    <span className="notice-location">地點：{evt.location}</span>
                </h5>
            </div>
            <h5 className="content-date">{timePassed(evt.apply_date)}</h5>
            <button onClick={() => setCancelToggle(!cancelToggle)} className="cancel-apply">取消申請</button>
            {
                cancelToggle &&
                <div className='cancel-send'>
                    <div className='cancel-container'>
                        <div className='cancel-btns'>
                            <div onClick={dataDelete} className='yes-bye'><h6>確定取消</h6></div>
                            <div onClick={() => setCancelToggle(!cancelToggle)} className='no-bye'><h6>考慮一下</h6></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Send_Activity;