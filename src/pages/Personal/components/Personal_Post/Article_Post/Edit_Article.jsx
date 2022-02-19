import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Edit_Article = ({ setEditPageToggle, editPageToggle }) => {

    const [articaleParagraph, setArticleParagraph] = useState({
        lastName: "林",
        firstName: "與諶",
        followed: 1,
        collected: 1,
        img: "https://picsum.photos/id/1040/300/300",
        title: '如何在星巴克只點一杯開水',
        date: "2022/01/16",
        content: "存在然後就實很下來的語，一天這樣的話是什麼，覺得東真搬家好的大，可以對我我的時候下雨看到在的關係⋯一條的人因為到有人，想之前有。我先實沒這樣嗎真好基本上，的工作一認親卡:是有這你覺得，當然兩個然我這就是⋯很想有考慮說那個。"
    });

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
                    <img src={articaleParagraph.img}></img>
                    <div className='edit-title-name'>
                        <h1>{articaleParagraph.lastName} {articaleParagraph.firstName}</h1>
                        <h6>{articaleParagraph.date}</h6>
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