import moment from 'moment';
import { useEffect, useRef, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import Axios from 'axios';
import Context from '../../../../../../context';

const Send_Guide = ({ guide, timePassed, setSendGuideList, sendGuideList, guidePostStatus, dateTransfer }) => {

    const currentUser = useContext(Context).userInfo;

    // 按鈕開關
    const [cancelToggle, setCancelToggle] = useState(false);

    // 移除嚮導邀約
    let dataDelete = () => {
        guidePostStatus.current = true;
        let newGuideList = sendGuideList.filter(g => g.reservation_number !== guide.reservation_number);
        setSendGuideList(newGuideList)
    }

    // 偵測資料變化 然後 DELETE
    useEffect(() => {
        return () => {
            if (!guidePostStatus.current) {
                console.log('not YEt')
                return
            } else {
                console.log('ready post')
                let deleteGuide = async () => {
                    let result = await Axios.delete('http://localhost:8000/personal/invitation/reply/guide/cancel', { data: { reservation_number: guide.reservation_number, email: currentUser.email } });
                }
                deleteGuide();
                guidePostStatus.current = false;
            }
        }
    }, [sendGuideList])


    return (<div className="notice-send-guide-content">
        <img src={guide.api_selfie} alt=""></img>
        <div className="guide-content">
            <h3 className="content-name">您已向 <span>{guide.firstName}</span> 發出嚮導邀約！</h3>
            <h5 className="content-detail">
                <span>參加日期：{dateTransfer(guide.reservation_date)}</span>
                <span className="notice-separate"> | </span>
                <span className="notice-location">地點：{guide.location}</span>
            </h5>
        </div>
        <h5 className="content-date">{timePassed(guide.order_date)}</h5>
        <button onClick={() => setCancelToggle(!cancelToggle)} className="cancel-apply">取消邀約</button>

        {/* 確定取消視窗 */}
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


    </div>)
}

export default Send_Guide;