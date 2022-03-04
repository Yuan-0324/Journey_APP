import React from 'react';
import logo from '../../../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { AiOutlineArrowLeft } from "react-icons/ai";


function Sign_up_birthday({ passwordModal, birthdayModal, phoneModal, setTotalData, totalData }) {

    let birthdayBeforeValue = totalData.birthday;

    const birthdayFunc = (e) => {
        birthdayBeforeValue = e.target.value;
    }

    const BirthdayOnClick = () => {
        if (birthdayBeforeValue.length !== 0) {
            totalData.birthday = birthdayBeforeValue;
            setTotalData(totalData);
            birthdayModal(false);
            phoneModal(true);
            console.log(totalData);
        }
        else {
            alert('請選擇日期');
        }
    }

    return (
        <>
            <div className='signUpModalBackground_Birthday'>
                <div className='signUpModalContainer_Birthday'>
                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Birthday'
                        onClick={() => {
                            birthdayModal(false);
                            passwordModal(true);
                        }} />
                    <div className='signUpModaltitle_Birthday'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Birthday'>
                        <label htmlFor="userBirthday">您的生日</label>
                        <br />
                        <input onChange={birthdayFunc} defaultValue={birthdayBeforeValue}
                            className='email' type="date" placeholder="您的生日" />
                        <br />
                        <button
                            onClick={BirthdayOnClick}
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

export default Sign_up_birthday;