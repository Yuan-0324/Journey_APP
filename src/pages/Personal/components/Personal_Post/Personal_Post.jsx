import { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Article_List from './Article_Post/Article_List';
import Activities_List from './Activity_Post/Activities_List';
import Collection_List from './Collection_Post/Collection_List';
import Guide_List from './Guide_Post/Guide_List';
import Invitation_List from './Invitation_Post/Invitation_List';
import context from '../../../../context';


// 整合 Po文內容

const Personal_Post = () => {
    const currentUser = useContext(context).userInfo;
    const currentParams = useParams();
    let currentPage = ''

    // ---- 判斷使用者進入個人頁面時 該選染什麼畫面 ----
    if (currentUser.id == currentParams.id) {
        // 本人的畫面
        switch (currentParams.cate) {
            case 'article':
                currentPage = <Article_List />;
                break;
            case 'activities':
                currentPage = <Activities_List />;
                break;
            case 'collection':
                currentPage = <Collection_List />;
                break;
            case 'invitation':
                currentPage = <Invitation_List />;
                break;
            case 'guide':
                currentPage = <Guide_List />;
                break;
            default:
                currentPage = <Article_List />;
        }
    } else {
        // 他人的畫面
        switch (currentParams.cate) {
            case 'article':
                currentPage = <Article_List />;
                break;
            case 'activities':
                currentPage = <Activities_List />;
                break;
            default:
                currentPage = <Article_List />;
        }
    }

    return (
        <div className='personal-post'>

            {/* 內容顯示，文章、辦過的活動、收藏等等的顯示，共 5 類 [ 在父元素裡 ] */}

            {currentPage}

        </div>
    )
}

export default Personal_Post;