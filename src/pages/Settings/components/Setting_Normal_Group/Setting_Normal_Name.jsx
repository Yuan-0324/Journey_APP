import React from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Normal_Name = ({ setNameSwitch, userInfo }) => {

    return (
        <>
            <span>{userInfo.name}</span>
            <FiEdit onClick={() => {
                setNameSwitch(1);
            }} />
        </>
    )
}

export default Setting_Normal_Name