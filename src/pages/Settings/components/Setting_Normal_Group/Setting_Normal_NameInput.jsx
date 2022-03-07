import React from 'react';
import Axios from 'axios';

const Setting_Normal_NameInput = ({ setNameSwitch, userInfo, setUserInfo, email }) => {
    //定義暫存值，使用此值暫存欲修改的值
    let lastNameBeforeValue = userInfo.lastName;
    let firstNameBeforeValue = userInfo.firstName;

    //lastName onChange
    const lastNameFunc = (e) => {
        lastNameBeforeValue = e.target.value;
        // console.log(lastNameBeforeValue);
    }

    //firstName onChange
    const firstNameFunc = (e) => {
        firstNameBeforeValue = e.target.value;
        // console.log(firstNameBeforeValue);
    }

    async function NameOnClick() {
        //將父階的使用者資訊=暫存值
        userInfo.lastName = lastNameBeforeValue;
        userInfo.firstName = firstNameBeforeValue;
        //存進物件 準備丟進put
        let totolName = {
            lastName: userInfo.lastName,
            firstName: userInfo.firstName,
            email: email
        }
        userInfo.name = userInfo.lastName + userInfo.firstName;
        setUserInfo(userInfo);
        await Axios.put('http://localhost:8000/general/setName', totolName)
            .then((res) => {
                console.log(res);
                localStorage.setItem('lastName', userInfo.lastName);
                localStorage.setItem('firstName', userInfo.firstName);
                setNameSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <input type="text"
                defaultValue={lastNameBeforeValue}
                onChange={lastNameFunc}
            />
            <br />
            <input type="text"
                defaultValue={firstNameBeforeValue}
                onChange={firstNameFunc}
            />
            <button onClick={NameOnClick}>修改</button>
            <button onClick={() => {
                setNameSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Normal_NameInput