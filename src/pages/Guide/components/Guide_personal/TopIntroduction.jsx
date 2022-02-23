import React, { useState } from 'react';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import { BsFillStarFill } from 'react-icons/bs';
import img1 from '../../../../images/guideImgs/headShot1.png';

const Top_Introduction = () => {

    const guideId1 = { gId: 1, gImg: img1, gName: "徐千翔", gStarNum: 4.1, gTitle: "Lv.3進階嚮導", gIntroduction: "朱熹深信，心大則百物皆通，心小則百物皆病。這影響了我的價值觀。蓋崙說過一句著名的話，習俗是人生的偉大的嚮導。", gLocation: "台北" };

    return (
        <div>
            <section className="joinBtn">
                <a href="/GuideJoin">加入嚮導行列 →</a>
            </section>
            <section className="guideHeader">
                <div className="memberImgArea">
                    <img src={guideId1.gImg} className="memberImg" />
                </div>
                <div className="memberInformation">
                    <div className="memberName">
                        <span>{guideId1.gName} </span>
                    </div>
                    <div className="guideLevel">
                        <span className="star">< BsFillStarFill /></span>
                        <span className="guideStarNum">{guideId1.gStarNum}</span>
                        <span className="guideTitle">{guideId1.gTitle}</span>
                    </div>
                    <div className="memberIntroduction">
                        <span>{guideId1.gIntroduction}</span>
                    </div>
                    <div className="Icon">
                        <a href=""><IoChatbubblesOutline /></a>
                    </div>

                    <div className="guideLocation">
                        <span className="locationIcon">
                            <IoLocationSharp />
                        </span>
                        <span className="locationContent">{guideId1.gLocation}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Top_Introduction;