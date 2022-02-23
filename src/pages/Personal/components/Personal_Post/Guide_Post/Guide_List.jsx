import { useState } from 'react';
import { v4 } from 'uuid';

import Personal_Guide from './Personal_Guide';

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
    },{
        guideId: v4(),
        guideName: '羅志祥',
        guideImg: 'https://picsum.photos/id/500/300/300',
        guideDate: '2019/03/03',
        guideRated: true,
    }]

    const [ guideList, setGuideList ] = useState(guideData);



    return (
        <div className="review">
            <h2>嚮導評價</h2>
            {
                guideList.map( guide => <Personal_Guide setGuideList={setGuideList} guideList={guideList} guide={guide} /> )
                
            }
        </div>
    )
}

export default Guide_List;