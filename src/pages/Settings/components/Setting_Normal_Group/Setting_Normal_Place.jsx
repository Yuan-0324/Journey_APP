import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Normal_Email = ({ setPlaceSwitch, userInfo }) => {

    return (
        <>
            <span>{userInfo.place}</span>
            <FiEdit onClick={() => {
                setPlaceSwitch(1);
            }} />
        </>
    )
}

export default Setting_Normal_Email