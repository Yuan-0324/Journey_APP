import React from 'react';
import { useHistory } from 'react-router-dom';
// import logo from '../../images/logo.png';
import finishImg from '../../../images/Success-unscreen.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import logo from '../../../images/logo.png';
function Sign_up_finish({ finishModal }) {
    let history = useHistory();

    return (

        <>
            <div className='signUpModalBackground_Finish'>
                <div className='signUpModalContainer_Finish'>
                    <button onClick={() => {
                        finishModal(false);
                        history.push('/');
                    }}
                        className='signUpModalCloseBtn_Finish'>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
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