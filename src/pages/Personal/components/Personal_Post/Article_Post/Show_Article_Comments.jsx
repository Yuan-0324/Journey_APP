import { useState, useRef, useEffect } from "react";
import { BsArrowRightSquareFill, BsArrowReturnRight, BsArrow90DegUp } from 'react-icons/bs';
import { BiArrowFromBottom } from 'react-icons/bi';

const Show_Article_Comments = ({ msg, commentList, setCommetList, lineHeightChange }) => {

    // ---- 子留言的留言功能 ----

    const [commentInput, setCommentInput] = useState('');

    let commentInputChange = (evt) => {
        setCommentInput(evt.target.value)
        evt.target.style.height = '0';
        evt.target.style.height = evt.target.scrollHeight + 'px';
    }

    // -- 顯示子留言 --

    let showInput = () => {
        if (msg.son_message === 0) {
            return (
                <div className="article-leave-msg">
                    <span><BsArrowReturnRight /></span>
                    <img src="https://picsum.photos/id/1020/300/300" alt="" />
                    <textarea onChange={commentInputChange} value={commentInput} placeholder={'回覆' + msg.name}></textarea>
                    <button><BsArrowRightSquareFill /></button>
                </div>
            )
        }
    }

    const [commentToggle, setCommentToggle] = useState(false);

    let sonCommentToggle = (evt) => {
        setCommentToggle(!commentToggle)
    }

    // ---- 子留言樣式 ----

    let defaultStyle = { marginLeft: '0px' };
    const [commentStyle, setCommentStyle] = useState(defaultStyle);

    useEffect(() => {
        if (msg.son_message !== 0) {
            setCommentStyle({ marginLeft: '20px' })
        } else {
            setCommentStyle({ marginTop: '20px', border: '1px solid #1697d5', paddingBottom: '30px' })
        }
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
                    <img src={msg.img} alt="" />
                    <div className="detail-text">
                        <h1>{msg.name}</h1>
                        <h6>{timePassed()}</h6>
                    </div>
                </div>
                <div className="comment-main-text">
                    <p>
                        {msg.content}
                    </p>
                </div>
                {/* 父留言才會顯示的按鈕 */}
                { commentToggle || (msg.son_message === 0 ? <button onClick={sonCommentToggle} className="comment-see-more"><BsArrowReturnRight /> 顯示留言</button> : '')}
                { commentToggle && (msg.son_message === 0 ? <button onClick={sonCommentToggle} className="comment-see-more"><BiArrowFromBottom /> 隱藏留言</button> : '')}
            </div>
            {
                commentToggle && <div className='article-son-comment' >
                    {/* 對父留言的留言 input */}
                    {showInput()}
                    {/* 顯示所有子留言 */}
                    {commentList.map(sonMsg => msg.messageID === sonMsg.son_message ? <Show_Article_Comments msg={sonMsg} commentList={commentList} key={sonMsg.messageID} /> : '')}
                </div>
            }



        </>
    )
}

export default Show_Article_Comments;