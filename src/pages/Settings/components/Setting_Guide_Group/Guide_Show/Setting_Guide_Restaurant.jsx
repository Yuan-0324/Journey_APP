import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Restaurant = ({ setRestaurantSwitch }) => {

    return (
        <>
            <FiEdit
                onClick={() => {
                    setRestaurantSwitch(1);
                }} />
        </>
    )
}

export default Setting_Guide_Restaurant;