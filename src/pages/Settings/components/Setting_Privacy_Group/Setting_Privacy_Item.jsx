import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai"

const Setting_Privacy_Item = ({ setPrivacySwitch }) => {
    return (
        <>
            <AiOutlinePlusCircle onClick={() => {
                setPrivacySwitch(1);
            }} />
            <span onClick={() => {
                setPrivacySwitch(1);
            }}>新增用戶到封鎖名單</span>
        </>
    )
}

export default Setting_Privacy_Item;