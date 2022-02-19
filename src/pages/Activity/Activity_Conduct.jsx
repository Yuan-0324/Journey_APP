import React, { useState } from 'react';
// import check from '../../../images/check.gif'
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

    const [apple, setNum] = useState(1)

    function add() {
        setNum(function (prev) {
            if (prev == 6) {
                return prev;
            } else {
                return prev + 1
            }
        }
        )
    }
    function del() {
        setNum(function (prev) {
            if (prev == 1) {
                return prev;
            } else {
                return prev - 1
            }
        }
        )
    }

    console.log(useState(this));
    return (
        <>
            {/* <div class="test">

                </div> */}

            <div className="activityConductBody">

                <div>
                    <hr className="pageHr" />
                </div>


                {/* 介紹 */}
                <section id="section0">
                    <div className="section0Area">
                        <div className="leftTitle">
                            <div className="joinUs">創立活動</div>
                            <div className="pageTitle"><span className="pageTitlePoint">●</span> 介紹</div>
                            <div>
                                <hr className="page0hr" />
                            </div>
                        </div>
                        <div className="section0Content">
                            <div className="guideNarrative">
                                <p>想辦活動，但總是揪不到人嗎</p>
                                <p>試試JOURNEY的活動功能吧!</p>
                            </div>
                            <div className="guideLvChartArea">

                            </div>
                        </div>
                    </div>
                    <a href="#section01" className="nextPage"><span></span>下一頁</a>
                </section>
                {/* 基本資訊 */}
                {/* <form action="" enctype="multipart/form-data"> */}

                <section id="section01">
                    <div className="section01Area">
                        <div className="leftTitle">
                            <div className="pageTitle">
                                <span className="pageTitlePoint">●</span> 基本資料
                            </div>
                        </div>
                        <div className="section01Content">
                            {/* <!-- 名稱 --> */}
                            <div className="setName">
                                <p>名稱</p>
                                <input type="text" placeholder="    請輸入名稱" />
                            </div>
                            <div className="setIntroduction">
                                {/* <!-- 簡介 --> */}
                                <p>簡介</p>
                                <textarea name="introduction" id="introduction" maxlength="72"
                                    placeholder="   限60字，此簡介會顯示於頁籤，內容可被關鍵字搜尋"></textarea>
                            </div>
                            {/* <!-- 日期 --> */}
                            <div className="date">
                                <p>日期</p>
                                <div className="dateInput">
                                    <input className="day" type="date"
                                        id="date"
                                    />
                                    <p className="timeText">時間</p>
                                    <div className="timeInput">
                                        <input className="timeInput" type="time"
                                            placeholder="" />
                                    </div>
                                </div>

                                {/* <!-- 地點 --> */}
                                <div className="location">
                                    <p>地點</p>
                                    <div className="locationInput">
                                        <input className="day" type="text" placeholder="地址" />
                                    </div>
                                </div>
                                {/* <!-- 人數 --> */}
                                <div className="acceptNum">
                                    <p>人數</p>
                                    <span>
                                        <input type="button" value="-" className="numBtn" onClick={del} />
                                        <input id="people" type="text" value={apple} name="acceptNum" />
                                        <input type="button" value="+" className="numBtn"
                                            onClick={add} />
                                    </span>
                                </div>
                                {/* <!-- 區域 --> */}
                                <div className="place">
                                    <p>區域</p>
                                    <span className="selectPlace">
                                        <label>
                                            <input type="radio" name="place" id="indoor" value="indoor" /> 室內
                                        </label>
                                        <label>
                                            <input type="radio" name="place" id="outdoor" value="outdoor" /> 室外
                                        </label>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <a href="#section02" className="nextPage"><span></span>下一頁</a>
                    </div>
                </section>
                {/* 照片 */}

                <section id="section02">
                    <div class="section02Area">
                        <div class="leftTitle">
                            <div class="pageTitle"><span class="pageTitlePoint">●</span> 活動照片</div>
                            <div>
                                <hr class="page2hr" />
                            </div>
                        </div>
                        <div class="section02Content">
                            {/* <!-- 照片  --> */}
                            <div class="uploadImg">
                                <p>活動照片</p>
                                <div>
                                    <input type="button" onClick="" id="select" value="選擇照片"></input>
                                    <p>(請上傳四張相片)</p>
                                    <input type="file" id="file_input" name="filePath" multiple="multiple" />
                                    <br /><div id="append"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#section03" class="nextPage"><span></span>下一頁</a>
                </section>
                {/* 活動內容 */}
                <section id="section03">
                    <div class="section03Area">
                        <div class="leftTitle">
                            <div class="pageTitle"><span class="pageTitlePoint">●</span> 活動內容</div>
                            <div>
                                <hr class="page3hr" />
                            </div>
                        </div>

                        <div class="">
                            <div class="">
                                <textarea class="section03Content" name="" id="" cols="30" placeholder="介紹你的活動吧" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                    <a href="#section04" class="nextPage"><span></span>下一頁</a>
                </section>
                {/* 注意事項 */}

                <section id="section04">
                    <div class="section04Area">
                        <div class="leftTitle">
                            <div class="pageTitle"><span class="pageTitlePoint">●</span> 注意事項</div>
                            <div>
                                <hr class="page4hr" />
                            </div>
                        </div>
                        <div class="">
                            <textarea class="section04Content" name="" id="" cols="30" placeholder="請與會人員注意事項" rows="10"></textarea>
                        </div>
                    </div>
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
                {/* </div> */}
                {/* </form> */}
            </div>


        </>
    );
}


export default Activity_Conduct;