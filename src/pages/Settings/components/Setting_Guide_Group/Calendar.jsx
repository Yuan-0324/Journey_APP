import { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import context from '../../../../context';

const Calendar = ({ setAvailableSwitch }) => {

    const currentUser = useContext(context).userInfo;
    const gId = currentUser.guide_id;
    const email = currentUser.email;

    //設定日曆
    let [evts, setEvts] = useState([]);
    let Toolbar = { left: "today", center: "title", right: "prev,next" };

    //原本有空的日期
    let [dateArray, setDateArray] = useState([]);
    useEffect(async () => {
        let tempEvt = [];
        let result = await axios.get(`http://localhost:8000/guidePersonal/calendar/${gId}`);
        let dbArr = result.data.map(e => e.date);
        setDateArray(dbArr);
        dbArr.forEach(element => {
            tempEvt.push({
                date: element,
                display: 'background',
                color: '#1697d5'
            })
        });
        setEvts(tempEvt)
    }, []);

    //修改日期
    const [deleteArr, setDeleteArr] = useState([]);
    const [addArr, setAddArr] = useState([]);
    let handleDateClick = (info) => {
        let newDate = info.dateStr;
        let dateArrayNum = dateArray.indexOf(newDate);
        let deletNum = deleteArr.indexOf(newDate);
        let addNum = addArr.indexOf(newDate);
        if (dateArrayNum == -1) {
            //增加日期
            dateArray.push(newDate);
            setEvts([...evts, {
                date: newDate,
                display: 'background',
                color: '#1697d5'
            }]);
            if (deletNum == -1) {
                addArr.push(newDate);
            } else {
                deleteArr.splice(deletNum, 1);
            };
        } else {
            //取消日期
            dateArray.splice(dateArrayNum, 1);
            let newEvts = evts.filter(item => item.date !== newDate);
            setEvts(newEvts);
            if (addNum == -1) {
                deleteArr.push(newDate);
            } else {
                addArr.splice(addNum, 1);
            };
        };
    };

    //確認送出
    const checkBtnClick = async () => {
        if (deleteArr.length == 0 && addArr.length == 0) {
            //沒有更改日期
        } else if (deleteArr.length !== 0 && addArr.length == 0) {
            await axios.post(`http://localhost:8000/guide/calendarChange/delete/${gId}`, deleteArr);
        } else if (deleteArr.length == 0 && addArr.length !== 0) {
            await axios.post(`http://localhost:8000/guide/calendarChange/add/${email}`, addArr);
        } else {
            await axios.post(`http://localhost:8000/guide/calendarChange/delete/${gId}`, deleteArr);
            await axios.post(`http://localhost:8000/guide/calendarChange/add/${email}`, addArr);
        };
        setAvailableSwitch(0);
    };

    return (

        <div className="reservation">
            <div className="reservationCalendar">
                <div className="calendarArea" style={{ width: '400px' }}>
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
            </div>
            <button className='myButton' onClick={checkBtnClick}>修改</button>
            <button className='myButton' onClick={() => {
                setAvailableSwitch(0);
            }}> 取消</button >
        </div >


    );
}

export default Calendar;