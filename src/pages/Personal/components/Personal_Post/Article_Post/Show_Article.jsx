import { useState, useContext, useEffect, useRef } from 'react';
import Axios from 'axios';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart, FaTextHeight } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';

import Show_Article_Comments from './Show_Article_Comments';
import Context from '../../../../../context';


const Show_Article = ({ article, dataTransfer, articleToggle, setArticleToggle, likeList, setLikeList }) => {


    // --- 觀看瀏覽資訊 ---
    
    const viewUserInfo = useContext(Context).viewUserInfo;
    const viewUserImg = useContext(Context).viewUserImg;

    // --- 使用者資訊 --- 

    const currentUser = useContext(Context).userInfo;
    const currentUserImg = useContext(Context).currentUserImg;

    // --- 狀態管理 ---

    const [commentInput, setCommentInput] = useState('');
    const [commentList, setCommentList] = useState([])
    const postState = useRef(false)
    const likeState = useRef(false);

    // ---- 取的文章資訊 ----

    let fetchComments = async () => {
        let result = await Axios.get('http://localhost:8000/personal/article/detail/info/' + article.articleID)
        setCommentList(result.data);
    }

    // ---- 關閉 modal ----

    let showPageClose = () => {
        setArticleToggle(!articleToggle)
    }

    // --- textarea 雙向綁定 ---

    let textareaInputChange = (evt) => {
        setCommentInput(evt.target.value);
    }

    // ---- 送出留言 ----

    let currentTime = () => {
        const nowTime = new Date();
        const date = `${nowTime.getFullYear()}-${(nowTime.getMonth() + 1).toString().length < 2 ? '0' + (nowTime.getMonth() + 1) : (nowTime.getMonth() + 1)}-${nowTime.getDate().toString().length < 2 ? '0' + nowTime.getDate() : nowTime.getDate()}`;
        const time = `${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}`;
        return `${date} ${time}`;
    }

    let fatherCommentSend = async (evt) => {

        // ---- post Data ----

        const insertComment = {
            song_message: 0, // 預設為 null
            articleID: article.articleID,
            reply_email: currentUser.email,
            datetime: currentTime(),
            content: commentInput
        }

        if (commentInput) {
            setCommentList([insertComment, ...commentList]);
            postState.current = true;
            console.log('post')
            await Axios.post('http://localhost:8000/personal/article/father/comments', insertComment);
            fetchComments();
            setCommentInput('');
        }
    }

    // ---- 剛進入的載入資料 ----

    useEffect(() => {
        fetchComments();
        postState.current = false
    }, [])


    return (
        <div className="personal-article-show">
            <div onClick={(evt) => { evt.stopPropagation() }} className='show-main-container'>
                <h1>文章內容<span onClick={showPageClose} ><AiOutlineCloseCircle /></span></h1>
                <div className='show-title-container'>
                    <img src={viewUserImg}></img>
                    <div className='show-title-name'>
                        <h1>{viewUserInfo.lastName} {viewUserInfo.firstName}</h1>
                        <h6>{dataTransfer().day} {dataTransfer().time}</h6>
                    </div>
                    <div className='likeBtn'><FaRegHeart /><span>{likeList.length}</span></div>
                </div>
                <div className='show-article-content'>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </div>
            <div onClick={evt => { evt.stopPropagation() }} className='show-article-message' >
                <h1>留言板</h1>
                <div className='show-article-likes'>

                </div>
                <div className='comment-post'>
                    <div className='comment-headshot'>
                        <img src={currentUserImg} alt="" />
                    </div>
                    <textarea value={commentInput} onChange={textareaInputChange} type="text" placeholder='我要留言...'></textarea>
                    <button onClick={fatherCommentSend} >送出</button>
                </div>
                <div className='comment-container'>
                    {
                        commentList.map(msg => {
                            // console.log(msg)
                            if (msg.son_messageID === 0) {
                                return <Show_Article_Comments  
                                key={msg.messageID} 
                                msg={msg} 
                                commentList={commentList} 
                                setCommentList={setCommentList} 
                                fetchComments={fetchComments} 
                                currentTime={currentTime}
                                />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Show_Article;