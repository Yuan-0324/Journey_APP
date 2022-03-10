import React from 'react';
import logo from '../../../images/logo.png';
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import Axios from 'axios';


function Forget() {

    let pawsswordBeforeValue = '';
    let confirmPassword = '';

    const passwordFunc = (e) => {
        pawsswordBeforeValue = e.target.value
    }

    const confirmFunc = (e) => {
        confirmPassword = e.target.value
    }

    const PasswordOnClick = async () => {
        if (confirmPassword == pawsswordBeforeValue && pawsswordBeforeValue.length >= 6) {
            await Axios.put('http://localhost:8000/general/setPassword',
                {
                    email: localStorage.getItem('email'),
                    password: pawsswordBeforeValue
                })
                .then((res) => {
                    console.log(res);
                    alert('密碼重設成功')
                    window.location = "http://localhost:3000"
                })
                .catch((err) => {
                    console.log(err);
                })

        }
        else if (confirmPassword !== pawsswordBeforeValue) {
            alert('密碼確認錯誤')
        }
        else {
            alert('密碼長度不足')
        }

    }


    return (

        <>
            <div className='signUpModalBackground_Password'>
                <div className='signUpModalContainer_Password'>
                    <AiOutlineClose
                        className='signUpModalLastBtn_Password'
                        onClick={() => {
                            localStorage.removeItem('email');
                            setTimeout(() => {
                                window.location = "http://localhost:3000"
                            }, 500);
                        }} />
                    <div className='signUpModaltitle_Password'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>重設密碼</p>

                    </div>

                    <div className='signUpModalBody_Password'>
                        <label htmlFor="userLastName">設定密碼</label>
                        <br />
                        <input
                            onChange={passwordFunc} defaultValue={pawsswordBeforeValue}
                            className='userPassword' type="password" placeholder="密碼" />
                        <br />
                        <input
                            onChange={confirmFunc} defaultValue={confirmPassword}
                            className='userCheckPsw' type="password" placeholder="請再輸入一次密碼" />
                        <br />
                        <button
                            onClick={PasswordOnClick}
                            className='Btn'>
                            送出
                        </button>

                    </div>
                </div>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Forget;
