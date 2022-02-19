import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
    let evts = [];
    let [dateArray, setDateArray] = useState(['2022-02-12', '2022-02-18', '2022-02-24', '2022-02-26']);
    let Toolbar = {left: "today", center: "title", right: "prev,next"};
    let [Toggled, setToggled] = useState(true);
    let divHideOrShow = Toggled ? { display: "none" } : {display: "block" };
    let widthChange = Toggled ? { width: '420px' } : { width: '360px' }
    let [date, setDate] = useState();
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        if (dateArrayNum !== -1) {
            setToggled(false);
            setDate(newDate);
        } else {
            alert("請點選「紅底」嚮導有空的日期預約！")
        }
    }
    let reservationBtnClick = () => {
        let newDateArray = dateArray.filter((item) => item !== date);
        setDateArray(newDateArray);
        setToggled(true);
        alert('已向嚮導發出' + date.toString() +'邀約 \n 請至「個人頁面」 => 「邀約通知」查看！')
    }
    dateArray.forEach(element => {
        evts.push({
            date: element,
            display: "background",
            color: "red",
        })
    });

    return (

        <div class="reservation">
            <div class="Title">選擇欲預約的日期</div>
            <div class="reservationCalendar">
                <div class="calendarArea" style={widthChange}>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale='zh-tw'
                        buttonText={{ today: '今天' }}
                        fixedWeekCount={false}
                        firstDay={1}
                        height={300}
                        events={evts}
                        headerToolbar={Toolbar}
                        showNonCurrentDates={false}
                        dateClick={handleDateClick}
                    />
                </div>
                <div class="hideDiv" id="hideDiv" style={divHideOrShow}>
                    <div class="reservationArea">
                        <input type="text" class="reservationDate" value={date} />
                        <input type="submit" value="預約" onClick={reservationBtnClick} class="reservationBtn" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Calendar;