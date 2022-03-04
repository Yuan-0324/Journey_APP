import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { AiOutlineArrowLeft } from "react-icons/ai";


import logo from '../../../../images/logo.png';

function Sign_up_phone({ phoneModal, birthdayModal, positionModal, setTotalData, totalData }) {

    let phoneBeforeValue = totalData.phone;

    const phoneFunc = (e) => {
        phoneBeforeValue = e.target.value
    }

    const PhoneOnClick = () => {
        if (phoneBeforeValue.length !== 0) {
            totalData.phone = phoneBeforeValue;
            setTotalData(totalData);
            phoneModal(false);
            positionModal(true);
            console.log(totalData);
        }
        else {
            alert('請輸入手機號碼');
        }
    }

    return (

        <>
            <div className='signUpModalBackground_Phone'>
                <div className='signUpModalContainer_Phone'>
                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Phone'
                        onClick={() => {
                            phoneModal(false);
                            birthdayModal(true);
                        }} />
                    <div className='signUpModaltitle_Phone'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Phone'>
                        <label htmlFor="userPhone">您的手機</label>
                        <br />
                        <input onChange={phoneFunc} defaultValue={phoneBeforeValue}
                            className='phone' type="text" placeholder="手機" />
                        <br />
                        <button
                            onClick={PhoneOnClick}
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

export default Sign_up_phone;