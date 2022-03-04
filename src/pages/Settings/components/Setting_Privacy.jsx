import React, { useState } from "react";
import Setting_Privacy_Item from "./Setting_Privacy_Group/Setting_Privacy_Item";
import Setting_Privacy_ItemInput from "./Setting_Privacy_Group/Setting_Privacy_ItemInput";
import Setting_Privacy_Item_list from "./Setting_Privacy_Group/Setting_Privacy_Item_list";


const Setting_Privacy = () => {

    const [privacySwitch, setPrivacySwitch] = useState(0);
    //showPrivacy
    let showPrivacy = '';
    switch (privacySwitch) {
        case 0:
            showPrivacy = <Setting_Privacy_Item setPrivacySwitch={setPrivacySwitch} />;
            break;
        case 1:
            showPrivacy = <Setting_Privacy_ItemInput setPrivacySwitch={setPrivacySwitch} />;
            break;
    }

    return (
        <div className="Privacy_Content">
            <p>隱私設定</p>
            <div className="Content_Shadow">
                <div className="Privacy_item">
                    <span>封鎖名單</span>

                    {showPrivacy}
                    <hr />
                </div>
                <Setting_Privacy_Item_list />

            </div>
        </div>

    )
}

export default Setting_Privacy;