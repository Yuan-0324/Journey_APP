import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

import logo from '../../../images/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertTriangle } from 'react-icons/fi';

const ForgetPassword = ({ setForget, loginModal }) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send("service_vjsiy1i", "template_27az07o", {
            to_name: e.target[0].value
        }, 'amN23IZYGvA_zP2Q1')
            .then((result) => {
                console.log(result.text);
                localStorage.setItem('email', e.target[0].value)
                alert('已寄送重設信件，請至電子郵件查收！');
            }, (error) => {
                console.log(error.text);
            });
        // }
    };

    return (

        <>
            <div className='signUpModalBackground'>
                <div className='signUpModalContainer'>

                    <AiOutlineClose className='signUpModalCloseBtn'
                        onClick={() => {
                            setForget(false);
                            loginModal(true);
                        }} />
                    <div className='signUpModaltitle'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>忘記密碼</p>

                    </div>

                    <div className='forgetarea'>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>電子郵件</label>
                            <br />
                            < FiAlertTriangle className='alertEmail' />
                            <input type="email" name="user_email" />
                            <input type="submit" value="取得重設信件" />
                        </form>
                    </div>
                </div>
            </div>

            <div className='modalShadow'
                onClick={() => {

                }}>
            </div>
        </>

    );
};

export default ForgetPassword;