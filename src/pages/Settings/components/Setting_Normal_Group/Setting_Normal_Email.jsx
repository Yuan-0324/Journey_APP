import React from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Normal_Email = ({ setEmailSwitch, userInfo }) => {

    return (
        <>
            <span>{userInfo.email}</span>
            <FiEdit onClick={() => {
                setEmailSwitch(1);
            }} />
        </>
    )
}

export default Setting_Normal_Email