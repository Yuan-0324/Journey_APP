import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Available = ({ setAvailableSwitch }) => {

    return (
        <FiEdit onClick={() => {
            setAvailableSwitch(1);
        }} />
    )
}

export default Setting_Guide_Available;