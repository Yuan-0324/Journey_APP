import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../../images/logo.png';

function Sign_up_password({ emailModal, passwordModal, birthdayModal, setTotalData, totalData, userConfirmPassword, setUserConfirmPassword }) {

    const passwordFunc = (e) => {
        totalData.password = e.target.value
        setTotalData(totalData)
    }

    return (

        <>
            <div className='signUpModalBackground_Password'>
                <div className='signUpModalContainer_Password'>
                    <button className='signUpModalLastBtn_Password'
                        onClick={() => {
                            passwordModal(false);
                            emailModal(true);
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='signUpModaltitle_Password'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Password'>
                        <label htmlFor="userLastName">設定密碼</label>
                        <br />
                        <input onChange={passwordFunc}
                            className='userPassword' type="password" placeholder="密碼" />
                        <br />
                        <input value={userConfirmPassword} onChange={(e) => setUserConfirmPassword(e.target.value)}
                            className='userCheckPsw' type="password" placeholder="請再輸入一次密碼" />
                        <br />
                        <button
                            onClick={() => {
                                passwordModal(false);
                                birthdayModal(true);
                                console.log(totalData);
                            }}
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
