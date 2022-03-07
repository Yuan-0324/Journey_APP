import React,{useContext} from 'react';
import axios from 'axios';
import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../../../../../context';

import Show_Article from './Show_Article';
import Edit_Post_Article from './Edit_Post_Article';

const Article_Area = ({data, articleListIdx, articleList, setArticleList,userImg,societyID ,userId}) => {
    const viewUserImg = useContext(Context).viewUserImg;
    // console.log(viewUserImg);

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
        
        // !!!!!axios.put!!!!!修改文章
        axios.put('http://127.0.0.1:8000/editpost/article', {articleID:articleList[0].articleID, content:cont})

        let newArr = [...articleList];
        newArr[articleListIdx].content = cont;

        setArticleList(newArr);
        } 
        setEditPostArticle(false)
    }

    let dataTransfer = () => {
        let date = new Date(data.datetime)
        let yy = date.getFullYear();
        let month = date.getMonth() + 1;
        let mm = (month.toString().length < 2) ? (month = '0' + month.toString()) : month.toString();
        let day = date.getDate();
        let dd = (day.toString().length < 2) ? (day = '0' + day.toString()) : day.toString();
        day = `${yy}-${mm}-${dd}`;
        let timeWsec = date.toLocaleTimeString();
        let time = timeWsec.split(':')
        time.pop();
        time = time.join(':')
        return { day, timeWsec, time };
    }

    return (

        <>
        {articleToggle && <Show_Article article={data} articleToggle={articleToggle} setArticleToggle={setArticleToggle} /> }
        {editPostArticle && <Edit_Post_Article editArticleList={data} setEditPostArticle={setEditPostArticle} setEditPost={setEditPost} userImg={userImg}/>}

        <div className='article-container'>
            <div className='article-title'>
                <img src={data.api_selfie} alt=""></img>
                <div className='title-content'>
                    <div className='d-flex'>
                    <h1>{data.lastName} {data.firstName}</h1>
                    <h1 className='h5 ml-3'>{societyID == undefined ? data.society_name: ''}</h1>
                    </div>
                    <h6>{dataTransfer().day} {dataTransfer().time}</h6>
                </div>    
                {data.id==userId && <div className='title-edit' onClick={editArticlePage}><BsThreeDots /></div>}
            </div>
            <div className="article-body">
            <div dangerouslySetInnerHTML={{__html: data.content}}/>
                <div onClick={showArticlePage} className='article-see-more'><span>More<FaCaretDown /></span></div>
            </div>
            <div className='article-message'>
                <div className='message-icon'>
                    {/* React Icons Start */}
                    <span className='like-nums'>{data.likeNum? data.likeNum : 0}<span>個讚</span></span>
                    <div>
                        <button onClick={likeCheck}>{likeToggle ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}</button>
                        <button onClick={commentPost}><FaRegCommentAlt /></button>
                        <button><FaRegPaperPlane /></button>
                    </div>
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

