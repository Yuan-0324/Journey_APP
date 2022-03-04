import React from 'react';
import Axios from 'axios';

const Setting_Normal_EmailInput = ({ setEmailSwitch, userInfo, setUserInfo, id }) => {
    //定義暫存值，使用此值暫存欲修改的值
    let emailBeforeValue = userInfo.email
    const emailFunc = (e) => {
        emailBeforeValue = e.target.value;
        // console.log(beforeValue);
    }

    async function EmailOnClick() {
        //將父階的使用者資訊=暫存值
        userInfo.email = emailBeforeValue;
        //存進物件 準備丟進put
        let totolEmail = {
            email: userInfo.email,
            userId: id
        }
        setUserInfo(userInfo);
        await Axios.put('http://localhost:8000/general/setEmail', totolEmail)
            .then((res) => {
                console.log(res);
                localStorage.setItem('email', userInfo.email);
                setEmailSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <input type="email"
                defaultValue={emailBeforeValue}
                onChange={emailFunc}
            />
            <button onClick={EmailOnClick}>修改</button>
            <button onClick={() => {
                setEmailSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Normal_EmailInput