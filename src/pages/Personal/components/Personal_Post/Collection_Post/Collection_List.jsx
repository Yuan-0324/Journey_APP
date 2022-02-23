import { v4 } from 'uuid';
import { useState } from 'react';

import Personal_Collection from "./Personal_Collection";


const Collection_List = () => {

    let collectionData = [{
        collectionType: '活動',
        collectionId: v4(),
        collectionTitle: '台中錢櫃夜唱',
        collectionImg: 'https://picsum.photos/id/145/300/230',
        collectionPostBy: '徐千翔',
        collectionContent: '大家一起嗨，不醉不歸！！老歌、新歌、台語歌、中文歌、日文歌、英文歌 通通來。衝衝衝！引擎發動！'
    }, {
        collectionType: '文章',
        collectionId: v4(),
        collectionTitle: '前端工程師的酸甜苦辣',
        collectionImg: 'https://picsum.photos/id/142/300/300',
        collectionPostBy: 'Show Lo',
        collectionContent: '話雖如此，殷慶功說過一句富有哲理的話，要是每一個孩子的詩情畫意都能得到人們的欣賞鼓勵，從而獲得健康的成長，那麼，世界將近不愁成為一個富於詩情畫意的世界。這句話令我不禁感慨問題的迫切性。前端工程師似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。'
    }, {
        collectionType: '活動',
        collectionId: v4(),
        collectionTitle: '聖誕夜單身狗聚會',
        collectionImg: 'https://picsum.photos/id/1020/300/230',
        collectionPostBy: 'Show Lo',
        collectionContent: '星期五想好好放鬆的你 卻遇到會被閃瞎的情人節？ 我們單身錯了嗎！！這是單身狗的聚會！拿出大家的單身真實力。'
    },{
        collectionType: '文章',
        collectionId: v4(),
        collectionTitle: '帳篷購買攻略',
        collectionImg: 'https://picsum.photos/id/1020/300/300',
        collectionPostBy: '露營討旅區',
        collectionContent: ' 就我個人來說，帳篷對我的意義，不能不說非常重大。不難發現，問題在於該用什麼標準來做決定呢？若能夠洞悉帳篷各種層面的含義，勢必能讓思維再提高一個層級。帳篷對我來說，已經成為了我生活的一部分。我們不得不面對一個非常尷尬的事實，那就是，帳篷絕對是史無前例的。這樣看來，經過上述討論，儘管如此，別人往往卻不這麼想。我們都知道，只要有意義，那麼就必須慎重考慮。丘吉爾深信，最容易通向慘敗之路的莫過於模仿以往英雄們的計劃，把它用於新的情況中。想必各位已經看出了其中的端倪。'
    }]

    const [ collectionList, setCollectionList ] = useState(collectionData);

    return (
        <div className="collection">
            <h2 className="head-topic">我的收藏</h2>
            {/* -----------------Container------------------- */}

            {
                collectionList.map(collection => <Personal_Collection collection={collection} key={collection.collectionId} />)
            }
            
            {/* --------------------------------------------- */}
        </div>
    )
}

export default Collection_List;