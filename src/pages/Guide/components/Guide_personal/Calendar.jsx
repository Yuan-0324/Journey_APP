import { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import context from '../../../../context';

const Calendar = () => {

    //撈取嚮導有空日期
    let guidePagePath = useParams();
    let currentUser = useContext(context).userInfo;
    let [dateArray, setDateArray] = useState([]);
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guidePersonal/calendar/${guidePagePath.gId}`);
        let dbArr = result.data.map(e => e.date);
        setDateArray(dbArr);
    }, []);

    //設定日曆
    let evts = [];
    let Toolbar = { left: "today", center: "title", right: "prev,next" };
    let [Toggled, setToggled] = useState(true);
    let divHideOrShow = Toggled ? { display: "none" } : { display: "block" };
    let widthChange = Toggled ? { width: '400px' } : { width: '360px' }
    let [date, setDate] = useState('');
    dateArray.forEach(element => {
        evts.push({
            date: element,
            display: "background",
            color: "#1697d5",
        })
    });
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        if (dateArrayNum !== -1) {
            setToggled(!Toggled);
            if (newDate == date) {
                setToggled(true);
                setDate('');
            } else {
                setDate(newDate);
                setToggled(false);
            }
        } else {
            alert("請點選「藍底」嚮導有空的日期預約！")
        }
    }

    //預約按鈕
    const [changeDate, setChangeDate] = useState({ changeDate: '' })
    const reservationData = {
        memberEmail: currentUser.email,
        reservationDate: date
    }
    let reservationBtnClick = async () => {
        if (guidePagePath.gId == currentUser.guide_id) {
            alert('請勿預約自己~')
        } else {
            let newDateArray = dateArray.filter((item) => item !== date);
            setDateArray(newDateArray);
            setToggled(true);
            setChangeDate(changeDate.changeDate = date);
            // //預約後刪除資料庫可預約日期
            await axios.delete(`http://localhost:8000/guidePersonal/calendar/deleteDate/${guidePagePath.gId}`, { data: changeDate });

            //預約後加入資料庫預約清單
            let result = await axios.post(`http://localhost:8000/guidePersonal/calendar/reservation/${guidePagePath.gId}`, reservationData);
            if (result.status == 200) {
                setToggled(true);
                alert('已向嚮導發出' + date.toString() + '邀約 \n 請至「個人頁面」 => 「邀約通知」查看！');
            } else {
                alert('預約失敗，請重新預約！');
            }
        }
    }


    return (

        <div className="reservation">
            <div className="Title">選擇欲預約的日期</div>
            <div className="reservationCalendar">
                <div className="calendarArea" style={widthChange}>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale='zh-tw'
                        buttonText={{ today: '今天' }}
                        fixedWeekCount={false}
                        height={310}
                        events={evts}
                        headerToolbar={Toolbar}
                        dateClick={handleDateClick}
                        handleWindowResize={true}
                    />
                </div>
                <div className="hideDiv" id="hideDiv" style={divHideOrShow}>
                    <div className="reservationArea">
                        <input type="text" className="reservationDate" defaultValue={date} />
                        <input type="submit" value="預約" onClick={reservationBtnClick} className="reservationBtn" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Calendar;