import React, { useContext, useState, useEffect } from 'react';
import context from '../../../context'
//map
import ActivityGoogleMap from '../components/activityGoogleMap01';
//img
import people from '../../../images/activity/teaActivity/people.png'
import axios from 'axios';
import $ from 'jquery';
import { IoCreateSharp,IoCreateOutline } from 'react-icons/io5';
// import xhr from ;
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Modal
} from "react-bootstrap"

const IntroduceNavbarItem = ({ data }) => {

    //導入申請人ID
    let apple = 2;
    const currentUser = useContext(context);
    let userID = currentUser.userInfo.id;
    // console.log(userID);
    const [sendID, setSendID] = React.useState({
        eventID: '', user_gmail: userID
    })
    const [show, setShow] = useState(false);
    const SendInvite = () => {
        // let apple=2;
        if (userID != '') {
            console.log(userID);
            axios.post('http://localhost:8000/event/activityIntroduce/invite', { sendID })
                .then(res => { console.log(res) });
            setShow(true);
        } else {
            alert('請先登入');
            console.log(userID);
        }
    }

    const setNum = () => {
        sendID.eventID = data.eventID
        setSendID(sendID)

        SendInvite();


    }

    //編輯頁面
    let event = data.user_ID;
    let user=userID;

     //判斷登入者與發起人是否為同一人能編輯
    const activityIntroduceEdit = () => {
        if (user == event) {
            //是的話可以編輯
            console.log("ID一樣");
            // alert('')
            $(`#Edit`).removeClass("activityIntroduceEditHide");
        } else {
            //不是的話不能編輯
            console.log('ID不一樣');
            $(`#Edit`).addClass("activityIntroduceEditHide");
        }
    }
    useEffect(() => {
        activityIntroduceEdit()
    }, [event,user])
    //點擊後轉跳至編輯頁面
    const moveToActivityEdit =()=>{
        window.location.href=`http://localhost:3000/ActivityEdit/${data.eventID}`
    }
    return (
        <div className='activityIntroduceNavbar'>
            <div className='navbarBox'> </div>
            <div className="navbarItem">
                <div className='navbarItemFirst'>
                    <h2>基本資訊</h2>
                    
                    <div id='Edit' onClick={moveToActivityEdit} className='activityIntroduceEdit'><IoCreateOutline style={{ color: '#1697d5' }}/><span>修改</span></div>
                </div>
               <h3>主辦人&emsp;
                    <a href={`http://localhost:3000/personal/${data.user_ID}`}><img className='navbarItemImg' src={`${data.api_selfie}`} alt="" /><span className='navbarItemText'>{data.lastName}{data.firstName}</span></a>
                </h3>
                <table>
                    <tr>
                        <td>人數限制&emsp;</td>
                        <td className='navbarItemText'>{data.people_limit}人</td>
                    </tr>
                    <tr>
                        <td>類型&emsp;&emsp;</td>
                        <td className='navbarItemText'>{data.kind}</td>
                    </tr>
                    <tr>
                        <td>室內外&emsp;&emsp;</td>
                        <td className='navbarItemText'>{data.indoor}</td>
                    </tr>
                </table>
                <h3 className="navbarItemTitle">活動地點</h3> <h3 className='navbarItemText'>{data.location}{data.address}</h3>
                <div className="map">
                    <iframe
                        width="300"
                        height="200"
                        // frameborder="0"
                        // style={border=0}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwXTl-ZOVGooxvO0x-1kJNeiKQPCo0img&q=${data.address}`}
                        allowfullscreen>
                    </iframe>
                    {/* <ActivityGoogleMap className="map" /> */}
                </div>

                {/* 送出按鈕 */}
                <div className="apply">
                    <Button variant="primary" onClick={setNum}>
                        報名活動
                    </Button>

                    <Modal show={show} onHide={() => { setShow(true) }}>
                        <Modal.Header closeButton>
                            <Modal.Title>申請參加</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><p>您已詳讀基本資訊並確認參加</p></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { setShow(false) }} >
                                取消關閉
                            </Button>
                            <Button variant="primary" onClick={() => { setShow(false) }} >
                                {/* onClick={SendInvite} */}
                                確認送出
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default IntroduceNavbarItem;