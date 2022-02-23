import { useState } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';

import Show_Article_Comments from './Show_Article_Comments';

const Show_Article = ({ article, articleToggle, setArticleToggle }) => {

    const [textareaHeight, setTextareaHeight] = useState(24)

    let showPageClose = () => {
        setArticleToggle(!articleToggle)
    }

    let lineHeightChange = (evt) => {
        const scrollHeight = evt.target.scrollHeight;
        console.log(scrollHeight);
        setTextareaHeight(24);
        setTextareaHeight(scrollHeight);
    }

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
                    <textarea onInput={lineHeightChange} onChange={lineHeightChange} type="text" placeholder='我要留言...' style={{ height: textareaHeight + 'px' }}></textarea>
                    <button>送出</button>
                </div>
                <div className='comment-container'>
                    {
                        article.articleComment ? article.articleComment.map(comments => <Show_Article_Comments comments={comments} key={comments.commentId} />) : <h1>沒有留言</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Show_Article;