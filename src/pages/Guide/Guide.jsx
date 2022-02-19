import React from 'react';

// import '../styles/Guide/tour_guide.css';
// import bannerImg from '../images/guideBanner.png';
// import Search from '../components/Guide/Guide_search';


// ---- 更新 ----
import './stylesheet/tour_guide.css';
import bannerImg from '../../images/guideBanner.png'
import Search from './components/Guide_search';


const Guide = () => {

    return (
        <div className='guideContainer'>
            <div>
                <img className="imgarea" src={bannerImg} alt=""/>
            </div>
            <Search />
        </div>
    );

}


export default Guide;