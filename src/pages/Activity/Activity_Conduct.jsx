import React, { useContext, useState } from 'react';
import axios from 'axios';
// import context from '../../context';
import context from '../../context';
// import check from '../../../images/check.gif';

//載入Components
import Section01ContentInformation from "./components/activityConductSection01ContentInformation";
import ActivityConductImages from './components/activityConductImages/activityConductImages';

import $ from 'jquery'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Modal
} from "react-bootstrap"

// ---- 更改 ----
import check from '../../images/Success-unscreen.gif';
import './StyleSheet/activityConduct/activityConduct.css';

const Activity_Conduct = () => {

    //導入使用者ID
    const currentUser = useContext(context);
    let userID = currentUser.userInfo.id;
//    console.log(userID);             //9
//    console.log(typeof userID);      //num

    //寫入後端
    const [postNewEvent, setPostNewEvent] = React.useState(
        {
            post_email:'' , title: '', introduce: "", date: '', time: '',location:'', address: "", kind: '', Num:1, indoor: '',content:'',precaution:'',post_datetime:''
        }
    )
    
    // console.log(typeof postNewEvent.post_email);  //str
    // console.log(postNewEvent.post_email);         // null
    // console.log(postNewEvent.Num);                //4
    // console.log(typeof postNewEvent.Num);         //num
    const [postNowEventNum, setNowEventNum]=React.useState()
    
    // 寫入email
    const setPostUserID=()=>{
        postNewEvent.post_email=userID;
        setPostNewEvent(postNewEvent);
        console.log(postNewEvent.post_email);
    }
        
    const doPostAndPop = () => {

        axios.post('http://localhost:8000/event/conduct', { postNewEvent })
            .then(res => {let num=res.data;console.log(res.data);setNowEventNum(num)})
        // setShow(true)
    }
 
    console.log(postNowEventNum);
    // console.log( postNowEventNum);
    // let postEventNum=postNowEventNum;
    // console.log(postEventNum);
    // console.log(typeof postEventNum);
    // console.log(postActivityInvite.apply_member_email);
    //後端路徑
    // console.log(postNowEventNum+100);
    //顯示成功畫面
    const [show, setShow] = useState(false);
    $(function () {
        // 下一頁移動
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
    })

    //上傳內容
    const inputContent = (e) => {
        postNewEvent.post_email=userID
        postNewEvent.content = e.target.value
        setPostNewEvent(postNewEvent);
        // console.log(typeof e.target.value);
        console.log(postNewEvent.post_email);
    }
    //上傳注意事項
    const inputPrecaution =(e)=>{
        postNewEvent.precaution=e.target.value;
        setPostNewEvent(postNewEvent);
        // console.log(typeof e.target.value);
    }
    //寫入創辦活動時間
    const inputPostTime = (e)=>{
        var today=new Date()
        postNewEvent.post_datetime=today;
        setPostNewEvent(postNewEvent);
        // console.log(today);
    }
    //創辦成功後轉跳
    const Conduct=()=>{
        setShow(false)

    }  
    
    //上傳照片

    // console.log(useState(this));
    return (
        <>

            <div className="activityConductBody">
                <div>
                    <hr className="pageHr" />
                </div>


                {/* 介紹 */}

                {/* 基本資訊 */}
                {/* <form action="" enctype="multipart/form-data"> */}

                <section id="section01">
                    <div className="section01Area">
                        <div className="leftTitle">
                            <div className="pageTitle">
                                <div className="newPageTitlePoint">●</div> 基本資料
                            </div>
                        </div>
                        <Section01ContentInformation postNewEvent={postNewEvent} setPostNewEvent={setPostNewEvent} />
                        <a onClick={setPostUserID} href="#section02" className="nextPage"><span></span>下一頁</a>
                    </div>
                </section>
             

                <section id="section02">
                    <div className="section02Area">
                        <div className="leftTitle">
                            <div className="pageTitle"><div className="newPageTitlePoint">●</div> 活動內容</div>

                        </div>
                         {/* 活動內容 */}
                        <div className="activitySetContent">
                         {/* 內容 */}
                            <p>活動內容</p>
                            <textarea  onChange={inputContent} className="activitySetContentTextarea" name="" id="" cols="30" placeholder="介紹你的活動吧" rows="10"></textarea>
                        </div>

                        {/* 注意事項 */}
                        <div className="activitySetNotice">
                            <p>注意事項</p>
                            <textarea  onChange={inputPrecaution} className="activitySetNoticeTextarea" name="" id="" cols="30" placeholder="請輸入注意事項..." rows="10"></textarea>
                        </div>
                    </div>
                    <a href="#section03" onClick={doPostAndPop} className="nextPage"><span></span>下一頁</a>
                </section>
               
                <section id="section03">
                    <div className="section03Area">
                        <div className="leftTitle">
                            <div className="pageTitle"><div className="newPageTitlePoint">●</div> 活動照片</div>
                        </div>             
                         {/* 照片 */}
                        <div className="ActivityConductImagesContent">
                            <ActivityConductImages data={postNowEventNum} />
                        </div>
                    </div>
                    {/* <a href="#section04" className="nextPage"><span></span></a> */}
                    <Button variant="primary" className="submitBtn" onClick={() => { setShow(true) }}>
                        創立活動
                    </Button>
                    <Modal show={show} onHide={() => { setShow(true) }}>
                        <Modal.Header >
                            <Modal.Title>創立成功</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={check} alt="" width="482px" className='imgCheck' />
                        </Modal.Body>
                        <Modal.Footer>
                        {/* onClick={() => {setShow(false) }} */}
                        <a href="http://localhost:3000/Event">
                            <Button variant="primary" >
                                確定
                            </Button>
                            </a>
                        </Modal.Footer>
                    </Modal>

                </section>
            </div>
            {/* 注意事項 */}

            {/* </section> */}
            {/* </div> */}
            {/* </form> */}



        </>
    );
}


export default Activity_Conduct;