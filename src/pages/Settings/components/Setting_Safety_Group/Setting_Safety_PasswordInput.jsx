import React from 'react';


const Setting_Safety_PasswordInput = ({ setPasswordSwitch }) => {
    return (
        <>
            <span>輸入現有密碼</span>
            <br />
            <input type="password" />
            <hr />
            <span>輸入新密碼</span>
            <br />
            <input type="password" />
            <br />
            <span>確認新密碼</span>
            <br />
            <input type="password" />
            <button>修改</button>
            <button onClick={() => {
                setPasswordSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Safety_PasswordInput