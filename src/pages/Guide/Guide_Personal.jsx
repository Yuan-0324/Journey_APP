import React from 'react';
import './stylesheet/tour_guide_personal.css';
import Top_Introduction from './components/Guide_personal/TopIntroduction';
import About_Me from './components/Guide_personal/AboutMe';
import Calendar from './components/Guide_personal/Calendar';
import Evaluation from './components/Guide_personal/Evaluation';
import Img_Area from './components/Guide_personal/ImgArea';
import bgImg from '../../images/main/background.png';

const Guide_Personal = () => {

    //搜尋內容
    return (
        <div className="guidePersonalPage">
            <img className="bgImg" src={bgImg} />
            <div className='guidePersonalContent'>
                <Top_Introduction/>
                <div className='aboutArea'>
                    <About_Me/>
                    <Calendar/>
                </div>
                <Img_Area/>
                <Evaluation/>
            </div>
        </div>
    );

}


export default Guide_Personal;