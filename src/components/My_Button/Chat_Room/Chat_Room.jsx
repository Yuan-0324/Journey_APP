import { useState, useEffect, useContext } from 'react'
import { io } from 'socket.io-client';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { BiSearchAlt } from "react-icons/bi";

import './stylesheet/chat.css';

const socket = io('http://localhost:8000');

console.log(localStorage)

const Chat_Room = () => {

    const [chatValue, setChatValue] = useState('')

    const chatInputChange = (evt) => {
        setChatValue(evt.target.value);
    }

    return (<>
        <div className='chat-btn'>
            <IoChatbubblesOutline />
        </div>
        <div className='chat-friend-list'>
            <div className='search'>
                <BiSearchAlt />
            </div>

            {/* --- Friends --- */}
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
            <div className='friends'>

            </div>
        </div>
        <div className='chat-room'>
            <h2 className='friend-name'>徐千翔</h2>
            <div className='chat-container' >

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='right'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='right'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>

                <div className='chat-content' id='left'>
                    <div className='chat'>
                        <p>
                            <pre>
                                今天的雲有點不太安定。
                            </pre>
                        </p>
                    </div>
                </div>
            </div>

            <div className='chat-input'>
                <input onChange={chatInputChange} value={chatValue} type="text" />
            </div>

        </div>
    </>)
}

export default Chat_Room;