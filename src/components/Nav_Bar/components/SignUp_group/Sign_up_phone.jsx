import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../../images/logo.png';

function Sign_up_phone({ phoneModal, birthdayModal, positionModal, setTotalData, totalData }) {

    const phoneFunc = (e) => {
        totalData.phone = e.target.value
        setTotalData(totalData)
    }

    return (

        <>
            <div className='signUpModalBackground_Phone'>
                <div className='signUpModalContainer_Phone'>
                    <button className='signUpModalLastBtn_Phone'
                        onClick={() => {
                            phoneModal(false);
                            birthdayModal(true);
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='signUpModaltitle_Phone'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Phone'>
                        <label htmlFor="userPhone">您的手機</label>
                        <br />
                        <input onChange={phoneFunc}
                            className='phone' type="text" placeholder="手機" />
                        <br />
                        <button
                            onClick={() => {
                                phoneModal(false);
                                positionModal(true);
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

export default Sign_up_phone;