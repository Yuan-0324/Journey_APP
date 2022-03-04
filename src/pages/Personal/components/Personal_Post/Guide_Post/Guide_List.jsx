import { useState, useContext, useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import { MdOutlineReviews } from 'react-icons/md';
import Axios from 'axios';
import Personal_Guide from './Personal_Guide';
import Context from '../../../../../context';

import { storage } from '../../../../../firebase';

const Guide_List = () => {

    // --- 觀看瀏覽資訊 ---
    const viewUserInfo = useContext(Context).viewUserInfo;
    const viewUserImg = useContext(Context).viewUserImg;

    // --- 使用者資訊 --- 
    const currentUser = useContext(Context).userInfo;
    const currentUserImg = useContext(Context).currentUserImg;

    const [guideList, setGuideList] = useState([]);

    // GET 未打分數嚮導 API '/personal/guide/review/:id'

    let getGuideReviews = async () => {
        let result = await Axios.get('http://localhost:8000/personal/guide/review/' + currentUser.id);
        setGuideList(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        getGuideReviews();
    }, [])

    return (
        <div className="review">
            <h2>嚮導評價</h2>
            <div className='review-container'>
                <div className='review-head'><span><MdOutlineReviews /></span><h6>給予嚮導們一點評價與支持吧！</h6></div>
                {
                    guideList.map(guide => <Personal_Guide key={guide.reservation_number} setGuideList={setGuideList} guideList={guideList} guide={guide} />)
                }
                {
                    guideList.length == 0 ? <h1 className='notice'>暫無待評價嚮導！歡迎參加嚮導來獲得更多評價資格吧！</h1> : ''
                }
            </div>
        </div>
    )
}

export default Guide_List;