import React, { useState } from 'react';
// import check from '../../../images/check.gif'

//載入Components
import Section01ContentInformation from "./components/activityConductSection01ContentInformation";


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
import check from '../../images/check.gif';
import './StyleSheet/activityConduct/activityConduct.css';

const Activity_Conduct = () => {
    const [show, setShow] = useState(false);



    $(function () {

        // 下一頁移動
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
    })


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
                        <Section01ContentInformation />
                        <a href="#section02" className="nextPage"><span></span>下一頁</a>
                    </div>
                </section>
                {/* 照片 */}

                <section id="section02">
                    <div className="section02Area">
                        <div className="leftTitle">
                            <div className="pageTitle"><div className="newPageTitlePoint">●</div> 活動內容及照片</div>

                        </div>
                        {/* 照片 */}
                        <div className="section02Content">
                            {/* <!-- 照片  --> */}

                            <div className="uploadImg">
                                <div className='uploadImgButton'>
                                    <p>上傳照片</p>
                                    <input type="button" onClick="" id="select" value="選擇照片"></input>
                                    <span>(請上傳四張相片)</span>
                                </div>
                                <div>

                                    <input type="file" id="file_input" name="filePath" multiple="multiple" />
                                    <br /><div id="append"></div>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    <a href="#section03" className="nextPage"><span></span>下一頁</a>
                </section>
                {/* 活動內容 */}
                <section id="section03">
                    <div className="section03Area">
                        <div className="leftTitle">
                            <div className="pageTitle"><div className="newPageTitlePoint">●</div> 活動內容</div>

                        </div>
                         {/* 內容 */}
                         <div className="activitySetContent">
                        <p>活動內容</p>
                            <textarea className="activitySetContentTextarea" name="" id="" cols="30" placeholder="介紹你的活動吧" rows="10"></textarea>
                        </div>
                        
                         {/* 注意事項 */}
                         <div className="activitySetNotice">
                        <p>注意事項</p>
                            <textarea className="activitySetNoticeTextarea" name="" id="" cols="30" placeholder="請輸入注意事項..." rows="10"></textarea>
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
                            <Button variant="primary" onClick={() => { setShow(false) }}>
                                確定
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                </section>
            </div>
                {/* 注意事項 */}

                
                    {/* <Button variant="primary" className="submitBtn" onClick={() => { setShow(true) }}>
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
                            <Button variant="primary" onClick={() => { setShow(false) }}>
                                確定
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                {/* </section> */}
                {/* </div> */}
                {/* </form> */}
            


        </>
    );
}


export default Activity_Conduct;