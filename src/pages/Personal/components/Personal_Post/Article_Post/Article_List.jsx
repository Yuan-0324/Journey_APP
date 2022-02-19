import { useState, createContext } from 'react'
import Personal_Article from './Personal_Article';

// 文章的 JSX
const Article_List = () => {
    const [laura, setLaura] = useState(87);
    return (
            <div className='article'>
                <h2 className="head-topic">個人文章</h2>
                <div className='article-post'>
                    <img src="https://picsum.photos/id/1005/300/300" alt=""></img>
                    <div className='post-send'>
                        <h4>想說些什麼？</h4>
                    </div>
                </div>
                {/* -----------------Container------------------- */}
                <Personal_Article />
                {/* --------------------------------------------- */}
            </div>
    )
}

export default Article_List;