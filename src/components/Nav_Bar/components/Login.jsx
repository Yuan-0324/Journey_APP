import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import Axios from 'axios';

//firebase
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

//icon
// import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


// ---- 更新 ----

import logo from '../../../images/logo.png';


function Login({ loginModal, signUpModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    //一般登入
    const onSubmit = async () => {
        // try {
        //     const result = await signInWithEmailAndPassword(
        //         auth,
        //         email,
        //         password
        //     );
        //     alert('登入成功!')
        //     loginModal(false);
        //     history.push('/');

        // } catch (error) {
        //     alert('帳號密碼有誤！');
        // }
    }

    //Google API登入
    const provider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                alert('登入成功!')
                loginModal(false);
                history.push('/');

            }).catch((error) => {
                console.log(error);
            })
    }

    //Facebook API登入
    const fbProvider = new FacebookAuthProvider();
    const SignInWithFacebook = () => {
        signInWithPopup(auth, fbProvider)
            .then((result) => {
                console.log(result);
                alert('登入成功!')
                loginModal(false);
                history.push('/');
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div className='loginModalBackground'>
                <div className='loginModalContainer'>
                    <button className='loginModalcloseBtn'
                        onClick={() => { loginModal(false) }}>
                        <FontAwesomeIcon icon={faTimes} />

                    </button>
                    <div className='loginModaltitle'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>登入</p>
                        <span>還不是會員? 點我
                            <a onClick={() => {
                                loginModal(false);
                                signUpModal(true);
                            }}
                                className='signHref'>
                                註冊
                            </a>
                        </span>
                    </div>

                    <div className='loginModalbody'>
                        <div className='userInput'>
                            <p>帳號</p>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required placeholder="帳號" />
                            <p className='pswText'>密碼</p>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required placeholder="密碼" />
                        </div>

                        <div className="userSelect">
                            <input type="checkbox" name="rememberMe" id="rememberChx" />
                            <label htmlFor="rememberChx" id="rememberMe">記住帳號</label>
                            <a href="#" id="forgetPsw"><span>忘記密碼？</span></a>
                        </div>
                        <button className="loginBtn" onClick={onSubmit}>
                            登入
                        </button>
                        <hr />
                    </div>



                    <div className='loginModalfooter'>
                        <p>使用其他平台帳號登入</p>
                        <button onClick={SignInWithGoogle}>
                            <img className='googleIcon' src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48" alt="" />
                            使用Google帳號登入
                        </button>
                        <button onClick={SignInWithFacebook}>
                            <img className='facebookIcon' src="https://secure.meetupstatic.com/next/images/login/facebook.svg?w=48" alt="" />
                            使用Facebook帳號登入
                        </button>

                    </div>
                </div>
            </div>


            <div className='modalShadow'
                onClick={() => { loginModal(false) }}>
            </div>
        </>
    )
}

export default Login;
