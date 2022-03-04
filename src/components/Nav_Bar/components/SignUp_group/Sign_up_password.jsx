import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { AiOutlineArrowLeft } from "react-icons/ai";

import logo from '../../../../images/logo.png';

function Sign_up_password({ emailModal, passwordModal, birthdayModal, setTotalData, totalData }) {

    let pawsswordBeforeValue = totalData.password;
    let confirmPassword = '';

    const passwordFunc = (e) => {
        pawsswordBeforeValue = e.target.value
    }

    const confirmFunc = (e) => {
        confirmPassword = e.target.value
    }

    const PasswordOnClick = () => {
        if (confirmPassword == pawsswordBeforeValue && pawsswordBeforeValue.length >= 6) {
            totalData.password = pawsswordBeforeValue;
            setTotalData(totalData);
            passwordModal(false);
            birthdayModal(true);
            console.log(totalData);
        }
        else if (confirmPassword !== pawsswordBeforeValue) {
            alert('密碼確認錯誤')
        }
        else {
            alert('密碼長度不足')
        }

    }

    return (

        <>
            <div className='signUpModalBackground_Password'>
                <div className='signUpModalContainer_Password'>
                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Password'
                        onClick={() => {
                            passwordModal(false);
                            emailModal(true);
                        }} />
                    <div className='signUpModaltitle_Password'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Password'>
                        <label htmlFor="userLastName">設定密碼</label>
                        <br />
                        <input onChange={passwordFunc} defaultValue={pawsswordBeforeValue}
                            className='userPassword' type="password" placeholder="密碼" />
                        <br />
                        <input onChange={confirmFunc} defaultValue={confirmPassword}
                            className='userCheckPsw' type="password" placeholder="請再輸入一次密碼" />
                        <br />
                        <button
                            onClick={PasswordOnClick}
                            className='submitBtn'>

                            <img src={arrowRight} alt="arrowRight" />
                        </button>

                    </div>
                </div>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Sign_up_password;
