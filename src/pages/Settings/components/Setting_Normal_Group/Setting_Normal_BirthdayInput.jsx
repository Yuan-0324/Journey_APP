import React from 'react';
import Axios from 'axios';

const Setting_Normal_BirthdayInput = ({ setBirthdaySwitch, userInfo, setUserInfo, email }) => {

    //定義暫存值，使用此值暫存欲修改的值
    let bthdBeforeValue = userInfo.birthday
    const bthdFunc = (e) => {
        bthdBeforeValue = e.target.value;
        // console.log(beforeValue);
    }

    async function BthdOnClick() {
        //將父階的使用者資訊=暫存值
        userInfo.birthday = bthdBeforeValue;
        //存進物件 準備丟進put
        let totolBthd = {
            birthday: userInfo.birthday,
            email: email
        }
        setUserInfo(userInfo);
        await Axios.put('http://localhost:8000/general/setBirthday', totolBthd)
            .then((res) => {
                console.log(res);
                // localStorage.setItem('email', userInfo.email);
                setBirthdaySwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <input type="date"
                defaultValue={bthdBeforeValue}
                onChange={bthdFunc}
            />
            <button onClick={BthdOnClick}>修改</button>
            <button onClick={() => {
                setBirthdaySwitch(0);
            }}>取消</button>
        </>
    )

}

export default Setting_Normal_BirthdayInput