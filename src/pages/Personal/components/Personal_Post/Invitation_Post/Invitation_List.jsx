import Send_Invitation from "./Send_Invitation";
import Recieve_Invitation from "./Recieve_invitation";
import { useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';


const Invitation_List = () => {

    const [invitationtoggle, setInvitationToggle] = useState(false);
    const toggle = useRef(true)

    const [moveStyle, setMoveStyle] = useState({
        left: `left btn-left`,
        right: `left btn-right`,
        bgStyle: `background-switch`
    })

    let clickRight = () => {
        setMoveStyle({
            right: `right btn-right`,
            left: `right btn-left`,
            bgStyle: `background-switch right`
        })
        toggle.current = false;
        // setInvitationToggle(true);
    }

    let clickLeft = () => {
        setMoveStyle({
            right: `left btn-right`,
            left: `left btn-left`,
            bgStyle: `background-switch left`
        })
        toggle.current = true;
        // setInvitationToggle(false);
    }


    return (
        <div className="notice">
            <h2 className="head-topic">邀約通知</h2>

            {/* <!-- 寄出 / 收到 切換 --> */}
            <div className="notice-btns">
                <div className='notice-switch'>
                    <div className={moveStyle.bgStyle}></div>
                    <div className={moveStyle.left} onClick={clickLeft}><h3>收到邀約</h3></div>
                    <div className={moveStyle.right} onClick={clickRight}><h3>邀約歷史</h3></div>
                </div>
            </div>
            {toggle.current ? <Recieve_Invitation /> : <Send_Invitation />}

        </div>
    )
}

export default Invitation_List;




