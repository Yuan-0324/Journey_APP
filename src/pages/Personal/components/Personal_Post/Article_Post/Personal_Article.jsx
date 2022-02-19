import { FaRegHeart, FaRegCommentAlt, FaRegPaperPlane, FaHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs';
import { useState, useEffect } from 'react';

import Edit_Article from './Edit_Article';

const Personal_Article = () => {


    const [commentToggle, setCommentToggle] = useState(false);
    const [likeToggle, setLikeToggle] = useState(false);
    const [editPageToggle, setEditPageToggle] = useState(false);

    let commentPost = (evt) => {
        setCommentToggle(!commentToggle);
    }

    let likeCheck = () => {
        setLikeToggle(!likeToggle)
    }

    // 偵測 edit page 是否開啟
    useEffect(() => {
        if (editPageToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [editPageToggle])

    let editPage = () => {
        setEditPageToggle(!editPageToggle);
    }

    return (
        <>
            {editPageToggle && <Edit_Article editPageToggle={editPageToggle} setEditPageToggle={setEditPageToggle} />}
            <div className='article-container'>
                <div className='article-title'>
                    <img src="https://picsum.photos/id/1005/300/300" alt=""></img>
                    <div className='title-content'>
                        <h1>如何在星巴克只點一杯水</h1>
                        <h6>2022/01/17</h6>
                    </div>
                    <div className='title-edit' onClick={editPage}><BsThreeDots /></div>
                </div>
                <div className="article-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis molestiae
                        obcaecati saepe ducimus pariatur officiis fugit magni ipsam neque deleniti, illo aliquam
                        ut natus? Totam pariatur tempora eum officiis?</p>
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