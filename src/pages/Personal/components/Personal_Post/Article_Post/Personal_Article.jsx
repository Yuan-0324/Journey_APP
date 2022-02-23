import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import Edit_Article from './Edit_Article';
import Show_Article from './Show_Article';


const Personal_Article = ({ article }) => {

    const [commentToggle, setCommentToggle] = useState(false);
    const [likeToggle, setLikeToggle] = useState(false);
    const [editPageToggle, setEditPageToggle] = useState(false);
    const [articleToggle, setArticleToggle] = useState(false);

    let commentPost = (evt) => {
        setCommentToggle(!commentToggle);
    }

    let likeCheck = () => {
        setLikeToggle(!likeToggle)
    }
    
    let showEditPage = () => {
        setEditPageToggle(!editPageToggle);
    }

    let showArticlePage = () => {
        setArticleToggle(!articleToggle)
    }

    // 偵測 edit page 是否開啟
    useEffect(() => {
        if (editPageToggle || articleToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [editPageToggle, articleToggle])


    return ( 
        <>
            {editPageToggle && <Edit_Article article={article} editPageToggle={editPageToggle} setEditPageToggle={setEditPageToggle} />}
            {articleToggle && <Show_Article article={article} articleToggle={articleToggle} setArticleToggle={setArticleToggle} /> }
            <div className='article-container'>
                <div className='article-title'>
                    <img src={ article.authorImg } alt=""></img>
                    <div className='title-content'>
                        <h1>{ article.authorName }</h1>
                        <h6>{ article.postDate }</h6>
                    </div>
                    <div className='title-edit' onClick={showEditPage}><BsThreeDots /></div>
                </div>
                <div className="article-body">
                    <h5>{ article.articleTitle }</h5>
                    <p>{ article.articleContent }</p>
                    {/* <div style={{width: '500px', height: '200px', marginBottom: '5px'}}>
                        <img src="https://picsum.photos/id/1020/400/200" alt="" />
                    </div> */}
                    <div onClick={showArticlePage} className='article-see-more'><span>More<FaCaretDown /></span></div>
                </div>
                <div className='article-message'>
                    <div className='message-icon'>
                        {/* React Icons Start */}
                        <button onClick={likeCheck}>{likeToggle ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}</button>
                        <button onClick={commentPost}><FaRegCommentAlt /></button>
                        <button><FaRegPaperPlane /></button>
                        {/* React Icons End */}
                    </div>
                    <form className={commentToggle ? '' : 'off'} action="">
                        <input className='message-send' type="text"></input>
                        <input className='submit-btn' type="submit" value='SEND'></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Personal_Article;