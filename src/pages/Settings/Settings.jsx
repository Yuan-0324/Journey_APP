import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Setting_Sidebar from "./components/Setting_Sidebar";
import Setting_Normal from "./components/Setting_Normal";
import Setting_Safety from "./components/Setting_Safety";
// import Setting_Privacy from "./components/Setting_Privacy";
import Setting_Guide from "./components/Setting_Guide";
import './stylesheet/Settings.css'
// import context from "../../context";

const Setting = () => {
    let history = useHistory();

    //用路由去判斷渲染頁面
    const currentPage = useParams().cate
    const [sidebarSwitch, setSidebarSwitch] = useState(0)
    let showCompotent = '';

    switch (currentPage) {
        //一般設定 
        case 'general':
            showCompotent = <Setting_Normal />
            break;
        //用戶安全
        case "safety":
            showCompotent = <Setting_Safety />
            break;

        //嚮導設定
        case "guide":
            showCompotent = <Setting_Guide />
            break;

        default: showCompotent = <Setting_Normal />

    }

    return (
        <div className="Setting_Frame">

            {/* 側邊選擇欄位 */}
            <Setting_Sidebar setSidebarSwitch={setSidebarSwitch} />

            {showCompotent}

        </div>
    )
}

export default Setting;