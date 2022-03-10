import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import finishImg from '../../../../images/Success-unscreen.gif'
import { AiOutlineClose } from "react-icons/ai";



function Sign_up_finish({ finishModal }) {
    let history = useHistory();

    return (
        <>
            <div className='signUpModalBackground_Finish'>
                <div className='signUpModalContainer_Finish'>
                    <AiOutlineClose
                        className='signUpModalCloseBtn_Finish'
                        onClick={() => {
                            finishModal(false);
                            history.go(0);
                        }} />

                    <div className='signUpModaltitle_Finish'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊成功</p>

                    </div>

                    <div className='signUpModalBody_Finish'>
                        <img src={finishImg} alt="" />
                    </div>
                </div>
            </div>

            <div className='modalShadow' onClick={() => {
                finishModal(false);
                history.push('/');
            }}>
            </div>
        </>



    )
}

export default Sign_up_finish;