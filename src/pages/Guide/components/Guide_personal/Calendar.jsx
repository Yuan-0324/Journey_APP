import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
    let evts = [];
    let [dateArray, setDateArray] = useState(['2022-03-19', '2022-03-20', '2022-03-22', '2022-03-26', '2022-03-27', '2022-04-02', '2022-04-03', '2022-04-14', '2022-04-15', '2022-04-16', '2022-04-24', '2022-04-25', '2022-04-30']);
    let Toolbar = { left: "today", center: "title", right: "prev,next" };
    let [Toggled, setToggled] = useState(true);
    let divHideOrShow = Toggled ? { display: "none" } : { display: "block" };
    let widthChange = Toggled ? { width: '400px' } : { width: '360px' }
    let [date, setDate] = useState('');
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        if (dateArrayNum !== -1) {
            setToggled(!Toggled);
            if (newDate == date) {
                setToggled(true);
                setDate('');
            }else{
                setDate(newDate);
                setToggled(false);
            }
        } else {
            alert("請點選「藍底」嚮導有空的日期預約！")
        }
    }
    let reservationBtnClick = () => {
        let newDateArray = dateArray.filter((item) => item !== date);
        setDateArray(newDateArray);
        setToggled(true);
        alert('已向嚮導發出' + date.toString() + '邀約 \n 請至「個人頁面」 => 「邀約通知」查看！')
    }
    dateArray.forEach(element => {
        evts.push({
            date: element,
            display: "background",
            color: "#1697d5",
        })
    });

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
                        <input type="text" className="reservationDate" value={date} />
                        <input type="submit" value="預約" onClick={reservationBtnClick} className="reservationBtn" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Calendar;