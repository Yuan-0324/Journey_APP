import { useState, useEffect, useContext } from "react";
import Axios from 'axios';
import Context from '../../../../../../context';

const Send_Society = ({ society, societyList, setSocietyList, societyPostStatus, timePassed, dateTransfer }) => {

    const currentUser = useContext(Context).userInfo;

    const [cancelToggle, setCancelToggle] = useState(false);

    const dataDelete = () => {
        societyPostStatus.current = true
        let newSocietyList = societyList.filter(s => s.societyID !== society.societyID);
        setSocietyList(newSocietyList);
    }

    useEffect(()=>{
        return()=>{
            if (!societyPostStatus.current){
                return;
            } else {
                console.log('Deleted');
                let deleteSociety = async () => {
                    let result = await Axios.delete('http://localhost:8000/personal/invitation/reply/society/cancel', { data: { societyID: society.societyID, email: currentUser.email } });
                }
                deleteSociety();
                societyPostStatus.current = false;
            }
        }
    },[societyList])


    return (
        <div className="notice-send-club-content">
            <img src={society.selfie} alt=""></img>
            <div className="club-content">
                <h3 className="content-name">您已向 <span>{society.society_name}</span> 發出加入申請。</h3>
            </div>
            <h5 className="content-date">{timePassed(society.apply_date)}</h5>
            <button onClick={() => setCancelToggle(!cancelToggle)} className="cancel-apply">取消加入</button>
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

export default Send_Society;
