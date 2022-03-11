import { useEffect, useState, useContext, useRef } from "react";
import Axios from 'axios';
import Context from '../../../../../context';
import Recieve_Guide from "./Recieve_Invitation_Components/Recieve_Guide";

const Recieve_Invitation = () => {

    const currentUser = useContext(Context).userInfo;
    const [guideArr, setGuideArr] = useState([])
    const [activityArr, setActivityArr] = useState({});
    const [societyArr, setSoceityArr] = useState({});

    const fetchGuideData = async () => {
        let result = await Axios.post('http://localhost:8000/personal/invitation/reply/guide/receive', { email: currentUser.email });
        setGuideArr(result.data);
    }

    const fetchActivityArr = async () => {
        let result = await Axios.post('http://localhost:8000/personal/invitation/reply/activity/receive', { email: currentUser.email });
        setActivityArr(result.data);
    }

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
    console.log(activityArr);

    useEffect(() => {
        fetchGuideData();
        fetchActivityArr();
        return () => {
            setGuideArr([]);
            fetchActivityArr({});
        }
    }, [])


    return (
        <div className="notice-recieve">
            <div className="notice-intro">
                <h6>這裡可以看到自己寄出的待回覆通知喔！</h6>
            </div>
            {/* <!-- 收到的 嚮導邀約 --> */}
            <div className="notice-recieve-guide">
                <h1 className="notice-recieve-topic">收到的嚮導請求</h1>

                {
                    guideArr.map(guide => <Recieve_Guide timePassed={timePassed} key={guide.reservation_number} guide={guide} />)
                }

            </div>
            {/* <!-- 收到的 活動邀約 --> */}
            <div className="notice-recieve-activities">
                <h1 className="notice-recieve-topic">收到的活動申請</h1>

                {
                    
                }
                <div className="notice-recieve-activities-content">

                    <h1 className="activities-name"><span>品茗手做日<i className="fas fa-caret-down"></i></span></h1>
                    <div className="activities-main">
                        <div className="activities-container">
                            <img src="https://cdn2.ettoday.net/images/3513/3513549.jpg" alt=""></img>
                            <div className="activities-content">
                                <h3 className="content-name"><span>王美秀</span> 已向您發出參加活動申請！</h3>
                            </div>

                            <h5 className="content-date">23小時前</h5>

                            <div className="apply-reply-btn">
                                <button className="accept-apply">接受</button>
                                <button className="cancel-apply">婉拒</button>
                            </div>
                        </div>
                        <div className="activities-container">
                            <img src="https://picsum.photos/id/3/300/300" alt=""></img>
                            <div className="activities-content">
                                <h3 className="content-name"><span>黃淑珍</span> 已向您發出參加活動申請！</h3>
                            </div>

                            <h5 className="content-date">2天前</h5>

                            <div className="apply-reply-btn">
                                <button className="accept-apply">接受</button>
                                <button className="cancel-apply">婉拒</button>
                            </div>
                        </div>
                     
                    </div>
                </div>

            </div>
            {/* <!-- 收到的 社團申請 --> */}
            <div className="notice-recieve-club">

                <h1 className="notice-recieve-topic">收到的社團申請</h1>
                <div className="notice-recieve-club-content">

                    <h1 className="club-name">泡泡龍茶藝社<span><i className="fas fa-caret-down"></i></span></h1>

                    <div className="club-main">
                        <div className="club-container">
                            <img src="https://picsum.photos/id/33/300/300" alt=""></img>
                            <div className="club-content">
                                <h3 className="content-name"><span>吳秀卿</span> 已向您發出參加活動申請！</h3>
                            </div>

                            <h5 className="content-date">23小時前</h5>

                            <div className="apply-reply-btn">
                                <button className="accept-apply">接受</button>
                                <button className="cancel-apply">婉拒</button>
                            </div>
                        </div>
                        <div className="club-container">
                            <img src="https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/default%2Favatar-01.png?alt=media&token=6694a970-df96-4546-9919-f6b7f35df7f8" alt=""></img>
                            <div className="club-content">
                                <h3 className="content-name"><span>陳美麗</span> 已向您發出參加活動申請！</h3>
                            </div>

                            <h5 className="content-date">2天前</h5>

                            <div className="apply-reply-btn">
                                <button className="accept-apply">接受</button>
                                <button className="cancel-apply">婉拒</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recieve_Invitation;