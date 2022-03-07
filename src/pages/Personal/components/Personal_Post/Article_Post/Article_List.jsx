import { useState, useContext, useEffect } from 'react'
import Personal_Article from './Personal_Article';
import Axios from 'axios';
import Context from '../../../../../context';
import { useParams } from 'react-router-dom';



// 文章的 JSX
const Article_List = () => {

    // --- 現在的使用者 ---

    const currentUser = useContext(Context).userInfo
    const currentUserImg = useContext(Context).currentUserImg;
    const viewUserState = useContext(Context).viewUserState;
    const currentPath = useParams();
    const [state, setState] = useState({
        articleList: []
    })

    let fetchData = async () => {
        // console.log('Fetch Start')
        let articleList = await Axios.get('http://localhost:8000/personal/article_list/' + currentPath.id);
        setState({ ...state, ['articleList']: articleList.data })
    }

    useEffect(() => {
        let isisMounted = true
        if (isisMounted) { fetchData() };
    }, [])

    // console.log(currentUserImg)
    // console.log('ARTICLE_LIST')

    return (
        <div className='article'>
            <h2 className="head-topic">個人文章</h2>
            {
                currentUser.id == currentPath.id ?
                    <div className='article-post'>
                        <img src={viewUserState.viewUserImg} alt=""></img>
                        <div className='post-send'>
                            <h4>想說些什麼？</h4>
                        </div>
                    </div>
                    : ""
            }
            {/* ----------------- Container ------------------- */}
            {
                state.articleList.map(article => <Personal_Article article={article} key={article.articleID} />)
            }
            {/* ----------------------------------------------- */}
        </div>
    )
}

export default Article_List;