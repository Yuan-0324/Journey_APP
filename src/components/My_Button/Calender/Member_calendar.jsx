import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import context from '../../../context';
import { useState, useContext, useEffect } from 'react';
import './stylesheet/calendar.css'
import moment from 'moment';
import{ BsCalendar3 } from 'react-icons/bs';

const Calendar = () => {

    let email = localStorage.getItem('email');
    let currentUser = useContext(context).userInfo;
    let memberEmail = currentUser.email;

    const [toggled, setToggled] = useState(false);
    const showOrHide = toggled ? { visibility: "visible" } : { visibility: "hidden" };
    const clickOpen = () => {
        setToggled(!toggled);
    }

    //設定日曆
    const [evts, setEvts] = useState([]);
    let Toolbar = { left: "today", center: "title", right: "prev,next" };
    // console.log(currentUser)

    let getData = async () => {
        //撈取資料
        let result = await axios.get(`http://localhost:8000/personalCalendar/${email}`);
        let guideSelf = result.data[0];
        let guideCustomer = result.data[1];
        let event = result.data[2];
        // console.log(result);
        //把資料轉成日曆活動
        let arr = [];
        guideSelf.forEach(element => {
            // console.log(element)
            arr.push({
                groupId: 1,
                title: '嚮導：' + element.location,
                date: moment(element.reservation_date).format('YYYY-MM-DD'),
                color: "#1697d5",
                url: element.id
            });
        });
        guideCustomer.forEach(element => {
            // console.log(element)
            arr.push({
                groupId: 2,
                title: '嚮導：' + element.location,
                date: moment(element.reservation_date).format('YYYY-MM-DD'),
                color: "#1697d5",
                url: element.guide_id
            });
        });
        event.forEach(element => {
            // console.log(element)
            arr.push({
                groupId: 3,
                title: '活動：' + element.location,
                date: element.date,
                color: "#f08a12",
                url: element.eventID
            });
        });
        
        setEvts(arr);
    }

    // console.log(evts);


    useEffect(() => {
        getData()
    }, []);




    //點擊跳轉
    let eventClick = (info) => {
        info.jsEvent.preventDefault();
        if (info.event.groupId == 1) {
            //跳轉參加者個人頁面
            window.location = `/personal/${info.event.url}`;
        } else if (info.event.groupId == 2) {
            //跳轉嚮導個人頁面
            window.location = `/GuidePersonal/${info.event.url}`
        } else {
            //跳轉活動頁面
            window.location = `/activityIntroduce/${info.event.url}`;
        };
    };

    return (
        <div className='addButtonArea'>
            <button onClick={clickOpen} className='addButton'><BsCalendar3/></button>
            <div style={showOrHide} >
                <div className="personalCalendar">
                    <div className="personalCalendarArea" >
                        <FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            locale='zh-tw'
                            buttonText={{ today: '今天' }}
                            fixedWeekCount={false}
                            height={450}
                            events={evts}
                            headerToolbar={Toolbar}
                            handleWindowResize={true}
                            eventClick={eventClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;