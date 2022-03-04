import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Gender = ({ setGenderSwitch, guideData }) => {

    return (
        <>
            <span>{guideData.Gender}</span>
            <FiEdit onClick={() => {
                setGenderSwitch(1);
            }} />
        </>
    )
}

export default Setting_Guide_Gender;