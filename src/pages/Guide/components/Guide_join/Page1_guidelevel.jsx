import React from 'react';
import guideLevelImg from '../../../../images/guideImgs/guideJoinPage/guideLevelImg.png';

const Guide_Level = () => {

    return (        
        <div className="section0Area">
            <div className="leftTitle">
                <div className="joinUs">加入嚮導</div>
                    <div className="pageTitle"> <span>●</span> 介紹</div>
                </div>
                <div className="section0Content">
                    <div className="guideNarrative">
                        <p>包上背包 帶領遠道而來的朋友遊覽你的城市</p>
                        <p>分享生活 創造新的感動與回憶</p>
                    </div>
                <div className="guideLvChartArea">
                    <img src={guideLevelImg} className="guideLevelImg" />
                </div>
            </div>
        </div> 
    );
}

export default Guide_Level;