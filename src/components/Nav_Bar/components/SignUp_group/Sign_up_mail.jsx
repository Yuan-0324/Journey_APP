import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../../images/arrow-right.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../../images/logo.png';

function Sign_up_mail({ nameModal, emailModal, passwordModal, setTotalData, totalData }) {

    const emailFunc = (e) => {
        totalData.email = e.target.value
        setTotalData(totalData)
    }

    return (

        <>
            <div className='signUpModalBackground_Mail'>
                <div className='signUpModalContainer_Mail'>
                    <button
                        onClick={() => {
                            emailModal(false);
                            nameModal(true);
                        }}
                        className='signUpModalLastBtn_Mail'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <div className='signUpModaltitle_Mail'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Mail'>
                        <label htmlFor="userMail">您的電子郵件</label>
                        <br />
                        <input onChange={emailFunc}
                            className='email' type="text" placeholder="電子郵件" />
                        <br />
                        <button
                            onClick={() => {
                                // if (userEmail == '') {
                                //     alert('請輸入e-mail！')
                                // } else {
                                emailModal(false);
                                passwordModal(true);
                                console.log(totalData);
                                // }
                            }}
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