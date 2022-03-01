import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
//firebase
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../../firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../images/logo.png';

function Sign_up_index({ signUpModal, nameModal, loginModal, totalData }) {

    let history = useHistory();
    //Google API註冊
    const provider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                let myData = result._tokenResponse;
                console.log(myData);
                let mySignUpData = {
                    email: myData.email,
                    lastName: myData.lastName,
                    firstName: myData.firstName
                }
                console.log(mySignUpData);
                let myResult = await Axios.post("http://localhost:8000/api/signup", mySignUpData);
                console.log(myResult);



                // loginModal(false);
                // history.push('/');

            }).catch((error) => {
                console.log(error);
            })
    }

    return (

        <>
            <div className='signUpModalBackground'>
                <div className='signUpModalContainer'>
                    <button className='signUpModalCloseBtn'
                        onClick={() => { signUpModal(false) }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
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
                        <button onClick={SignInWithGoogle}>
                            <img className='googleIcon' src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48" alt="" />
                            使用Google帳號註冊
                        </button>
                        <button>
                            <img className='facebookIcon' src="https://secure.meetupstatic.com/next/images/login/facebook.svg?w=48" alt="" />
                            使用Facebook帳號註冊
                        </button>
                        <button onClick={() => {
                            signUpModal(false)
                            nameModal(true)
                            console.log(totalData);
                        }}>
                            <FontAwesomeIcon className='emailIcon' icon={faEnvelope} />
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
