import React from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Normal_Email = ({ setEmailSwitch }) => {
    return (
        <>
            <span>money1978@gmail.com</span>
            <FiEdit onClick={() => {
                setEmailSwitch(1);
            }} />
        </>
    )
}

export default Setting_Normal_Email