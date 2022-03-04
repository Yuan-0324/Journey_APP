import React from 'react';
import logo from '../../../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { AiOutlineArrowLeft } from "react-icons/ai";


function Sign_up_mail({ nameModal, emailModal, passwordModal, setTotalData, totalData }) {

    //定義暫存值，使用此值暫存欲修改的值
    let emailBeforeValue = totalData.email

    const emailFunc = (e) => {
        emailBeforeValue = e.target.value
    }

    const EmailOnClick = () => {
        totalData.email = emailBeforeValue;
        setTotalData(totalData)
        emailModal(false);
        passwordModal(true);
        console.log(totalData);
    }

    return (

        <>
            <div className='signUpModalBackground_Mail'>
                <div className='signUpModalContainer_Mail'>
                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Mail'
                        onClick={() => {
                            emailModal(false);
                            nameModal(true);
                        }}
                    />

                    <div className='signUpModaltitle_Mail'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Mail'>
                        <label htmlFor="userMail">您的電子郵件</label>
                        <br />
                        <input onChange={emailFunc} defaultValue={emailBeforeValue}
                            className='email' type="text" placeholder="電子郵件" />
                        <br />
                        <button
                            onClick={EmailOnClick}
                            className='submitBtn'>
                            <img src={arrowRight} alt="" />
                        </button>

                    </div>
                </div>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Sign_up_mail;