import React, { useState } from 'react';
// import img8 from '../../images/bob大頭貼.png'
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { BsFillStarFill } from 'react-icons/bs';

import img8 from '../../../images/bob大頭貼.png';

const Top_Introduction = () => {

    const guideId1 = { gId: 1, gImg: img8, gName: "Bob", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gIntroduction: "朱熹深信，心大則百物皆通，心小則百物皆病。這影響了我的價值觀。蓋崙說過一句著名的話，習俗是人生的偉大的嚮導。", gLocation: "台北" };

    return (
        <div>
            <section class="joinBtn">
                <a href="/GuideJoin">加入嚮導行列</a>
            </section>
            <section class="guideHeader">
                <div class="memberImgArea">
                    <img src={guideId1.gImg} class="memberImg" />
                </div>
                <div class="memberInformation">
                    <div class="memberName">
                        <span>{guideId1.gName} </span>
                    </div>
                    <div class="guideLevel">
                        <span class="star">< BsFillStarFill /></span>
                        <span class="guideStarNum">{guideId1.gStarNum}</span>
                        <span class="guideTitle">{guideId1.gTitle}</span>
                    </div>
                    <div class="memberIntroduction">
                        <span>{guideId1.gIntroduction}</span>
                    </div>
                    <div class="Icon">
                        <a href=""><IoChatbubblesOutline /></a>
                    </div>

                    <div class="guideLocation">
                        <span className="locationIcon">
                            <IoLocationSharp />
                        </span>
                        <span class="locationContent">{guideId1.gLocation}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Top_Introduction;