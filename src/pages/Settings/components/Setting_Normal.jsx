import React, { useState, useEffect } from "react";
import Axios from "axios";
import Setting_Normal_Name from './Setting_Normal_Group/Setting_Normal_Name';
import Setting_Normal_Email from './Setting_Normal_Group/Setting_Normal_Email';
import Setting_Normal_Place from './Setting_Normal_Group/Setting_Normal_Place';
import Setting_Normal_Birthday from './Setting_Normal_Group/Setting_Normal_Birthday';

import Setting_Normal_NameInput from './Setting_Normal_Group/Setting_Normal_NameInput';
import Setting_Normal_EmailInput from './Setting_Normal_Group/Setting_Normal_EmailInput';
import Setting_Normal_PlaceInput from './Setting_Normal_Group/Setting_Normal_PlaceInput';
import Setting_Normal_BirthdayInput from './Setting_Normal_Group/Setting_Normal_BirthdayInput';

const Setting_Normal = () => {

    let email = localStorage.getItem('email');
    let id = localStorage.getItem('id');

    //使用者資料useState hook function
    const [userInfo, setUserInfo] = useState({
        name: '',
        lastName: '',
        firstName: '',
        birthday: '',
        email: '',
        place: '',
    })

    // console.log(userInfo);

    //從後端取資料
    async function generalGet() {
        await Axios.post('http://localhost:8000/general/get', email)
            .then((res) => {
                // console.log(res.data[0]);
                setUserInfo({
                    name: res.data[0].lastName + res.data[0].firstName,
                    lastName: res.data[0].lastName,
                    firstName: res.data[0].firstName,
                    birthday: res.data[0].birthday,
                    id: res.data[0].id,
                    email: res.data[0].email,
                    place: res.data[0].place
                }

                )
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        generalGet();
        if (userInfo.birthday == null) {
            document.getElementsByClassName('bth')[0].style.display = 'none';
        }
    }, []);

    //顯示值與input component互換 hook function
    const [nameSwitch, setNameSwitch] = useState(0);
    const [emailSwitch, setEmailSwitch] = useState(0);
    const [placeSwitch, setPlaceSwitch] = useState(0);
    const [birthdaySwitch, setBirthdaySwitch] = useState(0);
    //showName
    let showName = '';
    switch (nameSwitch) {
        case 0:
            showName = <Setting_Normal_Name setNameSwitch={setNameSwitch} userInfo={userInfo}
                email={email} />;
            break;
        case 1:
            showName = <Setting_Normal_NameInput setNameSwitch={setNameSwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
    }

    //showEmail
    let showEmail = '';
    switch (emailSwitch) {
        case 0:
            showEmail = <Setting_Normal_Email setEmailSwitch={setEmailSwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
        case 1:
            showEmail = <Setting_Normal_EmailInput setEmailSwitch={setEmailSwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} id={id} />;
            break;
    }

    //showPlace
    let showPlace = '';
    switch (placeSwitch) {
        case 0:
            showPlace = <Setting_Normal_Place setPlaceSwitch={setPlaceSwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
        case 1:
            showPlace = <Setting_Normal_PlaceInput setPlaceSwitch={setPlaceSwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
    }

    //showBirthday
    let showBirthday = '';
    switch (birthdaySwitch) {
        case 0:
            showBirthday = <Setting_Normal_Birthday setBirthdaySwitch={setBirthdaySwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
        case 1:
            showBirthday = <Setting_Normal_BirthdayInput setBirthdaySwitch={setBirthdaySwitch} userInfo={userInfo}
                setUserInfo={setUserInfo} email={email} />;
            break;
    }

    // console.log(userInfo);

    return (

        <div className="Normal_Content" >

            <p>一般設定</p>
            <div className="Content_Shadow">

                <div className="Normal_item_name">
                    <label htmlFor="">姓名</label>
                    {showName}
                </div>

                <div className="Normal_item_birthday">
                    <label htmlFor="">生日</label>
                    <span className="bth">{userInfo.birthday}</span>
                    {showBirthday}
                </div>


                <div className="Normal_item_userID">
                    <label htmlFor="">用戶ID</label>
                    <span>{userInfo.id}</span>
                </div>

                <div className="Normal_item_email">
                    <label htmlFor="">電子郵件</label>
                    {showEmail}
                </div>

                <div className="Normal_item_place">
                    <label htmlFor="">居住地</label>
                    {showPlace}
                </div>
            </div>
        </div>
    )
}

export default Setting_Normal;