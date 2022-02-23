import React from 'react';
import $ from 'jquery';
// import img1 from '../../images/淡水.jpg';
// import img2 from '../../images/象山.jpg';
// import img3 from '../../images/九份.jpg';
// import img4 from '../../images/金面山.jpg';

import img1 from '../../../../images/guideImgs/guidePersonalPage/淡水.jpg';
import img2 from '../../../../images/guideImgs/guidePersonalPage/象山.jpg';
import img3 from '../../../../images/guideImgs/guidePersonalPage/九份.jpg';
import img4 from '../../../../images/guideImgs/guidePersonalPage/金面山.jpg';

const Img_Area = () => {

    const imgChange = (e) => {
        $('.option').removeClass("active");
        $(`#${e.target.id}`).addClass("active");
    }

    return (
        <section className="imgArea"  >
            <div className="options">
                <div className="option active" id='img1' onClick={imgChange} style={{ backgroundImage: `url(${img1})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon"><FcBinoculars /></div> */}
                        <div className="info">
                            <div className="main">淡水老街</div>
                        </div>
                    </div>
                </div>
                <div className="option" id='img2' onClick={imgChange} style={{ backgroundImage: `url(${img2})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon"><FcBriefcase /></div> */}
                        <div className="info">
                            <div className="main">象山美景</div>
                        </div>
                    </div>
                </div>
                <div className="option" id='img3' onClick={imgChange} style={{ backgroundImage: `url(${img3})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon"><FcOldTimeCamera /></div> */}
                        <div className="info">
                            <div className="main">九份老街</div>
                        </div>
                    </div>
                </div>
                <div className="option" id='img4' onClick={imgChange} style={{ backgroundImage: `url(${img4})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon"><FcGlobe /></div> */}
                        <div className="info">
                            <div className="main">金面山</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Img_Area;