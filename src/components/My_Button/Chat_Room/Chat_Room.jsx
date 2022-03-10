import { useState, useEffect, useContext, useRef } from 'react'
import { io } from 'socket.io-client';
import { IoChatbubblesOutline, IoMdChatboxes } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import { BiSearchAlt, BiSmile } from "react-icons/bi";
import Axios from 'axios';
import Context from '../../../context';
import moment from 'moment';
import './stylesheet/chat.css';
import { message } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import { async } from '@firebase/util';

let socket;
if (localStorage.getItem('id')) {
    socket = io('http://localhost:8000');
}

const Chat_Room = () => {

    // --- 狀態變數 ---
    const currentUser = useContext(Context).userInfo;
    const [receiver, setReceiver] = useState({});
    const [userChatInfo, setUserChatInfo] = useState({});
    const [chatValue, setChatValue] = useState('');
    const [toggleState, setToggleState] = useState({
        chatRoomToggle: false,
        friendListClass: false
    });
    const [users, setUsers] = useState({});
    const [groupMsg, setGroupMsg] = useState({});
    const msgReceive = useRef('');
    const [historyChat, setHistoryChat] = useState('');

    // emoji
    const smile = useRef(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="128px" height="128px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
                                <g>
                                    <circle style="fill:#FFC200;" cx="64" cy="64" r="64"/>
                                    <path style="fill:#F2B800;" d="M64,0c-1.685,0-3.348,0.085-5,0.213C92.008,2.766,118,30.337,118,64s-25.992,61.232-59,63.787
                                        c1.652,0.127,3.315,0.213,5,0.213c35.348,0,64-28.652,64-64C128,28.652,99.348,0,64,0z"/>
                                    <path style="fill:#F2B800;" d="M65,114c-25.729,0-49.093-21.93-49.999-46.928c-0.02-0.543,0.182-1.07,0.559-1.461
                                        S16.456,65,16.999,65h95c1.076,0,1.959,0.852,1.999,1.928c0.4,11.055-4.307,22.516-12.917,31.442C91.502,108.303,78.352,114,65,114z"/>
                                    <path style="fill:#F5F5F5;" d="M112,67c0.833,23-21.16,45-47,45c-25.829,0-47.167-22-48-45H112z"/>
                                    <g>
                                        <path style="fill:#263740;" d="M52,42c-1.657,0-3-1.343-3-3c0-4.962-4.038-9-9-9s-9,4.038-9,9c0,1.657-1.343,3-3,3s-3-1.343-3-3
                                            c0-8.271,6.729-15,15-15s15,6.729,15,15C55,40.657,53.657,42,52,42z"/>
                                        <path style="fill:#263740;" d="M102,42c-1.657,0-3-1.343-3-3c0-4.962-4.038-9-9-9s-9,4.038-9,9c0,1.657-1.343,3-3,3s-3-1.343-3-3
                                            c0-8.271,6.729-15,15-15s15,6.729,15,15C105,40.657,103.657,42,102,42z"/>
                                    </g>
                                        <path style="fill:#E6E6E6;" d="M103.512,92.42c0.95-1.268,1.83-2.576,2.637-3.92h-0.637V67h-2v21.5h-18V67h-2v21.5h-18V67h-2v21.5
                                            h-18V67h-2v21.5h-18V67h-2v20.967c0.627,1.036,1.294,2.051,2,3.042v-0.51h18v16.171c0.658,0.341,1.325,0.667,2,0.979V90.499h18
                                            v21.46c0.496,0.016,0.989,0.04,1.488,0.04c0.171,0,0.341-0.013,0.512-0.015V90.5h18v17.635c0.674-0.29,1.342-0.592,2-0.912V90.5h18V92.42z"/>
                                </g>
                        </svg>`);
    const heart = useRef(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#CB4042' d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`);

    const like = useRef(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="128px" height="128px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
                            <g>
                            <circle style="fill:#FFC200;" cx="62" cy="62" r="62"/>
                            <path style="fill:#F2B800;" d="M62,0c-1.686,0-3.35,0.086-5,0.219C88.898,2.767,114,29.444,114,62s-25.102,59.233-57,61.781
                                c1.65,0.133,3.314,0.219,5,0.219c34.24,0,62-27.758,62-62S96.24,0,62,0z"/>
                            <path style="fill:#F2B800;" d="M30.258,88.232c-1.056-1.191-2.572-1.875-4.165-1.875c-1.362,0-2.673,0.498-3.692,1.401
                                c-1.11,0.986-1.771,2.347-1.861,3.83c-0.089,1.484,0.406,2.915,1.393,4.025c10.063,11.352,24.668,17.862,40.069,17.862v-11.131
                                C49.779,102.348,38.211,97.203,30.258,88.232z"/>
                            <path style="fill:#F5F5F5;" d="M28.175,90.078c-1.019-1.15-2.776-1.257-3.928-0.236c-1.149,1.021-1.255,2.778-0.235,3.928
                                c9.536,10.758,23.383,16.927,37.988,16.927v-5.564C48.984,105.131,36.656,99.645,28.175,90.078z"/>
                            <g>
                                <path style="fill:#263740;" d="M49,49c-1.656,0-3-1.344-3-3c0-4.963-4.037-9-9-9s-9,4.037-9,9c0,1.656-1.344,3-3,3s-3-1.344-3-3
                                    c0-8.271,6.729-15,15-15s15,6.729,15,15C52,47.656,50.656,49,49,49z"/>
                                <path style="fill:#263740;" d="M99,49c-1.656,0-3-1.344-3-3c0-4.963-4.037-9-9-9s-9,4.037-9,9c0,1.656-1.344,3-3,3s-3-1.344-3-3
                                    c0-8.271,6.729-15,15-15s15,6.729,15,15C102,47.656,100.656,49,99,49z"/>
                            </g>
                            <g>
                                <path style="fill:#455C91;" d="M66,128c-4.411,0-8-3.504-8-7.915v-27c0-4.411,3.589-8,8-8h8.973c1.549,0,3.055,0.46,4.334,1.288
                                    c0.299-0.69,0.594-1.513,0.957-2.533c0.807-2.283,1.807-5.103,3.736-8.764v-9.555l1.109-1.159C87.152,62.225,89.975,61,92.85,61
                                    c3.424,0,6.523,1.681,8.504,4.609c1.896,2.805,3.524,7.859,1.222,16.381H118c4.729,0,10,4.238,10,10.318
                                    c0,2.43-0.367,4.415-1.092,5.924c0.67,2.715,0.512,6.43-1.819,9.405c0.019,3.971-1.147,6.937-3.546,9.021
                                    c-0.309,2.263-1.326,4.507-2.87,6.274c-1.772,2.032-4.021,3.15-6.325,3.15H81.854c-0.508,0-1-0.039-1.47-0.117
                                    C78.918,127.326,77.035,128,75,128H66z"/>
                                <path style="fill:#F5F5F5;" d="M78.973,92.984c5.155-3.62,3.871-7.52,9.027-16.899c0-4.477,0-6.552,0-8.958
                                    c5.157-5.389,17-1.042,9,18.863h21c2.52,0,6,2.447,6,6.318c0,2.694-0.584,4.931-1.684,5.183c1.1,1.65,1.813,6.078-1.299,8.621
                                    c0.262,3.228-0.061,6.65-3.424,8.43c0.443,3.231-2.267,7.543-5.246,7.543c-2.981,0-28.291,0-30.496,0s-2.881-1.027-2.881-2.739
                                    V92.984H78.973z"/>
                                <g>
                                    <path style="fill:#E6E6E6;" d="M92.027,85.99H97c6.943-17.275-1.059-22.826-6.665-20.472
                                        C94.314,67.28,96.993,73.637,92.027,85.99z"/>
                                    <path style="fill:#E6E6E6;" d="M124,92.31c0-3.872-3.48-6.318-6-6.318h-4.973c2.52,0,6,2.447,6,6.318
                                        c0,2.694-0.584,4.931-1.682,5.183c1.098,1.65,1.813,6.078-1.3,8.621c0.263,3.228-0.062,6.65-3.424,8.43
                                        c0.442,3.232-2.267,7.543-5.247,7.543c2.453,0,4.294,0,4.973,0c2.979,0,5.689-4.311,5.246-7.543
                                        c3.363-1.778,3.686-5.202,3.424-8.43c3.112-2.543,2.397-6.971,1.299-8.621C123.416,97.239,124,95.004,124,92.31z"/>
                                </g>
                                <path style="fill:#6E7FB3;" d="M78.973,120.085c0,2.2-1.801,4-4,4H66c-2.2,0-4-1.8-4-4v-27c0-2.2,1.8-4,4-4h8.973
                                    c2.199,0,4,1.8,4,4V120.085z"/>
                            </g>
                            </g>
                        </svg>`);
    const cry = useRef(`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="128px" height="128px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
                            <g>
                            <circle style="fill:#FFC200;" cx="64" cy="64" r="64"/>
                                <path style="fill:#F2B800;" d="M64,0c-1.685,0-3.348,0.085-5,0.213C92.007,2.767,118,30.337,118,64
                                    c0,33.664-25.993,61.232-59,63.787c1.652,0.128,3.315,0.213,5,0.213c35.348,0,64-28.652,64-64C128,28.652,99.348,0,64,0z"/>
                                <path style="fill:#F2B800;" d="M63.962,73c15.401,0,30.007,6.511,40.07,17.863c0.985,1.109,1.479,2.541,1.392,4.025
                                    c-0.09,1.483-0.751,2.844-1.861,3.829c-1.021,0.904-2.33,1.402-3.692,1.402c-1.593,0-3.108-0.685-4.165-1.875
                                    c-7.954-8.97-19.523-14.115-31.743-14.115c-12.188,0-23.733,5.117-31.674,14.039c-1.057,1.187-2.572,1.866-4.159,1.866
                                    c-1.364,0-2.678-0.5-3.698-1.408c-1.11-0.988-1.769-2.35-1.855-3.833c-0.088-1.483,0.41-2.914,1.397-4.024
                                    C34.023,79.477,48.6,73,63.962,73z"/>
                                <path style="fill:#F5F5F5;" d="M63.962,75.782c14.606,0,28.452,6.169,37.988,16.926c1.021,1.149,0.913,2.908-0.235,3.928
                                    c-1.15,1.021-2.908,0.914-3.928-0.235c-8.48-9.566-20.811-15.053-33.825-15.053c-12.983,0-25.285,5.457-33.753,14.973
                                    c-1.021,1.146-2.779,1.25-3.928,0.229c-1.148-1.021-1.251-2.781-0.229-3.929C35.575,81.919,49.392,75.782,63.962,75.782z"/>
                                <g>
                                    <path style="fill:#263740;" d="M51,37c-1.657,0-3,1.343-3,3c0,4.962-4.038,9-9,9s-9-4.038-9-9c0-1.657-1.343-3-3-3s-3,1.343-3,3
                                        c0,8.271,6.729,15,15,15s15-6.729,15-15C54,38.343,52.657,37,51,37z"/>
                                    <path style="fill:#263740;" d="M101,37c-1.657,0-3,1.343-3,3c0,4.962-4.038,9-9,9s-9-4.038-9-9c0-1.657-1.343-3-3-3s-3,1.343-3,3
                                        c0,8.271,6.729,15,15,15s15-6.729,15-15C104,38.343,102.657,37,101,37z"/>
                                </g>
                                <path style="fill:#91D2F2;" d="M105,64c0,1.657-1.343,3-3,3s-3-1.343-3-3s1.343-6,3-6S105,62.343,105,64z"/>
                                <path style="fill:#91D2F2;" d="M28,70c0,1.657-1.343,3-3,3s-3-1.343-3-3s1.343-6,3-6S28,68.343,28,70z"/>
                                <path style="fill:#91D2F2;" d="M109,78c0,1.657-1.343,3-3,3s-3-1.343-3-3s1.343-6,3-6S109,76.343,109,78z"/>
                            </g>
                        </svg>`)


    // --- 取得資料 ---
    const fetchData = async () => {
        let result = await Axios.get('http://localhost:8000/personal/' + localStorage.getItem('id'));
        setUserChatInfo(result.data);
        if (result.data.email) {
            socket.emit('new_user', result.data);
        } else {
            socket.emit('new_user', { email: 'Guest@journey.com', firstName: 'Guest', lastName: 'Journey', id: new Date().getTime(), api_selfie: 'https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/default%2Favatar-01.png?alt=media&token=6694a970-df96-4546-9919-f6b7f35df7f8' })
        }

    }

    // --- 將兩個 email 做排列 當房間名字 ---
    const sortNames = (username1, username2) => {
        return [username1, username2].sort().join('-');
    }

    // --- 聊天對象 ---
    const chatTarget = async (username) => {
        setReceiver(username);
        msgReceive.current = username;

        let result = await Axios.get('http://localhost:8000/personal/chat/room/history/' + sortNames(username.email, currentUser.email));
        setHistoryChat(result.data);
    }

    // --- Chat Input 綁定 ---
    const chatInputChange = (evt) => {
        setChatValue(evt.target.value);
    }

    // --- 顯示出聊天留言 ---
    const messages = groupMsg ? groupMsg[sortNames(currentUser.email, receiver.email)] : [];

    // --- 按下送出按鈕 ---
    const msgSend = async (evt) => {
        evt.preventDefault()

        if (chatValue) {

            const data = {
                sender: currentUser,
                receiver,
                message: chatValue
            }

            // --- 利用 socket 送到後端 ---
            socket.emit("send_message", data);
            console.log(chatValue)

            // --- 創造聊天室 ---
            const key = sortNames(currentUser.email, receiver.email);
            const tempGroup = { ...groupMsg }

            // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
            if (key in tempGroup) {
                tempGroup[key] = [...tempGroup[key], data];
            } else {
                tempGroup[key] = [data];
            }

            const postInfo = {
                sender: currentUser.email,
                receiver: receiver.email,
                message: chatValue,
                room_num: key,
            };
            await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
            setGroupMsg({ ...tempGroup });
            setChatValue('')
        }
    }

    // 按 Enter 送出
    const sendByKey = async (evt) => {
        // console.log(evt)
        if (chatValue == '\n\n') {
            setChatValue('');
        }
        if (chatValue !== "" && evt.code === 'Enter') {
            const data = {
                sender: currentUser,
                receiver,
                message: chatValue
            }

            // --- 利用 socket 送到後端 ---
            socket.emit("send_message", data);
            console.log(chatValue)

            // --- 創造聊天室 ---
            const key = sortNames(currentUser.email, receiver.email);
            const tempGroup = { ...groupMsg }

            // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
            if (key in tempGroup) {
                tempGroup[key] = [...tempGroup[key], data];
            } else {
                tempGroup[key] = [data];
            }

            const postInfo = {
                sender: currentUser.email,
                receiver: receiver.email,
                message: chatValue,
                room_num: key,
            };
            await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
            setGroupMsg({ ...tempGroup });
            setChatValue('')
        }
    }

    // 送出 愛心
    const sendHeart = async () => {
        const data = {
            sender: currentUser,
            receiver,
            message: heart.current
        }
        // --- 利用 socket 送到後端 ---
        socket.emit("send_message", data);
        console.log(chatValue)
        // --- 創造聊天室 ---
        const key = sortNames(currentUser.email, receiver.email);
        const tempGroup = { ...groupMsg }
        // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
        if (key in tempGroup) {
            tempGroup[key] = [...tempGroup[key], data];
        } else {
            tempGroup[key] = [data];
        }
        const postInfo = {
            sender: currentUser.email,
            receiver: receiver.email,
            message: heart.current,
            room_num: key,
        };
        await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
        setGroupMsg({ ...tempGroup });
    }

    // 送出 笑臉
    const sendSmile = async () => {
        const data = {
            sender: currentUser,
            receiver,
            message: smile.current
        }
        // --- 利用 socket 送到後端 ---
        socket.emit("send_message", data);
        console.log(chatValue)
        // --- 創造聊天室 ---
        const key = sortNames(currentUser.email, receiver.email);
        const tempGroup = { ...groupMsg }
        // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
        if (key in tempGroup) {
            tempGroup[key] = [...tempGroup[key], data];
        } else {
            tempGroup[key] = [data];
        }
        const postInfo = {
            sender: currentUser.email,
            receiver: receiver.email,
            message: smile.current,
            room_num: key,
        };
        await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
        setGroupMsg({ ...tempGroup });
    }

    // 送出 生氣臉
    const sendLike = async () => {
        const data = {
            sender: currentUser,
            receiver,
            message: like.current
        }
        // --- 利用 socket 送到後端 ---
        socket.emit("send_message", data);
        console.log(chatValue)
        // --- 創造聊天室 ---
        const key = sortNames(currentUser.email, receiver.email);
        const tempGroup = { ...groupMsg }
        // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
        if (key in tempGroup) {
            tempGroup[key] = [...tempGroup[key], data];
        } else {
            tempGroup[key] = [data];
        }
        const postInfo = {
            sender: currentUser.email,
            receiver: receiver.email,
            message: like.current,
            room_num: key,
        };
        await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
        setGroupMsg({ ...tempGroup });
    }
    // 送出 哭臉 
    const sendCry = async () => {
        const data = {
            sender: currentUser,
            receiver,
            message: cry.current
        }
        // --- 利用 socket 送到後端 ---
        socket.emit("send_message", data);
        console.log(chatValue)
        // --- 創造聊天室 ---
        const key = sortNames(currentUser.email, receiver.email);
        const tempGroup = { ...groupMsg }
        // --- 如果聊天室存在，聊天記錄 push 進去，如果沒有創一個。
        if (key in tempGroup) {
            tempGroup[key] = [...tempGroup[key], data];
        } else {
            tempGroup[key] = [data];
        }
        const postInfo = {
            sender: currentUser.email,
            receiver: receiver.email,
            message: cry.current,
            room_num: key,
        };
        await Axios.post('http://localhost:8000/personal/chat/room/add', postInfo);
        setGroupMsg({ ...tempGroup });
    }

    // --- 按鈕 toggle ---
    const chatToggleBtn = () => {
        setToggleState({ ...toggleState, ['friendListClass']: !toggleState.friendListClass, ['chatRoomToggle']: false })

    }

    const roomToggleBtn = () => {
        setToggleState({ ...toggleState, ['chatRoomToggle']: !toggleState.chatRoomToggle })
    }


    // --- 初次渲染 ---
    useEffect(() => {
        fetchData();
        // --- 做 Socket.io 的連線 ---
        if (socket) {
            socket.on('all_user', user => {
                setUsers(user);
            });

            socket.on("new_message", (msg) => {

                setGroupMsg(prev => {
                    const prevMsg = { ...prev };
                    const key = sortNames(msg.sender.email, msg.receiver.email);
                    if (key in prevMsg) {
                        prevMsg[key] = [...prevMsg[key], msg];
                    } else {
                        prevMsg[key] = [msg];
                    }
                    return { ...prevMsg };
                })
            })

        }
    }, []);

    return (<>
        <div onClick={chatToggleBtn} className='chat-btn'>
            <IoChatbubblesOutline />
        </div>
        <div className={toggleState.friendListClass ? 'chat-friend-list fade-in' : 'chat-friend-list'} >
            <div className='search'>
                <BiSearchAlt />
            </div>
            {/* --- Friends --- */}
            {
                // --- 不顯示自己 ---
                users && Object.values(users).map(user => currentUser.email !== user.email ?
                    // --- 是否有追蹤他 ---
                    // user.followers.find(follow => follow.followed_email == currentUser.email) ?
                    // --- 好友清單 ---
                    <div key={user.email}
                        onClick={() => {
                            roomToggleBtn();
                            chatTarget(user)
                        }}
                        style={{
                            background: `url("${user.api_selfie}")`,
                            backgroundSize: 'cover'
                        }}
                        className='friends'>
                    </div> : "" /*: ""*/)
            }
        </div>
        {/* 聊天視窗 */}
        {
            toggleState.chatRoomToggle && <div className='chat-room'>
                <img src={receiver.api_selfie} alt="" />
                <h2 className='friend-name'>{receiver.lastName}{receiver.firstName}</h2>
                <div className='chat-container' >
                    <ScrollToBottom className='messaage-container'>
                        {/* 資料庫撈的歷史紀錄 */}
                        {
                            historyChat.length > 0 ? historyChat.map(chats => <div className='chat-content' id={chats.sender == currentUser.email ? 'right' : 'left'}>
                                <div className='chat'>
                                    <p>
                                        {
                                            <div dangerouslySetInnerHTML={{ __html: chats.message }} />
                                        }
                                    </p>
                                </div>
                            </div>) : ''
                        }
                        {/* 即時用 socket.io 顯示的內容 */}
                        {
                            messages && messages.length > 0 ? messages.map((msg, idx) => <div className='chat-content' id={msg.sender.email == currentUser.email ? 'right' : 'left'}>
                                <div className='chat'>
                                    <p>
                                        {
                                            <div dangerouslySetInnerHTML={{ __html: msg.message }} />
                                        }
                                    </p>
                                </div>
                            </div>) : ''
                        }
                    </ScrollToBottom>
                </div>
                <form onSubmit={msgSend} className='chat-input'>
                    <textarea onKeyDown={sendByKey} onChange={chatInputChange} className={chatValue ? 'changed' : ''} value={chatValue} type="text" />
                    <input type="submit" value='送出' />
                    <div >
                        <div className={chatValue?'emoji-set fade-out':'emoji-set'} onClick={sendHeart} dangerouslySetInnerHTML={{ __html: heart.current }} />
                        <div className={chatValue?'emoji-set fade-out':'emoji-set'} onClick={sendSmile} dangerouslySetInnerHTML={{ __html: smile.current }} />
                        <div className={chatValue?'emoji-set fade-out':'emoji-set'} onClick={sendLike} dangerouslySetInnerHTML={{ __html: like.current }} />
                        <div className={chatValue?'emoji-set fade-out':'emoji-set'} onClick={sendCry} dangerouslySetInnerHTML={{ __html: cry.current }} />
                    </div>
                </form>

            </div>
        }

    </>)
}

export default Chat_Room;