import { useState } from 'react';
import { v4 } from 'uuid';
import { MdOutlineReviews } from 'react-icons/md';

import Personal_Guide from './Personal_Guide';

import {storage} from '../../../../../firebase'

const Guide_List = () => {

    const guideData = [{
        guideId: v4(),
        guideName: '徐千翔',
        guideImg: 'https://picsum.photos/id/300/300/300',
        guideDate: '2021/10/09',
        guideRated: false,

    }, {
        guideId: v4(),
        guideName: '林與諶',
        guideImg: 'https://picsum.photos/id/123/300/300',
        guideDate: '2021/07/30',
        guideRated: true,
    }, {
        guideId: v4(),
        guideName: '徐千翔',
        guideImg: 'https://picsum.photos/id/400/300/300',
        guideDate: '2021/04/01',
        guideRated: true,
    }, {
        guideId: v4(),
        guideName: '羅志祥',
        guideImg: 'https://picsum.photos/id/500/300/300',
        guideDate: '2019/03/03',
        guideRated: true,
    }]

    const [guideList, setGuideList] = useState(guideData);

    // GET 未打分數嚮導 API '/personal/guide/review/:id'

    // 

    return (
        <div className="review">
            <h2>嚮導評價</h2>
            <div className='review-container'>
                <div className='review-head'><span><MdOutlineReviews /></span><h6>給予嚮導們一點評價與支持吧！</h6></div>
                {
                    guideList.map(guide => <Personal_Guide key={guide.guideId} setGuideList={setGuideList} guideList={guideList} guide={guide} />)
                }
            </div>
        </div>
    )
}

export default Guide_List;