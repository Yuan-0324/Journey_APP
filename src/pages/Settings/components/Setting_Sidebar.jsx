import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import context from '../../../context'

const Setting_Sidebar = ({ setSidebarSwitch }) => {

    let history = useHistory();

    const { userInfo } = useContext(context);
    let guideOrNot = userInfo.member_is_guide;

    let btnClick = (evt) => {
        let clicktarget = evt.target.dataset.categroy;
        history.push('/setting/' + clicktarget);
    }
    useEffect(() => {
        switch (guideOrNot) {
            case 0:
                document.getElementsByClassName('guideButton')[0].style.display = 'none';
                break;
    
            case 1:
                document.getElementsByClassName('guideButton')[0].style.display = 'block';
                break;
        }
    }, []);

    return (
        <div className="Sidebar">
            <ul>
                <li
                    onClick={(e) => {
                        btnClick(e)
                        setSidebarSwitch(0);
                    }}
                    data-categroy='general'
                >一般設定</li>

                <li
                    onClick={(e) => {
                        btnClick(e)
                        setSidebarSwitch(1);
                    }}
                    data-categroy='safety'
                >用戶安全</li>

                {/* <li 
                onClick={() => {setSidebarSwitch(2);}}
                data-categroy='privacy'
                >隱私設定</li> */}

                <li className="guideButton"
                    onClick={(e) => {
                        btnClick(e)
                        setSidebarSwitch(3);
                    }}
                    data-categroy='guide'
                >嚮導設定</li>

                {/* <li onClick={() => {
                    setSidebarSwitch(4);
                }}>通知設定</li> */}
            </ul>
        </div >
    )
}

export default Setting_Sidebar;