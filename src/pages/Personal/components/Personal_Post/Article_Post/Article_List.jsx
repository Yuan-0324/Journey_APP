import { useState, useContext } from 'react'
import Personal_Article from './Personal_Article';
import Axios from 'axios';
import Context from '../../../../../context';
import { useParams } from 'react-router-dom';



// 文章的 JSX
const Article_List = () => {

    // --- 現在的使用者 ---

    const currentUser = useContext(Context).userInfo
    const currentPath = useParams();
    const [state, setState] = useState({
        articleList: []
    })

    let fetchData = async () => {
        let articleList = await Axios.get('http://localhost:8000/personal/article_list/' + currentPath.id);
        // setState()
    }

    let articleData = [{
        articleID: 1342591832,
        authorImg: 'https://picsum.photos/id/1020/300/300',
        authorName: 'Show Lo',
        postDate: '2022/02/15',
        articleTitle: '咖啡攻略',
        articleContent: '生活中，若咖啡出現了，我們就不得不考慮它出現了的事實。對咖啡進行深入研究，在現今時代已經無法避免了。俗話說的好，掌握思考過程，也就掌握了咖啡。問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。申居鄖曾經說過，人生至愚是惡聞已過，人生至惡是善談人過。希望大家實際感受一下這段話。對我個人而言，咖啡不僅僅是一個重大的事件，還可能會改變我的人生。對於咖啡，我們不能不去想，卻也不能走火入魔。培根曾說過一句意義深遠的話，得不到友誼的人將是終身可憐的孤獨者。沒有友情的社會則只是一片繁華的沙漠。這激勵了我。托爾斯泰在不經意間這樣說過，英雄主義是在於為信仰和真理而犧牲自己。這讓我的思緒清晰了。如果別人做得到，那我也可以做到。世界上若沒有咖啡，對於人類的改變可想而知。',
        likesNum: 666,
        articleComment: [{
            commentId: 423124,
            commentDate: '2022/02/17',
            netizenImg: 'https://picsum.photos/id/1020/300/300',
            netizen: '黃綠紅',
            commentContent: '我也很喜歡喝咖啡耶'
        }, {
            commentId: 423126,
            commentDate: '2022/02/9',
            netizenImg: 'https://picsum.photos/id/1010/300/300',
            netizen: '酸民',
            commentContent: '會在別人咖啡裡下藥嗎？'
        }]
    }, {
        articleID: 1342591833,
        authorImg: 'https://picsum.photos/id/1020/300/300',
        authorName: 'Show Lo',
        postDate: '2022/01/18',
        articleTitle: '愛情是一種學問',
        articleContent: '我以為我了解愛情，但我真的了解愛情嗎？仔細想想，我對愛情的理解只是皮毛而已。',
        likesNum: 777
    }, {
        articleID: 1342591834,
        authorImg: 'https://picsum.photos/id/1020/300/300',
        authorName: 'Show Lo',
        postDate: '2021/12/20',
        articleTitle: '前端工程師的酸甜苦辣',
        articleContent: '話雖如此，殷慶功說過一句富有哲理的話，要是每一個孩子的詩情畫意都能得到人們的欣賞鼓勵，從而獲得健康的成長，那麼，世界將近不愁成為一個富於詩情畫意的世界。這句話令我不禁感慨問題的迫切性。前端工程師似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。',
        likesNum: 888
    }]

    const [articleList, setArticleList] = useState(articleData);


    return (
        <div className='article'>
            <h2 className="head-topic">個人文章</h2>
            {
                currentUser.id == currentPath.id ?
                    <div className='article-post'>
                        <img src="https://picsum.photos/id/1020/300/300" alt=""></img>
                        <div className='post-send'>
                            <h4>想說些什麼？</h4>
                        </div>
                    </div>
                    : ""
            }


            {/* ----------------- Container ------------------- */}

            {
                articleList.map(article => <Personal_Article article={article} key={article.articleID} />)
            }

            {/* ----------------------------------------------- */}
        </div>
    )
}

export default Article_List;