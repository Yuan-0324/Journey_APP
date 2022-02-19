import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../images/arrow-right.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/logo.png';
function Sign_up_birthday({ passwordModal, birthdayModal, phoneModal, setTotalData, totalData }) {

    const birthdayFunc = (e) => {
        totalData.birthday = e.target.value
        setTotalData(totalData)
    }

    return (
        <>
            <div className='signUpModalBackground_Birthday'>
                <div className='signUpModalContainer_Birthday'>
                    <button className='signUpModalLastBtn_Birthday'
                        onClick={() => {
                            birthdayModal(false);
                            passwordModal(true);
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='signUpModaltitle_Birthday'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Birthday'>
                        <label htmlFor="userBirthday">您的生日</label>
                        <br />
                        <input onChange={birthdayFunc}
                            className='email' type="date" placeholder="您的生日" />
                        <br />
                        <button
                            onClick={() => {
                                birthdayModal(false);
                                phoneModal(true);
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

export default Sign_up_birthday;