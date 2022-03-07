import React, { useEffect } from 'react';
import { FiEdit } from "react-icons/fi"

const Setting_Normal_Birthday = ({ setBirthdaySwitch, userInfo }) => {

    if (userInfo.birthday == null) {
        document.getElementsByClassName('bbtn')[0].style.display = 'inline';
    }

    return (
        <>
            <FiEdit className='bbtn' onClick={() => {
                setBirthdaySwitch(1);
            }} />
        </>
    )

}

export default Setting_Normal_Birthday