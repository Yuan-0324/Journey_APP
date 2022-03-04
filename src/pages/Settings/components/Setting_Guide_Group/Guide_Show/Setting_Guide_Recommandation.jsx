import React from 'react';
import { FiEdit } from "react-icons/fi";

const Setting_Guide_Recommandation = ({ setRecommanSwitch }) => {

    return (
        <>
            <FiEdit
                onClick={() => {
                    setRecommanSwitch(1);
                }} />
        </>
    )
}

export default Setting_Guide_Recommandation;