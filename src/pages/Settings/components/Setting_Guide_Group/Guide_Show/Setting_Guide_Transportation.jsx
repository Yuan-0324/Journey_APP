import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Transportation = ({ setTransSwitch, guideData }) => {

    return (
        <>
            <span>{guideData.Tran}</span>
            <FiEdit onClick={() => {
                setTransSwitch(1);
            }} />
        </>
    )
}

export default Setting_Guide_Transportation;