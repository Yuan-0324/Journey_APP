import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';

import Show_Article_Comments from './Show_Article_Comments';
import context from '../../../../../context';


const Show_Article = ({ article, articleToggle, setArticleToggle }) => {

    // ---- 剛進入的載入資料 ----

    useEffect(()=>{

    },[])

    // ---- 抓取個人資料 ----

    const cuurrentUser = useContext(context).userInfo;

    // ---- 關閉 modal ----

    let showPageClose = () => {
        setArticleToggle(!articleToggle)
    }

    // ---- 留言 textarea 的高度 ----

    const [textareaStyle, setTextareaStyle] = useState({ height: '24px' })

    let lineHeightChange = (evt) => {
        evt.target.style.height = '0';
        evt.target.style.height = evt.target.scrollHeight + 'px';
        setCommentInput(evt.target.value);
    }
    
    // ---- 送出留言 ----

    const [commentInput, setCommentInput] = useState('');

    let currentTime = () => {
        const nowTime = new Date();
        const date = `${nowTime.getFullYear()}-${nowTime.getMonth()}-${nowTime.getDate()}`;
        const time = `${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}`;
        return `${date} ${time}`;
    }

    let fatherCommentSend = (evt) => {
        // ---- post Data ----
        const insertComment = {
            // song_message: 0, // 預設為 null
            articleID: article.articleID,
            reply_email: cuurrentUser.email,
            datetime: currentTime(),
            name: cuurrentUser.firstName,
            content: commentInput
        }

    }
    

    const [commentList, setCommetList] = useState([
        { messageID: 1, son_message: 0, datetime: "2022-2-8 23:40:37", articleID: 2, reply_email: "3@gamil.com", img: 'https://picsum.photos/id/1020/300/300', name: "Jack", content: "笑翻 你是用唬爛產生器吧！我移看就知道" },
        { messageID: 2, son_message: 1, datetime: "2022-2-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/10/300/300', name: "Mike", content: "笑死 一定是啦" },
        { messageID: 3, son_message: 1, datetime: "2022-2-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1040/300/300', name: "Show", content: "我也這樣覺得！" },
        { messageID: 4, son_message: 0, datetime: "2022-2-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1050/300/300', name: "Amber", content: "你一定也用過！大學報告之類的～" },
        { messageID: 5, son_message: 4, datetime: "2022-2-24 02:30:00", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1060/300/300', name: "Frank", content: "你又懂了～？" },
        { messageID: 6, son_message: 4, datetime: "2022-2-14 23:4:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1070/300/300', name: "Winnie", content: "嗨！我也喜歡咖啡喔。可以交流一下嗎？" },
        { messageID: 7, son_message: 4, datetime: "2022-2-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1080/300/300', name: "Justin", content: "好奇哪裡可以喝到好喝的咖啡！" },
        { messageID: 8, son_message: 0, datetime: "2022-2-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/900/300/300', name: "Bill", content: "認同按讚分享～" },
        { messageID: 9, son_message: 1, datetime: "2022-2-24 2:32:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/80/300/300', name: "Eason", content: "他當然懂囉 哈哈 他是唬爛王" }

    ])

    return (
        <div className="personal-article-show">
            <div onClick={(evt) => { evt.stopPropagation() }} className='show-main-container'>
                <h1>文章內容<span onClick={showPageClose} ><AiOutlineCloseCircle /></span></h1>
                <div className='show-title-container'>
                    <img src={article.authorImg}></img>
                    <div className='show-title-name'>
                        <h1>{article.authorName}</h1>
                        <h6>{article.postDate}</h6>
                    </div>
                </div>
                <div className='show-article-content'>
                    <p>
                        {article.articleContent}
                    </p>
                </div>
            </div>
            <div onClick={evt => { evt.stopPropagation() }} className='show-article-message' >
                <h1>留言板</h1>
                <div className='show-article-likes'>

                </div>
                <div className='comment-post'>
                    <textarea value={commentInput} onChange={lineHeightChange} type="text" placeholder='我要留言...' style={textareaStyle}></textarea>
                    <button onClick={fatherCommentSend} >送出</button>
                </div>
                <div className='comment-container'>
                    {
                        commentList.map(msg => {
                            if (msg.son_message === 0) {
                                return <Show_Article_Comments lineHeightChange={lineHeightChange} key={msg.messageID} msg={msg} commentList={commentList} setCommetList={setCommetList} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Show_Article;