import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { useState, useEffect, useContext, useRef } from 'react';
import Context from '../../../../../context';
import Axios from 'axios';

import Edit_Article from './Edit_Article';
import Show_Article from './Show_Article';


const Personal_Article = ({ article }) => {
    // console.log(article);

    // --- 觀看瀏覽資訊 ---
    const viewUserInfo = useContext(Context).viewUserInfo;
    const viewUserImg = useContext(Context).viewUserImg;

    // --- 使用者資訊 --- 
    const currentUser = useContext(Context).userInfo;
    const currentUserImg = useContext(Context).currentUserImg;

    // --- 狀態列 ---

    const [editPageToggle, setEditPageToggle] = useState(false);
    const [articleToggle, setArticleToggle] = useState(false);
    const [likeToggle, setLikeToggle] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeList, setLikeList] = useState([]);
    const likeState = useRef(false);
    // -- 按讚詳情 --


    let likeArticleCheck = () => {
        const likedOrNot = article.member_email.find(email => email == currentUser.email);
        // console.log(likedOrNot);
        setLiked(likedOrNot ? true : false);
    }

    let likeCheck = () => {
        likeState.current = true;
        if (liked) {
            // -- 移除按讚 --
            let newLikeList = likeList.filter(email => email !== currentUser.email)
            setLikeList(newLikeList)
        } else {
            // -- 加入按讚 --
            setLikeList([currentUser.email, ...likeList])
        }
    }
    // console.log(likeList)

    let showLikeList = () => {
        setLikeToggle(!likeToggle);
    }

    useEffect(() => {
        const likeOrNot = likeList.find(email => email == currentUser.email);
        setLiked(likeOrNot ? true : false);
        if (!likeState.current) {
            return;
        } else {
            let likeDataPost = async () => {
                const likeDetail = {
                    articleID: article.articleID,
                    email: currentUser.email
                }
                if (!likeOrNot) {
                    let deleteLike = await Axios.delete('http://localhost:8000/personal/article/like/count/delete', { data: likeDetail })
                    console.log('退讚')
                } else {
                    let likePost = await Axios.post('http://localhost:8000/personal/article/like/count', likeDetail)
                    console.log('按讚')
                }
            }
            likeDataPost();
        }
    }, [likeList])

    let showEditPage = () => {
        setEditPageToggle(!editPageToggle);
    }

    let showArticlePage = () => {
        setArticleToggle(!articleToggle)
    }

    let dataTransfer = () => {
        let date = new Date(article.datetime)
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
    console.log(viewUserInfo)


    // --- 偵測 edit page 是否開啟 ---

    useEffect(() => {
        if (editPageToggle || articleToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [editPageToggle, articleToggle])

    useEffect(() => {
        window.onclick = () => {
            setLikeToggle(false);
        }
        setLikeList(article.member_email);
        likeArticleCheck();
        likeState.current = false;
    }, [])

    return (
        <>
            {editPageToggle &&
                <Edit_Article
                    dataTransfer={dataTransfer}
                    article={article}
                    editPageToggle={editPageToggle}
                    setEditPageToggle={setEditPageToggle}
                />}
            {articleToggle &&
                <Show_Article
                    likeList={likeList}
                    setLikeList={setLikeList}
                    dataTransfer={dataTransfer}
                    article={article}
                    articleToggle={articleToggle}
                    setArticleToggle={setArticleToggle}
                    likeState={likeState}

                />}
            <div className='article-container'>
                <div className='article-title'>
                    <img src={viewUserImg} alt=""></img>
                    <div className='title-content'>
                        <h1>{viewUserInfo.lastName} {viewUserInfo.firstName}</h1>
                        <h6>{dataTransfer().day} {dataTransfer().time}</h6>
                    </div>
                    <div className='title-edit' onClick={showEditPage}><BsThreeDots /></div>
                </div>
                <div className="article-body">

                    <div dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div onClick={showArticlePage} className='article-see-more'><span>More<FaCaretDown /></span></div>
                </div>
                <div className='article-message'>
                    <div className='message-icon'>
                        {/* React Icons Start */}
                        <span onClick={showLikeList} className='like-nums'>{likeList.length}<span>個讚</span></span>
                        {/* <div className='show-like-list'>
                            {
                                article.member_email.map(like => <div className='like-ppl' key={like}>
                                    <h1>{like}</h1>
                                </div>)
                            }
                        </div> */}
                        <div>
                            <button onClick={likeCheck}>{liked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}</button>
                            <button onClick={showArticlePage}><FaRegCommentAlt /></button>
                            <button><FaRegPaperPlane /></button>
                        </div>
                        {/* React Icons End */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal_Article;