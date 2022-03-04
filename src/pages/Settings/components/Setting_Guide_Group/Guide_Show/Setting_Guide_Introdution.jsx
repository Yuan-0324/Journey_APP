import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Introdution = ({ setIntroSwitch }) => {

    return (
        <FiEdit onClick={() => {
            setIntroSwitch(1);
        }} />
    )
}

export default Setting_Guide_Introdution;