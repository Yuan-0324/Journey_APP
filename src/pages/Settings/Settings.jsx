import React, { useState } from "react";
import Setting_Sidebar from "./components/Setting_Sidebar";
import Setting_Normal from "./components/Setting_Normal";
import Setting_Safety from "./components/Setting_Safety";
import Setting_Privacy from "./components/Setting_Privacy";
import Setting_Guide from "./components/Setting_Guide";
import './stylesheet/Settings.css'

const Setting = () => {
    const [sidebarSwitch, setSidebarSwitch] = useState(0)
    let showCompotent = '';

    switch (sidebarSwitch) {
        case 0:
            showCompotent = <Setting_Normal />
            break;
        case 1:
            showCompotent = <Setting_Safety />
            break;
        case 2:
            showCompotent = <Setting_Privacy />
            break;
        case 3:
            showCompotent = <Setting_Guide />
            break;
        case 4:
            showCompotent = <Setting_Safety />
            break;
    }

    return (
        <div className="Setting_Frame">
            {/* 側邊選擇欄位 */}
            <Setting_Sidebar setSidebarSwitch={setSidebarSwitch} />

            {showCompotent}
            {/* 一般設定 */}
            {/* <Setting_Normal /> */}

            {/* 用戶安全 */}
            {/* <Setting_Safety /> */}

            {/* 隱私設定 */}
            {/* <Setting_Privacy /> */}

            {/* 嚮導設定 */}
            {/* <Setting_Guide /> */}
        </div>
    )
}

export default Setting;