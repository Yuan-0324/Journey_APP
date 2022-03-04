import React, { useContext } from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Safety_Password = ({ setPasswordSwitch }) => {

    return (
        <>
            <span>更改密碼</span>
            <FiEdit onClick={() => {
                setPasswordSwitch(1);
            }} />
        </>
    )
}

export default Setting_Safety_Password