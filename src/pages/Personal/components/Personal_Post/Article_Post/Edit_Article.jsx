import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Edit_Article = ({ article, setEditPageToggle, editPageToggle }) => {

    let editPageClose = () => {
        setEditPageToggle(!editPageToggle)
    }

    return (
        <div onClick={editPageClose} className='personal-article-edit'>
            <div className='article-edit-container'>
                <div className='article-edit-head'><h1>新增</h1></div>
                <div className='article-edit-title'><h1>標題</h1></div>
                <div className='article-edit-paragragh'><h1>內文</h1></div>
                <div className='article-edit-pic'><h1>照片</h1></div>
            </div>
            <div onClick={(evt) => { evt.stopPropagation() }} className='edit-main-container'>
                <h1>編輯文章<span onClick={editPageClose} ><AiOutlineCloseCircle /></span></h1>
                <div className='edit-title-container'>
                    <img src={ article.authorImg}></img>
                    <div className='edit-title-name'>
                        <h1>{ article.authorName }</h1>
                        <h6>{ article.postDate }</h6>
                    </div>
                </div>
                <div >
                </div>
                <button onClick={editPageClose}>確認</button>
            </div>
        </div>
    )
}

export default Edit_Article;