import React from 'react';
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import Show_Article from './Show_Article';
import Edit_Post_Article from './Edit_Post_Article';

const Article_Area = ({data, articleListIdx, articleList, setArticleList}) => {

    // 展開底部留言區
    const [commentToggle, setCommentToggle] = useState(false);
    let commentPost = () => {
        setCommentToggle(!commentToggle);
    }
    // 愛心
    const [likeToggle, setLikeToggle] = useState(false);
    let likeCheck = () => {
        setLikeToggle(!likeToggle)
    }

    // 展開貼文  
    const [articleToggle, setArticleToggle] = useState(false);
    let showArticlePage = () => {
        setArticleToggle(!articleToggle)
    }

    // 編輯個人文章區域
    const [editPostArticle, setEditPostArticle] = React.useState(false);
    let editArticlePage = () => {
        setEditPostArticle(!editPostArticle)
    }
    
    // 偵測 edit page 是否開啟
    useEffect(() => {
        if (articleToggle || editPostArticle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [articleToggle, editPostArticle])

    //-----關閉編輯文章彈跳視窗，觸發呈現新文章到畫面上-----
    const setEditPost = (data) =>{
        let cont = ""  
        data.forEach(elm => {
            cont += elm.content
        });
        if(cont == ""){
            alert('未輸入任何值');
            return;
        }else{

        data.content = cont;   
        
        // !!!!!Axios.put!!!!!修改文章
        //   axios.put('localhost:8000/newarticle', newArrayData)

        let newArr = [...articleList];
        newArr[articleListIdx].content = cont;

        setArticleList(newArr);
        } 
        setEditPostArticle(false)
    }

    return (

        <>
        {articleToggle && <Show_Article article={data} articleToggle={articleToggle} setArticleToggle={setArticleToggle} /> }
        {editPostArticle && <Edit_Post_Article editArticleList={data} setEditPostArticle={setEditPostArticle} setEditPost={setEditPost}/>}

        <div className='article-container'>
            <div className='article-title'>
                <img src={ data.authorImg } alt=""></img>
                <div className='title-content'>
                    <h1>{ data.authorName }</h1>
                    <h6>{ data.postDate }</h6>
                </div>
                <div className='title-edit' onClick={editArticlePage}><BsThreeDots /></div>
            </div>
            <div className="article-body">
            <div dangerouslySetInnerHTML={{__html: data.content}}/>
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

export default Article_Area;
