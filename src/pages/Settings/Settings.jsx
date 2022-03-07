import React, { useState, useContext } from "react";
import Setting_Sidebar from "./components/Setting_Sidebar";
import Setting_Normal from "./components/Setting_Normal";
import Setting_Safety from "./components/Setting_Safety";
// import Setting_Privacy from "./components/Setting_Privacy";
import Setting_Guide from "./components/Setting_Guide";
import './stylesheet/Settings.css'
// import context from "../../context";

const Setting = () => {

    // const { userInfo } = useContext(context);

    const [sidebarSwitch, setSidebarSwitch] = useState(0)
    let showCompotent = '';

    switch (sidebarSwitch) {
        //一般設定 
        case 0:
            showCompotent = <Setting_Normal />
            break;
        //用戶安全
        case 1:
            showCompotent = <Setting_Safety />
            break;
        // //隱私設定
        // case 2:
        //     showCompotent = <Setting_Privacy />
        //     break;
        //嚮導設定
        case 3:
            showCompotent = <Setting_Guide />
            break;
        //通知設定
        // case 4:
        //     showCompotent = <Setting_Safety />
        //     break;
    }

    return (
        <div className="Setting_Frame">

            {/* 側邊選擇欄位 */}
            <Setting_Sidebar setSidebarSwitch={setSidebarSwitch} />

            {showCompotent}

            {/* <button>幹你娘</button> */}
        </div>
    )
}

export default Setting;