import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from '../../../../images/logo.png';

function Sign_up_interested({ interestedModal, positionModal, finishModal, totalData, setTotalData }) {
    //暫存值

    const [hiking, setHiking] = useState(false)
    const [singing, setSinging] = useState(false)
    const [fishing, setFishing] = useState(false)
    const [chess, setChess] = useState(false)
    const [gymnastics, setGymnastics] = useState(false)
    const [dancing, setDancing] = useState(false)
    const [badminton, setBadminton] = useState(false)
    const [delicacy, setDelicacy] = useState(false)
    const [tea, setTea] = useState(false)
    const [photography, setPhotography] = useState(false)

    const [checkedArr, setCheckedArr] = useState([])
    function checkedOnClick(e) {
        // console.log(e);
        if (checkedArr.length < 4) {
            if (e.target.checked == true) {
                checkedArr.push(e.target.name)
            }
            if (e.target.checked == false && checkedArr.includes(e.target.name) == true) {
                let Where = checkedArr.indexOf(e.target.name)
                checkedArr.splice(Where, 1);
                setCheckedArr(checkedArr);
            }
        }
    }

    async function btnOnClick() {
        let finalCheckedArr = checkedArr.join('/');
        totalData.interested = finalCheckedArr;
        setTotalData(totalData);
        await Axios.post("http://localhost:8000/member/signup", totalData)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);
            })
        await createUserWithEmailAndPassword(auth, totalData.email, totalData.password)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        await sendEmailVerification(auth.currentUser)
            .then((res) => {
                console.log('already send verify email');
                alert('請至email收取驗證信件！')
                setTimeout(() => {
                    interestedModal(false);
                    finishModal(true);
                }, 500);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        let num = () => {
            switch (checkedArr.length) {
                case 0:
                    document.getElementsByClassName('numm')[0].innerText = '再挑選三個';
                    break;
                case 1:
                    document.getElementsByClassName('numm')[0].innerText = '再挑選兩個';
                    break;
                case 2:
                    document.getElementsByClassName('numm')[0].innerText = '再挑選一個';
                    break;
                case 3:
                    document.getElementsByClassName('numm')[0].innerText = '送出';
                    break;
            }
        }
        num();
    }, [checkedArr.length]);

    console.log(hiking);
    console.log(checkedArr);
    return (

        <>
            <div className='signUpModalBackground_Interested'>
                <div className='signUpModalContainer_Interested'>
                    <AiOutlineArrowLeft
                        className='signUpModalLastBtn_Interested'
                        onClick={() => {
                            interestedModal(false);
                            positionModal(true);
                        }}
                    />
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
                                <div>
                                    <input type="checkbox"
                                        name='爬山'
                                        checked={hiking}
                                        onChange={() => { setHiking(!hiking); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox1" />
                                    <label htmlFor="myCheckbox1">
                                        <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/dog-190056_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>爬山</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='唱歌'
                                        checked={singing}
                                        onChange={() => { setSinging(!singing); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox2" />
                                    <label htmlFor="myCheckbox2">
                                        <img src="https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>唱歌</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='釣魚'
                                        checked={fishing}
                                        onChange={() => { setFishing(!fishing); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox3" />
                                    <label htmlFor="myCheckbox3">
                                        <img src="https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>釣魚</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='下棋'
                                        checked={chess}
                                        onChange={() => { setChess(!chess); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox4" />
                                    <label htmlFor="myCheckbox4">
                                        <img src="https://cdn.pixabay.com/photo/2018/04/16/15/52/chess-3325010_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>下棋</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='體操'
                                        checked={gymnastics}
                                        onChange={() => { setGymnastics(!gymnastics); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox5" />
                                    <label htmlFor="myCheckbox5">
                                        <img src="https://cdn.pixabay.com/photo/2016/02/04/16/52/men-1179452_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>體操</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='舞蹈'
                                        checked={dancing}
                                        onChange={() => { setDancing(!dancing); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox6" />
                                    <label htmlFor="myCheckbox6">
                                        <img src="https://cdn.pixabay.com/photo/2019/06/16/03/08/sunset-4276841_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>舞蹈</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='羽球'
                                        checked={badminton}
                                        onChange={() => { setBadminton(!badminton); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox7" />
                                    <label htmlFor="myCheckbox7">
                                        <img src="https://cdn.pixabay.com/photo/2021/03/02/19/26/snowshoes-6063630_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>羽球</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='美食'
                                        checked={delicacy}
                                        onChange={() => { setDelicacy(!delicacy); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox8" />
                                    <label htmlFor="myCheckbox8">
                                        <img src="https://cdn.pixabay.com/photo/2015/07/19/21/01/turkey-852044_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>美食</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='茶藝'
                                        checked={tea}
                                        onChange={() => { setTea(!tea); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox9" />
                                    <label htmlFor="myCheckbox9">
                                        <img src="https://cdn.pixabay.com/photo/2016/11/29/13/04/tea-1869716_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>茶藝</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name='攝影'
                                        checked={photography}
                                        onChange={() => { setPhotography(!photography); }}
                                        onClick={checkedOnClick}
                                        id="myCheckbox10" />
                                    <label htmlFor="myCheckbox10">
                                        <img src="https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_1280.jpg" alt="" />
                                        <div className='picShadow'>
                                            <div className='picBorder'>
                                            </div>
                                        </div>
                                        <span>攝影</span>
                                    </label>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='buttonCase'>
                <button
                    onClick={btnOnClick}
                    className='intSubmitBtn'>
                    <span className='numm'></span>
                </button>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Sign_up_interested;