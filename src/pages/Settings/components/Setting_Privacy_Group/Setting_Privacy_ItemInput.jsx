import React from 'react';


const Setting_Privacy_ItemInput = ({ setPrivacySwitch }) => {
    return (
        <>
            <input type="text" placeholder='請輸入想封鎖的人' />
            <button>新增</button>
            <button onClick={() => {
                setPrivacySwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Privacy_ItemInput