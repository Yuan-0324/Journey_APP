import React from 'react';


const Setting_Normal_NameInput = ({ setNameSwitch }) => {
    return (
        <>
            <input type="text" />
            <br />
            <input type="text" />
            <button>修改</button>
            <button onClick={() => {
                setNameSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Normal_NameInput