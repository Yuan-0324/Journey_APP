import Send_Invitation from "./Send_Invitation";
import Recieve_Invitation from "./Recieve_invitation";
import { useState } from "react";

const Invitation_List = () => {
    const [invitationtoggle, setInvitationToggle] = useState(false);
    let receiveBtn = () => {
        setInvitationToggle(false);
    }
    let sendBtn = () => {
        setInvitationToggle(true)
    }

    return (
        <div className="notice">
            <h2 className="head-topic">邀約通知</h2>

            {/* <!-- 寄出 / 收到 切換 --> */}
            <div className="notice-btns">
                <div className='send-notice' onClick={receiveBtn}>
                    <h1>送出的申請</h1>
                </div>
                <div className='recieve-notice' onClick={sendBtn}>
                    <h1>收到的邀約</h1>
                </div>
            </div>
            {invitationtoggle ? <Recieve_Invitation /> : <Send_Invitation />}

        </div>
    )
}

export default Invitation_List;