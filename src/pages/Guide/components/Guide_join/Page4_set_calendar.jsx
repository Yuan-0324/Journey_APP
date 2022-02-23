import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";


const Set_Calendar = () => {

	//日曆
	let Toolbar = { left: "today", center: "title", right: "prev,next" };
	let [evts, setEvts] = useState([]);
	let [dateArray, setDateArray] = useState([]);
	let handleDateClick = (info) => {
		let newDate = info.dateStr;
		let dateArrayNum = dateArray.indexOf(newDate);
		if (dateArrayNum == -1) {
			dateArray.push(newDate);
			setEvts([...evts, {
				date: newDate,
				display: 'background',
				color: '#1697d5'
			}]);
		} else {
			dateArray.splice(dateArrayNum, 1);
			let newEvts = evts.filter(item => item.date !== newDate);
			setEvts(newEvts);
		};
		setDateArray(dateArray);
	}


	return (

		<div className="section03Area">
			<div className="leftTitle">
				<div className="pageTitle"> <span className='guideSpot'>●</span> 可接待日期
					<span className='choiceDate'>(請點選日期)</span>
				</div>
			</div>
			<div className="section03Content">
				<div id='calendarBig'>
					<FullCalendar
						plugins={[dayGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						locale='zh-tw'
						buttonText={{ today: '今天' }}
						fixedWeekCount={false}
						height={400}
						events={evts}
						headerToolbar={Toolbar}
						dateClick={handleDateClick}
						selectMinDistance={10000}
					/>
				</div>
			</div>
		</div>

	);
};

export default Set_Calendar;
