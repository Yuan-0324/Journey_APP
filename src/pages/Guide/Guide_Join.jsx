import {useState} from 'react';
import $ from 'jquery';
import './stylesheet/joinGuide.css';
import bgImg from '../../images/main/background.png';
import Guide_Level from './components/Guide_join/Page1_guidelevel';
import Set_Information from './components/Guide_join/Page2_set_information';
import Set_Recommend from './components/Guide_join/Page3_set_recommend';
import Set_Calendar from './components/Guide_join/Page4_set_calendar';

const Guide_Join = () => {

    //下一頁移動
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

    return (

        <div className="guideJoin">
            <img className="bgImg" src={bgImg} />
            <div>
                <hr className="guidePagehr" />
            </div>
            <section id="section0">
                <Guide_Level />
                <a href="#section01" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section01">
                <Set_Information />
                <a href="#section02" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section02">
                <Set_Recommend />
                <a href="#section03" className="nextPage"><span></span>下一頁</a>
            </section>

            <section id="section03">
                <Set_Calendar />
                <input className="submitBtn" type="submit" value="送出"></input>
            </section>
        </div>

    );

}


export default Guide_Join;