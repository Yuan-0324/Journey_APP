import React from 'react';


const Setting_Normal_EmailInput = ({ setEmailSwitch }) => {
    return (
        <>

            <input type="email" />
            <button>修改</button>
            <button onClick={() => {
                setEmailSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Normal_EmailInput