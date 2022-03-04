import { useState, useRef, useEffect, useContext } from "react";
import { BsArrowRightSquareFill, BsArrowReturnRight, BsArrow90DegUp } from 'react-icons/bs';
import { BiArrowFromBottom } from 'react-icons/bi';
import { getDownloadURL, ref } from "firebase/storage";
import Axios from 'axios';
import { storage } from "../../../../../firebase";
import Context from '../../../../../context';

const Show_Article_Comments = ({ msg, commentList, setCommentList, lineHeightChange, fetchComments, currentTime }) => {


    // --- 觀看瀏覽資訊 ---

    const viewUserInfo = useContext(Context).viewUserInfo;
    const viewUserImg = useContext(Context).viewUserImg;

    // --- 使用者資訊 --- 

    const currentUser = useContext(Context).userInfo;
    const currentUserImg = useContext(Context).currentUserImg;

    // ----- 子留言的留言換行及綁定功能 -----

    const [commentInput, setCommentInput] = useState('');
    // console.log(cuurentUserImg)
    let commentInputChange = (evt) => {
        setCommentInput(evt.target.value)
        // evt.target.style.height = '0';
        // evt.target.style.height = evt.target.scrollHeight + 'px';
    }

    // ----- 顯示子留言 -----

    let showInput = () => {
        if (msg.son_messageID == 0) {
            return (
                <div className="article-leave-msg">
                    <span><BsArrowReturnRight /></span>
                    <img src={currentUserImg} alt="" />
                    <textarea onChange={commentInputChange} value={commentInput} placeholder={'回覆' + replyState.firstName}></textarea>
                    <button onClick={postSonMsg}><BsArrowRightSquareFill /></button>
                </div>
            )
        }
    }

    let postSonMsg = async () => {
        const insertComment = {
            son_messageID: msg.messageID, // 預設為 null
            articleID: msg.articleID,
            reply_email: currentUser.email,
            datetime: currentTime(),
            content: commentInput
        }
        if (commentInput) {
            setCommentList([insertComment, ...commentList]);
            console.log('post')
            await Axios.post('http://localhost:8000/personal/article/son/comments', insertComment);
            // fetchComments();
            setCommentInput('');
        }

    }

    // ---- Replay Info ----

    const [replyState, setReplyState] = useState({
        firstName: '',
        lastName: '',
        userImg: '',
        userID: ''
    })
    // console.log(msg)

    let replyUser = async () => {
        let result = await Axios.get('http://localhost:8000/personal/comment/user/' + msg.reply_email);
        // console.log(result.data[0]);
        const { id, firstName, lastName, api_selfie } = result.data[0];
        setReplyState({ ...replyState, ['userID']: id, ['lastName']: lastName, ['firstName']: firstName, ['userImg']: api_selfie });
    }
    // console.log(commentState.comments)
    const [commentToggle, setCommentToggle] = useState(false);

    let sonCommentToggle = (evt) => {
        setCommentToggle(!commentToggle)
    }

    // ---- 子留言樣式 ----

    let defaultStyle = { marginLeft: '0px' };
    const [commentStyle, setCommentStyle] = useState(defaultStyle);

    useEffect(() => {
        if (msg.son_messageID !== 0) {
            setCommentStyle({ marginLeft: '20px' })
        } else {
            setCommentStyle({ marginTop: '20px', border: '1px solid #1697d5', paddingBottom: '30px' })
        }
        replyUser();
    }, [])

    // ---- 留言經過的時間 ----

    let timePassed = () => {
        const startDate = new Date(msg.datetime).getTime(),
            nowDate = new Date().getTime(),
            passed = nowDate - startDate;
        const seconds = Math.floor(passed / 1000),
            minutes = Math.floor(passed / (1000 * 60)),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24);
        if (minutes < 60) {
            return minutes + '分鐘前';
        } else if (hours < 23) {
            return hours + '小時前';
        } else {
            return days + '天前';
        }
    }

    return (
        <>
            <div style={commentStyle} className="article-comment-content">
                <div className="comment-detail">
                    <img src={replyState.userImg} alt="" />
                    <div className="detail-text">
                        <h1>{replyState.lastName} {replyState.firstName}</h1>
                        <h6>{timePassed()}</h6>
                    </div>
                </div>
                <div className="comment-main-text">
                    <p dangerouslySetInnerHTML={{ __html: msg.content }} />
                </div>
                {/* 父留言才會顯示的按鈕 */}
                {commentToggle || (msg.son_messageID == 0 ? <button onClick={sonCommentToggle} className="comment-see-more"><BsArrowReturnRight /> 顯示留言</button> : '')}
                {commentToggle && (msg.son_messageID == 0 ? <button onClick={sonCommentToggle} className="comment-see-more"><BiArrowFromBottom /> 隱藏留言</button> : '')}
            </div>
            {
                commentToggle && <div className='article-son-comment' >
                    {/* 對父留言的留言 input */}
                    {showInput()}
                    {/* 顯示所有子留言 */}
                    {commentList.map(sonMsg => msg.messageID === sonMsg.son_messageID ? <Show_Article_Comments msg={sonMsg} commentList={commentList} key={sonMsg.messageID} /> : '')}
                </div>
            }



        </>
    )
}

export default Show_Article_Comments;