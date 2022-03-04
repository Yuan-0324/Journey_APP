import React, {useContext, useState } from 'react';
import context from'../../../context'
//map
import ActivityGoogleMap from '../components/activityGoogleMap01';
//img
import people from '../../../images/activity/teaActivity/people.png'
import axios from 'axios';

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Modal
} from "react-bootstrap"

const IntroduceNavbarItem = ({data}) => {
    
    //導入申請人ID
    const currentUser = useContext(context);
    let userID = currentUser.userInfo.id;
    
    const [sendID, setSendID]=React.useState({
        eventID:'',user_gmail:userID
    })
   const setNum= () => { 
       sendID.eventID=data.eventID
       setSendID(sendID)
       setShow(true) 
    }
    // console.log(eventIDNum);
    // console.log(typeof eventIDNum);
    // console.log( sendID.eventID);
    // console.log(typeof sendID.eventID);
    const [show, setShow] = useState(false);

    const SendInvite=()=>{
        axios.post('http://localhost:8000/event/activityIntroduce/invite', { sendID })
        .then(res => {console.log(res)})
        setShow(false) 
    }


    return (
        <div className='activityIntroduceNavbar'>
            <div className='navbarBox'> </div>
            <div className="navbarItem">
                <h2>基本資訊</h2>
                <h3>主辦人&emsp;&emsp;
                    <a href=""><img src={people} alt="" /><span>{data.lastName}{data.firstName}</span></a>
                </h3>
                <table>
                    <tr>
                        <td>人數限制&emsp;</td>
                        <td>{data.people_limit}人</td>
                    </tr>
                    <tr>
                        <td>類型&emsp;&emsp;</td>
                        <td>{data.kind}</td>
                    </tr>
                    <tr>
                        <td>室內外&emsp;&emsp;</td>
                        <td>{data.indoor}</td>
                    </tr>
                </table>
                <h3>活動地點 <br />{data.address}</h3>
                <div className="map">
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
                        <Modal.Body><p>歡迎參加</p></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { setShow(false) }}>
                                關閉
                            </Button>
                            <Button variant="primary" onClick={SendInvite }>
                                送出
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
         </div>
    )
}
export default IntroduceNavbarItem;