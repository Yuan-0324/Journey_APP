import { useState } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';

import Show_Article_Comment from './Show_Article_Comment';


const Show_Article = ({ article, articleToggle, setArticleToggle }) => {

    const [textareaHeight, setTextareaHeight] = useState(24)

    let showPageClose = () => {
        setArticleToggle(!articleToggle)
    }

    let lineHeightChange = (evt) => {
        const scrollHeight = evt.target.scrollHeight;
        setTextareaHeight(24);
        setTextareaHeight(scrollHeight)
    }

    const [comment, setCommet] = useState([
        {messageID: 1, son_message: 0, datetime: "2022-02-13 23:40:37", articleID: 2, reply_email: "3@gamil.com", img: 'https://picsum.photos/id/1020/300/300', name:"jack", content: "笑翻"},
        {messageID: 2, son_message: 1, datetime: "2022-02-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1010/300/300', name:"jack", content: "笑翻"},
        {messageID: 3, son_message: 0, datetime: "2022-02-14 23:40:37", articleID: 2, reply_email: "1@gamil.com", img: 'https://picsum.photos/id/1040/300/300', name:"jack", content: "喜翻"}
    ])

    return (
        <div className="personal-article-show">
            <div onClick={(evt) => { evt.stopPropagation() }} className='show-main-container'>
                <h1>文章內容<span onClick={showPageClose} ><AiOutlineCloseCircle /></span></h1>
                <div className='show-title-container'>
                    <img src='/img/1.jpg'></img>
                    <div className='show-title-name'>
                        <h1>{article.lastName}{article.firstName}</h1>
                        <h6>{article.datetime.substr(0, 10)}</h6>
                    </div>
                </div>
                <div className='show-article-content'>
                    <div dangerouslySetInnerHTML={{__html: article.content}}/>
                </div>
            </div>
            <div onClick={evt => { evt.stopPropagation() }} className='show-article-message' >
                <h1>留言板</h1>
                <div className='show-article-likes'>

                </div>
                <div className='comment-post'>
                    <textarea onInput={lineHeightChange} onChange={lineHeightChange} type="text" placeholder='我要留言...' style={{ height: textareaHeight + 'px' }}></textarea>
                    <button>送出</button>
                </div>
                <div className='comment-container'>
                    {
                        article.articleComment ? article.articleComment.map(comments => <Show_Article_Comment comments={comments} key={comments.commentId} />) : <h1>沒有留言</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Show_Article;