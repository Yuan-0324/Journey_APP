import { useEffect, useState } from 'react';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Img_Area = () => {

    //取得圖片
    const guidePagePath = useParams();
    const [guideImg, setGuideImg] = useState({});
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/guidePersonal/ImgArea/${guidePagePath.gId}`);
        setGuideImg(result.data[0]);
    }, []);

    //圖片跳轉
    const imgChange = (e) => {
        $('.option').removeClass("active");
        $(`#${e.target.id}`).addClass("active");
    }

    return (
        <section className="imgArea"  >
            <div className="options">
                <div className="option active" id='img1' onClick={imgChange} style={{ backgroundImage: `url(${guideImg.Img1})` }}>
                </div>
                <div className="option" id='img2' onClick={imgChange} style={{ backgroundImage: `url(${guideImg.Img2})` }}>
                </div>
                <div className="option" id='img3' onClick={imgChange} style={{ backgroundImage: `url(${guideImg.Img3})` }}>
                </div>
                <div className="option" id='img4' onClick={imgChange} style={{ backgroundImage: `url(${guideImg.Img4 })` }}>
                </div>
            </div>
        </section>
    );
}

export default Img_Area;