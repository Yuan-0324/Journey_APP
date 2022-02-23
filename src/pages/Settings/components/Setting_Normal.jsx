import React, { useState } from "react";
import Setting_Normal_Name from './Setting_Normal_Group/Setting_Normal_Name'
import Setting_Normal_Email from './Setting_Normal_Group/Setting_Normal_Email'
import Setting_Normal_NameInput from './Setting_Normal_Group/Setting_Normal_NameInput'
import Setting_Normal_EmailInput from './Setting_Normal_Group/Setting_Normal_EmailInput'

import { FiEdit } from "react-icons/fi"

const Setting_Normal = () => {

    const [nameSwitch, setNameSwitch] = useState(0);
    const [emailSwitch, setEmailSwitch] = useState(0);
    //showName
    let showName = '';
    switch (nameSwitch) {
        case 0:
            showName = <Setting_Normal_Name setNameSwitch={setNameSwitch} />;
            break;
        case 1:
            showName = <Setting_Normal_NameInput setNameSwitch={setNameSwitch} />;
            break;
    }

    //showEmail
    let showEmail = '';
    switch (emailSwitch) {
        case 0:
            showEmail = <Setting_Normal_Email setEmailSwitch={setEmailSwitch} />;
            break;
        case 1:
            showEmail = <Setting_Normal_EmailInput setEmailSwitch={setEmailSwitch} />;
            break;
    }


    return (
        <div className="Normal_Content">
            <p>一般設定</p>
            <div className="Content_Shadow">

                <div className="Normal_item_name">
                    <label htmlFor="">姓名</label>
                    {showName}
                </div>

                <div className="Normal_item_birthday">
                    <label htmlFor="">生日</label>
                    <span>1978/07/08</span>
                </div>


                <div className="Normal_item_userID">
                    <label htmlFor="">用戶ID</label>
                    <span>User0001</span>
                </div>

                <div className="Normal_item_email">
                    <label htmlFor="">電子郵件</label>
                    {showEmail}
                </div>

                <div className="Normal_item_place">
                    <label htmlFor="">居住地</label>
                    <span>台中</span>
                    <FiEdit />
                    <input type="email" />
                    <button>修改</button>
                    <button>取消</button>
                </div>
            </div>

        </div>
    )
}

export default Setting_Normal;