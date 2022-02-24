import { useState } from "react";

const Show_Article_Comments = ({ msg, commentList, setCommetList }) => {
    const [timePass, setTimePass] = useState(0);
    let showMoreMessage = () => {

    }

    let sonMsg = () => {
        commentList.map(sonMsg => {
            if (msg.messageID === sonMsg.son_message) {
                return <Show_Article_Comments msg={sonMsg} commentList={commentList} key={sonMsg.messageID} />;
            }
        })
    }

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
            <div className="article-comment-content" onClick={showMoreMessage}>
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
            </div>
            <div className='article-son-comment' >
              

                {
                    commentList.map(sonMsg => msg.messageID === sonMsg.son_message? <Show_Article_Comments msg={sonMsg} commentList={commentList} key={sonMsg.messageID} /> : '')
                }

            </div>
        

        </>
    )
}

export default Show_Article_Comments;