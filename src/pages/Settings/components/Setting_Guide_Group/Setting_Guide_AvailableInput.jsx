import React, { useState } from 'react';

const Setting_Guide_AvailableInput = ({ setAvailableSwitch }) => {

    return (
        <>
            <button>修改</button>
            <button onClick={() => {
                setAvailableSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Guide_AvailableInput;