import React from 'react';
import logo from '../../../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { AiOutlineArrowLeft } from "react-icons/ai";


function Sign_up_name({ signUpModal, nameModal, emailModal, setTotalData, totalData }) {
    //定義暫存值，使用此值暫存欲修改的值
    let lastNameBeforeValue = totalData.lastName;
    let firstNameBeforeValue = totalData.firstName;

    const lastNameFunc = (e) => {
        lastNameBeforeValue = e.target.value
    }
    const firstNameFunc = (e) => {
        firstNameBeforeValue = e.target.value
    }

    const NameOnClick = () => {
        if (lastNameBeforeValue.length !== 0 && firstNameBeforeValue.length !== 0) {
            totalData.lastName = lastNameBeforeValue;
            totalData.firstName = firstNameBeforeValue;
            setTotalData(totalData);
            nameModal(false);
            emailModal(true);
            console.log(totalData);
        }
        else {
            alert('請輸入姓名');
        }
    }

    return (

        <>
            <div className='signUpModalBackground_Name'>
                <div className='signUpModalContainer_Name'>

                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Name'
                        onClick={() => {
                            nameModal(false);
                            signUpModal(true);
                        }} />


                    <div className='signUpModaltitle_Name'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Name'>
                        <label htmlFor="userLastName">您的姓名</label>
                        <br />
                        <input onChange={lastNameFunc} defaultValue={lastNameBeforeValue}
                            className='lastName' type="text" placeholder="姓" />
                        <br />
                        <input onChange={firstNameFunc} defaultValue={firstNameBeforeValue}
                            className='userName' type="text" placeholder="名" />
                        <br />
                        <button
                            onClick={NameOnClick}
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

export default Sign_up_name;
