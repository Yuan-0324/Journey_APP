import React from 'react';

import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import logo from '../../../../images/logo.png';

function Sign_up_index({ signUpModal, nameModal, loginModal, totalData }) {

    return (

        <>
            <div className='signUpModalBackground'>
                <div className='signUpModalContainer'>

                    <AiOutlineClose className='signUpModalCloseBtn' onClick={() => { signUpModal(false) }} />
                    <div className='signUpModaltitle'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>
                        <span>已經有會員? 點我
                            <a onClick={() => {
                                signUpModal(false)
                                loginModal(true)
                            }}>
                                登入
                            </a>
                        </span>
                    </div>

                    <div className='signUpModalBody'>
                        {/* <button onClick={SignInWithGoogle}>
                            <img className='googleIcon' src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48" alt="" />
                            使用Google帳號註冊
                        </button>
                        <button>
                            <img className='facebookIcon' src="https://secure.meetupstatic.com/next/images/login/facebook.svg?w=48" alt="" />
                            使用Facebook帳號註冊
                        </button> */}
                        <button onClick={() => {
                            signUpModal(false)
                            nameModal(true)
                            console.log(totalData);
                        }}>
                            <AiOutlineMail className='emailIcon' />
                            使用電子郵件帳號註冊
                        </button>
                    </div>
                </div>
            </div>

            <div className='modalShadow'
                onClick={() => {
                    signUpModal(false)
                }}>
            </div>
        </>



    )
}

export default Sign_up_index;
