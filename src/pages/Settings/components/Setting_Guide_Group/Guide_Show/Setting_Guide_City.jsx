import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_City = ({ setCitySwitch, guideData }) => {

    return (
        <>
            <span className='areaname'>{guideData.City}</span>
            <FiEdit
                onClick={() => { setCitySwitch(1) }} />
        </>
    )
}

export default Setting_Guide_City;