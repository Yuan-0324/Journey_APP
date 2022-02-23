import { useState } from 'react';
import { v4 } from 'uuid'

import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import Personal_Activity from './Personal_Activities';


const Activities_List = () => {

    let activitiesData = [{
        evtId: v4(),
        evtName: '台中錢櫃夜唱',
        evtDate: '2022/03/24',
        evtTime: '18:30',
        evtDay: '星期四',
        evtImg: 'https://picsum.photos/id/145/300/230',
        evtState: '即將舉辦',
        evtLocation: '台中市',
        evtContent: '大家一起嗨，不醉不歸！！老歌、新歌、台語歌、中文歌、日文歌、英文歌 通通來。衝衝衝！引擎發動！'
    },{
        evtId: v4(),
        evtName: '好多2的一天',
        evtDate: '2022/02/22',
        evtTime: '22:22',
        evtDay: '星期二',
        evtImg: 'https://picsum.photos/id/1045/300/230',
        evtState: '即將舉辦',
        evtLocation: '台中市',
        evtContent: '2022/02/22 22:22 好多2喔！大家一起來慶祝好多2的一天！'
    },{
        evtId: v4(),
        evtName: '來咖啡廳的寇叮吧',
        evtDate: '2022/1/24',
        evtTime: '12:30',
        evtDay: '星期一',
        evtImg: 'https://picsum.photos/id/142/300/230',
        evtState: '活動結束',
        evtLocation: '台南市',
        evtContent: '寫程式討論會，歡迎新手、老手！一起來交流。寇叮萬歲萬歲萬萬歲！'
    },{
        evtId: v4(),
        evtName: '聖誕夜單身狗聚會',
        evtDate: '2021/12/24',
        evtTime: '18:30',
        evtDay: '星期五',
        evtImg: 'https://picsum.photos/id/1020/300/230',
        evtState: '活動結束',
        evtLocation: '台北市',
        evtContent: '星期五想好好放鬆的你 卻遇到會被閃瞎的情人節？ 我們單身錯了嗎！！這是單身狗的聚會！拿出大家的單身真實力。'
    }]

    const [ activitiesList, setArticleList ] = useState(activitiesData)

    return (
        <div className='activities'>
            <h2 className="head-topic">我辦的活動</h2>
            {/* -----------------Container------------------- */}

            {
                activitiesList.map(activity => <Personal_Activity activity={activity} key={activity.evtId} />)
            }


            {/* --------------------------------------------- */}
        </div>
    )
}

export default Activities_List;