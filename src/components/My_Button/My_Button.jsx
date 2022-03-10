import Chat_Room from "./Chat_Room/Chat_Room";
import Member_calendar from './Calender/Member_calendar';
import { BsCalendar3 } from 'react-icons/bs';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { IoMdChatboxes } from 'react-icons/io'
import './stylesheet/my_button.css';
import { useState } from "react";
import logo from '../../images/JourneyIcon.png'

const My_Button = () => {

    const [toggle, setToggle] = useState(false);
    const btnShow = () => {
        setToggle(!toggle);
    }

    return (<>
        {/* <div onClick={btnShow} className="mix-chat-calendar">
            <BsCalendar3 className="calendarIcon" />
            <span>/</span>
            <IoChatbubblesOutline className="chatIcon" />
            <img src={logo} alt="" />
            <IoMdChatboxes className="chat-icon"/>
            <BsCalendar3 className="calendar-icon"/>

        </div> */}
        {
            <>
                <Chat_Room />
                <Member_calendar />
            </>
        }

    </>)
}

export default My_Button;