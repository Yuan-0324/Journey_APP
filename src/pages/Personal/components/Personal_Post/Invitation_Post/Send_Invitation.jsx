import { useState, useEffect, useContext, useRef } from 'react';
import Send_Guide from './Send_Invitation_Components/Send_Guide';
import Send_Activity from './Send_Invitation_Components/Send_Activity';
import Send_Society from './Send_Invitation_Components/Send_Society';
import Axios from 'axios';
import Context from '../../../../../context';
import moment from 'moment';
import logo from '../../../../../images/logo-word.png'
import logoImg from '../../../../../images/JourneyIcon.png'
import { AiFillCaretRight } from 'react-icons/ai';

const Send_Invitation = () => {

    // ---- 現在使用者 -----
    const currentUser = useContext(Context).userInfo;
    // --- Guide ---
    const [sendGuideList, setSendGuideList] = useState([]);
    // --- Activity ---
    const [evtList, setEvtList] = useState([]);
    // --- Society ---
    const [societyList, setSocietyList] = useState([]);

    // --- 各 Post 狀態 ---
    const guidePostStatus = useRef(false);
    const evtPostStatus = useRef(false);
    const societyPostStatus = useRef(false);

    // 取得 嚮導邀約 資料
    const fetchGuide = async () => {
        let result = await Axios.post('http://localhost:8000/personal/invitation/reply/guide/send/', { email: currentUser.email });
        setSendGuideList(result.data);
        guidePostStatus.current = false;
    }

    // 取得 活動邀約 資料
    const fetchEvt = async () => {
        let result = await Axios.post('http://localhost:8000/personal/invitation/reply/activity/send', { email: currentUser.email });
        setEvtList(result.data);
        evtPostStatus.current = false;
    }

    // 取得 社團邀約 資料
    const fetchSociety = async () => {
        let result = await Axios.post('http://localhost:8000/personal/invitation/reply/society/send', { email: currentUser.email });
        setSocietyList(result.data);
        societyPostStatus.current = false;
    }

    // 計算經過時間
    let timePassed = (date) => {
        const startDate = new Date(date).getTime(),
            nowDate = new Date().getTime(),
            passed = nowDate - startDate;
        const seconds = Math.floor(passed / 1000),
            minutes = Math.floor(passed / (1000 * 60)),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24);
        if (minutes < 60) {
            return minutes + '分鐘前';
        } else if (hours < 23) {
            return hours + '小時前';
        } else {
            return days + '天前';
        }
    }

    // 日期轉換
    let dateTransfer = (mydate) => {
        let date = moment(mydate).format('YYYY-MM-DD')
        return date;
    }

    // 初次渲染
    useEffect(() => {
        fetchGuide();
        fetchEvt();
        fetchSociety();
        guidePostStatus.current = false;
        evtPostStatus.current = false;
        societyPostStatus.current = false;
    }, [])

    // 畫面轉跳動畫
    const [flyStyleG, setFlyStyleG] = useState('fly-away');
    const [flyStyleE, setFlyStyleE] = useState('fly-away');
    const [flyStyleS, setFlyStyleS] = useState('fly-away');

    return (
        <div className="notice-send">

            <div className="notice-intro">
                <h6>這裡可以看到自己寄出的通知！您可以隨時取消申請喔！</h6>
            </div>

            <div className="notice-send-guide">
                <h1 className="notice-send-topic"><span>寄出的嚮導邀約</span> <AiFillCaretRight /></h1>
                {
                    sendGuideList.map(guide => <Send_Guide
                        sendGuideList={sendGuideList}
                        setSendGuideList={setSendGuideList}
                        timePassed={timePassed}
                        guide={guide}
                        key={guide.reservation_number}
                        guidePostStatus={guidePostStatus}
                        dateTransfer={dateTransfer}
                    />)
                }
                {
                    sendGuideList.length == 0 ?
                        <div className='empty-container'>
                            <div>
                                <img src={logo} alt="" />
                                <img className={flyStyleG} src={logoImg} alt="" />
                            </div>
                            <h6>目前無申請中的嚮導喔！來參加更多嚮導吧！</h6>
                            <button onClick={() => {
                                setFlyStyleG('fly-away fly-start');
                                setTimeout(() => {
                                    window.open('http://localhost:3000/Guide', '__blank').focus()
                                    setFlyStyleG('fly-away');
                                }, 500)
                            }} ><span>出發</span></button>
                        </div> : ''
                }
            </div>

            <div className="notice-send-activities">
                <h1 className="notice-send-topic"><span>寄出的活動申請</span><AiFillCaretRight /></h1>
                {
                    evtList.map(evt => <Send_Activity
                        evt={evt}
                        evtList={evtList}
                        setEvtList={setEvtList}
                        evtPostStatus={evtPostStatus}
                        timePassed={timePassed}
                        dateTransfer={dateTransfer}
                        key={evt.eventID}
                    />)
                }
                {
                    evtList.length == 0 ?
                        <div className='empty-container'>
                            <div>
                                <img src={logo} alt="" />
                                <img className={flyStyleE} src={logoImg} alt="" />
                            </div>
                            <h6>暫無申請中的活動喔！更多活動在等著你參加！</h6>
                            <button onClick={() => {
                                setFlyStyleE('fly-away fly-start');
                                setTimeout(() => {
                                    window.open('http://localhost:3000/Event', '__blank').focus()
                                    setFlyStyleE('fly-away');
                                }, 500)
                            }} ><span>出發</span></button>
                        </div> : ''
                }
            </div>

            <div className="notice-send-club">
                <h1 className="notice-send-topic"><span>寄出的社團請求</span> <AiFillCaretRight /></h1>

                {
                    societyList.map(society => <Send_Society
                        society={society}
                        societyList={societyList}
                        setSocietyList={setSocietyList}
                        societyPostStatus={societyPostStatus}
                        timePassed={timePassed}
                        dateTransfer={dateTransfer}
                        key={society.societyID}
                    />)
                }
                {
                    societyList.length == 0 ?
                        <div className='empty-container'>
                            <div>
                                <img src={logo} alt="" />
                                <img className={flyStyleS} src={logoImg} alt="" />
                            </div>
                            <h6>暫無申請中的社團喔！來尋找自己喜歡的社團吧！</h6>
                            <button onClick={() => {
                                setFlyStyleS('fly-away fly-start');
                                setTimeout(() => {
                                    window.open('http://localhost:3000/Society', '__blank').focus()
                                    setFlyStyleS('fly-away');
                                }, 500)
                            }} ><span>出發</span></button>
                        </div> : ''
                }
            </div>


        </div>
    )
}

export default Send_Invitation;