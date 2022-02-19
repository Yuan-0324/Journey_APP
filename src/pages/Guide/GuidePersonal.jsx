// import '../styles/Guide/tour_guide_personal.css';
// import TopIntroduction from '../components/Guide/Guide_personal_topIntroduction';
// import AboutMe from './Guide/Guide_personal_aboutMe';
// import Calendar from '../components/Guide/Guide_personal_calendar';
// import ImgArea from '../components/Guide/Guide_personal_imgArea';
// import Evaluation from '../components/Guide/Guide_personal_evaluation';

import React from 'react';

// ---- 更新 ----

import './stylesheet/tour_guide_personal.css';
import Top_Introduction from './components/Guide_personal_topIntroduction';
import About_Me from './components/Guide_personal_aboutMe';
import Calendar from './components/Guide_personal_calendar';
import Evaluation from './components/Guide_personal_evaluation';
import Img_Area from './components/Guide_personal_imgArea';

const GuidePersonal = () => {

    //搜尋內容
    return (
        <div className='guidePersonalContent'>
            <Top_Introduction/>
            <div className='aboutArea'>
                <About_Me/>
                <Calendar/>
            </div>
            <Img_Area/>
            <Evaluation/>
        </div>
    );

}


export default GuidePersonal;