import React, { useEffect, useContext } from "react";
import Axios from "axios";
import context from '../../../context'

const Setting_Sidebar = ({ setSidebarSwitch }) => {

    const { userInfo } = useContext(context);
    let guideOrNot = userInfo.member_is_guide;

    switch (guideOrNot) {
        case 0:
            document.getElementsByClassName('guideButton')[0].style.display = 'none';
            break;

        case 1:
            document.getElementsByClassName('guideButton')[0].style.display = 'block';
            break;
    }

    return (
        <div className="Sidebar">
            <ul>
                <li onClick={() => {
                    setSidebarSwitch(0);
                }}>一般設定</li>

                <li onClick={() => {
                    setSidebarSwitch(1);
                }}>用戶安全</li>

                {/* <li onClick={() => {
                    setSidebarSwitch(2);
                }}>隱私設定</li> */}

                <li className="guideButton" onClick={() => {
                    setSidebarSwitch(3);
                }}>嚮導設定</li>

                {/* <li onClick={() => {
                    setSidebarSwitch(4);
                }}>通知設定</li> */}
            </ul>
        </div>
    )
}

export default Setting_Sidebar;