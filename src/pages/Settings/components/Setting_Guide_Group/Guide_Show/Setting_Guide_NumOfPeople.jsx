import React from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Guide_NumOfPeople = ({ setNumSwitch, guideData }) => {

    return (
        <>
            <span>{guideData.Num}人</span>
            <FiEdit onClick={() => {
                setNumSwitch(1);
            }} />
        </>
    )
}

export default Setting_Guide_NumOfPeople;