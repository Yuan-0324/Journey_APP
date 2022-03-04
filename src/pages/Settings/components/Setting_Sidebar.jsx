import React from "react";

const Setting_Sidebar = ({ setSidebarSwitch }) => {

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

                <li onClick={() => {
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