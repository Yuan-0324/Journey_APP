import React from 'react';
// import logo from '../../images/logo.png';
import arrowRight from '../../../images/arrow-right.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/logo.png';

function Sign_up_name({ signUpModal, nameModal, emailModal, setTotalData, totalData }) {

    const lastNameFunc = (e) => {
        totalData.lastName = e.target.value
        setTotalData(totalData)
    }
    const firstNameFunc = (e) => {
        totalData.firstName = e.target.value
        setTotalData(totalData)
    }

    return (

        <>
            <div className='signUpModalBackground_Name'>
                <div className='signUpModalContainer_Name'>
                    <button
                        onClick={() => {
                            nameModal(false);
                            signUpModal(true);
                        }}
                        className='signUpModalLastBtn_Name'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <div className='signUpModaltitle_Name'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Name'>
                        <label htmlFor="userLastName">您的姓名</label>
                        <br />
                        <input onChange={lastNameFunc}
                            className='lastName' type="text" placeholder="姓" />
                        <br />
                        <input onChange={firstNameFunc}
                            className='userName' type="text" placeholder="名" />
                        <br />
                        <button
                            onClick={() => {
                                // if (lastName == '') {
                                //     alert('請填入姓氏')
                                // } else if ((firstName == '')) {
                                //     alert('請填入名字')
                                // } else {
                                nameModal(false);
                                emailModal(true);
                                console.log(totalData);
                                // }

                            }}
                            className='submitBtn'>
                            <img src={arrowRight} alt="" />
                        </button>

                    </div>
                </div>
            </div>

            <div className='modalShadow'
            // onClick={() => { loginModal(false) }}
            >
            </div>

        </>

    )
}

export default Sign_up_name;
