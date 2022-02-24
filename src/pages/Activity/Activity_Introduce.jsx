import React, { useState } from 'react';
import $ from 'jquery'

// 照片
import people from "../../images/activity/teaActivity/people.png"
import hiking from '../../images/background/hiking.jpg'
import outside from '../../images/background/outside.png'
import photo from '../../images/background/photo.jpg'
import Piece from '../../images/background/Piece.jpg'
import tea from '../../images/background/tea.jpg'

// import '../../styles/activityIntroduce/activityIntroduce.css'

// ---- 更新 ----

import './StyleSheet/activityIntroduce/activityIntroduce.css';

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Modal
} from "react-bootstrap"

const Activity_Introduce = () => {
    const [show, setShow] = useState(false);
    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true); 

    console.log(useState("初始值"));
    return (
        <>
            <div className='activityIntroduceBody'>


                <div className="wrap">
                    <h1 >品茗午茶手作日
</h1>
                    <pre>2022 / 02 / 22  禮拜二  PM 6:30  台東市</pre>
                    <div className="creatActivity">
                        <a href='http://localhost:3000/ActivityConduct'>來辦個活動吧→</a>
                    </div>
                    {/* <!--活動照片  --> */}
                    <div className="activeImage">
                        <div className="options" >
                            <div className="option active" style={{ backgroundImage: `url(${tea})` }} id='d1'
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}
                            >
                                <div className="shadow">

                                </div>
                                <div className="label">

                                </div>
                            </div>
                            <div className="option" id="d2"
                                style={{ backgroundImage: `url(${Piece})` }}

                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-snowflake"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Oretemauw</div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option o3" id='d3'
                                style={{ backgroundImage: `url(${photo})` }}
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>

                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-tree"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Iteresuselle</div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option o4" id='d4'
                                style={{ backgroundImage: `url(${outside})` }}
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-tint"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Idiefe</div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option o5" id='d5'
                                style={{ backgroundImage: `url(${tea})` }}
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>

                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-sun"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Inatethi</div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- 活動照片底 --> */}
                    {/* <!-- MAIN --> */}
                    <div className="main">
                        {/* <!-- 活動內容 --> */}
                        <div className="container">
                            {/* <!-- 活動介紹 --> */}
                            <div className="introduce">
                                <h2>活動內容</h2>
                                <p>夜唱的存在，令我無法停止對他的思考。朱德說過一句很有意思的話，願與人民同患難，誓拼熱血固神洲。<br />
                                    <br />這句話把我們帶到了一個新的維度去思考這個問題。儘管如此，別人往往卻不這麼想。如果仔細思考夜唱，會發現其中蘊含的深遠意義。
                                    <br /><br />切斯特菲爾德講過一句值得人反覆尋思的話，注意一個人的談話主題，就不難知道他的虛榮心何在，因為每個人總愛談論自認為最擅長的東西。這段話讓我的心境提高了一個層次。
                                </p>
                            </div>
                            <hr />
                            {/* <!-- 注意事項 --> */}
                            <div className="introduce">
                                <h2>注意事項</h2>
                                <ul >
                                    <li>1.禁止開快車</li>
                                    <li>2.禁止亂取別人綽號</li>
                                    <li>3.禁止把全部的零錢找給別人</li>
                                </ul>
                            </div>
                            <br />
                            <hr />
                            {/* <!-- 留言板 --> */}
                            <div className="message ">
                                <h2>留言板</h2>
                                <div className="messageBoard">
                                    {/* <!-- 訪客留言內容 --> */}
                                    <div className="messageList">
                                        <div className="messageListImg">
                                            <img src={people} alt="" />
                                        </div>
                                        <div className="messageContainer">
                                            <div className="messageContainerInformation">
                                                <h3>Eric</h3>
                                                <p>2020/11/09</p>
                                            </div>
                                            <div className="messageContainerText">
                                                <p>Amazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around Taipei</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- 訪客留言內容底 --> */}
                                    {/* <!-- 訪客留言內容 --> */}
                                    <div className="messageList">
                                        <div className="messageListImg">
                                            <img src={people} alt="" />
                                        </div>
                                        <div className="messageContainer">
                                            <div className="messageContainerInformation">
                                                <h3>Eric</h3>
                                                <p>2020/11/09</p>
                                            </div>
                                            <div className="messageContainerText">
                                                <p>Amazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around Taipei</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- 訪客留言內容底 --> */}
                                    {/* <!-- 訪客留言內容 --> */}
                                    <div className="messageList">
                                        <div className="messageListImg">
                                            <img src={people} alt="" />
                                        </div>
                                        <div className="messageContainer">
                                            <div className="messageContainerInformation">
                                                <h3>Eric</h3>
                                                <p>2020/11/09</p>
                                            </div>
                                            <div className="messageContainerText">
                                                <p>Amazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around TaipeiAmazing! Good guide for
                                                    tutoring around Taipei</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- 訪客留言內容底 --> */}

                                </div>

                                <div className="messageFrom">
                                    <div className="from">
                                        <h2></h2>
                                        <textarea placeholder="留個言吧" type="text" rows="8" cols="50" name="messageFromText" id="messageFromText"></textarea>
                                    </div>
                                    <div className="send">
                                        <button value="送出">
                                            送出
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 留言板底 --> */}

                        </div>
                        {/* <!-- 活動內容 --> */}
                        {/* <!-- 活動資訊 --> */}
                        <div className="navbarItem">
                            <h3>主辦人&emsp;&emsp;
                                <a href=""><img src={people} alt="" /><span>吉娃娃</span></a>
                            </h3>
                            <table>
                                <tr>
                                    <td>人數限制&emsp;</td>
                                    <td>13人/20人</td>
                                </tr>
                                <tr>
                                    <td>類型&emsp;&emsp;</td>
                                    <td>唱歌</td>
                                </tr>
                                <tr>
                                    <td>室內外&emsp;&emsp;</td>
                                    <td>室內</td>
                                </tr>
                            </table>
                            <h3>活動地點 <br />408台中市南屯區黎明路二段658號</h3>
                            <div className="map">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16344.680720097409!2d120.63035301261357!3d24.158973512127808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693def29e59835%3A0xa99bf8d338507b68!2z5Lit6I-v6Zu75L-h5a246Zmi6Ie65Lit5omA!5e0!3m2!1szh-TW!2stw!4v1643720910618!5m2!1szh-TW!2stw" width="190" height="190" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                            </div>

                            {/* 送出按鈕 */}
                            <div className="apply">
                                <Button variant="primary" onClick={() => { setShow(true) }}>
                                    報名活動
                                </Button>

                                <Modal show={show} onHide={() => { setShow(true) }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>申請參加</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><textarea name="" id="" cols="50" rows="10" placeholder="版主您好，看完活動簡介後對於這個活動非常感興趣，希望能報名參加您舉辦的活動"></textarea></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => { setShow(false) }}>
                                            關閉
                                        </Button>
                                        <Button variant="primary" onClick={() => { setShow(false) }}>
                                            送出
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


export default Activity_Introduce;