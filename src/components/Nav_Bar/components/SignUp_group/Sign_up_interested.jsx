import React from 'react';
// import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import logo from '../../../../images/logo.png';

function Sign_up_interested({
    interestedModal,
    positionModal,
    finishModal,
    userInterested,
    setUserInterested,
    totalData
}) {

    const arrayInterested = [
        { interestedId: "myCheckbox1", interestedName: '爬山', imgURL: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/dog-190056_1280.jpg' },
        { interestedId: "myCheckbox2", interestedName: '唱歌', imgURL: 'https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg' },
        { interestedId: "myCheckbox3", interestedName: '釣魚', imgURL: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_1280.jpg' },
        { interestedId: "myCheckbox4", interestedName: '下棋', imgURL: 'https://cdn.pixabay.com/photo/2018/04/16/15/52/chess-3325010_1280.jpg' },
        { interestedId: "myCheckbox5", interestedName: '體操', imgURL: 'https://cdn.pixabay.com/photo/2016/02/04/16/52/men-1179452_1280.jpg' },
        { interestedId: "myCheckbox6", interestedName: '舞蹈', imgURL: 'https://cdn.pixabay.com/photo/2019/06/16/03/08/sunset-4276841_1280.jpg' },
        { interestedId: "myCheckbox7", interestedName: '羽球', imgURL: 'https://cdn.pixabay.com/photo/2021/03/02/19/26/snowshoes-6063630_1280.jpg' },

    ]

    return (

        <>
            <div className='signUpModalBackground_Interested'>
                <div className='signUpModalContainer_Interested'>
                    <button className='signUpModalLastBtn_Interested'
                        onClick={() => {
                            interestedModal(false);
                            positionModal(true);
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='signUpModaltitle_Interested'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Interested'>
                        <label id='title' htmlFor="userInterested">選擇您的興趣</label>
                        <br />
                        <div className='picRange'>
                            <div className="bigpic">

                                {arrayInterested.map((elm, idx) => (
                                    <div key={idx}>
                                        <input type="checkbox" id={elm.interestedId} />
                                        <label htmlFor={elm.interestedId}>
                                            <img src={elm.imgURL} alt="" />
                                            <div className='picShadow'>
                                                <div className='picBorder'>
                                                </div>
                                            </div>
                                            <span>{elm.interestedName}</span>
                                        </label>
                                    </div>
                                ))}
                                {/* <input type="checkbox" id="myCheckbox1" />
                                <label htmlFor="myCheckbox1">
                                    <img src="https://source.unsplash.com/600x400/?taiwan,hiking" alt="" />
                                    <div className='picShadow'>
                                        <div className='picBorder'>
                                        </div>
                                    </div>
                                    <span>爬山</span>
                                </label> */}

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='buttonCase'>
                <button
                    onClick={() => {
                        // let arrayInput = document.getElementsByTagName('input')

                        interestedModal(false);
                        finishModal(true);
                        console.log(totalData);
                    }}
                    className='intSubmitBtn'>
                    再挑選三個
                </button>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Sign_up_interested;