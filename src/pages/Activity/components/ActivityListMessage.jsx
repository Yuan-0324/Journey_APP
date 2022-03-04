import React, { useState } from 'react';


import people from '../../../images/activity/teaActivity/people.png';


const ActivityListMessage = () => {
    return (
        <>
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
                                
                            </div>
                            <div className="messageContainerText">
                                <p>Amazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around Taipei</p>
                                <br />
                                <p>2020/11/09</p>
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
                               
                            </div>
                            <div className="messageContainerText">
                                <p>Amazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around Taipei</p>
                                <br />
                                <p>2020/11/09</p>
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
                                
                            </div>
                            <div className="messageContainerText">
                                <p>Amazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around TaipeiAmazing! Good guide for
                                    tutoring around Taipei</p>
                                <br />
                                <p>2020/11/09</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 訪客留言內容底 --> */}

                </div>

                <div className="messageFrom">
                    <div className='messageFromImg'>
                    <img src={people} alt="" />
                    </div>
                    <div className="from">
                        <textarea placeholder="留個言吧" type="text" rows="3" cols="80" name="messageFromText" id="messageFromText"></textarea>
                    </div>
                    <div className="send">
                        <a >
                            送出
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- 留言板底 --> */}
        </>
    )
}
export default ActivityListMessage;