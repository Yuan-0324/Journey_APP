import React, { useState } from "react";
import Setting_Safety_Password from "./Setting_Safety_Group/Setting_Safety_Password";
import Setting_Safety_PasswordInput from "./Setting_Safety_Group/Setting_Safety_PasswordInput";
import { FiEdit } from "react-icons/fi"

const Setting_Safety = () => {

    const [passwordSwitch, setPasswordSwitch] = useState(0)

    //showPassword
    let showPassword = 1;
    switch (passwordSwitch) {
        case 0:
            showPassword = <Setting_Safety_Password setPasswordSwitch={setPasswordSwitch} />;
            break;
        case 1:
            showPassword = <Setting_Safety_PasswordInput setPasswordSwitch={setPasswordSwitch} />;
            break;
    }

    return (
        <div className="Safety_Content">
            <p>用戶安全</p>
            <div className="Content_Shadow">
                <div className="Safety_item_password">
                    {showPassword}
                </div>
            </div>
        </div>
    )
}

export default Setting_Safety;