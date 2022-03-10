import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

//firebase
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase';

//icon
// import logo from '../images/logo.png';
import { AiOutlineClose } from "react-icons/ai";

// ---- 更新 ----

import logo from '../../../images/logo.png';
import context from '../../../context';
import Lineicon from '../../../images/login_setting/login/LINE_Brand_icon.png'



function Login({ loginModal, signUpModal, setForget }) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const LoginEmailFunc = (e) => {
        loginData.email = e.target.value
        setLoginData(loginData)
    }

    const LoginPasswordFunc = (e) => {
        loginData.password = e.target.value
        setLoginData(loginData)
    }
    const { setToken } = useContext(context);
    const { setUserInfo } = useContext(context);

    let history = useHistory();

    //一般登入
    const onSubmit = async () => {
        if (loginData.email !== "" && loginData.password !== "") {
            await Axios.post("http://localhost:8000/member/login", loginData)
                .then(async (res) => {
                    if (res.data == "信箱尚未被註冊") {
                        localStorage.removeItem('token');
                        alert('帳號未註冊');
                    }
                    else if (res.data == "密碼錯誤") {
                        localStorage.removeItem('token');
                        alert('密碼錯誤');
                    }
                    else {
                        console.log(res);
                        Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                        setToken(res.data.token); // 保存至 context
                        setUserInfo({
                            id: res.data.id,
                            email: res.data.email,
                            lastName: res.data.lastName,
                            firstName: res.data.firstName,
                            name: res.data.lastName + res.data.firstName,
                            api_selfie: res.data.api_selfie,
                            place: res.data.place,
                            interested: res.data.interested,
                            member_is_guide: res.data.member_is_guide
                        })
                        // 保存到本地
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('email', res.data.email);
                        localStorage.setItem('lastName', res.data.lastName);
                        localStorage.setItem('firstName', res.data.firstName);
                        localStorage.setItem('name', res.data.lastName + res.data.firstName);
                        localStorage.setItem('selfie', res.data.api_selfie);
                        localStorage.setItem('place', res.data.place);
                        localStorage.setItem('interested', res.data.interested);
                        localStorage.setItem('member_is_guide', res.data.member_is_guide);

                        let member_is_guide = localStorage.getItem('member_is_guide');
                        let email = localStorage.getItem('email');

                        //抓guide_id
                        if (member_is_guide == 1) {
                            await Axios.post('http://localhost:8000/login/guideID', { email })
                                .then((res) => {
                                    console.log(res.data[0].guide_id);
                                    localStorage.setItem('guide_id', res.data[0].guide_id)
                                    setTimeout(() => {
                                        history.go(0);
                                    }, 500);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        else {
                            setTimeout(() => {
                                history.go(0);
                            }, 500);
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            alert('請輸入帳號密碼');
        }

    }

    //Google API登入
    const provider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                let myData = result._tokenResponse;
                console.log(myData);
                let myLoginData = {
                    email: myData.email,
                    lastName: myData.lastName,
                    firstName: myData.firstName
                }
                //驗證是否有註冊
                await Axios.post('http://localhost:8000/api/login', myLoginData)
                    .then(async (res) => {
                        console.log(res);
                        if (res.data == '信箱尚未被註冊') {
                            //註冊
                            await Axios.post('http://localhost:8000/api/signup', myLoginData)
                                .then(async (res) => {
                                    console.log(res);
                                    await Axios.post('http://localhost:8000/api/login', myLoginData)
                                        .then(async (res) => {
                                            console.log(res);
                                            Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                                            setToken(res.data.token); // 保存至 context
                                            setUserInfo({
                                                id: res.data.id,
                                                email: res.data.email,
                                                lastName: res.data.lastName,
                                                firstName: res.data.firstName,
                                                name: res.data.lastName + res.data.firstName,
                                                api_selfie: res.data.api_selfie,
                                                place: res.data.place,
                                                interested: res.data.interested,
                                                member_is_guide: res.data.member_is_guide
                                            })
                                            //保存到本地
                                            localStorage.setItem('token', res.data.token)
                                            localStorage.setItem('id', res.data.id)
                                            localStorage.setItem('email', res.data.email)
                                            localStorage.setItem('lastName', res.data.lastName)
                                            localStorage.setItem('firstName', res.data.firstName)
                                            localStorage.setItem('name', res.data.lastName + res.data.firstName)
                                            localStorage.setItem('selfie', res.data.api_selfie)
                                            localStorage.setItem('place', res.data.place)
                                            localStorage.setItem('interested', res.data.interested)
                                            localStorage.setItem('member_is_guide', res.data.member_is_guide)

                                            let member_is_guide = localStorage.getItem('member_is_guide')
                                            let email = localStorage.getItem('email')

                                            //抓guide_id
                                            if (member_is_guide == 1) {
                                                await Axios.post('http://localhost:8000/login/guideID', { email })
                                                    .then((res) => {
                                                        console.log(res.data[0].guide_id);
                                                        localStorage.setItem('guide_id', res.data[0].guide_id)
                                                    })
                                                    .catch((err) => {
                                                        console.log(err);
                                                    })
                                            }

                                            if (localStorage.getItem('token') !== undefined) {
                                                setTimeout(() => {
                                                    history.go(0);
                                                }, 500);
                                            }
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                        })
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        else {
                            Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                            setToken(res.data.token); // 保存至 context
                            setUserInfo({
                                id: res.data.id,
                                email: res.data.email,
                                lastName: res.data.lastName,
                                firstName: res.data.firstName,
                                name: res.data.lastName + res.data.firstName,
                                api_selfie: res.data.api_selfie,
                                place: res.data.place,
                                interested: res.data.interested,
                                member_is_guide: res.data.member_is_guide
                            })
                            //保存到本地
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('id', res.data.id)
                            localStorage.setItem('email', res.data.email)
                            localStorage.setItem('lastName', res.data.lastName)
                            localStorage.setItem('firstName', res.data.firstName)
                            localStorage.setItem('name', res.data.lastName + res.data.firstName)
                            localStorage.setItem('selfie', res.data.api_selfie)
                            localStorage.setItem('place', res.data.place)
                            localStorage.setItem('interested', res.data.interested)
                            localStorage.setItem('member_is_guide', res.data.member_is_guide)

                            let member_is_guide = localStorage.getItem('member_is_guide')
                            let email = localStorage.getItem('email')

                            //抓guide_id
                            if (member_is_guide == 1) {
                                await Axios.post('http://localhost:8000/login/guideID', { email })
                                    .then((res) => {
                                        console.log(res.data[0].guide_id);
                                        localStorage.setItem('guide_id', res.data[0].guide_id)
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            }


                            if (localStorage.getItem('token') !== undefined) {
                                setTimeout(() => {
                                    history.go(0);
                                }, 500);
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Facebook API登入
    const fbProvider = new FacebookAuthProvider();
    const SignInWithFacebook = () => {
        signInWithPopup(auth, fbProvider)
            .then(async (result) => {
                let myData = result._tokenResponse;
                console.log(myData);
                let myLoginData = {
                    email: myData.email,
                    lastName: myData.lastName,
                    firstName: myData.firstName
                }
                //驗證是否有註冊
                await Axios.post('http://localhost:8000/api/login', myLoginData)
                    .then(async (res) => {
                        console.log(res);
                        let notYetSignUp = '信箱尚未被註冊'
                        if (res.data == notYetSignUp) {
                            //註冊
                            await Axios.post('http://localhost:8000/api/signup', myLoginData)
                                .then(async (res) => {
                                    console.log(res);
                                    await Axios.post('http://localhost:8000/api/login', myLoginData)
                                        .then(async (res) => {
                                            console.log(res);
                                            Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                                            setToken(res.data.token); // 保存至 context
                                            setUserInfo({
                                                id: res.data.id,
                                                email: res.data.email,
                                                lastName: res.data.lastName,
                                                firstName: res.data.firstName,
                                                name: res.data.lastName + res.data.firstName,
                                                api_selfie: res.data.api_selfie,
                                                place: res.data.place,
                                                interested: res.data.interested,
                                                member_is_guide: res.data.member_is_guide
                                            })
                                            // 保存到本地
                                            localStorage.setItem('token', res.data.token)
                                            localStorage.setItem('id', res.data.id)
                                            localStorage.setItem('email', res.data.email)
                                            localStorage.setItem('lastName', res.data.lastName)
                                            localStorage.setItem('firstName', res.data.firstName)
                                            localStorage.setItem('name', res.data.lastName + res.data.firstName)
                                            localStorage.setItem('selfie', res.data.api_selfie)
                                            localStorage.setItem('place', res.data.place)
                                            localStorage.setItem('interested', res.data.interested)
                                            localStorage.setItem('member_is_guide', res.data.member_is_guide)

                                            let member_is_guide = localStorage.getItem('member_is_guide')
                                            let email = localStorage.getItem('email')


                                            //抓guide_id
                                            if (member_is_guide == 1) {
                                                await Axios.post('http://localhost:8000/login/guideID', { email })
                                                    .then((res) => {
                                                        console.log(res.data[0].guide_id);
                                                        localStorage.setItem('guide_id', res.data[0].guide_id)
                                                    })
                                                    .catch((err) => {
                                                        console.log(err);
                                                    })
                                            }

                                            if (localStorage.getItem('token') !== undefined) {
                                                setTimeout(() => {
                                                    window.location = "http://localhost:3000/setting/guide";
                                                }, 500);
                                            }
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                        })
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        else {
                            Axios.defaults.headers.common["authorization"] = res.data.token; // axios 請求頭帶上 token
                            setToken(res.data.token); // 保存至 context
                            setUserInfo({
                                id: res.data.id,
                                email: res.data.email,
                                lastName: res.data.lastName,
                                firstName: res.data.firstName,
                                name: res.data.lastName + res.data.firstName,
                                api_selfie: res.data.api_selfie,
                                place: res.data.place,
                                interested: res.data.interested,
                                member_is_guide: res.data.member_is_guide
                            })
                            //保存到本地
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('id', res.data.id)
                            localStorage.setItem('email', res.data.email)
                            localStorage.setItem('lastName', res.data.lastName)
                            localStorage.setItem('firstName', res.data.firstName)
                            localStorage.setItem('name', res.data.lastName + res.data.firstName)
                            localStorage.setItem('selfie', res.data.api_selfie)
                            localStorage.setItem('place', res.data.place)
                            localStorage.setItem('interested', res.data.interested)
                            localStorage.setItem('member_is_guide', res.data.member_is_guide)

                            let member_is_guide = localStorage.getItem('member_is_guide')
                            let email = localStorage.getItem('email')

                            //抓guide_id
                            if (member_is_guide == 1) {
                                await Axios.post('http://localhost:8000/login/guideID', { email })
                                    .then((res) => {
                                        console.log(res.data[0].guide_id);
                                        localStorage.setItem('guide_id', res.data[0].guide_id)
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            }

                            if (localStorage.getItem('token') !== undefined) {
                                alert('登入成功！,轉跳至設定頁面設定生日及居住地！');
                                setTimeout(() => {
                                    window.location = "http://localhost:3000/setting/guide";
                                }, 500);
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Line API登入
    const SignInWithLine = () => {
        window.location = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656960165&redirect_uri=http://localhost:3000/&state=login&scope=profile%20openid%20email`;
    }
    return (
        <>
            <div className='loginModalBackground'>
                <div className='loginModalContainer'>
                    <AiOutlineClose
                        className='loginModalcloseBtn'
                        onClick={() => { loginModal(false) }}
                    />
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
                                onChange={LoginEmailFunc}
                                required placeholder="帳號" />
                            <p className='pswText'>密碼</p>
                            <input
                                type="password"
                                onChange={LoginPasswordFunc}
                                required placeholder="密碼" />
                        </div>

                        <div className="userSelect">
                            <input type="checkbox" name="rememberMe" id="rememberChx" />
                            <label htmlFor="rememberChx" id="rememberMe">記住帳號</label>
                            <a onClick={() => {
                                loginModal(false);
                                setForget(true);
                            }} id="forgetPsw">忘記密碼？</a>
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
                        <button onClick={SignInWithLine}>
                            <img className='lineIcon' src={Lineicon} />
                            使用Line帳號登入
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